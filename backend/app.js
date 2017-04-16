const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 3000;
mongoose.connect('mongodb://mongo:27017');

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Custom middleware example
app.use((req,res,next)=> {
  console.log('New Request to \'' + req.url + '\'');
  next(); // Move onto the next bit of middleware.
});


// Controllers
var TodosController = require('./controllers/todo');

// Routes
app.get('/todos', TodosController.list);
app.get('/todos/:id', TodosController.get)
app.post('/todos', TodosController.create)
app.delete('/todos/:id', TodosController.delete)


// Run app
app.listen(port);
console.log('App running on port ' + port + '!');
