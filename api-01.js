const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.get('/',(req , res)=>{
    console.log("Server has started!");
});


app.listen(()=>{
    console.log("Server is starting!");
});