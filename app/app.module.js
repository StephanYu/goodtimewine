(function() {
  'use strict'

  angular
    .module('GoodTimeWine', [
      // Angular modules
      'ngRoute',
      // Third party modules
      'firebase',
      // Custom modules
      'app.auth',
      'app.core',
      'app.landing',
      'app.layout',
      'app.product'
    ]);

})();