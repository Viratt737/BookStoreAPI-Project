require('dotenv').config()
const express = require('express');
const connectToDB = require('./Database/db');
const bookRoutes = require('./Routes/book-routes')
const app = express();
const PORT = process.env.PORT || 3000;

// connect to our database
connectToDB();

// middleware
app.use(express.json());
// routes here
app.use('/api/books', bookRoutes);
app.listen(PORT , () => {
    console.log(`server start at port ${PORT}`);
})