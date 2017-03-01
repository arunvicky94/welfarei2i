var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var app = express();

require('./config/passport');

app.use(passport.initialize());

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended: true
}));

app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401);
    res.json({"message" : err.name + ": " + err.message});
  }
});

var listener = app.listen(3003, function(){
     console.log('Listening on port ' + listener.address().port); //Listening on port 3003
 });

 var db = mongoose.connect('mongodb://localhost:27017/welfarei2i');

 mongoose.connection.once('connected', function() {
	console.log("Connected to database");
});

require('./server/routes/index')(app);

module.exports = app;
