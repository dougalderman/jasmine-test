describe('sum', function () {
  it('1 + 1 should equal 2', function () {
    var $scope = {};
    var controller = $controller('mainCtrl', { $scope: $scope });
    $scope.x = 1;
    $scope.y = 2;
    $scope.sum();
    expect($scope.z).toBe(3);
  });
});
