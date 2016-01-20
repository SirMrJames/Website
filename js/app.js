var app = angular.module('WebApp', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider.when('/', {
    controller: "MainController",
    templateUrl: "mainpage"
  })
    .when('/:id', {
  controller: 'ProjectController',
  templateUrl: 'projectpage'
}) .otherwise({
    redirectTo: '/'
  });
});
