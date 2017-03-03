module.exports = function(app) {

  var jwt = require('express-jwt');
  var auth = jwt({
    secret: 'MY_SECRET',
    userProperty: 'payload'
    });

    var user = require('../controllers/userController');
    var fund = require('../controllers/fundController');

    app.route('/api/user')
        .post(user.create);
    app.route('/api/login')
        .post(user.login);
    app.route('/api/funds/:status')
        .get(auth, fund.getFundsBystatus);
    app.param('status', fund.getFundsBystatus);
    app.route('/api/fund')
        .put(auth, fund.updateFund)
        .post(auth, fund.requestFund)
    app.route('/api/fund/:userId')
        // .post(auth, fund.request)
        .get(auth, fund.getFundByUserId);
    app.param('userId', fund.getFundByUserId);
};
