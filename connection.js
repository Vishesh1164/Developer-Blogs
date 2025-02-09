const mongoose = require('mongoose');
require('dotenv).config();
const mongodb_url=process.env.MONGO_URL;
const url =mongodb_url;

// asynchronous function - returns promise
mongoose.connect(url)
.then((result) => {
    console.log('database connected')
    
}).catch((err) => {
    console.log('error connecting to database', err)
    
});

module.exports = mongoose;
