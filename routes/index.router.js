const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');

const jwtHelper = require('../config/jwtHelper');


module.exports = function(router) {
    router.post('/register', ctrlUser.register);
    router.post('/authenticate', ctrlUser.authenticate);
    router.post('/userProfile', ctrlUser.userProfile);

    return router; // Return the router object to server
};