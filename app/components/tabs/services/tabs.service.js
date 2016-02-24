'use strict';

angular.module('generico.tabs').service('TabsService', TabsService);

function TabsService() {
    this.tabs = [{
        title: 'Tab 1',
        url: 'one.tpl.html'
    }, {
        title: 'Tab 2',
        url: 'two.tpl.html'
    }, {
        title: 'Tab 3',
        url: 'three.tpl.html'
    }, {
        title: 'Tab 4',
        url: 'four.tpl.html'
    }];
}