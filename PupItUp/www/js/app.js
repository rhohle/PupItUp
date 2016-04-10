// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers'])

  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })

  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('main',{
        url: '/main',
        templateUrl: 'templates/main.html',
        controller: 'MainCtrl'
      })
      .state('Dog1',{
        url: '/Dog1',
        templateUrl: 'templates/Dog1.html',
        controller: 'Dog1Ctrl'
      })
      .state('Dog3',{
        url: '/Dog3',
        templateUrl: 'templates/Dog3.html',
        controller: 'Dog3Ctrl'
      })
      .state('Dog2',{
        url: '/Dog2',
        templateUrl: 'templates/Dog2.html',
        controller: 'Dog2Ctrl'
      });
    $urlRouterProvider.otherwise('/main');
  });
