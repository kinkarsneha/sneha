'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('Authentication')
 
.controller('LoginController',
    ['$scope', '$rootScope', '$location', 'AuthenticationService','$state',
    function ($scope, $rootScope, $location, AuthenticationService, $state) {
        // reset login status
        AuthenticationService.ClearCredentials();
 
        $scope.login = function () {
            $scope.dataLoading = true;

            console.log($scope.dataLoading);
            AuthenticationService.Login($scope.username, $scope.password, function(response) {
                if(response.success) {
                    AuthenticationService.SetCredentials($scope.username, $scope.password);
                    $state.go('dashboard.table');
                } else {
                    $scope.error = response.message;
                    $scope.dataLoading = false;
                }
            });
        };
    }])
.factory('LanguagesService', function(){
  var lng = {}, 
    _languages = ['en', 'es', 'fr'];

  lng.get = function() {
    return _languages;
  }

  return lng;
});
  