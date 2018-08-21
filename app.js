import express  from "express";

let app = express();
let PORT = process.env.PORT || 3000 ;




app.listen(PORT, () => console.log("Server Started"));