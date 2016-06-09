// Registers a controller to our module 'calculatorApp'.
angular.module('jasmineTest').controller('mainCtrl', function ($scope) {

  $scope.z = 0;

  $scope.sum = function() {
    $scope.z = $scope.x + $scope.y;
  }

});
