'use strict';

angular.module('hearthboard.constructed', [])

.controller('ConstructedCtrl', ['$scope', 'gamesAPI', function($scope, gamesAPI) {
	$scope.constructedEntry = {
		ownClass: '',
		deckID: '',
		opponentClass: '',
		coin: false,
		result: '',
		comments: ''
	};
	
	$scope.submitConstructedMatch = function(entry){
		
		
	};
}]);