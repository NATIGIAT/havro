"use strict";

angular.module('myApp', ['ngRoute'])

 .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'templates/home.html',
      })
      .when('/data', {
        template: '<h2>Data</h2><p>The input is bind to data from service. Change value will update in main view. Back to home and go back to see data value is kepted.</p><input type="text" ng-model="data.foo" /><br /><a href="#/">Back</a>',
        controller: 'dataCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
})