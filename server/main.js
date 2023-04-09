const {graphqlHTTP} = require("express-graphql");
require('dotenv').config({path: '.env'});
const mongoose = require('mongoose');
const UserSchema = require("./schemas/userSchema");
const cors = require('cors');
const app = require('express')();

const root = require('./service/graphqlRoot');



const start = async() => {
    try {
        await mongoose.connect(process.env.DbURL);

        const PORT = process.env.PORT || 5000;
        app.use(cors());
        app.use('/graphql', graphqlHTTP({
                schema: UserSchema,
                graphiql: true,
                rootValue: root
            }),
        );
        app.listen(PORT, () => console.log("Started with " + PORT));
    } catch (e) {
        console.log(e)
    }
}

start()