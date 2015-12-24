'use strict';

app.controller('NavController', ['$scope', '$location', 'toaster', 'AuthFactory', 
  function($scope, $location, toaster, AuthFactory) {

  $scope.currentUser = AuthFactory.user;
  $scope.signedIn = AuthFactory.signedIn;

  $scope.logout = function() {    
    AuthFactory.logout();    
    toaster.pop('success', "Logged out successfully");
    $location.path("/");
  };
  
}]);