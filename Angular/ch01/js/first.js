var app = angular.module('firstApp', []);
app.controller('FirstController', ['$scope', function($scope) {
    $scope.first = 'Some';
    $scope.last = 'One';
    $scope.heading = 'Message: ';
    $scope.updateMessage = function() {
        $scope.message = 'Hello ' + $scope.first +' '+ $scope.last + '!';
    };
}]);
app.controller('SimpleTemplate', ['$scope', function($scope) {
    $scope.valueA = 5;
    $scope.valueB = 7;
    $scope.valueC = 12;
    $scope.addValues = function(v1, v2) {
        var v = angular.$rootScope;
        $scope.valueC = v1 + v2;
    };
}]);
app.controller('LevelA', ['$scope', function($scope) {
    $scope.title = "Level A";
    $scope.valueA = 1;
    $scope.inc = function() {
        $scope.valueA++;
    }
}]);
app.controller('LevelB', ['$scope', function($scope) {
    $scope.title = "Level B";
    $scope.valueB = 5;
    $scope.inc = function() {
        $scope.valueB++;
    }
}]);
app.controller('LevelC', ['$scope', function($scope) {
    $scope.title = "Level C";
    $scope.valueC = 10;
    $scope.inc = function() {
        $scope.valueC++;
    }
}]);
