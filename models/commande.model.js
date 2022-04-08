const mongoose = require('mongoose');

var commandeSchema = new mongoose.Schema({
    idplat: {
        type: String,
        required: 'Plat can\'t be empty'
    },
    nomplat: {
      type: String,
      required: 'Plat can\'t be empty'
    },
    idClient: {
        type: String,
        required: 'Client can\'t be empty'
    },
    clientmail: {
      type: String,
      required: 'Client can\'t be empty'
    },
    date: {
      type: Date,
      required: 'Date can\'t be empty'
    },
    etat: { // commander/ preparer / livrer
      type: String,
      required: 'etat commande can\'t be empty'
    },
});

mongoose.model('Commande', commandeSchema);
