angular.module('PassApp')
.factory('ApiService', function($http){
	var o = {};
	var baseUrl = "http://localhost:3000";

	o.getResults = function(id){
		console.log(id);
		return;
	}

	o.postResults = function(data){
		console.log(data);
		$http.post(baseUrl + '/result', data).then(function(response){
			console.log(response);
		}).catch(function(err){
			console.log("Error on posting results");
		})
	}

	return o;
})