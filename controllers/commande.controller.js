const mongoose = require('mongoose');
const _ = require('lodash');

const Commande = mongoose.model('Commande');

module.exports.addcommande = (req,res,next) => {
    var commande = new Commande();
    commande.idplat = req.body.idplat;
    commande.nomplat = req.body.nomplat;
    commande.idClient = req.body.idClient;
    commande.clientmail = req.body.clientmail;
    commande.date = req.body.date;
    commande.etat = req.body.etat;
    commande.save((err, doc) => {
        if (!err) {
            res.send(doc);
        }else {
            return next(err);
        }
    });
}

module.exports.commandelist = (req, res, next) => {
  Commande.find({},
    (err, commandes) => {
      if (!commandes) {
        return res.status(404).json({ status: false, message: 'Error when get list of commande.' });
      }else {
        return res.status(200).json({ status: true, commande : commandes});
      }
    }
  );
}
module.exports.commandefindOne = (req, res, next) => {
  Commande.findOne({ _id: req._id},
    (err, commande) => {
      if (!commande) {
        return res.status(404).json({ status: false, message: 'Error when get information of commande.' });
      }else {
        return res.status(200).json({ status: true, commande : _.pick(commande,['_id','nomplat','clientmail','date','etat']) });
      }
    }
  );
}

