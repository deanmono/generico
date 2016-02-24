'use strict';

angular.module('generico.tabs')
    .directive('tabs', tabs);

function tabs(){
    return {
        restrict: 'E', // E for future proofing with angular2
        scope: {},
        templateUrl: 'components/tabs/views/tabsDirective.html',
        controller: TabsCtrl,
        controllerAs: 'tabs',
        bindToController: true
    }
}
