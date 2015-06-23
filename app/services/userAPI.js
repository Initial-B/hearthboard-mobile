(function () {
    'use strict';

    var serviceID = 'userAPI';
	
	angular.module('hearthboard').factory(serviceID, ['$http',userAPI]);
	function userAPI($http){
	
		function login(userID, password){
			return $http({
				url: 'http://apsis.me/Hearthboard/lib/SessionUtil/SessionUtil_cc.php',
				method: 'POST',
				//withCredentials: true,
				data: {
					action: 'login',
					userID: userID,
					password: password
				}
			});
		};
		
		function logout(userID, sessionID){
		
		};
		
		function getUserInfo(userID, sessionID){
			return $http({
				url: 'http://apsis.me/Hearthboard/lib/SessionUtil/SessionUtil_cc.php',
				method: 'POST',
				//withCredentials: true,
				data: {
					action: 'getUserInfo',
					userID: userID,
					sessionID: sessionID
				}
			});
		};
		
		return{
			login: login,
			logout: logout,
			getUserInfo: getUserInfo,
		};
	};
	
})();