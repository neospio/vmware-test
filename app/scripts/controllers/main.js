'use strict';

/**
 * @ngdoc function
 * @name vmwareTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the vmwareTestApp
 */
angular.module('vmwareTestApp')
  .controller('MainCtrl', function ($scope) {
        $scope.newUser = {};

        $scope.editable = null;

        $scope.getPasswordDisplay = function (password){
            if(typeof password == "undefined" || password == null || password.length == 0){
                return "";
            }else{
                var rt = "";
                for(var i = 0; i<password.length; i++){
                    rt += "•";
                }
                return rt;
            }
        };

        $scope.register = function () {

        };
  });
