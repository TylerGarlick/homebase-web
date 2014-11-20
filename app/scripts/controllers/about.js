'use strict';

/**
 * @ngdoc function
 * @name homebaseApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the homebaseApp
 */
angular.module('homebaseApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
