const express = require('express');
const router = express.Router();
let db = require('../models');

router.get('/', (req, res) => {
    db.Todo.find()
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            res.send(err);
        });
});

router.post('/', (req, res) => {
    db.Todo.create(req.body)
        .then((newTodo) => {
            res.status(201).json(newTodo);
        }).catch((err) => {
            console.error(err);
        });
});

router.get('/:todoID', (req, res) => {
    db.Todo.findById(req.params.todoID)
        .then( todo => res.json(todo) )
        .catch( err => console.error(err));
});

module.exports = router;
