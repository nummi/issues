var App = angular.module('Issues', ['ngResource']);

App.config(['$routeProvider', function($routes) {
  $route.when('/issues',{
    templateUrl : '/issues.html',
    controller : IssuesCtrl
  });

  $routes.otherwise({
    redirectTo : '/issues'
  });
}]);

var IssuesCtrl = function($scope, $http, $location) {
  $scope.value = 'some value';
};
IssuesCtrl.$inject = ['$scope','$http','$location'];
