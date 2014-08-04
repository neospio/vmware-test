'use strict';

/**
 * @ngdoc directive
 * @name vmwareTestApp.directive:ngModelOnEnter
 * @description
 * # ngModelOnEnter
 */
angular.module('vmwareTestApp')
  .directive('ngModelOnEnter', function () {
        return {
            priority: 1,
            restrict: 'A',
            require: 'ngModel',
            link: function(scope, elm, attr, ngModelCtrl) {
                if (attr.type === 'radio' || attr.type === 'checkbox') return;

                elm.off('input keydown change');
                elm.bind("keypress", function(event) {
                    if(event.which === 13) {
                        scope.$apply(function () {
                            ngModelCtrl.$setViewValue(elm.val());
                        });
                        event.preventDefault();
                    }
                });
            }
        };
  });
