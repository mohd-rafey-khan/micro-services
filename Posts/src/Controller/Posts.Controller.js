/**
 * @param {*} req 
 * @param {*} res 
 * 
 * {@inheritdoc}
 * Controller To handle Get Request to get all posts
 */

const getAllPosts = async (req,res) => {
    res.send({"success": "Ok"});
}
/**
 * @param {*} req 
 * @param {*} res 
 * 
 * {@inheritdoc}
 * Controller to handle Post Request By Adding Posts
 */ 
const addPosts = async (req,res) => {
    res.send({ "message" : "Posts Created" })
}

/**
 * {@inheritdoc}
 * exports all controller
 */
module.exports = {
    getAllPosts,
    addPosts,
}