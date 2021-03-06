// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  'use strict';
  
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs).
    // The reason we default this to hidden is that native apps don't usually show an accessory bar, at
    // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
    // useful especially with forms, though we would prefer giving the user a little more room
    // to interact with the app.
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // Set the statusbar to use the default style, tweak this to
      // remove the status bar on iOS or change it to use white instead of dark colors.
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('header', {
      url:'/header',
      templateUrl: '/app/header/header.html',
      controller: 'HeaderCtrl'
    })
    .state('subheader', {
      url:'/subheader',
      templateUrl: '/app/subheader/subheader.html',
      controller: 'SubHeaderCtrl'
    })
    .state('footer', {
      url: '/footer',
      templateUrl: '/app/footer/footer.html',
      controller: 'FooterCtrl'
    })
    .state('buttons',{
      url: '/buttons',
      templateUrl: '/app/buttons/buttons.html',
      controller: 'ButtonsCtrl'
    })
    .state('list', {
      url: '/list',
      templateUrl: '/app/list/list.html',
      controller: 'ListCtrl'
    })
    .state('cards', {
      url: '/cards',
      templateUrl: 'app/cards/cards.html',
      controller: 'CardsCtrl'
    })
    .state('forms', {
      url: '/forms',
      templateUrl: 'app/forms/forms.html',
      controller: 'FormsCtrl'
    })
    .state('toggle', {
      url: '/toggle',
      templateUrl: 'app/toggle/toggle.html',
      controller: 'ToggleCtrl'
    })
    .state('checkbox', {
      url: '/checkbox',
      templateUrl: 'app/checkbox/checkbox.html',
      controller: 'CheckboxCtrl'
    })
    .state('radiobutton', {
      url: '/radiobutton',
      templateUrl: 'app/radiobutton/radioButton.html',
      controller: 'RadioButtonCtrl'
    })
    .state('range', {
      url: '/range',
      templateUrl: 'app/range/range.html',
      controller: 'RangeCtrl'
    })
    .state('select', {
      url: '/select',
      templateUrl: 'app/select/select.html',
      controller: 'SelectCtrl'
    });
    
   $urlRouterProvider.otherwise('/header');
});