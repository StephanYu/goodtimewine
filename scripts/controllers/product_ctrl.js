'use strict';

app.controller('ProductController', ['$scope', 'FURL', '$firebaseArray', '$firebaseObject', '$location', '$routeParams', function($scope, FURL, $firebaseArray, $firebaseObject, $location, $routeParams) {
  
  var ref = new Firebase(FURL);
  var fbProducts = ref.child('products');
  $scope.products = $firebaseArray(fbProducts);
  var productId = $routeParams.productId;

  if (productId) {
    $scope.selectedProduct = getProduct(productId);
  }

  function getProduct (productId) {
    return $firebaseObject(fbProducts.child(productId));
  };

  $scope.postProduct = function(product) {
    $scope.products.$add(product);
    $location.path('/');
  };

  $scope.updateProduct = function(product) {
    $scope.selectedProduct.$save(product);
    $location.path('/');
  };

}]);