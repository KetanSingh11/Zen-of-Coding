angular.module("angular-flot",[]).directive("flot",["$timeout",function($timeout){return{restrict:"EA",template:"<div></div>",scope:{dataset:"=",options:"=",callback:"=",onPlotClick:"&",onPlotHover:"&",onPlotSelected:"&",onPlotUnselected:"&"},link:function(scope,element,attributes){var plot=null;var width=attributes.width||"100%";var height=attributes.height||"100%";if(((scope.options||{}).legend||{}).container instanceof jQuery){throw new Error('Please use a jQuery expression string with the "legend.container" option.')}if(!scope.dataset){scope.dataset=[]}if(!scope.options){scope.options={legend:{show:false}}}var plotArea=$(element.children()[0]);plotArea.css({width:width,height:height});var init=function(){var plotObj=$.plot(plotArea,scope.dataset,scope.options);if(scope.callback){scope.callback(plotObj)}return plotObj};plotArea.on("plotclick",function onPlotClick(event,pos,item){$timeout(function onApplyPlotClick(){scope.onPlotClick({event:event,pos:pos,item:item})})});plotArea.on("plotselected",function onPlotSelected(event,ranges){$timeout(function onApplyPlotSelected(){scope.onPlotSelected({event:event,ranges:ranges})})});plotArea.on("plotunselected",function onPlotUnselected(event){$timeout(function onApplyPlotUnselected(){scope.onPlotUnselected({event:event})})});plotArea.on("plothover",function onPlotHover(event,pos,item){$timeout(function onApplyPlotHover(){scope.onPlotHover({event:event,pos:pos,item:item})})});var onOptionsChanged=function(){plot=init()};var unwatchOptions=scope.$watch("options",onOptionsChanged,true);var onDatasetChanged=function(dataset){if(plot){plot.setData(dataset);plot.setupGrid();return plot.draw()}else{plot=init()}};var unwatchDataset=scope.$watch("dataset",onDatasetChanged,true);attributes.$observe("width",function(value){if(!value)return;width=value;plotArea.css("width",value)});attributes.$observe("height",function(value){if(!value)return;height=value;plotArea.css("height",value)});element.on("$destroy",function onDestroy(){plotArea.off("plotclick");plotArea.off("plothover");plotArea.off("plotselected");plotArea.off("unplotselected");plot.destroy();unwatchDataset();unwatchOptions()})}}}]);