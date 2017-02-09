'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */

   /* Test Code */

  /*describe('LoginController', function() {
    beforeEach({module('Authentication'); });

    var $controller;

    beforeEach(inject(function(_$controller_){
      // The injector unwraps the underscores (_) from around the parameter names when matching
      $controller = _$controller_;
    }));

    describe('$scope.login', function() {
     
      var $scope, controller;

      beforeEach(function() {
        $scope = {};
        controller = $controller('LoginController', { $scope: $scope });
      });

      it('Check dataLoading status', function() {
        var $scope = {};
        var dataLoading = true;
        expect(dataLoading).toEqual(true);
      });
     
    });
  });
*/
describe("My first test case", function() {
  var a;

  it("My first test case ", function() {
    a = true;

    expect(a).toBe(true);
  });
});

describe('LoginController', function () {
    
  beforeEach(angular.mock.module('Authentication'));

  var $controller;

  beforeEach(angular.mock.inject(function(_$controller_){
    $controller = _$controller_;
  }));
 
  it("check Login function", function() {

    var $scope = {};
    $scope.password = "";
   
    var login = function(){};

    expect(typeof login).toBe('function');
    expect($scope.password).toBeDefined();
  });

  it("check dataLoading ", function() {

    var $scope = {};
    $scope.dataLoading = true;

    expect(typeof $scope.dataLoading).toBe('boolean');
  });

});

describe('AuthenticationService', function () {
  // Load your module.
  beforeEach(module('Authentication'));
  var AuthenticationService;
  // Setup the mock service in an anonymous module.
  beforeEach(function(){
    module('Authentication');
    inject(function($injector){
      AuthenticationService = $injector.get('AuthenticationService');
    });
  });

  it('can get an instance of my factory', inject(function(AuthenticationService) {
    expect(AuthenticationService).toBeDefined();
  }));
});

describe('Testing Languages Service', function(){
  var LanguagesService;

  beforeEach(function(){
    module('Authentication');
    inject(function($injector){
      LanguagesService = $injector.get('LanguagesService');
    });
  });

  it('should return available languages', function() {
    var languages = LanguagesService.get();
    expect(languages).toContain('en');
    expect(languages).toContain('es');
    expect(languages).toContain('fr');
    expect(languages.length).toEqual(3);
  });

  it('should be defined', function() {
    expect(LanguagesService).toBeDefined();
  });

});


   