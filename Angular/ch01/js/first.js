var app = angular.module('firstApp', []); //Create Module
app.controller('FirstController', ['$scope', function($scope){ //Create controller
    $scope.first = 'Some';
    $scope.last = 'One';
    $scope.heading = 'Message: ';
    $scope.updateMessage = function(){
        $scope.message = 'Hello ' + $scope.first +' '+ $scope.last + '!';
    };
}]);
app.controller('SimpleTemplate', ['$scope', function($scope){
    $scope.valueA = 5;
    $scope.valueB = 7;
    $scope.valueC = 12;
    $scope.addValues = function(v1, v2){
        var v = angular.$rootScope;
        $scope.valueC = v1 + v2;
    };
}]);
app.controller('LevelA', ['$scope', function($scope){
    $scope.title = 'Level A';
    $scope.valueA = 1;
    $scope.inc = function() {
        $scope.valueA++;
    }
}]);
app.controller('LevelB', ['$scope', function($scope){
    $scope.title = "Level B";
    $scope.valueB = 5;
    $scope.inc = function(){
        $scope.valueB++;
    }
}]);
app.controller('LevelC', ['$scope', function($scope){
    $scope.title = "Level C";
    $scope.valueC = 10;
    $scope.inc = function(){ //incrementing function
        $scope.valueC++;
    }
}]);
app.controller('ArrayManipulate', ['$scope', function($scope){
    $scope.Math = window.Math;
    $scope.myArr = [1]; //Array declartion
    $scope.removedArr = []; //Empty Array
}]);
app.controller('Filtering', ['$scope', 'filterFilter', function($scope, filterFilter){
    $scope.planes = [
        {make: 'Boeing', model: '777', capacity: 440},
        {make: 'Boeing', model: '747', capacity: 700},
        {make: 'Airbus', model: 'A380', capacity: 850},
        {make: 'Airbus', model: 'A340', capacity: 420},
        {make: 'McDonnell Douglas', model: 'DC10', capacity: 380},
        {make: 'McDonnell Douglas', model: 'MD11', capacity: 410},
        {make: 'Localheed', model: 'L1011', capacity: 380}
    ];
    $scope.filteredPlanes = $scope.planes; //Copy so you don't alter original
    $scope.reverse = true;
    $scope.column = 'make';
    $scope.setSort = function(column){
        $scope.column = column;
        $scope.reverse = !$scope.reverse;
    };
    $scope.filterString = '';
    $scope.setFilter = function(value){
        $scope.filteredPlanes = filterFilter($scope.planes, $scope.filterString);
    }
}]);
app.filter('censor', function(){
    return function(input, replacement){
        var cWords = ['bad', 'evil', 'dark'];
        var out = input;
        for(var i=0; i<cWords.length; i++){
            out = out.replace(cWords[i], replacement);
        }
        return out;
    };
});
app.controller('customFilter', ['$scope', 'censorFilter', function($scope, myCensorFilter){
    $scope.censorText = "***";
    $scope.phrase = "This is a bad phrase.";
    $scope.txt = "Click to filter out dark and evil.";
    $scope.filterText = function(){
        $scope.txt = myCensorFilter($scope.txt, '<<censored>>');
    };
}]);
