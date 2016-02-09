'use strict';

angular.module('flexion', [
        'ngRoute',
        'flexion.test'
    ])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/'});
    }]);