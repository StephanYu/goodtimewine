'use strict';

app.controller('ProductController', ['$scope', function($scope) {
  
  $scope.postProduct = function(product) {
    console.log(product);
  };

}]);