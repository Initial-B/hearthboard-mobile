(function () {
    'use strict';

    var serviceID = 'userAPI';
	var ns = 'hearthboard.' + serviceID;
	
	angular.module('hearthboard').factory(serviceID, ['$http',userAPI]);
	function userAPI($http){
		//set userID and sessionID from localStorage, using empty string if not set
		var userID = (window.localStorage[ns + '.userID'] ? 
			window.localStorage[ns + '.userID'] : '');
		var sessionID = (window.localStorage[ns + '.sessionID'] ?
			window.localStorage[ns + '.sessionID'] : '');
			
		function getUserID(){return userID;};
		function getSessionID(){return sessionID;};
		function setUserID(uID){
			userID = uID;
			window.localStorage[ns + '.userID'] = uID;
		};
		function setSessionID(sID){
			sessionID = sID;
			window.localStorage[ns + '.sessionID'] = sID;
		};
		function isLoggedIn(){
			return !(getUserID()==='' || getSessionID()==='');
		}

		function login(uID, password){
			//console.log('entered userAPI with userID: ' + uID + ' password: ' + password);
			return $http({
				url: 'http://apsis.me/Hearthboard/lib/SessionUtil/SessionUtil_cc.php',
				method: 'POST',
				//withCredentials: true,
				data: {
					action: 'login',
					userID: uID,
					password: password
				}
			}).then(
				function(response){
					if(response.data['responseCode'] == 'success'){
						setUserID(uID);
						setSessionID(response.data['sessionID']);
					}
					return response;
				}
			).catch(
				function(response) {
					console.log('status: ' + response.status + ' data: ' + JSON.stringify(response.data));
					return response;
				}
			);
		};
		
		function logout(uID, sID){
			return $http({
				url: 'http://apsis.me/Hearthboard/lib/SessionUtil/SessionUtil_cc.php',
				method: 'POST',
				//withCredentials: true,
				data: {
					action: 'logout',
					userID: uID,
					sessionID: sID
				}
			}).then(
				function(response) {
					setSessionID('');
					console.log('logout response: ' + response.data);
					return response;
				}
			).catch(
				function(response) {
					setSessionID('');
					console.log('logout response status: ' + response.status + ' data: ' + JSON.stringify(response.data));
					return response;
				}
			);
		};
		
		function getUserInfo(uID, sID){
			return $http({
				url: 'http://apsis.me/Hearthboard/lib/SessionUtil/SessionUtil_cc.php',
				method: 'POST',
				//withCredentials: true,
				data: {
					action: 'getUserInfo',
					userID: uID,
					sessionID: sID
				}
			});
		};
		
		return{
			getUserID: getUserID,
			getSessionID: getSessionID,
			setUserID: setUserID,
			setSessionID: setSessionID,
			isLoggedIn: isLoggedIn,
			login: login,
			logout: logout,
			getUserInfo: getUserInfo
		};
	};
	
})();