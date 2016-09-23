angular.module('PassApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise("/home");

	$stateProvider
	.state('home', {
		url: '/home',
		templateUrl: 'html/home.html',
		controller: 'MainCtrl'
	});
})
.controller('MainCtrl', function($scope, ApiService){
	console.log("In main controller...");
	var results = { data: "Here comes chaos!" };
	ApiService.postResults(results);
})