const axios = require("axios");
/**
 * 
 * @param {*} req 
 * @param {*} res 
 * 
 * {@inheritdoc}
 */


const data = {};

const handleEvents = async (req,res)=>{
    console.log(req.body);
    res.send({});
}


/**
 * {@inheritdoc}
 * exports all controller
 */
module.exports = {
    handleEvents,   
}