app.controller('MainController', ['$scope', 'projects', function($scope, projects) {
    $scope.projects = projects;
}]);
