const {gql} = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID!
    username: String
    email: String
    password:String
    bookCount:Int
    savedBooks: [Book]
}
type Auth {
    token:ID!
    user:User 
}
type Book {
    _id:ID!
    authors: [String]
    description: String
    bookId: String!
    image: String
    Link:String
    title:String
}
input bookData {
    authors:[String]
    description:String
    bookId:String!
    image:String
    link:String
    title:String

}
type Query { 
    User: [User]
    user(username:String!):User
    me:User
}
type Mutation {
    addUser(username: String!,email:String!,password:String!):Auth

    login(email:String!,password:String!):Auth


    saveBook(bookData:bookData!):User

    deleteBook(bookId:String!):User

}
`;
module.exports=typeDefs;