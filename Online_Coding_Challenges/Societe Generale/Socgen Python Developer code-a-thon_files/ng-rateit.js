angular.module("ngRateIt",["ng"]).directive("ngRateIt",["$q",function(a){"use strict";var b=function(b,c,d){d.readOnly||(b.readOnly=function(){return!1}),d.resetable||(b.resetable=function(){return!0}),d.beforeRated||(b.beforeRated=function(){var b=a.defer();return b.resolve(),b.promise}),d.rated||(b.rated=function(){}),d.beforeReset||(b.beforeReset=function(){var b=a.defer();return b.resolve(),b.promise}),d.reset||(b.reset=function(){})};return{scope:{ngModel:"=",min:"=?min",max:"=?max",step:"=?step",readOnly:"&?readOnly",pristine:"=?pristine",resetable:"&?resetable",starWidth:"=?starWidth",starHeight:"=?starHeight",canelWidth:"=?canelWidth",cancelHeight:"=?cancelHeight",rated:"=?rated",reset:"=?reset",beforeRated:"=?beforeRated",beforeReset:"=?beforeReset"},templateUrl:"ngRateIt/ng-rate-it.html",require:"ngModel",replace:!0,link:b,controller:"ngRateItController"}}]).controller("ngRateItController",["$scope","$timeout",function(a,b){"use strict";a.isTouch=!!window.hasOwnProperty("ontouchstart")||window.navigator.msMaxTouchPoints>0,a.orgValue=angular.copy(a.ngModel),a.min=a.min||0,a.max=a.max||5,a.step=a.step||.5,a.pristine=a.orgValue===a.ngModel,a.starWidth=a.starWidth||16,a.starPartWidth=a.starWidth*a.step,a.starHeight=a.starHeight||16,a.canelWidth=a.canelWidth||a.starWidth,a.cancelHeight=a.cancelHeight||a.starHeight;var c=a.max-a.min,d=c/a.step,e=a.$watch("ngModel",function(){a.pristine=a.orgValue===a.ngModel}),f=function(a){return(a+1)/d*c};a.getStartParts=function(){return new Array(d)},a.getStarOffset=function(b){var c=1/a.step,d=-(a.starWidth/c)*(b%c);return d},a.isSelected=function(b){return f(b)<=a.ngModel-a.min},a.removeRating=function(){a.resetable()&&!a.readOnly()&&a.beforeReset().then(function(){a.ngModel=a.min,a.reset()})},a.setValue=function(c){if(!a.readOnly()){var d=angular.copy(a.min+f(c));a.beforeRated(d).then(function(){a.ngModel=d,b(function(){a.rated()})})}},a.$on("$destroy",function(){e()})}]).run(["$templateCache",function(a){"use strict";a.put("ngRateIt/ng-rate-it.html",'<div class="ngrateit" ng-class="{\'ngrateit-readonly\': readOnly()}"><a ng-if="!readOnly() && resetable()"ng-click="removeRating()"class="ngrateit-reset ngrateit-star"ng-style="{\'width\': canelWidth+\'px\', \'height\':cancelHeight+\'px\'}"></a><div ng-if="!hide" id="origin" class="ngrateit-rating" ng-class="{\'ngrateit-hashover\':!isTouch}"><span class="ngrateit-star ngrateit-bg-star"ng-repeat="i in getStartParts() track by $index" ng-class="{\'ngrateit-selected\': isSelected($index) }"ng-click="setValue($index)"'+"ng-style=\"{'width': starPartWidth+'px', 'height':starHeight+'px', 'background-position': getStarOffset($index)+'px 0'}\"></span></div></div>")}]);