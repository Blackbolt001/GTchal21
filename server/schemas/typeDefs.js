const {gql} = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    savedBooks: [Book]
}
type Auth {
    token:ID!
    user:User 
}
type Book {
    _id:ID
    authors: [String]
    description: String
    bookId: String
    image: String
    Link:String
    title:String
}
type Query { 
    user: User
}
type Mutation {
    createUser(username: String!,email:String!,password:String!):Auth

    saveBook(authors:[String!],description:String!,bookId:String!,image:String,link:String,title:String!):User

    deleteBook(bookId:ID!):User

    login(email:String!,password:String!):Auth
}
`;
module.exports=typeDefs;