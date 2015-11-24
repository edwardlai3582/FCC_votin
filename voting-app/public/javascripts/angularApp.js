
var app = angular.module('MyApp', ['ui.router','ngMessages']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('firstpage', {
      url: '/firstpage',
      templateUrl: 'htmls/firstpage.html',
      controller: 'firstpageController'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'htmls/login.html',
      controller: 'loginController',
      onEnter: ['$state', 'auth', function($state, auth){
        if(auth.isLoggedIn()){
          $state.go('firstpage');
        }
      }]
    })
    .state('signup', {
      url: '/signup',
      templateUrl: './htmls/signup.html',
      controller: 'signupController',
      onEnter: ['$state', 'auth', function($state, auth){
        if(auth.isLoggedIn()){
          $state.go('firstpage');
        }
      }]
    });

  $urlRouterProvider.otherwise('firstpage');
    
}]);

