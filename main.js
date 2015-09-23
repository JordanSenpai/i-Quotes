

var mainController = function($scope){
    console.log('Hello world!')

    $scope.newScript = {
    	quote : '',
    	author: '',
    }

    $scope.javascripts = []

    $scope.byRating = function(rating) {
    	$scope.javascripts = $scope.javascripts.sort(dynamicSort(rating)) 
    		
    	
    }

    $scope.showLightbox = true

    $scope.addAQuote = function() {
    	$scope.showLightbox = !$scope.showLightbox
    }

    $scope.add = function() {
    	if ($scope.newScript.quote != '' && $scope.newScript.author != '') {
    		$scope.javascripts.push($scope.newScript);
    		$scope.newScript=''; 
    		$scope.addAQuote();
    	};
    	
    }

}

angular.module('app', [])
    .controller('mainController', ['$scope', mainController])

function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}