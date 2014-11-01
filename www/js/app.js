// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('japaneseHelperApp', [
    'ionic'
])
.config(function ($stateProvider, $urlRouterProvider) {


    $stateProvider
      .state('tab', {
          url: "/tab",
          abstract: true,
          templateUrl: "templates/tabs.html"
      })
      .state('tab.kanji-list', {
          url: '/kanji-list',
          views: {
              'tab-kanji-list': {
                  templateUrl: 'templates/kanji-list/kanji-list.html'
              }
          }
      })
      .state('tab.home', {
          url: '/home',
          views: {
              'tab-home': {
                  templateUrl: 'templates/home.html'
              }
          }
      });

    //$stateProvider
    //.state('kanji-list', {
    //    url: '/kanji-list',
    //    templateUrl: '/views/kanji-list.html'
    //});

    //$stateProvider
    //.state('guess-kanji-level-select', {
    //    url: '/guess-kanji-level-select',
    //    templateUrl: '/views/guess-kanji-level-select.html',
    //    controller: 'GuessKanjiLevelSelectCtrl'
    //});

    //$stateProvider
    //.state('guess-kanji', {
    //    url: '/guess-kanji/:level',
    //    templateUrl: '/views/guess-kanji.html',
    //    controller: 'GuessKanjiCtrl'
    //});

    $urlRouterProvider.otherwise('/tab/home');
})
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})