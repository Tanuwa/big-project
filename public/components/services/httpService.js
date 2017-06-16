var app = angular.module("myApp");
app.service("httpService", ["$http", function ($http) {
	var url = "localhost:8000/food";
	this.post = function (food) {
		return $http.post(url,food);
	}
	//post request to the URL
	//receive server response
	//send it back




}])
