import {gql} from '@apollo/client';

// route to get logged in user's info (needs the token)
export const LOGIN_USER = gql`
mutation login($email:String! $password:String!)
{
  login(email:$email password:$password)
{
  token user
   {
    _id 
    username 
  email
}
}  
}`;

export const ADD_USER = gql`
mutation addUser($username:String! $email:String! $password:String!)
{
  addUser(username:$username email:$email password:$password,email:$email)
  {
 user {
  _id 
  username 
  email
  }
  token 
  }}
  `;
    
// save book data for a logged in user
export const SAVE_BOOK = gql`
mutation saveBook(bookData$bookData!)
{
  saveBook(bookData:$bookData)
  {
    _id 
    username 
    email 
    bookCount
    savedBooks 
    {
      bookId
       authors
        description 
        title
         image 
         link
        }
}
}
`;
export const REMOVE_BOOK = gql`
mutation deleteBook($bookId:String!)
{
  deleteBook(BookId:$bookId)
  { 
    _id 
    username 
    email
    bookCount
     savedBooks
  {
    bookId 
    authors 
    description 
    title 
    image
     link
    }}
}`;



