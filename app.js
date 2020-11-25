
const express = require('express');
const app = express();


app.get('/',(req,res)=> {

    res.send("Hello Ric");
});

const port = process.env.por || 3000;
app.listen(port,()=> {
console.log("Alv !!!");

});



























