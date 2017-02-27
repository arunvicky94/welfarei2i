var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();


app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended: true
}));

// app.post("/api/user", function(req, res) {
//   console.log("server calling");
//   console.log(req.body);
//   var user = new User (req.body);
//   user.save();
//   console.log(user);
//   User.find({
//       "name": "arun"
//   }, function(err, users) {
//       if (err) {
//           console.log("error");
//       }
//       console.log(users[0]);
//   })
//   res.end();
//  });

var listener = app.listen(3003, function(){
     console.log('Listening on port ' + listener.address().port); //Listening on port 3030
 });

 var db = mongoose.connect('mongodb://localhost:27017/test');

 mongoose.connection.once('connected', function() {
	console.log("Connected to database");
});

require('./server/routes/index')(app);

module.exports = app;
