'use strict';

angular.module('hearthboard.home', [])

.controller('HomeCtrl', ['$scope', '$http', 'userAPI', function($scope, $http, userAPI) {
	$scope.login = function(){
		userAPI.login('Brady','pass').success(
			function(data, status){
				console.log('responseMessage: ' + data['responseMessage'] + ' sessionID: ' + data['sessionID']);
				$scope.loginResponse = data;
				$scope.responseStatus = status;			
			}
		);
	};
	$scope.logout = function(){
	
	};
	
	
	$scope.getUserInfo = function(){
		userAPI.getUserInfo('Brady',$scope.sessionID);
		//TODO: do something with results
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