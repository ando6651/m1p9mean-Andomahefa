const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, (err) => {
    if (!err) {
        console.log('Connection MongoDB success.');
    } else {
        console.log('Error Connection MongoDB : ' + JSON.stringify(err, undefined,2));
    }
});

require('./user.model');
//module.exports = mongoose;