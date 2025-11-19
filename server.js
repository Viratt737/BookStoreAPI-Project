require('dotenv').config()
const express = require('express');
const connectToDB = require('./Database/db');
const app = express();
const PORT = process.env.PORT || 3000;

// connect to our database
connectToDB();

// middleware
app.use(express.json());

app.listen(() => {
    console.log(`server start at port ${PORT}`);
})