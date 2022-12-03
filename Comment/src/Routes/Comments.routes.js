/**
 * {@inheritdoc}
 * Config Core Modules
 */
 const router = require('express').Router();

 /**
  * {@inheritdoc}
  * Use Controllers
  */
 const CommentsController = require("../Controller/Comments.controller");
 
 /**
  * {@inheritdoc}
  * Redirect all routes to its functionalities 
  */
 
 router.get("/",CommentsController.getAllComments);
 router.post("/",CommentsController.addComments);
 
 /**
  * {@inheritdoc}
  * exports Router
  */
 
 module.exports = router;