module.exports = function(app) {


    var user = require('../controllers/userController');
    app.route('/api/user')
        .post(user.create);
};
