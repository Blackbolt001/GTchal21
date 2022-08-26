const {AuthenticationError} = require('apollo-server-express');
const {User} = require('../models');
const {signToken} = require ('../utils/auth');

const resolvers = {
    Query:{ 
        me: async (parent,args,context => {
            if(context.user) {
            const userData = await User.findOne({_id: context.user._id}).select('-_v -password');
            return userData; 
}
            throw new AuthenticationError('Must be logged in!');
},
},
    Mutation: {
        addUser: async(parent,args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return {token,user};
        },
        login: async(parent, {email,password}) => {
            const user = await User.findOne({email});
            if(!user) {
                throw new AuthenticationError('User not found');
            }
            const correctPwd = await user.isCorrectPassword(password);
            if(!correctPwd) {
                throw new AuthenticationError('Didnt say the magic word!');
            }
            const token = signToken(user);
            return {token,user};
        },
        saveBook: async(parent, {newBook},context) => {
            if(context.user) {
                const updateUser = await User.findByIdAndUpdate(
                    {_id:context.user._id},
                    {$push:{savedBooks:newBook}},
                    {new:true}
                );
                return updateUser;
            }
            throw new AuthenticationError('Didnt say the magic word');
        },
        removeBook: async(parent, {args}, context) => {
            if(context.user) {
                const updateUser = await User.findByIdAndUpdate(
                    {_id:context.user._id},
                    {$pull:{savedBooks:{bookId:args.bookId}}},
                    {new:true}
                );
                return updateUser;
            }
                throw new AuthenticationError('Didnt say the magic word');
            },
        },
    };
    module.exports = resolvers;
    
