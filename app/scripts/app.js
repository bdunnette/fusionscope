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
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function($rootScope, $http) {
    var apiKey = 'AIzaSyBS3nzHjd_ghBBVaCRnSy9pulBM0xkTRI4';
    var tableId = '1DsEEiyukvoOF8zUAKESz5MaOZjIRJBCEgp_d3GmB';
    $http.get('https://www.googleapis.com/fusiontables/v1/query?sql=SELECT * FROM ' + tableId + '&key=' + apiKey).success(function(data, status, headers, config){
        console.debug(data);
        $rootScope.columns = data.columns;
        $rootScope.rows = data.rows;
    }).error(function(){
        console.debug("error");
    });;
  });
