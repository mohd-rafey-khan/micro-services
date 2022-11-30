const express = require("express");
const app = express();

app.get('/',(req,res)=>{
    res.send("Ok");
});

app.listen(4001,(req,res)=>{ console.log("Comment server is started at port 4000"); });