const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');
const ctrlPlat = require('../controllers/plat.controller');
const ctrlCommande = require('../controllers/commande.controller');
const ctrlInfocommande = require('../controllers/infocommande.controller');

const jwtHelper = require('../config/jwtHelper');


module.exports = function(router) {
    router.post('/register', ctrlUser.register);
    router.post('/authenticate', ctrlUser.authenticate);
    router.get('/homeredirect',jwtHelper.verifyJwtToken, ctrlUser.infoget, ctrlUser.gotoprofil)
    router.get('/platlist',jwtHelper.verifyJwtToken, ctrlPlat.platlist);
    router.get('/commandelist',jwtHelper.verifyJwtToken, ctrlCommande.commandelist);
    router.get('/infocommandelist',jwtHelper.verifyJwtToken, ctrlInfocommande.infocommandelist);
    router.post('/addplat',jwtHelper.verifyJwtToken, ctrlPlat.addplat);
    router.post('/addcommande',jwtHelper.verifyJwtToken, ctrlCommande.addcommande);
    router.post('/addinfocommande',jwtHelper.verifyJwtToken, ctrlInfocommande.addinfocommande);

    return router; // Return the router object to server
};
