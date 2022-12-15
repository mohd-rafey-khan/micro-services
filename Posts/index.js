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
const PostsRoute = require("./src/Routes/Posts.routes");
app.use("/",PostsRoute);


/**
 * {@inheritdoc}
 * Server Listen Configs
 */
app.listen(4000,()=>{ console.log("Posts server is started at port 4000"); });