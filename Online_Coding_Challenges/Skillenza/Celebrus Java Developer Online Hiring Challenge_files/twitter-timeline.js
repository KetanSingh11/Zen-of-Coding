var twitterModule=angular.module("twitter.timeline",[]);twitterModule.directive("twitterTimeline",function(){return{restrict:"A",replace:!1,link:function(scope,element,attrs){var details=JSON.parse(attrs.details);twttr.widgets.createTimeline(details,element[0],{width:"100%",height:"750",related:"twitterdev,twitterapi"}).then(function(el){}).catch(function(err){})}}});