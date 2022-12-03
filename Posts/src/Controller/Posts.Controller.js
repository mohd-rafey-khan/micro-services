
const { randomBytes } = require('crypto');
const Posts = {};

/**
 * @param {*} req 
 * @param {*} res 
 * 
 * {@inheritdoc}
 * Controller To handle Get Request to get all posts
 */

const getAllPosts = async (req,res) => {
    res.send(Posts);
}
/**
 * @param {*} req 
 * @param {*} res 
 * 
 * {@inheritdoc}
 * Controller to handle Post Request By Adding Posts
 */ 
const addPosts = async (req,res) => {
    const id = randomBytes(4).toString('hex');
    const { title } = req.body;
    Posts[id] = {
        id, title
    }
    res.send(Posts[id]);
}

/**
 * {@inheritdoc}
 * exports all controller
 */
module.exports = {
    getAllPosts,
    addPosts,
}