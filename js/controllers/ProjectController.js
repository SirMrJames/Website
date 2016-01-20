app.controller('ProjectController', ['$scope', 'projects', '$routeParams', function($scope, projects, $routeParams) {
  	$scope.project = projects.project[$routeParams.id];
}]);
