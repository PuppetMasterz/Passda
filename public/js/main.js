angular.module('PassApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise("/");

	$stateProvider
	.state('home', {
		url: '/home',
		templateUrl: 'views/html/home.html',
		controller: 'MainCtrl'
	});
})
.controller('MainCtrl', function($scope){
	console.log("In main controller...");
})