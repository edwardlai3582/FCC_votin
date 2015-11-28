var express = require('express');
var router = express.Router();


var mongoose = require('mongoose');

var passport = require('passport');

var User = mongoose.model('User');
var Poll = mongoose.model('Poll');

var jwt = require('express-jwt');
var auth = jwt({secret: 'SECRET', userProperty: 'payload'});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* POST signup */
router.post('/register', function(req, res, next){
  if(!req.body.username || !req.body.password){
    return res.status(400).json({message: 'Please fill out all fields'});
  }

  var user = new User();
  user.username = req.body.username;
  user.setPassword(req.body.password);
  user.save(function (err){
    if(err){ return next(err); }
    return res.json({token: user.generateJWT()})
  });
});

/* POST login */
router.post('/login', function(req, res, next){
  if(!req.body.username || !req.body.password){
    return res.status(400).json({message: 'Please fill out all fields'});
  }
  console.log("PW: "+req.body.password);
  passport.authenticate('local', function(err, user, info){
    if(err){ return next(err); }

    if(user){
      return res.json({token: user.generateJWT()});
    } else {
      return res.status(401).json(info);
    }
  })(req, res, next);
});



router.get('/polls', auth, function(req, res, next) {
    console.log("auth id="+ req.payload._id); 
    Poll.find({ 'userId': req.payload._id },function(err, polls){
        if(err){ return next(err); }
        res.json(polls);
    });
});

/* POST new poll */
router.post('/polls', auth, function(req, res, next){
      var poll = new Poll();
      poll.userId = req.body.userId;
      poll.pollTitle = req.body.pollTitle;
      poll.options = req.body.options;
      poll.save(function (err,poll){ 
        if(err){ console.log(err);  return next(err); }
        res.json(poll);  
        console.log("poll post success");  
      });
});

/* GET single poll */
router.get('/polls/:pollid', function(req, res) {
  //res.send(req.params.version);
    console.log("req.params.pollid= "+req.params.pollid);
    Poll.find({ '_id': req.params.pollid },function(err, poll){
        if(err){ return next(err); }
        console.log('found poll='+poll);
        res.json(poll);
    });  
});

/* DELETE sigle poll */
router.delete('/polls/:pollid', auth, function(req, res, next) {
    Poll.findOneAndRemove({'_id': req.params.pollid}, function(err){
        if(err){ return next(err); }
        console.log("delete success");
        res.send("delete success");
    });
});
////////////////////////////////////////
module.exports = router;
