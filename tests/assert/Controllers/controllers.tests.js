describe('Controllers', function(){
    var scope;

    // load the controller's module
    beforeEach(module('starter.controllers'));

    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        $controller('AccountCtrl', {$scope: scope});
    }));

    // tests start here
    it('should have enabled friends to be true', function(){
        expect(scope.settings.enableFriends).toEqual(true);
    });

    it('should have enabled friends to be true', function(){
        expect(scope.settings.enableFriends).toEqual(false);
    });

    it('should have return 1', function(){
        expect(scope.contar()).toEqual(2);
    });

    it("debo fallar",function () {
        console.log("tiene que mostrar algo en la consola");
        expect(true).toEqual(false);
    });
});

describe("sqrt", function() {
  it("should compute the square root of 4 as 2", function() {
    My.canto();
    expect(My.sqrt(4)).toEqual(3);
  });
});