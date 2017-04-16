/**** Todo Controller ****/
var Todo = require('../models/todo');

// List
function listTodos(req,res) {
  Todo.find({}, (err, todos) => {
    if (err) {
      res.status(500).json({
        message: 'Error!'
      })
    } else {
      res.status(200).json(todos);
    }
  });
}

// Read
function getTodo(req,res) {
  var todoID = req.params.id;
  Todo.findOne({_id: todoID}, (err, todo) => {
    if (err) {
      res.status(404).json({
        message: 'Not found!'
      })
    } else {
      res.status(200).json(todo);
    }
  });
}

// Create
function createTodo(req, res) {
  var title = req.body.title;
  if (title) {
    console.log('Recieved todo: ' + title);
    var todo = new Todo({ title: title });
    todo.save((err, todo) => {
      if (err) console.error('Error saving todo: ' + err);
      res.status(201).json(todo);
    });
  } else {
    res.status(400).json({
      message: 'Bad Request. You must include a title parameter.'
    });
  }
}

//Delete
function deleteTodo(req,res) {
  var todoID = req.params.id;
  Todo.findByIdAndRemove(todoID, (err, todo) => {
    if (err) {
      res.status(404).json({
        message: 'Not found!'
      })
    } else {
      res.status(204).json({});
    }
  });
}

// Export these functions as an object for use elsewhere.
module.exports = {
  list:listTodos,
  get: getTodo,
  create: createTodo,
  delete: deleteTodo
}
