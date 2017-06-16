var app = angular.module("myApp", []);


app.controller("MainCtrl", ["$scope", "httpService", function ($scope, httpService) {

	$scope.foods = [];
	$scope.submit = function (food) {
		//with food object, call on httpService to POST to database
		httpService.post(food).then(function (response) {
			//foods.push.food
			console.log(response);
		}, function (response) {
			console.log(response);
		});

		//with response from httpService, display data
	};
}]);
//	$scope.delite = function (del) {
//		$scope.foods.splice(del, 1);
//	}
//}]);


//app.service("countService", ["$http", function ($http) {
//
//	this.getFood = function () {
//		return $http.get("/food")
//	}
//
//}]);
