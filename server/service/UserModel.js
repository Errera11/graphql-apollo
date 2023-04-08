
const { Schema, model } = require("mongoose");
const Post = require("./PostModel");


const UserModel = new Schema({
    id: {type: Schema.Types.ObjectId, required: true, unique: true},
    name: {type: String},
    lastname: {type: String},
    posts: [{type: Number, ref: Post}]
})

module.exports =  model('User', UserModel);