'use strict';

angular.module('flexion.test')
    .directive('test', test);

function test(){
    return {
        restrict: 'E', // E for future proofing with angular2
        scope: {},
        templateUrl: 'components/test/views/testDirective.html',
        controller: TestCtrl,
        controllerAs: 'test',
        bindToController: true
    }
}
