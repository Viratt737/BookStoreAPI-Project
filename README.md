This project is a simple backend API built with Node.js, Express, and MongoDB to manage book data.
It allows users to add, update, delete, and retrieve books through RESTful endpoints. 
The server uses Mongoose for database operations and handles all requests via structured controllers and routes.

If you want that project run locally follow that step

Step-by-Step Instructions to Run This Project in your Syatem

Clone the repository to your system
Command: git clone your-repo-link

Open the project folder
Command: cd BookStoreAPI

Install all dependencies
Command: npm install

Create a file named .env in the main project folder.
Add the following inside it:
PORT=3000
MONGO_URL=your-mongodb-connection-link

Start the server
Command: npm start

After running the server, you should see these messages:

Server running on port 3000

MongoDB Connected Successfully

Now the API is ready to test in Postman.

API Endpoints

Add a new book (POST):
http://localhost:3000/api/books/add

Send JSON body with: title, author, year

Get all books (GET):
http://localhost:3000/api/books/get

Get book by ID (GET):
http://localhost:3000/api/books/get/bookId

Update a book (PUT):
http://localhost:3000/api/books/update/bookId

Send updated fields in body

Delete a book (DELETE):
http://localhost:3000/api/books/delete/bookId

Project Structure

BookStoreAPI

server.js

Database/db.js

Models/book.js

Controllers/book-controller.js

Routes/book-routes.js

.env

package.json

Tech Used

Node.js
Express.js
MongoDB
Mongoose