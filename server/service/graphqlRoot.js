
const User = require('./UserModel');
const Post = require('./PostModel')

const root = {
    getAllUsers: async () => {
        return await User.find();;
    },

    getUserByName: async (name) => {
        return await User.findOne({name});
    },

    createUser: async(input) => {

        const id = Math.floor(Math.random() * 9e10);
        const post = new Post({
            id: input.input.posts[0].id,
            title: input.input.posts[0].title
        })
        await post.save();

        const user = new User({
            name: input.input.name,
            lastname: input.input?.lastname,

            posts: [{id: post.id, title: post.title}],
            id});
        await user.save();
        return user;
    }

}

module.exports = root;