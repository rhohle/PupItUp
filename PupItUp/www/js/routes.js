angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



      .state('tabsController.welcomeToPupItUp', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/welcomeToPupItUp.html',
        controller: 'welcomeToPupItUpCtrl'
      }
    }
  })

  .state('tabsController.meetYourFriendForTheDay', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/meetYourFriendForTheDay.html',
        controller: 'meetYourFriendForTheDayCtrl'
      }
    }
  })

  .state('tabsController.meetYouNewFriendForTheDay', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/meetYouNewFriendForTheDay.html',
        controller: 'meetYouNewFriendForTheDayCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.cheerUp', {
    url: '/page5',
    views: {
      'tab2': {
        templateUrl: 'templates/cheerUpWithAKitten.html',
        controller: 'cheerUpWithAKittenCtrl'
      }
    }
  })

  .state('tabsController.cheerUpWithAKitten', {
    url: '/page6',
    views: {
      'tab3': {
        templateUrl: 'templates/cheerUp.html',
        controller: 'cheerUpCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/page2')



});
