(function () {
    'use strict';

    var serviceID = 'gamesAPI';
	var ns = 'hearthboard.' + serviceID;
	
	angular.module('hearthboard').factory(serviceID, ['$http', 'userAPI', gamesAPI]);
	function gamesAPI($http, userAPI){
		function submitConstructedMatch(match){
			
		};
		
		return{
			submitConstructedMatch: submitConstructedMatch
		}
	};
})();