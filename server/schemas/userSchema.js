const {buildSchema} = require('graphql');

module.exports = buildSchema(`
    type User {
        _id: ID
        name: String
        lastname: String
        posts: [Post]
    }
    
    type Post {
        id: ID
        title: String
        description: String
    }
    
    input UserInput {
        name: String!
        lastname: String
        posts: [PostInput]
    }
    
    input PostInput {
        id: Int
        title: String!
        description: String
    }
    
    type Query {
        getUserById(id: ID): User
        getAllUsers: [User]
    }
    
    type Mutation { 
        createUser(input: UserInput): User
        
    }

`);
