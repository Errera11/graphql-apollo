require('dotenv').config({path: '.env'});
const app = require('express')();

try {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log("Started with " + PORT));
} catch(e) {
    console.log(e)
}