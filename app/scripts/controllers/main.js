'use strict';

/**
 * @ngdoc function
 * @name homebaseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the homebaseApp
 */
angular.module('homebaseApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
