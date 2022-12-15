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
 
 router.get("/api/:id/comments",CommentsController.getAllComments);
 router.post("/api/:id/comments",CommentsController.addComments);

 /**
  * {@inheritdoc}
  * Handle Events
  */
 router.post("/api/events",CommentsController.handleEvents);
 
 /**
  * {@inheritdoc}
  * exports Router
  */
 
 module.exports = router;