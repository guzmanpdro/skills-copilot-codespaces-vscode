// Create web server with Express
const express = require('express');
const app = express();
const port = 3000;

// Add body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Add mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/comments');

// Add model
const Comment = require('./models/comment');

// Add CORS
const cors = require('cors');
app.use(cors());

// Add static files
app.use(express.static('public'));

// Add routes
app.get('/comments', (req, res) => {
  Comment.find({}, (err, comments) => {
    res.json(comments);
  });
});

app.post('/comments', (req, res) => {
  const comment = new Comment({ text: req.body.text })
});