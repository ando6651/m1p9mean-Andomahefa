const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://ekaly:ekaly@cluster0.emawm.mongodb.net/EkalyDB?retryWrites=true&w=majority', (err) => {
    if (!err) {
        console.log('Connection MongoDB success.');
    } else {
        console.log('Error Connection MongoDB : ' + JSON.stringify(err, undefined,2));
    }
});

require('./user.model');
//module.exports = mongoose;
