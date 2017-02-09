'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('tableCtrl', function($scope, $state) {
    
	$scope.dataList = [{color: "red",value: "#f00"},
				   {color: "green",value: "#0f0"},
				   {color: "cyan",value: "#0ff"},
				   {color: "magenta",value: "#f0f"},
				   {color: "yellow",value: "#ff0"},
				   {color: "black",value: "#000"}];

	$scope.sum = function() {
        $scope.z = $scope.x + $scope.y;
      };			   
					
});


   