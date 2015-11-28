var mongoose = require('mongoose');

var OptionSchema = new mongoose.Schema({
   
  optionTitle: String,
  votes: {type: Number, default: 0},    
  poll: { type: mongoose.Schema.Types.ObjectId, ref: 'Poll' }
  
});

OptionSchema.methods.vote = function(cb) {
  this.votes += 1;
  this.save(cb);
};

mongoose.model('Option', OptionSchema);

