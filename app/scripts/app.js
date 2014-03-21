'use strict';

angular.module('fusionscopeApp', [
  'ngResource',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/slide/:slideId', {
        templateUrl: 'views/slide.html',
        controller: 'SlideCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function($rootScope, $http) {
    var apiKey = 'AIzaSyBS3nzHjd_ghBBVaCRnSy9pulBM0xkTRI4';
    var tableId = '1kdgpnZSQe3mPOXRXApL0np_PTCHGO1UIDanQ5ZQe';
    $http.get('https://www.googleapis.com/fusiontables/v1/query?sql=SELECT * FROM ' + tableId + '&key=' + apiKey).success(function(data, status, headers, config){
        console.debug(data);
        $rootScope.columns = data.columns;
        $rootScope.rows = data.rows;
    }).error(function(){
        console.debug("error");
    });;
  });
