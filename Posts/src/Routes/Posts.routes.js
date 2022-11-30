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

router.get("/get-all",PostsController.getAllPosts);
router.post("/add",PostsController.addPosts);

/**
 * {@inheritdoc}
 * exports Router
 */

module.exports = router;