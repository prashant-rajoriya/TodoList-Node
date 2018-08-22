let db = require('../models');

exports.getTodos = (req, res) => {
    db.Todo.find()
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            res.send(err);
        });
}

exports.createTodos = (req, res) => {
    db.Todo.create(req.body)
        .then((newTodo) => {
            res.status(201).json(newTodo);
        }).catch((err) => {
            console.error(err);
        });
}

exports.getTodo = (req, res) => {
    db.Todo.findById(req.params.todoID)
        .then( todo => res.json(todo) )
        .catch( err => console.error(err));
}

exports.updateTodo = (req, res) => {
    db.Todo.findOneAndUpdate({ _id : req.params.todoID}, req.body , {new:true })
    .then((todo) => {
        res.json(todo);
    }).catch((err) => {
        console.error(err);
    });
}

exports.deleteTodo = (req, res) => {
    db.Todo.remove({_id: req.params.id})
    .then(() => {
        res.json({ message: 'We deleted it'});
    }).catch((err) => {
        console.error(err);
    });
}

module.exports = exports;