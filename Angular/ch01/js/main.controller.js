(function() { //https://github.com/johnpapa/angularjs-styleguide#controllers
    'use strict';
    angular
    .module('firstApp', []) //Create Module
    .controller('FirstControllerCtrl', ['$scope', function($scope){ //Create controller
        $scope.first = 'Some';
        $scope.last = 'One';
        $scope.heading = 'Message: ';
        $scope.updateMessage = function(){
            $scope.message = 'Hello ' + $scope.first +' '+ $scope.last + '!';
        };
    }])
    .controller('SimpleTemplateCtrl', ['$scope', function($scope){
        $scope.valueA = 5;
        $scope.valueB = 7;
        $scope.valueC = 12;
        $scope.addValues = function(v1, v2){
            var v = angular.$rootScope;
            $scope.valueC = v1 + v2;
        };
    }])
    .controller('LevelACtrl', ['$scope', function($scope){
        $scope.title = 'Level A';
        $scope.valueA = 1;
        $scope.inc = function() {
            $scope.valueA++;
        }
    }])
    .controller('LevelBCtrl', ['$scope', function($scope){
        $scope.title = "Level B";
        $scope.valueB = 5;
        $scope.inc = function(){
            $scope.valueB++;
        }
    }])
    .controller('LevelCCtrl', ['$scope', function($scope){
        $scope.title = "Level C ";
        $scope.valueC = 10;
        $scope.inc = function(){ //incrementing function
            $scope.valueC++;
        }
    }])
    .controller('ArrayManipulateCtrl', ['$scope', function($scope){
        $scope.Math = window.Math;
        $scope.myArr = [1]; //Array declartion
        $scope.removedArr = []; //Empty Array
    }])
    .controller('FilteringCtrl', ['$scope', 'filterFilter', function($scope, filterFilter){
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
    }])
    .filter('censor', function(){
        return function(input, replacement){
            var cWords = ['bad', 'evil', 'dark'];
            var out = input;
            for(var i=0; i<cWords.length; i++){
                out = out.replace(cWords[i], replacement);
            }
            return out;
        };
    })
    .controller('customFilterCtrl', ['$scope', 'censorFilter', function($scope, myCensorFilter){
        $scope.censorText = "***";
        $scope.phrase = "This is a bad phrase.";
        $scope.txt = "Click to filter out dark and evil.";
        $scope.filterText = function(){
            $scope.txt = myCensorFilter($scope.txt, '<<censored>>');
        };
    }])
    .controller('ngincludeCtrl', ['$scope', function($scope){
        $scope.titleBar = "small_title.html";
    }])
    .controller('FormCtrl', ['$scope', function($scope){
        $scope.cameras = [
            {make:'Canon', model:'70D', mp:20.2},
            {make:'Canon', model:'6D', mp:20},
            {make:'Nikon', model:'D7100', mp:24.1},
            {make:'Nikon', model:'D5200', mp:24.1},
        ];
        $scope.cameraObj=$scope.cameras[0];
        $scope.cameraName = 'Canon';
        $scope.cbValue = '';
        $scope.someText = '';
    }])
    .controller('bindingCtrl', ['$scope', function($scope){
        $scope.colors = ['red','green','blue'];
        $scope.myStyle = { "background-color": 'blue' };
        $scope.days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
        $scope.msg = "Dynamic message from the model";
    }]);
})();
