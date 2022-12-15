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
  * Use event bus Routes
  */
 const QueryService = require("./src/Routes/QueryService.routes");
 app.use("/",QueryService);
 
 
 /**
  * {@inheritdoc}
  * Server Listen Configs
  */
 app.listen(4002,()=>{ console.log("Query Serice server is started at port 4002"); });