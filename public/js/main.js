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
	var exam = { data: "Here comes order!" };

	$scope.createResult = function(){
		ApiService.postResults(results);
	}

	$scope.createExam = function(){
		ApiService.createExam(exam);
	}

	$scope.findResultById = function(){
		ApiService.getResultById(1, 1, 1).then(function(success){
			console.log(success);
		}).catch(function(error){
			console.log(error);
		})
	}
})