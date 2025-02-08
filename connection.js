const mongoose = require('mongoose');

const url =mongodb_url;

// asynchronous function - returns promise
mongoose.connect(url)
.then((result) => {
    console.log('database connected')
    
}).catch((err) => {
    console.log('error connecting to database', err)
    
});

module.exports = mongoose;
