# Unit 21 MERN: Book Search Engine

## Your Task

This is a fully functioning **Google Books API Search Engine** refactored from a **RESTful API** into a **GraphQL API** running on [Apollo Server](https://www.apollographql.com/). It allows users to save book searches to the backend and to localStorage for session handling and performance optimization. The application was built using the **MERN** (_Mongo_, _Express_, _React_, and _Node_) Stack with a **React** front end, **MongoDB** database, and **NodeJS** and **ExpressJS** server and API.

## User Story

```md
AS AN avid reader
I WANT to search for new books to read
SO THAT I can keep a list of books to purchase
```

## Acceptance Criteria

```md
GIVEN a book search engine
WHEN I load the search engine
THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
WHEN I click on the Search for Books menu option
THEN I am presented with an input field to search for books and a submit button
WHEN I am not logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
WHEN I click on the Login/Signup menu option
THEN a modal appears on the screen with a toggle between the option to log in or sign up
WHEN the toggle is set to Signup
THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
WHEN the toggle is set to Login
THEN I am presented with two inputs for an email address and a password and login button
WHEN I enter a valid email address and create a password and click on the signup button
THEN my user account is created and I am logged in to the site
WHEN I enter my account’s email address and password and click on the login button
THEN I the modal closes and I am logged in to the site
WHEN I am logged in to the site
THEN the menu options change to Search for Books, an option to see my saved books, and Logout
WHEN I am logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
WHEN I click on the Save button on a book
THEN that book’s information is saved to my account
WHEN I click on the option to see my saved books
THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
WHEN I click on the Remove button on a book
THEN that book is deleted from my saved books list
WHEN I click on the Logout button
THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
```

## Implementation

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Features

On the technical architecture, the application features the use of **React** to handle a responsive, stateful user interface; **GraphQL** for data query and manipulation through APIs; **Apollo Server**, a GraphQL Server that can use data from disparate sources; **Apollo Client**, a state management library to manage GraphQL operations; **Mongoose** and **MongoDB** to define the logical structure of the database and provide a means to manage the underlying data structures; **HTML**, **Bootstrap**, and **Javascript** to enable the input and client-side validation of the application data; **Express.Js** for route handling and file serving, and **Node.Js** for Javascript running.

The application uses three schemas hosted on the **NoSQL** database (**MongoDb**), which are accessed through **APIs** built on **GraphQL**: _User_, _Book_, and _Auth_ as shown below:

![Screenshot 2022-08-29 231807](https://user-images.githubusercontent.com/105749663/187343900-efa8cea6-8bb2-42dd-b683-b7807106d4df.png)![Screenshot 2022-08-29 232023](https://user-images.githubusercontent.com/105749663/187343906-b060b2dd-858d-46aa-9071-694d01d99240.png)

![Screenshot 2022-08-29 232228](https://user-images.githubusercontent.com/105749663/187343910-6750a719-ed28-46f1-8673-5a855a228077.png)

