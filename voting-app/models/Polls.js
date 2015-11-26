var mongoose = require('mongoose');

var PollSchema = new mongoose.Schema({
  username: String,
  pollTitle: String,
  options: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Option' }]
  
});

mongoose.model('Poll', PollSchema);