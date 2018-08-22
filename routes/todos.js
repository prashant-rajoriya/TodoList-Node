const express = require('express');
const router = express.Router();
let db = require('../models');
let helpers = require('../helper/todos');

router.route('/')
    .get(helpers.getTodos)
    .post(helpers.createTodos);

router.route('/:todoID', )
    .get(helpers.getTodo)
    .put(helpers.updateTodo)
    .delete(helpers.deleteTodo);

module.exports = router;
