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
	})
	.state('upload', {
		url: '/upload',
		templateUrl: 'html/upload_result.html',
		controller: 'MainCtrl'
	})
	.state('exams.create', {
		url: '/exam/create',
		templateUrl: 'html/create_examination.html',
		controller: 'MainCtrl'
	})
	.state('results', {
		url: '/results',
		templateUrl: 'html/result_view.html',
		controller: 'MainCtrl'
	});
})
.controller('MainCtrl', function($scope, $rootScope, $state, ApiService){
	console.log("In main controller...");
	var results = { data: "Here comes chaos!" };
	var exam = { data: "Here comes order!" };

	$scope.orgName;

	$scope.index = "";
	$scope.grade = "";

	$scope.results = [];

	$rootScope.exam = { title: 'A/L 2016', subtitle: 'GCE Advanced Level Exam' };

	$scope.exams = [{
			title: 'O/L 2016',
			subtitle: 'GCE Ordinary Level Exam'
		},
		{
			title: '8 Pass',
			subtitle: 'Ata Pass Exam'
		},
		{
			title: 'A/L 2016',
			subtitle: 'GCE Advanced Level Exam'
		}
	];

	$scope.createResult = function(){
		ApiService.postResults(results);
	}

	$scope.selectExam = function(index){
		$rootScope.exam = $scope.exams[index];
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
		console.log($scope.orgName);
		$rootScope.organization = $scope.orgName;
		$state.go('exams');
		console.log($rootScope.organization);
	}

	$scope.goToUploadResults = function(){
		$state.go('upload');
	}

	$scope.addResult = function(){
		$scope.results.push({ index: $scope.index, grade: $scope.grade, subject: $scope.subject });
		$scope.index = "";
		$scope.grade = "";
		$scope.subject = "";
	}

	$scope.submitResults = function(){
		$scope.results = [];
		ApiService.postResults($scope.results);
	}
});