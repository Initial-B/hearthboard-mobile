'use strict';

angular.module('hearthboard.constructed', [])

.controller('ConstructedCtrl', ['$scope', 'gamesAPI', function($scope, gamesAPI) {
	$scope.constructedEntry = {
		ownClass: '',
		deckID: '',
		opponentClass: '',
		coin: false,
		result: '',
		comments: '',
		seasonID: 0
	};
	
	$scope.getRecentMatches = function(){
		gamesAPI.getConstructedMatches(0).then(
			function(response){
				if(response.data['responseCode'] == 'success'){
					$scope.recentMatchesTest = JSON.stringify(response.data['constructedMatches']);
				}//else display some error message
			}
		);
	};
	
	$scope.submitConstructedMatch = function(entry){
		gamesAPI.submitConstructedMatch(entry);
	};
}]);