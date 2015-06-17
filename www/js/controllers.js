var havro = angular.module('myApp', ['firebase'])
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



