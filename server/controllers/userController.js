/**
 * Module dependencies.
 */
var User = require('../models/user');
var passport = require('passport');
var mongoose = require('mongoose');
var User = mongoose.model('User');

exports.create = function(req, res) {
  var user = new User();

  user.name = req.body.name;
  user.email = req.body.email;

  user.setPassword(req.body.password);

  user.save(function(err) {
      console.log("server cont calling");
        User.find({
        }, function(err, users) {
            if (err) {
                console.log("error");
            }
            console.log(users);
        })
        var token;
        token = user.generateJwt();
        // res.status(200);
        // res.json({
        //   "token" : token
        // });
    return res.json({"token" : token}).status(200);
  });
};

exports.login = function(req, res) {

  passport.authenticate('local', function(err, user, info){
    var token;
    console.log("server cont calling");
    // If Passport throws/catches an error
    if (err) {
      console.log("err");
      console.log(err);
      return res.status(404).json(err);
    }

    // If a user is found
    if(user){
      console.log("users",user);
      token = user.generateJwt();
      return res.json({"token" : token}).status(200);
    } else {
      console.log("else",user);
      // If user is not found
      return res.status(401).json(info);
    }
  })(req, res);

};
