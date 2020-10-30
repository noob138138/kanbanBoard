var app = angular.module('main', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: './views/login.html',
		controller: 'loginController'
	}).when('/home', {
		resolve :{
			"check": function($location,$rootScope){
				if(!$rootScope.loggedIn){
					$location.path('/');
				}
			}
		},
		templateUrl: './views/home.html',
		controller: 'homeController'
	})
	.otherwise({
		template: '404'
	})
});



app.controller('loginController', function($scope,$location,$rootScope) {
	$scope.login = function() {
		
		if($scope.username=="admin" && $scope.password=="admin"){
			$rootScope.loggedIn=true;
			$location.path('/home');
		}
		else $scope.error="Incorrect Username/Password!";
	}
});

app.controller('homeController', function($scope, user) {
	window.onload = function() {
		dropHere.addEventListener("drop", function(e) { e.preventDefault(); });
	  };

});