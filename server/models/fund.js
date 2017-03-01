var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var fundSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true,
     },
     reason: {
         type: String,
         required: true
     },
     date: {
         type: Date
     },
     status: {
         type:String
     },
     user: {
         type: Schema.ObjectId,
         ref: 'User'
     }
});

module.exports = mongoose.model('Fund', fundSchema);
