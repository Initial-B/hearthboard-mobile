(function () {
    'use strict';

    var serviceID = 'gamesAPI';
	var ns = 'hearthboard.' + serviceID;
	
	angular.module('hearthboard').factory(serviceID, ['$http', 'userAPI', gamesAPI]);
	function gamesAPI($http, userAPI){
		
		function submitConstructedMatch(match){
			/*
				required: ownClass, opponentClass, coin, result
				- Controller can autofill ownClass on deck selection, and specify defaults for all values
			*/
		
			return $http({
				url: 'http://apsis.me/Hearthboard/lib/Constructed/Constructed_cc.php',
				method: 'POST',
				data: {
					action: 'submitConstructedMatch',
					userID: userAPI.getUserID(),
					sessionID: userAPI.getSessionID(),
					ownClass: match.ownClass,
					deckID: (match.deckID ? match.deckID : ''),
					opponentClass: match.opponentClass,
					coin: match.coin,
					result: match.result,
					comments: (match.comments ? match.comments : ''),
					seasonID: (match.seasonID ? match.seasonID : 0)
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