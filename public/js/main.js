angular.module('PassApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise("/login");

	$stateProvider
	.state('login', {
		url: '/login',
		templateUrl: 'html/create_organization.html',
		controller: 'MainCtrl'
	})
	.state('exams', {
		url: '/exams',
		templateUrl: 'html/examination.html',
		controller: 'MainCtrl'
	});
})
.controller('MainCtrl', function($scope, $rootScope, $state, ApiService){
	console.log("In main controller...");
	var results = { data: "Here comes chaos!" };
	var exam = { data: "Here comes order!" };

	$scope.organization = { name: '' };

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

	$scope.createOrganization = function(){
		$rootScope.organization = $scope.organization;
		$state.go('exams');
	}
})