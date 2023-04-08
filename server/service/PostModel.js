
const {model, Schema} = require('mongoose');
const User = require("./UserModel");

const PostModel = new Schema({
    id: {type: Number},
    title: {type: String},
    description: {type: String},

})

module.exports = model('Post', PostModel);