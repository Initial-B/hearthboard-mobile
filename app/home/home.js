'use strict';

angular.module('hearthboard.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', ['$scope', function($scope) {
	$scope.devStats = {
		deviceReady: false,
		userAgent: 'unknown',
		screenDimensions: 'unknown',
		windowDimensions: 'unknown',
		deviceOrientation: 'portrait',
		userID: '',
		userEmail: '',
		constructedWL: 0,
		arenaWL: 0
	};//TODO: get devStats from server using devStatsService
}]);