function fetch_pagelets(a){var b="{}";typeof a=="undefined"?b=$("#bigpipe-json").html():b=$("#bigpipe-json-"+a).html();if(b==null)return;b=b.trim();if(b=="")return;try{debug&&console.log(b);var c=JSON.parse(b)}catch(d){Raven&&Raven.captureException(d,{extra:{origin:"bigpipe",data:b}});return}for(var e in c)if({}.hasOwnProperty.call(c,e)){debug&&console.log(e," = ",c[e]);var a=e,f=c[e];$.ajax({url:f,id:a,success:function(a){var b=this.id;$("#"+b).html(a),latexifyAjaxDiv($("#"+b));try{domElementLive()}catch(c){debug&&console.log(c.message)}}})}}var debug=!1,LOAD_SECTION_MAP={};$(document).ready(function(){fetch_pagelets(),$(".load-pagelet").live("click",function(a){var b=$(this),c=$("#"+b.attr("target")),d=b.attr("ajax"),e=b.html(),f=b.attr("click-text");b.html(f);var g=b.attr("show-loader");(!g||g!=="false")&&c.html(LOADER_HTML);var h=$.ajax({url:d,type:"POST",text:e,this_this:b,target:c,success:function(a){var b=this.text;this.this_this.html(b),this.target.html(a)},error:function(a){var b=this.text;this.this_this.html(b),window.global.checkAndShowServerError(a.status)}});a.preventDefault()}),$(".section-form").live("submit",function(a){var b=$(this),c=parseInt($(this).attr("targets")),d=b.attr("ajax"),e=b.serialize(),f=b.html(),g=b.find('input[type="submit"]:not(.cancel),button'),h=g.val();if(g.hasClass("clicked")){a.preventDefault();return}(g.val()=="Save"||g.val()=="save")&&g.val("Saving..");if(g.is("[clicked]")){var i=g.attr("clicked");g.val(i)}g.addClass("clicked"),make_ajax=!0;for(var j=0;j<c;j++){var k=j+1,l="target"+k,m=b.attr(l),n=$("#"+m);n.html(LOADER_HTML);if(make_ajax&&m in LOAD_SECTION_MAP){var o=LOAD_SECTION_MAP[m];o.abort()}}if(make_ajax){var p=$.ajax({url:d,type:"POST",data:e,dataType:"json",text:f,this_this:b,success:function(a){var d=this.text;this.this_this.html(d);if(a["status"]==AJAX_OK)if(a.url)window.location.href=a.url;else{for(var e=0;e<c;e++){var f=e+1,g="target"+f,h=b.attr(g),i=$("#"+h);a["pagelet-"+f]?(i.html(a["pagelet-"+f]),$("textarea").each(function(){if(!$(this).hasClass("no-height-change")&&$(this).length>0){var a=$(this),b=a.get(0).scrollHeight;b>MAX_HEIGHT&&(b=MAX_HEIGHT),a.height(b)}})):i.html("")}domElementLive()}},statusCode:{404:function(){window.location.reload(),alert("There was some error in accessing the resource, re-loading the page.")},403:function(){alert("There was some error in accessing the resource, re-loading the page."),window.location.reload()}}});for(var j=0;j<c;j++){var k=j+1,l="target"+k,m=b.attr(l);LOAD_SECTION_MAP[m]=p}}return!1}),$(".load-section").live("click",function(){var a=$(this),b=parseInt($(this).attr("targets")),c=$(this).attr("ajax"),d=a.attr("cache"),e=a.attr("animation"),f=$(this).attr("url"),g=a.attr("execute"),h=a.attr("ajax-request-method");typeof h=="undefined"&&(h="POST"),typeof f!="undefined"&&f!==!1&&a.attr("ajax",f),typeof d!="undefined"&&d!==!1&&(d=!0);var i=a.html(),j=a.attr("click-text");a.html(j);var k;d?k=!1:k=!0;for(var l=0;l<b;l++){var m=l+1,n="target"+m,o=a.attr(n),p=$("#"+o);p.hasClass("split-panel")&&($(".split-panel").removeClass("hidden"),$(".full-panel").addClass("hidden")),p.hasClass("full-panel")&&($(".full-panel").removeClass("hidden"),$(".split-panel").addClass("hidden"));if(d){var q="sibling"+m,r=a.attr(q);$("."+r).hide(),p.show(),$.trim(p.html())||(p.html(LOADER_HTML),k=k||!0)}else p.html(LOADER_HTML);if(k&&o in LOAD_SECTION_MAP){var s=LOAD_SECTION_MAP[o];s.abort()}}if(k){var t=$.ajax({url:c,type:h,dataType:"json",text:i,this_this:a,success:function(c){var d=this.text;this.this_this.html(d);if(c["status"]==AJAX_OK){for(var f=0;f<b;f++){var h=f+1,i="target"+h,j=a.attr(i),k=$("#"+j);if(c["pagelet-"+h]){e=="slidedown"?k.hide().html(c["pagelet-"+h]).slideDown("slow"):k.html(c["pagelet-"+h]),latexifyAjaxDiv(k),$("textarea").each(function(){if(!$(this).hasClass("no-height-change")&&$(this).length>0){var a=$(this),b=a.get(0).scrollHeight;b>MAX_HEIGHT&&(b=MAX_HEIGHT),a.height(b)}});if(g){execute_list=g.trim().split(" ");for(var f=0;f<execute_list.length;f++){var l=execute_list[f];window[l]()}}}else k.html("")}domElementLive()}else{if(b)for(var f=1;f<=b;f++)$("#"+a.attr("target"+f)).html("");if(c.messages){messages=c.messages;for(var f=0;f<messages.length;f++)addAlert(messages[f])}}},statusCode:{404:function(){window.location.reload(),alert("There was some error in accessing the resource, re-loading the page.")},403:function(){alert("There was some error in accessing the resource, re-loading the page."),window.location.reload()}}});for(var l=0;l<b;l++){var m=l+1,n="target"+m,o=a.attr(n);LOAD_SECTION_MAP[o]=t}}return!1}),$(".load-section").live("click",function(){var a=$(this),b=a.attr("class")+" selected";$(".load-section").each(function(){var a=$(this).attr("class");a==b&&$(this).removeClass("selected")}),a.addClass("selected")}),$(".reset-section").live("click",function(){var a=parseInt($(this).attr("targets"));for(var b=0;b<a;b++){var c=b+1,d="target"+c,e=$(this).attr(d),f=$("#"+e);f.html("")}return!1}),$(".pagelet-inview").live("inview",function(){var a=$(this),b=$("#"+a.attr("target")),c=a.attr("execute"),d=b.attr("loaded");if(typeof d!="undefined"&&(d=="1"||d=="2"))return;var e=a.attr("ajax"),f=a.attr("loader");f!=="undefined"?f!=="false"&&b.html(LOADER_HTML):b.html(LOADER_HTML),b.attr("loaded","1");var g=$.ajax({url:e,this_this:a,target:b,success:function(a){this.target.html(a),latexifyAjaxDiv(this),this.target.attr("loaded","2");try{domElementLive()}catch(b){debug&&console.log(b.message)}if(c){var d=a.execute_args;execute_list=c.split(" ");for(var e=0;e<execute_list.length;e++){var f=execute_list[e];d?window[f](d):window[f]()}}},error:function(a){this.target.attr("loaded","0"),this.target.html("There was some error in loading this section! Please try again after sometime. Contact support@hackerearth.com if problem persists.")}})}),$(".pagelet-hover").live("hover",function(){var a=$(this),b=$("#"+a.attr("target")),c=b.attr("loaded");if(typeof c!="undefined"&&(c=="1"||c=="2"))return;var d=a.attr("ajax");b.html(LOADER_HTML),b.attr("loaded","1");var e=$.ajax({url:d,this_this:a,target:b,success:function(a){this.target.html(a),this.target.attr("loaded","2");try{domElementLive()}catch(b){debug&&console.log(b.message)}},error:function(a){this.target.attr("loaded","0"),this.target.html("There was some error in fetching data for you!")}})}),show_view_option=function(){!getParameterByName("scroll-id")&&!getParameterByName("scroll-trigger")&&($(".view-comments .link-14").html("<i class='fa fa-comments result-icon'></i> View all comments"),$(".view-comments-content, .sort-filter, .comment-sort-filter a.load-pagelet").css("display","none"))},$(".problem-page").on("click",".view-comments, input[type=submit][name=submit-comment]",function(){$(".view-comments-content, .sort-filter, .comment-sort-filter a.load-pagelet").css("display","block"),$(".view-comments").css("display","none")})});