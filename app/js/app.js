'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.services', 'myApp.directives']).
	config(['$routeProvider', function($routeProvider) {
	  $routeProvider.when('/main', {templateUrl: 'partials/main.html', controller: MainCtrl});
	  $routeProvider.otherwise({redirectTo: '/main'});
	}]);
