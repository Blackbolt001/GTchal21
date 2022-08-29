const {AuthenticationError} = require('apollo-server-express');
const {User,Book} = require('../models');
const {signToken} = require ('../utils/auth');

const resolvers = {
    Query: { 

        me: async (parent,args,context) => {
            if(context.user) {
                const userData = await User.findOne({_id: context.user_id})
                .select('-_v -password').populate('books');
        return userData;
}
            throw new AuthenticationError('Must be logged in!');
},
        users: async() => {
        return User.find().select('-__v -password').populate('books');

},
        user: async (parent,{username}) => {
            return User.findOne({username}).select('-__v -password').populate('books');
}            
},
    Mutation: {
        addUser: async (parent,args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return {token, user};

},
    login: async( parent, {email,password}) => {
        const user = await User.findOne({email});

        if(!user) {
            throw new AuthenticationError('User not found');
}

        const correctPw = await user.isCorrectPassword(password);

            if(!correctPw) {
                throw new AuthenticationError('Didnt say the magic word!');
}

        const token = signToken(user);
            return {token,user};
},

    saveBook: async(parent, {bookData},context) => {
            if(context.user) {
                const updateUser = await User.findByIdAndUpdate(
                    {_id:context.user._id},
                    {$addtoSet:{savedBooks:bookData}},
                    {new:true}
                );
                return updateUser;
}
            throw new AuthenticationError('Didnt say the magic word');
},

        deleteBook: async(parent, {bookId}, context) => {
            if(context.user) {
                const updateUser = await User.findByIdAndUpdate(
                    {_id:context.user._id},
                    {$pull:{savedBooks:{bookId}}},
                    {new:true}
                );
                return updateUser;
            }
                throw new AuthenticationError('Didnt say the magic word');
            },
        },
    };
    module.exports = resolvers;
    
