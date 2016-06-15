describe('testMainCtrl', function () {

  var scope, createController;

  beforeEach(inject(function ($rootScope, $controller) {
      scope = $rootScope.$new();

      createController = function() {
          return $controller('mainCtrl', {
              '$scope': scope
          });
      };
  }));

  it('1 + 1 should equal 2', function () {
    var $scope = {};
    var controller = createController();
    scope.x = 1;
    scope.y = 2;
    scope.sum();
    expect(scope.z).toBe(3);
  });

});
