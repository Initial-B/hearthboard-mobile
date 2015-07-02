(function () {
    'use strict';

    var serviceID = 'gamesAPI';
	var ns = 'hearthboard.' + serviceID;
	
	angular.module('hearthboard').factory(serviceID, ['$http', 'userAPI', gamesAPI]);
	function gamesAPI($http, userAPI){
		function submitConstructedMatch(match){
			return $http({
				url: 'http://apsis.me/Hearthboard/lib/Constructed/Constructed_cc.php',
				method: 'POST',
				data: {
					action: 'submitConstructedMatch',
					userID: ,
					sessionID: ,
				}
			}).then(
				function(response){
					if(response.data['responseCode'] == 'success'){

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
		
		return{
			submitConstructedMatch: submitConstructedMatch
		}
	};
})();