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
        templateUrl: 'views/browse.html',
        controller: 'ProductController'        
      })
      .when('/post', {
        templateUrl: 'views/post.html',
        controller: 'ProductController'
      })
      .when('/edit/:taskId', {
        templateUrl: 'views/edit.html',
        controller: 'ProductController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
