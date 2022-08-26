import {gql} from '@apollo/client';

// route to get logged in user's info (needs the token)
export const LOGIN_USER = gql`
mutation login($email:String! $password:String!)
{
  login(email:$email password:$password)
{
  token user {_id username}
}  
}`;

export const ADD_USER = gql`
mutation addUser($username:String! $email:String! $password:String!)
{
  addUser(username:$username email:$email password:$password)
  {
    token user {_id username email bookCount savedBooks
    {
      authors bookId image link title description
    }}
  }
}`;
    
// save book data for a logged in user
export const SAVE_BOOK = gql`
mutation saveBook($newBook:InputBook!)
{
  saveBook(newBook:$newBook)
  {_id username email savedBooks 
    {bookId authors description title image link}
}
}
`;
export const REMOVE_BOOK = gql`
mutation removeBook($bookId:ID!)
{
  removeBook(BookId:$bookId)
  { _id username email savedBooks
  {bookId authors description title image link}}
}`;



