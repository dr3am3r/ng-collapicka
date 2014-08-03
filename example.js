angular.module('example', ['ngCollaPicka'])

.controller('MainCtrl', ['$scope', function($scope) {
    $scope.position = 10;
    $scope.$watch('position', function(newVal, oldVal){
      console.log('position now is ' + newVal);
    });
}]);