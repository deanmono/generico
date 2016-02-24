'use strict';

angular.module('generico.tabs', [
        'ngRoute',
])
.config([
    '$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'components/tabs/views/tabs.html'
            });
    }
]);