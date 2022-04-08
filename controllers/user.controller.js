const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const User = mongoose.model('User');

module.exports.register = (req,res,next) => {
    var user = new User();
    user.profil = req.body.profil;
    user.email = req.body.email;
    user.password = req.body.password;
    user.save((err, doc) => {
        if (!err) {
            res.send(doc);
        }else {
            if (err.code == 11000) {
                res.status(422).send(['Duplicate email found.'])
            }else {
                return next(err);
            }
        }
    });
}

module.exports.authenticate = (req, res, next) => {
    // call for authentication
    passport.authenticate('local', (err, user, info) => {
        //error from passport middleware
        if (err) return res.status(400).json(err);
        // registered user
        else if (user) return res.status(200).json({ "token": user.generateJwt() });
        // unknown user or wrong password
        else return res.status(404).json(info);
    })(req, res);
}

module.exports.platlist = (req, res, next) => {
  User.findOne({ _id: req._id},
    (err, user) => {
      if (!user) {
        return res.status(404).json({ status: false, message: 'User record not found.'});
      }else {
        return res.status(200).json({ status: true, user : _.pick(user,['profil','email']) });
      }
    }
  );
}
module.exports.infoget = (req, res, next) => {
  User.findOne({ _id: req._id},
    (err, user) => {
      if (!user) {
        return res.status(404).json({ status: false, message: 'User record not found.'});
      }else {
        req.profil = _.pick(user,['profil','email']);
        next();
      }
    }
  );
}
module.exports.gotoprofil = (req, res, next) => {
  var profil= req['profil']['profil'];
  if (profil == 'responsable') {

    return res.status(200).json({ status: true, profil: 'responsable' });
  } else if (profil == 'livreur') {

    return res.status(200).json({ status: true, profil: 'livreur' });
  } else if (profil == 'restaurant') {

    return res.status(200).json({ status: true, profil: 'restaurant' });
  } else if (profil == 'client') {

    return res.status(200).json({ status: true, profil: 'client' });
  } else {

    return res.status(404).json({ status: false, message: 'Profil of user not found' });
  }
}
