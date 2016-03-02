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
  });
