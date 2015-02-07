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
        $scope.titleBar = "views/small_title.html";
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
    }])
    .controller('customDirectiveCtrl', ['$scope', function($scope){
        $scope.title="myApplication";
    }])
    .directive('mybox', function(){
        return {
            transclude: true,
            restrict: 'E',
            scope: {title: '@', bwidth: '@bwidth'},
            template: '<div><span class="titleBar">{{title}}' +
                '</span><div ng-transclude></div></div>',
            link: function(scope, elem, attr, controller, transclude){
                elem.append('<span class="footer">' + scope.$parent.title + '</span>');
                elem.css('border', '2px ridge black');
                elem.css('display', 'inline-block');
                elem.css('width', scope.bwidth);
            },
        };
    })
    .directive('zoomit', function(){
        return {
            link: function(scope, elem, attr){
                var dragging = false;
                var lastX = 0;
                elem.on('mousedown', function(event){
                    lastX = event.pageX;
                    event.preventDefault();
                    dragging = true;
                });
                elem.on('mouseup', function(){
                    dragging = false;
                });
                elem.on('mouseleave', function(){
                    dragging = false;
                });
                elem.on('mousemove', function(event){
                    if(dragging){
                        var adjustment = null;
                        if (event.pageX > lastX && elem.width() < 300){
                            adjustment = 1.1;
                        } else if (elem.width() > 100){
                            adjustment = .9;
                        }
                        //requires full jQuery library
                        if (adjustment){
                            elem.width(elem.width()*adjustment);
                            elem.height(elem.height()*adjustment);
                        }
                        lastX = event.pageX;
                    }
                });
            }
        };
    })
    .directive('fadeit', function(){
        return {
            link: function(scope, elem, attr){
                var dragging = false;
                var lastY = 0;
                elem.on('mousedown', function(event){
                    lastY = event.pageY;
                    event.preventDefault();
                    dragging = true;
                });
                elem.on('mouseup', function(){
                    dragging = false;
                });
                elem.on('mouseleave', function(){
                    dragging = false;
                });
                elem.on('mousemove', function(event){
                    if (dragging){
                        var adjustment = null;
                        var currentOpacity = parseFloat(elem.css("opacity"));
                        if (event.pageY > lastY && currentOpacity < 1){
                            adjustment = 1.1;
                        } else if (currentOpacity > 0.5){
                            adjustment = .9;
                        }
                        //requires full jQuerylibrary
                        if (adjustment){
                            elem.css("opacity", currentOpacity*adjustment);
                        }
                        lastY = event.pageY;
                    }
                });
            }
        };
    })
    .directive('my-photos', function(){
        return {
            restrict: 'E',
            transclude: true,
            scope: {},
            controller: function($scope){
                var photos = $scope.photos = [];
                $scope.select = function(photo){
                    angular.forEach(photos, function(photo){
                        photo.selected = false;
                    });
                    photo.selected = true;
                };
                this.addPhoto = function(photo){
                    photos.push(photo);
                };
            },
            templateUrl: 'views/my_photos.html'
        };
    })
    .directive('my-photo', function(){
        return{
            require: '^my-photos',
            restrict: 'E',
            transclude: true,
            scope: { title: '@' },
            link: function(scope, elem, attrs, photsControl){
                photosControl.addPhoto(scope);
            },
            template: '<div ng-show="selected" ng-transclude></div>'
        };
    });
})();
