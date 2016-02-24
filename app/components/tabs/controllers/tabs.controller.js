'use strict';

angular.module('generico.tabs').controller('TabsCtrl', TabsCtrl);

function TabsCtrl(TabsService) {
    var tabs = this;

    tabs.tabsservice = TabsService;
    tabs.currentTab = 'one.tpl.html';
    tabs.onClickTab = onClickTab;
    tabs.isActiveTab = isActiveTab;

    init();

    function init() {
        // crickets
    }

    function onClickTab(tab) {
        tabs.currentTab = tab.url;
    }

    function isActiveTab(tabUrl) {
        return tabUrl == tabs.currentTab;
    }
}
