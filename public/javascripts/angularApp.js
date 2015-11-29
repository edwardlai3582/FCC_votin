
var app = angular.module('MyApp', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('firstpage', {
      url: '/firstpage',
      templateUrl: 'htmls/firstpage.html',
      controller: 'firstpageController',
      onEnter: ['$state', 'authF', function($state, authF){
        if(authF.isLoggedIn()){
          $state.go('userpage');
        }
      }]
    })
    .state('login', {
      url: '/login',
      templateUrl: 'htmls/login.html',
      controller: 'loginController',
      onEnter: ['$state', 'authF', function($state, authF){
        if(authF.isLoggedIn()){
          $state.go('userpage');
        }
      }]
    })
    .state('signup', {
      url: '/signup',
      templateUrl: './htmls/signup.html',
      controller: 'signupController',
      onEnter: ['$state', 'authF', function($state, authF){
        if(authF.isLoggedIn()){
          $state.go('userpage');
        }
      }]
    })
    .state('userpage', {
      url: '/userpage',
      templateUrl: './htmls/userpage.html',
      controller: 'userpageController',
      onEnter: ['$state', 'authF', function($state, authF){
        if(!authF.isLoggedIn()){
          $state.go('firstpage');
        }
      }],
      resolve: {
        pollsPromise: ['pollF', function(pollF){
          return pollF.getAllPolls();
        }]
      }
    })
    .state('polls', {
      url: '/polls/{id}',
      templateUrl: './htmls/polls.html',
      controller: 'pollsController',
      resolve: {
        pollSingle: ['$stateParams', 'pollF', function($stateParams, pollF) {
            return pollF.getPoll($stateParams.id);
        }]
      }
    });

  $urlRouterProvider.otherwise('firstpage');
    
}]);

