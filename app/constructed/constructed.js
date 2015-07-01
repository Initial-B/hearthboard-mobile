'use strict';

angular.module('hearthboard.constructed', [])

.controller('ConstructedCtrl', ['$scope', function($scope) {
	$scope.constructedEntry = {
		deckID: '',
		opponentClass: '',
		coin: false,
		result: '',
		comments: ''
	};
	
	$scope.submitConstructedMatch = function(entry){
		
		
	};
}]);