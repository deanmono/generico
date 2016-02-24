'use strict';

angular.module('generico', [
        'ngRoute',
        'generico.tabs'
    ])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/'});
    }]);