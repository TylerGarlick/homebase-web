'use strict';

/**
 * @ngdoc function
 * @name homebaseApp.controller:AppCtrl
 * @description
 * # AppCtrl
 * Controller of the homebaseApp
 */
angular.module('homebaseApp')
  .controller('AppCtrl', function ($scope, $mdBottomSheet) {
    $scope.showProfileBottomSheet = function ($event) {
      $mdBottomSheet.show({
        templateUrl: 'views/sheets/profile-action.html',
        controller: 'ProfileActionsCtrl',
        targetEvent: $event
      });
    };
  });
