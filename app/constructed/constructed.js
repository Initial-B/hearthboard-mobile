'use strict';

angular.module('hearthboard.constructed', [])

.controller('ConstructedCtrl', ['$scope', 'gamesAPI', 'constants', 
	function($scope, gamesAPI, constants) {
		$scope.constructedEntry = {
			ownClass: '',
			deckID: '',
			opponentClass: '',
			coin: false,
			result: '',
			comments: '',
			seasonID: 0
		};
		$scope.hsClasses = constants.HS_CLASSES;
		
		$scope.getRecentMatches = function(){
			gamesAPI.getConstructedMatches(0).then(
				function(response){
					if(response.data['responseCode'] == 'success'){
						$scope.recentMatches = response.data['constructedMatches'];
					}//else display some error message
				}
			);
		};
		
		$scope.submitConstructedMatch = function(entry){
			gamesAPI.submitConstructedMatch(entry);
		};
}]);