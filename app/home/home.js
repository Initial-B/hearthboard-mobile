'use strict';

angular.module('hearthboard')

.controller('HomeCtrl', ['$scope', '$http', 'userAPI', function($scope, $http, userAPI) {
	//test
	$scope.userID = userAPI.getUserID();
	$scope.sessionID = userAPI.getSessionID();

	$scope.isLoggedIn = userAPI.isLoggedIn();
	$scope.userLogin = {
		username: '',
		password: ''
	};
	
	//called by loginForm
	$scope.login = function(userLogin){
		userAPI.login(userLogin.username,userLogin.password).then(
			function(response){
				if(response.data['responseCode'] == 'success'){
					location.reload();
				}//else display some login error message
			}
		);
	};
	$scope.logout = function(){
		userAPI.logout().then(
			function(){
				location.reload();
			}
		);
	};
	
	$scope.getUserInfo = function(){
		userAPI.getUserInfo(userAPI.getUserID(),$scope.sessionID).then(
			function(data, status){
				//TODO: do something with results involving $scope.devStats
			}
		);	
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
	};
}]);