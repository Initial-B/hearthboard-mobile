'use strict';

// Declare app level module which depends on views, and components
var hearthboardApp = angular.module('hearthboard', [
  'ui.bootstrap',
  'ui.router',
  'hearthboard.home',
  'hearthboard.login',
  'hearthboard.constructed',
  'hearthboard.arena',
  'hearthboard.version'
]);
hearthboardApp.config(['$stateProvider','$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
	//redirect unmatched urls to /home
	$urlRouterProvider.otherwise('/home');
    $stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'home/home.html',
			controller: 'HomeCtrl',
			data:{
				requireLogin: false
			}
		})
		.state('constructed',{
			url: '/constructed',
			templateUrl: 'constructed/constructed-matches.html',
			controller: 'ConstructedCtrl',
			data:{
				requireLogin: true
			}
		})
		.state('arena',{
			url: '/arena',
			templateUrl: 'arena/arena-matches.html',
			controller: 'ArenaCtrl',
			data:{
				requireLogin: true
			}
		});
  }
])
.run(['$rootScope', '$state', 'loginModal',
	function($rootScope, $state, loginModal){
		$rootScope.$on('$stateChangeStart', function(event, toState, toParams){
			var requireLogin = toState.data.requireLogin;
			// if state requires login and currentUser is undefined, show login prompt
			if(requireLogin && typeof $rootScope.currentUser === 'undefined'){
				event.preventDefault();
				loginModal().then(function(){
					return $state.go(toState.name, toParams);
				}).catch(function(){
					return $state.go('home');
				});
			}
		});
	}
]);