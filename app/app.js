'use strict';

// Declare app level module which depends on views, and components
var hearthboardApp = angular.module('hearthboard', [
 // 'ngRoute',
  'ui.router',
  'hearthboard.home',
  'hearthboard.constructed',
  'hearthboard.arena',
  'hearthboard.version'
]);
hearthboardApp.config(['$stateProvider','$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
	//redirect unmatched urls to /home
	$urlRouterProvider.otherwise('/home');
    $stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'home/home.html',
			controller: 'HomeCtrl',
			data:{
				requireLogin: false
			}
		})
		.state('constructed',{
			url: '/constructed',
			templateUrl: 'constructed/constructed-matches.html',
			controller: 'ConstructedCtrl',
			data:{
				requireLogin: true
			}
		})
		.state('arena',{
			url: '/arena',
			templateUrl: 'arena/arena-matches.html',
			controller: 'ArenaCtrl',
			data:{
				requireLogin: true
			}
		});
  }
]);
/*
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
  }
]);
*/