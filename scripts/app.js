'use strict';

var app = angular
  .module('GoodTimeWine', [
    'ngAnimate',
    'ngResource',    
    'ngRoute',    
    'firebase',
    'toaster'
  ])
  .constant('FURL', 'https://goodtimewine.firebaseio.com/')
  .config(function ($routeProvider) {
    $routeProvider      
      .when('/', {
        templateUrl: 'views/browse.html',
        controller: 'ProductController'        
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'AuthController'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'AuthController'
      })
      .when('/post', {
        templateUrl: 'views/post.html',
        controller: 'ProductController'
      })
      .when('/edit/:productId', {
        templateUrl: 'views/edit.html',
        controller: 'ProductController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
