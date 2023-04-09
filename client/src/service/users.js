import {gql} from "@apollo/client";

export const GET_ALL_USERS = gql`
    query {
        getAllUsers {
            _id, name, posts {
                id, title
            }
        }
    }
`

export const CREATE_USER = gql`
    mutation CreateUser($input: UserInput) {
        createUser(input: $input) {
            _id, name, posts {
                title
            }
        }

    }
`;

export const GET_ONE_USER = gql`
    query getUserByName($name: String) {
        getUserByName(name: $name) {
            _id, name, posts {
                title
            }
        }
    }
`;