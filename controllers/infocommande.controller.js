const mongoose = require('mongoose');
const _ = require('lodash');

const Infocommande = mongoose.model('Infocommande');

module.exports.addinfocommande = (req,res,next) => {
    var infocommande = new Infocommande();
    infocommande.idplat = req.body.idplat;
    infocommande.idrestau = req.body.idrestau;
    infocommande.benefice = req.body.benefice;
    infocommande.date = req.body.date;
    infocommande.save((err, doc) => {
        if (!err) {
            res.send(doc);
        }else {
            return next(err);
        }
    });
}

module.exports.infocommandelist = (req, res, next) => {
  Infocommande.find({},
    (err, infocommandes) => {
      if (!infocommandes) {
        return res.status(404).json({ status: false, message: 'Error when get list of infocommande.' });
      }else {
        return res.status(200).json({ status: true, infocommande : infocommandes});
      }
    }
  );
}
module.exports.infocommandefindOne = (req, res, next) => {
  Infocommande.findOne({ _id: req._id},
    (err, infocommande) => {
      if (!infocommande) {
        return res.status(404).json({ status: false, message: 'Error when get information of infocommande.' });
      }else {
        return res.status(200).json({ status: true, infocommande : _.pick(infocommande,['_id','idplat','idrestau','benefice','date']) });
      }
    }
  );
}

