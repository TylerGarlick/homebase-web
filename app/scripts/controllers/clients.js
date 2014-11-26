'use strict';

/**
 * @ngdoc function
 * @name homebaseApp.controller:ClientsCtrl
 * @description
 * # ClientsCtrl
 * Controller of the homebaseApp
 */
angular.module('homebaseApp')
  .controller('ClientsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
