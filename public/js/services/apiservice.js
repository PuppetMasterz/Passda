angular.module('PassApp')
.factory('ApiService', function($http, $q){
	var o = {};
	var baseUrl = "http://localhost:3000";

	o.createExam = function(data){
		$http.post(baseUrl + '/exam', data).then(function(response){
			console.log(response);
		}).catch(function(err){
			console.log("Error creating exams");
		});
	}

	o.postResults = function(data){
		console.log(data);
		$http.post(baseUrl + '/result', data).then(function(response){
			console.log(response);
		}).catch(function(err){
			console.log("Error on posting results");
		});
	}

	o.getResultById = function(instituteId, examId, indexNo){
		var params = '/' + instituteId + '/' + examId + '/' + indexNo;
		var deferred = $q.defer();

		console.log(baseUrl + params);
		$http.get(baseUrl + params).then(function(response){
			console.log(response);
			deferred.resolve({ status: "SUCCESS", data: response.data[0] });
		}).catch(function(err){
			deferred.reject({ status: "ERROR", error: err });
		});

		return deferred.promise;
	}

	return o;
})