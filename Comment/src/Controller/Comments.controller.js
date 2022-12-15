
const { randomBytes } = require('crypto');
const CommentsByPostId = {};

/**
 * @param {*} req 
 * @param {*} res 
 * 
 * {@inheritdoc}
 * Controller To handle Get Request to get all Comments by Post id
 */

const getAllComments = async (req,res) => {
    res.send(CommentsByPostId[req.params.id]);
}
/**
 * @param {*} req 
 * @param {*} res 
 * 
 * {@inheritdoc}
 * Controller to handle Post Request By Adding Comments at particular Post ID
 */ 
const addComments = async (req,res) => {
    const commentId = randomBytes(4).toString('hex');
    const { content } = req.body;
    var comment = CommentsByPostId[req.params.id] || [];
    comment.push({
        id: commentId,
        content
    });
    CommentsByPostId[req.params.id] = comment;
    res.send(CommentsByPostId[req.params.id]);
}

/**
 * {@inheritdoc}
 * Handle Event
 */
const handleEvents = async (req,res)=>{
    console.log(req.body);
    res.send({});
}


/**
 * {@inheritdoc}
 * exports all controller
 */
module.exports = {
    getAllComments,
    addComments,
    handleEvents,
}