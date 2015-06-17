// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var havro = angular.module('myApp', ['firebase'])
var fb = new Firebase("https://copons.firebaseio.com/");


havro.config(function($stateProvider , $urlRouterProvider ) {

	$stateProvider
		.state("home" , {
			url: "/home" , 
			templateUrl : "templates/home.html",
			controller : "firebaseController",
			cache: false 
		})

		
		.state("login" , {
			url: "/login" , 
			templateUrl : "templates/login.html",
			controller : "usersController",
		})

		.state("register" , {
			url: "/register" , 
			templateUrl : "templates/register.html",
			controller : "usersController",
		})
		
		.state("users" , {
			url: "/users" , 
			templateUrl : "templates/users.html",
			controller : "usersController",
		})

		.state("secure" , {
			url: "/secure" , 
			templateUrl : "templates/secure.html",
			controller : "secureController",
		})



	$urlRouterProvider.otherwise("/firebase");
});


havro.controller("firebaseController" , function($scope, $state, $firebaseAuth){
 var fbAuth = $firebaseAuth(fb);

 $scope.login =function (username , password) {
 
 	fbAuth.$authWithPassword({
 		email: username,
 		password: password
 	}).then(function(authData){
 		$state.go("users");
 	}).catch(function(error){
 		console.error("ERROR:" + error);
 		$scope.error = "ERROR:" + error;
 	});
 }

 $scope.register =function (username , password) {
 	fbAuth.$createUser({email: username,password: password}).then(function(userData){
 		return fbAuth.$authWithPassword({
 			email: username,
 			password: password
 		});
 	}).then(function(authData){
 		$state.go("users");
 	}).catch(function(error){
 		console.error("ERROR:" + error);
 	});
 }

});


havro.controller("usersController" , function($scope, $ionicHistory, $firebaseArray, $cordovaCamera){


});



havro.controller("secureController" , function($scope, $ionicHistory, $firebaseArray, $cordovaCamera){

	/*$ionHistory.clearHistory();
	$scope.images =[];

	var fbAuth = fb.getAuth();

	if(fbAuth) {
		var userReference = fb.child("users/" + fbAuth.uid);
		var syncArray = $firebaseArray(userReference.child("images"));
		$scope.images = syncArray;
	}else {
		$state.go("firebase");
	}

	$scope.upload =function() {
		var option = {
			quality:75,
			dastinationType : Camera.DestinatinType.DATA_URL,
			sourceType: Camera.PictureSourceType.CAMERA,
			allowEdit = true,
			encodingType = Camera.EncodingType.JPEG,
			popoverOptions: CameraPopoverOptions, 
			targetWidth: 500,
			targetHight:500,
			saveToPhotoAlbum: false
		};
		$cordovaCamera.getPicture(options).then(function(imageData){
			syncArray.$add({image: imageData}).then(function(){
				alert("the image saved");
			});
		})
	}*/

});



