app.factory('poll', ['$http',function($http){
  var o = {
    polls: []
  };
  //
  o.getAll = function() {
    return $http.get('/polls').success(function(data){
      angular.copy(data, o.polls);
    });
  }; 
  o.create = function(poll) {
    return $http.poll('/polls', poll).success(function(data){
    o.polls.push(data);
    });
  }; 
  o.upvote = function(poll) {
    return $http.put('/polls/' + poll._id + '/upvote')
    .success(function(data){
      poll.upvotes += 1;
    });
  };
  o.get = function(id) {
    return $http.get('/polls/' + id).then(function(res){
      return res.data;
    });
  };
    
  /*
  o.addComment = function(id, comment) {
    return $http.poll('/polls/' + id + '/comments', comment);
  };
  */
    
  o.votePoll = function(poll, comment) {
    return $http.put('/polls/' + poll._id + '/comments/'+ comment._id +       '/upvote')
    .success(function(data){
      comment.upvotes += 1;
    });
  };    
     
  return o;
}]);