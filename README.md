# Book Notes Application

Created by Damian Kryzia

This application lets the user add books they have read to a list, displaying title, authors, and descriptions.
It uses an external API in order to fetch images of book covers based on their ISBN number.
Each book has a details page where the user can add their notes on the specific book.

## Features
- Add books
- Delete books
- Add descriptions
- Add notes
- Edit book information

### Technologies used
- Frontend: EJS (HTML), Sass (CSS), JavaScript, JQuery
- Backend: Node.js, Express.js, PostgreSQL, Sequelize

## Starting the application
- Make sure that Node.js and PostgreSQL are installed on your computer.
- Navigate to the app directory in VS Code or any other editor.
- Open a new terminal and navigate to the app directory.
- Run the ```npm install``` command to install dependencies.
- Create a new database in PostgreSQL. It can be named whatever you want. Tables will be set up by the application.
- Open the ```models.js``` file. You are going to see this code:
  
  ```
  const sequelize = new Sequelize("database", "username", "password", {
    host: "localhost",
    dialect: "postgres"
  });
  ```
  
  Change the ```"database", "username", "password"``` arguments to the name of your newly created database, your PostgreSQL username, and your PostgreSQL password respectively.
- Now everything is ready to use the application. Run the ```npm start``` command and open ```localhost:3000``` in your browser.
  If you wish to use a different port to run the application, open the ```index.js``` file in the main directory and change ```const port = 3000;``` to the port that you'd like to use.

## Using the application
  - The home page displays a list of books that have already been added and an option to add new entries.
  - Each book entry has a link to its details page, where individual user notes can be accessed.
  - Each book can be deleted using the "Delete" button.
  - In the Details page, individual book information can be edited by the user.
  - All changes and information are saved to or fetched from the database when needed.
