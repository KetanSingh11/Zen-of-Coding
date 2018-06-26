/* ngMeta - v1.0.2 - 24-Aug-2017 
 https://github.com/vinaygopinath/ngMeta
*/
!function(a,b){"function"==typeof define&&define.amd?define(["angular"],b):"object"==typeof exports?module.exports=b(require("angular")):a.returnExports=b(a.angular)}(this,function(a){return a.module("ngMeta",[]).provider("ngMeta",function(){"use strict";function b(b,e){var f=function(e,f){if(!b.ngMeta)throw new Error("Cannot call setTitle when ngMeta is undefined. Did you forget to call ngMeta.init() in the run block? \nRefer: https://github.com/vinaygopinath/ngMeta#getting-started");return b.ngMeta.title=a.isDefined(e)?e:c.title||"",d.useTitleSuffix&&(b.ngMeta.title+=a.isDefined(f)?f:c.titleSuffix||""),this},g=function(d,e){if(!b.ngMeta)throw new Error("Cannot call setTag when ngMeta is undefined. Did you forget to call ngMeta.init() in the run block? \nRefer: https://github.com/vinaygopinath/ngMeta#getting-started");if("title"===d||"titleSuffix"===d)throw new Error("Attempt to set '"+d+"' through 'setTag': 'title' and 'titleSuffix' are reserved tag names. Please use 'ngMeta.setTitle' instead");return b.ngMeta[d]=a.isDefined(e)?e:c[d],this},h=function(a,d){if(!b.ngMeta)throw new Error("Cannot call setDefaultTag when ngMeta is undefined. Did you forget to call ngMeta.init() in the run block? \nRefer: https://github.com/vinaygopinath/ngMeta#getting-started");return c[a]=d,"title"===a||"titleSuffix"===a?this.setTitle(b.ngMeta.title,b.ngMeta.titleSuffix):this.setTag(a,b.ngMeta[a]),this},i=function(b){if(b=b||{},b.disableUpdate)return!1;f(b.title,b.titleSuffix);var d=a.copy(c);delete b.title,delete b.titleSuffix,delete d.title,delete d.titleSuffix;for(var e=Object.keys(b),h=0;h<e.length;h++)d.hasOwnProperty(e[h])&&delete d[e[h]],g(e[h],b[e[h]]);for(var i=Object.keys(d),j=0;j<i.length;j++)g(i[j],d[i[j]])},j=function(b,c){i(a.copy(c.meta||c.data&&c.data.meta))};return{init:function(){if(b.ngMeta={},b.$on("$routeChangeSuccess",j),b.$on("$stateChangeSuccess",j),e.has("$transitions")){e.get("$transitions").onSuccess({},function(a){j(null,a.$to())})}},setTitle:f,setTag:g,setDefaultTag:h}}var c={},d={useTitleSuffix:!1};this.setDefaultTitle=function(a){return c.title=a,this},this.setDefaultTitleSuffix=function(a){return c.titleSuffix=a,this},this.setDefaultTag=function(a,b){return c[a]=b,this},this.useTitleSuffix=function(a){return d.useTitleSuffix=!!a,this},this.mergeNestedStateData=function(b,c){var d=c(b)||{},e=b.parent&&b.parent.data&&b.parent.data.meta;if(d.meta||e){var f=a.merge({},e,d.meta);d.meta=f}return b.self.data=d,d},this.$get=["$rootScope","$injector",function(a,c){return new b(a,c)}]})});