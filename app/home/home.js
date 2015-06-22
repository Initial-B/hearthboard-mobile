'use strict';

angular.module('hearthboard.home', [])

.controller('HomeCtrl', ['$scope', '$http', function($scope, $http) {
	$scope.login = function(){
		$http({
			url: 'http://apsis.me/Hearthboard/lib/SessionUtil/SessionUtil_cc.php',
			method: 'POST',
			//withCredentials: true,
			data: {
				action: 'login',
				userID: 'Brady',
				password: 'pass'
			}
		}).success(function(data, status){
			console.log('responseMessage: ' + data['responseMessage'] + ' sessionID: ' + data['sessionID']);
			$scope.loginResponse = data;
			$scope.responseStatus = status;
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