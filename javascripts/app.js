var App = angular.module('Issues', ['ngResource']);

App.config(['$routeProvider', function($route) {
  $route.when('/issues',{
    templateUrl: 'issues.html',
    controller : IssuesCtrl
  });

  $route.when('/issues/:issue_id',{
    templateUrl: 'issue.html',
    controller : IssueCtrl
  });

  $route.otherwise({
    redirectTo : '/issues'
  });
}]);

var IssuesCtrl = function($scope, $location) {
  $scope.issues = window.issues_data;

  $scope.relativeDate = function(date) {
  };
};

IssuesCtrl.$inject = ['$scope', '$location'];

var IssueCtrl = function($scope, $location) {
  $scope.issue = window.issues_data;

  $scope.relativeDate = function(date) {
    return moment(date).fromNow();
  };
};
IssueCtrl.$inject = ['$scope', '$location'];
