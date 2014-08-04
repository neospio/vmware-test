'use strict';

describe('Directive: ngModelOnEnter', function () {

  // load the directive's module
  beforeEach(module('vmwareTestApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ng-model-on-enter></ng-model-on-enter>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the ngModelOnEnter directive');
  }));
});
