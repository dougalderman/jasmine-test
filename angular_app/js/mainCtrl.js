// Registers a controller to our module 'calculatorApp'.
angular.module('jasmineTest').controller('mainCtrl', function CalculatorController($scope) {

  $scope.z = 0;

  $scope.calc = function() {
    $scope.z = $scope.x + $scope.y;
  }

});
