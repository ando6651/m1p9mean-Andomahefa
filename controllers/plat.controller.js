const mongoose = require('mongoose');
const _ = require('lodash');

const Plat = mongoose.model('Plat');

module.exports.addplat = (req,res,next) => {
    var plat = new Plat();
    plat.nom = req.body.nom;
    plat.idrestau = req.body.idrestau;
    plat.prix = req.body.prix;
    plat.prixvente = req.body.prixvente;
    plat.visible = req.body.visible;
    plat.save((err, doc) => {
        if (!err) {
            res.send(doc);
        }else {
            return next(err);
        }
    });
}

module.exports.platlist = (req, res, next) => {
  Plat.find({},
    (err, plats) => {
      if (!plats) {
        return res.status(404).json({ status: false, message: 'Error when get list of plat.' });
      }else {
        return res.status(200).json({ status: true, plat : plats});
      }
    }
  );
}
module.exports.platfindOne = (req, res, next) => {
  Plat.findOne({ _id: req._id},
    (err, plat) => {
      if (!plat) {
        return res.status(404).json({ status: false, message: 'Error when get information of plat.' });
      }else {
        return res.status(200).json({ status: true, plat : _.pick(plat,['_id','nom','prix']) });
      }
    }
  );
}

