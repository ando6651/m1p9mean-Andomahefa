require('./config/config');
require('./models/db');
require('./config/passportConfig');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

const rtsIndex = require('./routes/index.router');

var app = express();

//middleware
app.use(bodyParser.json());

var distDir = __dirname + "/dist/ekaly-front";
app.use(express.static(distDir));

app.use(cors());
app.use(passport.initialize());
app.use('/api', rtsIndex);
// error handlers
app.use((err, req, res,next) => {
    if (err.name == 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors);
    }
});

// start server
app.listen(process.env.PORT || 5000, () => console.log(`Starting at port : ${process.env.PORT}`));


app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/ekaly-front/index.html'));
});
