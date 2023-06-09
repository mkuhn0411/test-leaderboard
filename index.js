const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Mongo db database connection established successfully")
});

const usersRouter = require('./routes/users.js');

app.use('/users', usersRouter);

const port = process.env.PORT || 5002;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});