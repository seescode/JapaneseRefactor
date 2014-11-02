'use strict';

angular.module('japaneseHelperApp')
  .directive('kanjiList', function(kanjiHelper) {
    return {
        restrict: 'A',
        replace: false,
        template: 
        '<div>' +
        '  <pagination total-items="totalItems" ng-model="currentPage" ng-change="pageChanged()" items-per-page="pageSize"></pagination>' +
        '    <ul class="kanjis"><li ng-repeat="i in items" ng-click="showEnglish(i)">{{i}}</li></ul>' +
        '  <pagination total-items="totalItems" ng-model="currentPage" ng-change="pageChanged()" items-per-page="pageSize"></pagination>' +
        '</div>',        
        scope: { 
            pageSize: '@'
        },
        controller: function ($scope) {
        },
        link: function (scope, element, attrs) {
  			var kanjis = kanjiHelper.RtkList;  			
  			var conversions = kanjiHelper.KanjiKeywordList;
        
  			scope.totalItems = kanjis.Length();
  			scope.currentPage = 1;
  			
  			var lastPage = Math.ceil(scope.totalItems / scope.pageSize);
    
    
  			scope.pageChanged = function() {
	
				var pageItems = [];
				
				scope.startIndex = (scope.currentPage - 1) * scope.pageSize + 1;
				scope.endIndex = scope.currentPage * scope.pageSize;
				
				if (scope.currentPage === lastPage) {
					scope.endIndex = scope.totalItems;
				}				
				
				for (var i=scope.startIndex;i<=scope.endIndex;i++) {	
					pageItems.push(kanjis.GetById(i));
				}
								
				scope.items = pageItems;				
  			};        
  			
  			scope.showEnglish = function(kanji) {
  				alert(conversions.Get(kanji));
  			};
  			
  			scope.pageChanged();
        }
    }
  });