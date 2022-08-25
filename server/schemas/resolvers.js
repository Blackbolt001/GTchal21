const {AuthenticationError} = require('apollo-server-express');
const { saveBook } = require('../controllers/user-controller');
const {User} = require('../models');
const {signToken} = require ('../utils/auth');

const resolvers = {
    Query:{
        users: async () => {
            return User.find().populate('books');
},
        user: async (parent,{username}) => {
            return User.findone({username}).populate('books');
},
        books:async (parent,{username}) => {
            const params = username? {username}:{};
            return Book.find(params).sort({createdAt:-1});
},
        book: async (parent,{bookId}) => {
            return Book.findone({_id:bookId});
}
},            
},
  
        

    
