'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', [function() {

  }]);
function Ctrl($scope) {
    $scope.templates =
        [ { name: 'logup', url: 'templates/logup.html'},
            { name: 'home', url: 'templates/home.html'} ];
    $scope.template = $scope.templates[0];
}

