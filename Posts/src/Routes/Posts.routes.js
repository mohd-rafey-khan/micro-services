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

router.get("/api/posts",PostsController.getAllPosts);
router.post("/api/posts",PostsController.addPosts);

/**
 * {@inheritdoc}
 * Handle event bus
*/
router.post("/api/events",PostsController.handleEvents);


/**
 * {@inheritdoc}
 * exports Router
 */

module.exports = router;