let mongoose = require('mongoose');

mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/todo-api')
    .then(console.log('Database connected'))
    .catch(err => console.error(err));

mongoose.Promise = mongoose.Promise;

module.exports = require('./todo');