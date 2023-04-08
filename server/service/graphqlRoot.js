
const User = require('./UserModel');
const Post = require('./PostModel')

const root = {
    getAllUsers: async () => {
        return await User.find();;
    },

    getUserById: async (id) => {
        return await User.findById(id);
    },

    createUser: async(input) => {

        // Posts and find by id are not working as expected
        // Because of mongo and graphql types confilct

        const id = Math.floor(Math.random() * 9e10);
        const post = new Post({
            id: input.input.posts[0].id,
            title: input.input.posts[0].title
        })
        const user = new User({
            name: input.input.name,
            lastname: input.input?.name,

            posts: [...input.input.posts.map(post => post.id)],
            id});
        await user.save();
        await post.save();
        return user;
    }

}

module.exports = root;