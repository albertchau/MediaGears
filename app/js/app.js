'use strict';


// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
  'ui.bootstrap',
  'ui.router'
]);

myApp.config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/welcome");
    //
    // Now set up the states
    $stateProvider
        .state('welcome', {
            url: "/welcome",
            views: {
                "body": {
                    templateUrl:"containers/welcome.html",
                    controller: "WelcomeCtrl"
                },
                "header": {
                    templateUrl:"partials/main-header.html"
                }
            }
        })
        .state('home', {
            url: "/home",
            views: {
                "body": {
                    templateUrl: "containers/home.html",
                    controller: "HomeCtrl"
                },
                "header": {
                    templateUrl:"partials/main-header.html"
//                    template:""
                },

                "menu@home": {
                    templateUrl: "partials/home/pub-menu.html"
                },
                "mainContent@home": {
                    templateUrl: "partials/home/rfps.html"
                }
            }
        })
        .state('home.rfps', {
            url:"/rfps",
            views:{
                "mainContent@home": {
                    templateUrl: "partials/home/rfps.html"
                }
            }
        })
        .state('home.account', {
            url:"/account",
            views:{
                "mainContent@home": {
                    templateUrl: "partials/home/account.html"
                }
            }
        })
});