(function () {

	var serviceId = 'userInfoService';
	
	angular.module('hearthboard').factory(serviceId, ['$http', userInfoService]);

    function userInfoService($http) {
	
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
			getUserInfo: getUserInfo
		};
	};
})();