var mongoose = require('mongoose');

var PollSchema = new mongoose.Schema({
  userId: String,
  pollTitle: String,
  userVoted:[String],    
  //options: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Option' }]
  options:[{
    optionTitle : String,
    votes: {type: Number, default: 0}  
  }]    
  
});

PollSchema.methods.vote = function(cb) {

};

mongoose.model('Poll', PollSchema);