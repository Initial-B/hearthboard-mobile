(function () {
    'use strict';

    var serviceID = 'constants';
	var ns = 'hearthboard.' + serviceID;
	
	angular.module('hearthboard').factory(serviceID, [constants]);
	function constants(){
		
		this.HS_CLASSES = [
				'Druid','Hunter','Mage',
				'Paladin','Priest','Rogue',
				'Shaman','Warlock','Warrior'
			];
			
		return{
			constants: constants
		};
	};
	
})();