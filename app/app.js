'use strict';

// Declare app level module which depends on views, and components
var hearthboardApp = angular.module('hearthboard', [
  'ngRoute',
  'hearthboard.home',
  'hearthboard.constructed',
  'hearthboard.arena',
  'hearthboard.version'
]);
hearthboardApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
		.when('/constructed-matches', {
			templateUrl: 'constructed/constructed-matches.html',
			controller: 'ConstructedCtrl'
		})
	    .when('/arena-matches', {
			templateUrl: 'arena/arena-matches.html',
			controller: 'ArenaCtrl'
		})
		.otherwise({
			redirectTo: '/home'
		});
  }]);
