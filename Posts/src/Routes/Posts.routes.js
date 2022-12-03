/**
 * {@inheritdoc}
 * Config Core Modules
 */
const router = require('express').Router();

/**
 * {@inheritdoc}
 * Use Controllers
 */
const PostsController = require("../Controller/Posts.Controller");

/**
 * {@inheritdoc}
 * Redirect all routes to its functionalities 
 */

router.get("/",PostsController.getAllPosts);
router.post("/",PostsController.addPosts);

/**
 * {@inheritdoc}
 * exports Router
 */

module.exports = router;