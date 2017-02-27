
/**
 * Module dependencies.
 */
var User = require('../models/user');

exports.create = function(req, res) {
    var user = new User(req.body);

    user.save(function(err, user) {
        if (err) {
            return res.json(400, err);
        }
        console.log("server cont calling");
          User.find({

          }, function(err, users) {
              if (err) {
                  console.log("error");
              }
              console.log(users);
          })
        return res.jsonp(user).status(200);
    });
};
