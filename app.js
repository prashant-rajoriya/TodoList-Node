let express = require('express');
let todoRoutes = require('./routes/todos');

let app = express();
let PORT = process.env.PORT || 3000 ;

app.use('/api/todos', todoRoutes);

app.get('/', (req, res) => {
    res.send("You are on Main Page");
});


app.listen(PORT, () => console.log("Server Started"));