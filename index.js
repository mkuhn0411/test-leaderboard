const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

console.log("TEst")

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// const whitelist = [
//     '*'
//   ];
  
//   app.use((req, res, next) => {
//     const origin = req.get('referer');
//     const isWhitelisted = whitelist.find((w) => origin && origin.includes(w));
//     if (isWhitelisted) {
//       res.setHeader('Access-Control-Allow-Origin', '*');
//       res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//       res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,Authorization');
//       res.setHeader('Access-Control-Allow-Credentials', true);
//     }
//     // Pass to next layer of middleware
//     if (req.method === 'OPTIONS') res.sendStatus(200);
//     else next();
//   });

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Mongo db database connection established successfully")
});

const usersRouter = require('./routes/scores.js');

app.use('/scores', usersRouter);

// app.post('/users/add').post((req, res) => {
//     const { username, score } = req.body;
//     const newUser = new User({username, score});

//     newUser.save()
//         .then(() => res.json('User added!'))
//         .catch(err => res.status(400).json('Error ' + err));
// });


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});