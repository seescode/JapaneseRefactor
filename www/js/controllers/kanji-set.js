'use strict';

angular.module('japaneseHelperApp')
  .controller('KanjiSetCtrl', function ($scope, kanjiHelper, constantsService) {

      var kanjis = kanjiHelper.RtkList;
      var conversions = kanjiHelper.KanjiKeywordList;

      $scope.showEnglish = function (kanji) {
          alert(conversions.Get(kanji));
      };

      $scope.items;


      var totalLevels = Math.ceil(kanjiHelper.RtkList.Length() / constantsService.KANJI_PER_LEVEL);

  });