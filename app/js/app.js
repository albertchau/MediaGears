'use strict';


// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
  'ui.bootstrap'
]);
myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: '/partials/logup-partial1.html', controller: 'LogupCtrl'});
  $routeProvider.when('/view2', {templateUrl: '/partials/home-partial1.html', controller: 'HomeCtrl'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

myApp.run(['$route', function($route)  {
    $route.reload();
}]);