
var app = angular.module('MyApp', ['ui.router','ngMessages']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('firstpage', {
      url: '/firstpage',
      templateUrl: 'htmls/firstpage.html',
      controller: 'firstpageController',
      onEnter: ['$state', 'auth', function($state, auth){
        if(auth.isLoggedIn()){
          $state.go('userpage');
        }
      }]
    })
    .state('login', {
      url: '/login',
      templateUrl: 'htmls/login.html',
      controller: 'loginController',
      onEnter: ['$state', 'auth', function($state, auth){
        if(auth.isLoggedIn()){
          $state.go('userpage');
        }
      }]
    })
    .state('signup', {
      url: '/signup',
      templateUrl: './htmls/signup.html',
      controller: 'signupController',
      onEnter: ['$state', 'auth', function($state, auth){
        if(auth.isLoggedIn()){
          $state.go('userpage');
        }
      }]
    })
    .state('userpage', {
      url: '/userpage',
      templateUrl: './htmls/userpage.html',
      controller: 'userpageController',
      onEnter: ['$state', 'auth', function($state, auth){
        if(!auth.isLoggedIn()){
          $state.go('firstpage');
        }
      }]
    });

  $urlRouterProvider.otherwise('firstpage');
    
}]);

