
var app = angular.module('MyApp', ['ngRoute','ngMessages']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/firstpage', {
      controller: "firstpageController",
      templateUrl: "views/firstpage.html"
    })
    .when('/yesterday', {
      controller: "yesterdayController",
      templateUrl: "views/yesterday.html"
    })
    .when('/projects', {
      controller: "projectsController",
      templateUrl: "views/projects.html"
    })
    .when('/aboutme', {
      controller: "aboutmeController",
      templateUrl: "views/aboutme.html"
    })
    .otherwise({
      redirectTo: '/firstpage'
    });
});

