/* global m_private_test_walkthrough, mixpanel */function startWalkthrough(a,b,c){c||(c=flow_status.offset),$(b).joyride({preRideCallback:function(){$(".right-pane").scrollTop(0),$(".right-pane").addClass("padding-bottom-400"),$(".right-pane").css("overflow","hidden"),$(".walkthrough-overlay").removeClass("hidden")},postRideCallback:function(){$(b).joyride("destroy"),$(".right-pane").scrollTop(0),$(".right-pane").removeClass("padding-bottom-400"),$(".hide-custom-input").css("display")!=="none"&&$(".hide-custom-input").trigger("click"),$(".right-pane").css("overflow","auto"),$(".walkthrough-overlay").addClass("hidden")},scrollElement:".right-pane",startOffset:c,autoStart:!0,modal:!0,expose:!0})}function toggleOffset(){flow_status.offset||(flow_status.offset=1)}function timedMcqStartFlow(){if(!flow_status.timed){var a=$(".selected"),b="#timed-mcq-walkthrough-"+a.attr("id");startWalkthrough("Automatic",b),flow_status.timed=!0,toggleOffset()}}function timedStartFlow(){var a=$(".selected"),b="#mcq-walkthrough-"+a.attr("id");startWalkthrough(null,b,2),flow_status.mcq=!0,toggleOffset()}function mcqStartFlow(){if(!flow_status.mcq){var a=$(".selected"),b="#mcq-walkthrough-"+a.attr("id");startWalkthrough("Automatic",b),flow_status.mcq=!0,toggleOffset()}}function subjectiveStartFlow(){if(!flow_status.subjective){var a=$(".selected"),b="#subjective-walkthrough-"+a.attr("id");startWalkthrough("Automatic",b),flow_status.subjective=!0,toggleOffset()}}function programmingStartFlow(){$("#custom-input-button").trigger("click");if(!flow_status.programming){var a=$(".selected"),b="#programming-walkthrough-"+a.attr("id");startWalkthrough("Automatic",b),flow_status.programming=!0,toggleOffset()}}function frontendStartFlow(){if(!flow_status.frontend){var a=$(".selected"),b="#frontend-walkthrough-"+a.attr("id");startWalkthrough("Automatic",b),flow_status.frontend=!0,toggleOffset()}}function golfStartFlow(){$("#custom-input-button").trigger("click");if(!flow_status.golf){var a=$(".selected"),b="#golf-walkthrough-"+a.attr("id");startWalkthrough("Automatic",b),flow_status.golf=!0,toggleOffset()}}function approxStartFlow(){$("#custom-input-button").trigger("click");if(!flow_status.approx){var a=$(".selected"),b="#approx-walkthrough-"+a.attr("id");startWalkthrough("Automatic",b),flow_status.approx=!0,toggleOffset()}}function fileStartFlow(){if(!flow_status.file){var a=$(".selected"),b="#file-walkthrough-"+a.attr("id");startWalkthrough("Automatic",b),flow_status.file=!0,toggleOffset()}}function androidStartFlow(){if(!flow_status.android){var a=$(".selected"),b="#android-walkthrough-"+a.attr("id");startWalkthrough("Automatic",b),flow_status.android=!0,toggleOffset()}}function sqlStartFlow(){if(!flow_status.sql){var a=$(".selected"),b="#sql-walkthrough-"+a.attr("id");startWalkthrough("Automatic",b),flow_status.sql=!0,toggleOffset()}}function diagramStartFlow(){if(!flow_status.diagram){var a=$(".selected"),b="#diagram-walkthrough-"+a.attr("id");startWalkthrough("Automatic",b),flow_status.diagram=!0,toggleOffset()}}function projectStartFlow(){if(!flow_status.project){var a=$(".selected"),b="#project-walkthrough-"+a.attr("id");startWalkthrough("Automatic",b),flow_status.project=!0,toggleOffset()}}function mlStartFlow(){if(!flow_status.ml){var a=$(".selected"),b="#ml-walkthrough-"+a.attr("id");startWalkthrough("Automatic",b),flow_status.ml=!0,toggleOffset()}}function checkFlow(a){var b,c,d=$(a);d.hasClass("objective-start-flow")?(c="#mcq-walkthrough-"+d.attr("private_url_hash"),startWalkthrough("Manual",c,1)):d.hasClass("subjective-start-flow")?(c="#subjective-walkthrough-"+d.attr("private_url_hash"),startWalkthrough("Manual",c,1)):d.hasClass("algorithm-start-flow")?(b=d.attr("private_url_hash"),$(".new-submission-"+b).trigger("click",[!0]),c="#programming-walkthrough-"+b,startWalkthrough("Manual",c,1)):d.hasClass("frontend-start-flow")?(b=d.attr("private_url_hash"),$(".new-submission-"+b).trigger("click",[!0]),$("#load-editor-div"+b+" a").on("click",function(a){c="#frontend-walkthrough-"+b,startWalkthrough("Manual",c,1)}),$("#load-editor-div"+b).css("display")!="none"?$("#load-editor-div"+b+" a").trigger("click",[!0]):(c="#frontend-walkthrough-"+b,startWalkthrough("Manual",c,1))):d.hasClass("golf-start-flow")?(b=d.attr("private_url_hash"),$(".new-submission-"+b).trigger("click",[!0]),c="#golf-walkthrough-"+b,startWalkthrough("Manual",c,1)):d.hasClass("approximate-start-flow")?(b=d.attr("private_url_hash"),$(".new-submission-"+b).trigger("click",[!0]),c="#approx-walkthrough-"+b,startWalkthrough("Manual",c,1)):d.hasClass("file-start-flow")?(c="#file-walkthrough-"+d.attr("private_url_hash"),startWalkthrough("Manual",c,1)):d.hasClass("android-start-flow")?(c="#android-walkthrough-"+d.attr("private_url_hash"),startWalkthrough("Manual",c,1)):d.hasClass("sql-start-flow")?(b=d.attr("private_url_hash"),$(".new-submission-"+b).trigger("click",[!0]),c="#sql-walkthrough-"+b,startWalkthrough("Manual",c,1)):d.hasClass("timed-mcq-start-flow")?(c="#mcq-walkthrough-"+d.attr("private_url_hash"),startWalkthrough("Manual",c,3)):d.hasClass("diagram-start-flow")?(c="#diagram-walkthrough-"+d.attr("private_url_hash"),startWalkthrough("Manual",c,1)):d.hasClass("machine-learning-start-flow")?(b=d.attr("private_url_hash"),$(".new-submission-"+b).trigger("click",[!0]),c="#ml-walkthrough-"+b,startWalkthrough("Manual",c,1)):d.hasClass("project-start-flow")&&(b=d.attr("private_url_hash"),$(".new-submission-"+b).trigger("click",[!0]),c="#project-walkthrough-"+b,startWalkthrough("Manual",c,1))}var flow_status={offset:0,timed:!1,mcq:!1,subjective:!1,programming:!1,frontend:!1,golf:!1,approx:!1,file:!1,android:!1,sql:!1,diagram:!1,project:!1,ml:!1};$(".right-pane").on("click",".objective-start-flow, .subjective-start-flow, .algorithm-start-flow,.frontend-start-flow, .golf-start-flow, .approximate-start-flow, .file-start-flow,.android-start-flow, .sql-start-flow, .diagram-start-flow, .project-start-flow,.machine-learning-start-flow",function(){checkFlow(this)}),$(document).on("click",".joyride-skip-tip, .joyride-modal-bg",function(){$(document).joyride("end"),$(document).joyride("destroy")});