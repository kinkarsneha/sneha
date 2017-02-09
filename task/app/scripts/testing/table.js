'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */

   /* Test Code */
  describe('tableCtrl', function() {
  beforeEach(module('sbAdminApp'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('$scope.dataList', function() {
    it('Check dataList', function() {
      var $scope = {};
      var controller = $controller('tableCtrl', { $scope: $scope });
      $scope.dataListchk = [{color: "red",value: "#f00"},
           {color: "green",value: "#0f0"},
           {color: "cyan",value: "#0ff"},
           {color: "magenta",value: "#f0f"},
           {color: "yellow",value: "#ff0"},
           {color: "black",value: "#000"}];

      expect($scope.dataList).toEqual($scope.dataListchk);
      });
    });
  });


   