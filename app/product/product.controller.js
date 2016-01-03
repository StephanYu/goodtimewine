(function() {
  'use strict';

  angular
    .module('app.product')
    .controller('ProductController', ProductController);

    ProductController.$inject = [];
    function ProductController() {
      var vm = this;
      var fbRef = new Firebase('https://goodtimewine.firebaseio.com/');
      
      
      
    }
})();