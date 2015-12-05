'use strict';

var app = angular
  .module('GoodTimeWine', [
    'ngAnimate',
    'ngResource',    
    'ngRoute',    
    'firebase'
  ])
  .constant('FURL', 'https://goodtimewine.firebaseio.com/')  
  .config(function ($routeProvider) {
    $routeProvider      
      .when('/', {
        templateUrl: 'views/browse.html'        
      })
      .when('/post', {
        templateUrl: 'views/post.html',
        controller: "ProductController"
      })
      .when('/edit', {
        templateUrl: 'views/edit.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
