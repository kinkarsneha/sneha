describe('LoginController', function () {
    var $controller, $scope, AuthenticationService;
    var dt = {username: "admin", password: "admin"};

    beforeEach(module('Authentication', function($provide){
        AuthenticationService = jasmine.createSpyObj("AuthenticationService", ["Login"]);

        AuthenticationService.Login.and.returnValue(dt);
    }));

    beforeEach(inject(function(_$controller_, $rootScope, _AuthenticationService_){
        
        $scope = $rootScope.$new();
        //AuthenticationService = _AuthenticationService_;
        beforeEach(module('Authentication', {
          AuthenticationService : { Login: jasmine.createSpy().and.returnValue(dt) }
        }));

        $controller = _$controller_("LoginController", {
            $scope : $scope,
            AuthenticationService : AuthenticationService
        });

    }));
    it("should load the service", function(){
      expect(AuthenticationService.Login).toHaveBeenCalled();
    });
});
