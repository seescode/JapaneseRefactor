'use strict';

angular.module('japaneseHelperApp')
  .directive('answerOption', function(kanjiHelper) {
    return {
        restrict: 'A',
        replace: true,
        template: '<div ng-click="click()">{{answerText}}</div>',
        scope: { 
            answerText: '@',
            click: '&'
        },
        controller: function ($scope) {
        },
        link: function (scope, element, attrs) {      			
        }
    }
  });