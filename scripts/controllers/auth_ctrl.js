'use strict';

app.controller('AuthController', ['$scope', '$location', 'toaster', 'AuthFactory', 
  function($scope, $location, toaster, AuthFactory) {

    if(Auth.user.provider) {
      $location.path('/');
    }

    $scope.register = function(user) {          
      Auth.register(user).then(function() {
        toaster.pop('success', "Registered successfully");
        $location.path('/');
      }, function(err) {
        toaster.pop('error', "Oops! Something went wrong.");
      });
    };

    $scope.login = function(user) {
      Auth.login(user).then(function() {
        toaster.pop('success', "Logged in successfully");
        $location.path('/');
      }, function(err) {        
        toaster.pop('error', "Oops! Something went wrong.");
      });   
    };

    $scope.changePassword = function(user) {
      Auth.changePassword(user).then(function() {                        
        $scope.user.email = '';
        $scope.user.oldPass = '';
        $scope.user.newPass = '';

        toaster.pop('success', "Password changed successfully");
      }, function(err) {
        toaster.pop('error', "Oops! Something went wrong.");
      });
    };

  }]);