(function() {
  'use strict';

  angular
    .module('app.auth')
    .controller('AuthController', AuthController);

  AuthController.$inject = ['$location', 'authService'];

  function AuthController($location, authService) {
    var vm = this;

    vm.register = register;
    vm.login = login;


    function register(user) {
      return authService.register(user)
        .then(function() {
          return vm.login(user);
        })
        .then(function() {
          return authService.sendWelcomeEmail(user.email);
        })
        .catch(function(error) {
          vm.error = error;
        });
    }

    function login(user) {
      return authService.login(user)
        .then(function(response) {
          $location.path('/products');
          return response;
        })
        .catch(function(error) {
          vm.error = error;
        });
    }

  }

})();

// (function() {
//   'use strict';

//   angular
//     .module('app.auth')
//     .controller('AuthController', AuthController);

//     AuthController.$inject = ['$firebaseAuth'];
//     function AuthController($firebaseAuth) {
//       var vm = this;
//       var fbRef = new Firebase('https://goodtimewine.firebaseio.com/');
//       var fbAuthObj = $firebaseAuth(fbRef);
      
//       vm.user = {
//         email: '',
//         password: ''
//       };
//       vm.register = register;

//       function register(user) {
//         return fbAuthObj.$createUser(user);
//       }
      
//     }
// })();
