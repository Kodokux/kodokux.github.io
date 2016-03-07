var mainApp = angular.module('MainApp', ['ngRoute']);

mainApp.config(
    function($routeProvider, $locationProvider) {
      $routeProvider.
        when('/dashboard', {
          controller: 'DashboardCtrl',
          templateUrl: 'views/dashboard.html',
        }).
        when('/sample1',{
          controller: 'Sample1Ctrl',
          templateUrl: 'views/sample1.html',
        }).
        when('/sample2',{
          controller: 'Sample2Ctrl',
          templateUrl: 'views/sample2.html',
        }).
        when('/sample3',{
          controller: 'Sample3Ctrl',
          templateUrl: 'views/sample3.html',
        }).
        otherwise({
          redirectTo: '/dashboard'
        });
        // $locationProvider.html5Mode({
        //   enabled: true
        // });
        // $locationProvider.hashPrefix = '!';
    }
  )
  .controller('MainCtrl', function() {
  })
  .controller('DashboardCtrl', function() {
  })
  .controller('Sample1Ctrl', function() {
  })


  
  .directive('highlight', function($interpolate, $window){
      return {
      restrict: 'EA',
      scope: true,
      compile: function (tElem, tAttrs) {
        var interpolateFn = $interpolate(tElem.html(), true);
        tElem.html(''); // stop automatic intepolation

        return function(scope, elem, attrs){
          scope.$watch(interpolateFn, function (value) {
            elem.html(hljs.highlight('javascript',value).value);
          });
        }
      }
    };
  });
