'use strict';

angular.module('flexion.test', [
        'ngRoute',
])
.config([
    '$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'components/test/index.html'
            })
            .when('/test', {
            templateUrl: 'components/test/views/test.html'
            });
    }
]);