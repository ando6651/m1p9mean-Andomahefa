require('./config/config');
require('./models/db');
require('./config/passportConfig');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

var app = express(); // Invoke express to variable for use in application
var port = process.env.PORT || 5000; // Set default port or assign a port in enviornment
var morgan = require('morgan'); // Import Morgan Package
var mongoose = require('mongoose'); // HTTP request logger middleware for Node.js
var router = express.Router(); // Invoke the Express Router
var appRoutes = require('./routes/index.router')(router); // Import the application end points/API
var path = require('path'); // Import path module

app.use(morgan('dev')); // Morgan Middleware
app.use(bodyParser.json()); // Body-parser middleware
app.use(bodyParser.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded
app.use(express.static(__dirname + '/client/dist/ekaly-front')); // Allow front end to access client folder

app.use('/api', appRoutes);

// Set Application Static Layout
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/dist/ekaly-front/index.html')); // Set index.html as layout
});

// error handlers
app.use((err, req, res,next) => {
    if (err.name == 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors);
    }
});


// Start Server
app.listen(port, function() {
    console.log('Running the server on port ' + port); // Listen on configured port
});


