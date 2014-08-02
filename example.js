angular.module('example', ['ngCollaPicka'])

.controller('MainCtrl', ['$scope', function($scope) {
    $scope.position = 50;
    $scope.onDragCursor = function() {
      alert(111);
    }
}]);