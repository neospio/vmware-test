'use strict';

/**
 * @ngdoc function
 * @name vmwareTestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the vmwareTestApp
 */
angular.module('vmwareTestApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
