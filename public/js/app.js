(function(){
  'use strict';
  console.log('I am IndexOne module');
  angular
    .module('RosalynApp', ['ngRoute'])
    .config(routes)
    .controller('mainCtrl', ['$scope', '$http', '$timeout', '$window', mainCtrl])
    .controller('mainCtrl2', ['$scope', '$http', '$timeout', '$window', mainCtrl2])
    .controller('mainCtrl3', ['$scope', '$http', '$timeout', '$window', mainCtrl3])

    //  CONTROLLER FUNCTION HANDLER SECTION

    function mainCtrl3($scope, $http, $timeout, $window){


    } //  END MAINCTRL3 -  CONTROLLER

    function mainCtrl2($scope, $http, $timeout, $window){


    } //  END MAINCTRL2 -  CONTROLLER

    function mainCtrl($scope, $http, $timeout, $window){


    } //  END MAINCTRL -  CONTROLLER

    //  ANGULAR ROUTE HANDLER SECTION
    function routes($routeProvider){
      $routeProvider
        .when('/', {
          templateUrl: '../partials/index.html',
          controller: 'mainCtrl'
        })
        .when('/view2', {
          templateUrl: '../partials/view2.html',
          controller: 'mainCtrl2'
        })
        .when('/view3', {
          templateUrl: '../partials/view3.html',
          controller: 'mainCtrl3'
        })
        .otherwise({
          rediretTo: '/'
        })
    }

})();
