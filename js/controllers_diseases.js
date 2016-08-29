var diseaseControllers = angular.module('diseaseControllers',['ngAnimate'])

diseaseControllers.controller('ListController',['$scope','$http', function($scope, $http) {
  $http.get('js/diseases_data.json').success(function(data) {
  	$scope.diseases = data;
  	$scope.diseaseOrder = 'name';
  });
}]);

diseaseControllers.controller('DetailsController', ['$scope','$http','$routeParams', function($scope, $http, $routeParams) {
	  $http.get('js/diseases_data.json').success(function(data) {
	  	$scope.diseases = data;
	  	$scope.whichItem = $routeParams.itemId;

	  	if($routeParams.itemId > 0) {
	  		$scope.prevItem = Number($routeParams.itemId)-1;
	  	} else {
	  		$scope.prevItem = $scope.diseases.length-1;
	  	}

	  	if($routeParams.itemId < $scope.diseases.length-1) {
	  		$scope.nextItem = Number($routeParams.itemId)+1;
	  	} else {
	  		$scope.nextItem = 0;
	  	}
  });
}]);