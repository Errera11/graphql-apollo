
const { Schema, model } = require("mongoose");
const Post = require("./PostModel");


const UserModel = new Schema({
    name: {type: String},
    lastname: {type: String},
    posts: [{type: Object, ref: Post}]
})

module.exports =  model('User', UserModel);