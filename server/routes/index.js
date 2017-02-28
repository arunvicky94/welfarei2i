module.exports = function(app) {

  var jwt = require('express-jwt');
  var auth = jwt({
    secret: 'MY_SECRET',
    getToken: function getUserToken (req) {
      return req.body.token;
    }
    });

    var user = require('../controllers/userController');
    var fund = require('../controllers/fundController');

    app.route('/api/user')
        .post(user.create);
    app.route('/api/login')
        .post(user.login);
    app.route('/api/fund')
        .post(auth, fund.request);
};
