const {User, Book} = require('../models');
const {signToken} = require ('../utils/auth');
const {AuthenticationError} = require("apollo-server-express");


const resolvers = {
    Query: { 

        me: async (parent,args,context) => {
            if(context.user) {
                return User.findOne({_id: context.user_id})
                .populate('savedBooks');
}
            throw new AuthenticationError('Must be logged in!');
},           
},
    Mutation: {

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
addUser: async (parent,{username, email, password}) => {
    const user = await User.create({username, email,password});
    const token = signToken(user);
    return {token, user};
},

    saveBook: async(parent, {book},context) => {
            if(context.user) {
                const user = await User.findByIdAndUpdate(
                    {_id:context.user._id},
                    {$addtoSet:{savedBooks:book}},
                    {new:true}
                );
                return user;
}
            throw new AuthenticationError('Didnt say the magic word');
},

        removeBook: async(parent, {bookId}, context) => {
            if(context.user) {
                const user = await User.findByIdAndUpdate(
                    {_id:context.user._id},
                    {$pull:{savedBooks:{bookId}}},
                    {new:true}
                );
                return user;
            }
                throw new AuthenticationError('Didnt say the magic word');
            },
        },
    };
    module.exports = resolvers;
    
