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
    bookId:ID!
    authors: [String]
    description: String!
    image: String
    Link:String
    title:String!
}
input bookInput {
    authors:[String]
    description:String!
    bookId:String!
    image:String
    link:String
    title:String

}
type Query {
    me:User
}

type Mutation {
    addUser(username: String!,email:String!,password:String!):Auth

    login(email:String!,password:String!):Auth


    saveBook(book:bookInput!):User

    removeBook(bookId:ID!):User

}
`;
module.exports=typeDefs;