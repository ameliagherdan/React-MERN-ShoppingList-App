const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

//body parser middleware
app.use(bodyParser.json());

// DB Config

const db = require('./config/keys').mongoURI;

// Connect to MongoDB

mongoose
.connect(db,{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> console.log('MongoDB Connected...'))
.catch(err => console.log(err));


//port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));