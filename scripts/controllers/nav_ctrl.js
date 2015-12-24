'use strict';

app.controller('NavController', ['$scope', '$location', 'toaster', 'AuthFactory', 
  function($scope, $location, toaster, AuthFactory) {

  $scope.currentUser = Auth.user;
  $scope.signedIn = Auth.signedIn;

  $scope.logout = function() {    
    Auth.logout();    
    toaster.pop('success', "Logged out successfully");
    $location.path("/");
  };
  
}]);