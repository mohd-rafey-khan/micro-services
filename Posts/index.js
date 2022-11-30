const express = require("express");
const app = express();

app.get('/',(req,res)=>{
    res.send("Ok");
});

app.listen(4000,(req,res)=>{ console.log("Posts server is started at port 4000"); });