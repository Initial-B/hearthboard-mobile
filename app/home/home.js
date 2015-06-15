'use strict';

angular.module('hearthboard.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', ['$scope', '$http', function($scope, $http) {
	$scope.login = function(){
		$http.post('http://apsis.me/Hearthboard/lib/SessionUtil/SessionUtil_cc.php',
			{//data
				action: 'login',
				userID: 'Brady',
				password: 'pass'
			},
			{//config
				withCredentials: true,
				headers: { 'Content-Type': 'application/x-www-form-urlencoded;'}
			}
		).success(function(data, status){
			console.log('responseMessage: ' + data['responseMessage'] + ' sessionID: ' + data['sessionID']);
		});
		
	};
	$scope.logout = function(){
	
	};
	
	
	$scope.getUserInfo = function(){
	//	$http.post('ht
	
	};
	
	
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