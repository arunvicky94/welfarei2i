/**
 * Module dependencies.
 */
var User = require('../models/fund');
var passport = require('passport');
var mongoose = require('mongoose');
var Fund = mongoose.model('Fund');

exports.request = function(req, res) {
  var fund = new Fund(req.body.fund);
  fund.user = req.body.user;
  fund.save(function(err, fund) {
      console.log("server cont calling");
      if (err){
        console.log("error while adding");
        return res.json(400, err);
      }
        Fund.find({
        }, function(err, funds) {
            if (err) {
                console.log("error");
            }
            console.log(funds);
        })
     return res.json(fund).status(200);
  });
};

// exports.request = function(req, res) {
//     var user = new User(req.body);
//
//     user.save(function(err, user) {
//         if (err) {
//             return res.json(400, err);
//         }
//         console.log("server cont calling");
//           User.find({
//
//           }, function(err, users) {
//               if (err) {
//                   console.log("error");
//               }
//               console.log(users);
//           })
//         return res.jsonp(user).status(200);
//     });
// };
