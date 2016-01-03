(function() {
  'use strict';

  angular
    .module('app.product')
    .config(configFunction);

    configFunction.$inject = ['$routeProvider'];

    function configFunction($routeProvider) {
      $routeProvider
        .when('/products', {
          templateUrl: 'app/product/products.html'
        })
        .when('/post', {
          templateUrl: 'app/product/post.html'
        })
        .when('/edit/:productId', {
          templateUrl: 'app/product/edit.html'
        });
    }
    

})();