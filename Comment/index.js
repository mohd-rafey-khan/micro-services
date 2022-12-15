/**
 * {@inheritdoc}
 * Require Core modules
 */

 const express = require("express");
 const app = express();
 const bodyParser = require('body-parser');
 
 /**
  * {@inheritdoc}
  * Config all requirements
  */
 
 app.use(bodyParser.urlencoded({extended: true}));
 app.use(bodyParser.json());
 
 /**
  * {@inheritdoc}
  * Use Posts Routes
  */
 const CommentsRoute = require("./src/Routes/Comments.routes");
 app.use("/",CommentsRoute);
 
 
 /**
  * {@inheritdoc}
  * Server Listen Configs
  */
 app.listen(4001,()=>{ console.log("Comments server is started at port 4001"); });