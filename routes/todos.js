const express = require('express');
const router = express.Router();
var db = require('../models');

router.get('/', (req, res) => {
    db.Todo.find()
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            res.send(err);
        });
});
module.exports = router;
