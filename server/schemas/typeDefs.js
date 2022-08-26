const {gql} = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID!
    username: String!
    email: String!
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
    description: String!
    bookId: String
    image: String
    Link:String
    title:String!
}
input BookInput {
    bookId:String!
    authors:[String]
    title:String!
    description:String!
    image:String
    link:String
}
type Query { 
    me: User
}
type Mutation {
    addUser(username: String!,email:String!,password:String!):Auth

    saveBook(authors:[String!],description:String!,bookId:String!,image:String,link:String,title:String!):User

    deleteBook(bookId:ID!):User

    login(email:String!,password:String!):Auth
}
`;
module.exports=typeDefs;