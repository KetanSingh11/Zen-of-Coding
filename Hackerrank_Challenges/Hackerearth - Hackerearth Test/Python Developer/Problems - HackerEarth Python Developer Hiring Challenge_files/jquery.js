/**
 * jQuery iframe click tracking plugin
 *
 * @author Vincent Paré (www.finalclap.com)
 * @copyright © 2013-2015 Vincent Paré
 * @license http://opensource.org/licenses/Apache-2.0
 * @version 1.1.0
 */(function(a){a.fn.iframeTracker=function(b){var c=this.get();if(b===null||b===!1)a.iframeTracker.untrack(c);else{if(typeof b!="object")throw new Error("Wrong handler type (must be an object, or null|false to untrack)");a.iframeTracker.track(c,b)}},a.iframeTracker={focusRetriever:null,focusRetrieved:!1,handlersList:[],isIE8AndOlder:!1,init:function(){try{a.browser.msie==1&&a.browser.version<9&&(this.isIE8AndOlder=!0)}catch(b){try{var c=navigator.userAgent.match(/(msie) ([\w.]+)/i);c[2]<9&&(this.isIE8AndOlder=!0)}catch(d){}}a(window).focus(),a(window).blur(function(b){a.iframeTracker.windowLoseFocus(b)}),a("body").append('<div style="position:fixed; top:0; left:0; overflow:hidden;"><input style="position:absolute; left:-300px;" type="text" value="" id="focus_retriever" readonly="true" /></div>'),this.focusRetriever=a("#focus_retriever"),this.focusRetrieved=!1,a(document).mousemove(function(b){document.activeElement&&document.activeElement.tagName=="IFRAME"&&(a.iframeTracker.focusRetriever.focus(),a.iframeTracker.focusRetrieved=!0)});if(this.isIE8AndOlder){this.focusRetriever.blur(function(b){b.stopPropagation(),b.preventDefault(),a.iframeTracker.windowLoseFocus(b)}),a("body").click(function(b){a(window).focus()}),a("form").click(function(a){a.stopPropagation()});try{a("body").on("click","form",function(a){a.stopPropagation()})}catch(b){console.log("[iframeTracker] Please update jQuery to 1.7 or newer. (exception: "+b.message+")")}}},track:function(b,c){c.target=b,a.iframeTracker.handlersList.push(c),a(b).bind("mouseover",{handler:c},a.iframeTracker.mouseoverListener).bind("mouseout",{handler:c},a.iframeTracker.mouseoutListener)},untrack:function(b){if(typeof Array.prototype.filter!="function"){console.log("Your browser doesn't support Array filter, untrack disabled");return}a(b).each(function(b){a(this).unbind("mouseover",a.iframeTracker.mouseoverListener).unbind("mouseout",a.iframeTracker.mouseoutListener)});var c=function(a){return a===null?!1:!0};for(var d in this.handlersList){for(var e in this.handlersList[d].target)a.inArray(this.handlersList[d].target[e],b)!==-1&&(this.handlersList[d].target[e]=null);this.handlersList[d].target=this.handlersList[d].target.filter(c),this.handlersList[d].target.length==0&&(this.handlersList[d]=null)}this.handlersList=this.handlersList.filter(c)},mouseoverListener:function(a){a.data.handler.over=!0;try{a.data.handler.overCallback(this)}catch(b){}},mouseoutListener:function(b){b.data.handler.over=!1,a.iframeTracker.focusRetriever.focus();try{b.data.handler.outCallback(this)}catch(c){}},windowLoseFocus:function(a){for(var b in this.handlersList)if(this.handlersList[b].over==1)try{this.handlersList[b].blurCallback()}catch(c){}}},a(document).ready(function(){a.iframeTracker.init()})})(jQuery);