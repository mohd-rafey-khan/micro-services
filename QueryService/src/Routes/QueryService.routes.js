/**
 * {@inheritdoc}
 * Config Core Modules
 */
 const router = require('express').Router();

 /**
  * {@inheritdoc}
  * Use Controllers
  */
 const QueryServiceController = require("../Controller/QueryService.controller");
 
 /**
  * {@inheritdoc}
  * Redirect all routes to its functionalities 
  */
 
 router.post("/api/events",QueryServiceController.handleEvents);

 /**
  * {@inheritdoc}
  * exports Router
  */
 
 module.exports = router;