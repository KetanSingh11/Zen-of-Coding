"use strict";!function(){function vsityPlatformServices($http,$log,$httpParamSerializerJQLike,snackbar,ENV){function stepOneSetData(data){return stepOneData=data,data}function setTagsData(data){tagData=data}function getTagsData(){return tagData}function stepOneGetData(){return stepOneData}function challengeDetails(methods,urlz,data,token){return $http({method:methods,url:urls+urlz,data:data,headers:{Authorization:token}})}function getCommunityId(method,url,token){return $http({method:"GET",url:urls+url,headers:{Authorization:token}}).then(function(response){return response.data.data})}function saveCheckpoints(data,token){return data.checkpoint_id?$http({method:"PUT",url:urls+"/activity/checkpoint?checkpoint_id="+data.checkpoint_id,data:data,headers:{Authorization:token}}).then(function(response){return data.checkpoint_id}):$http({method:"POST",url:urls+"/activity/checkpoint",data:data,headers:{Authorization:token}}).then(function(response){return response.data.data.checkpoint_id})}function saveCheckpointId(actId,token){return $http({method:"GET",url:urls+"/activity/?activity_id="+actId,headers:{Authorization:token}}).then(function(response){return response.data.data})}function liveActivityId(actId,token){return $http({method:"PUT",url:urls+"/activity/publish?activity_id="+actId,headers:{Authorization:token}}).then(function(response){return response})}function unpublishActivity(actId,token){return $http({method:"PUT",url:urls+"/activity/unpublish?activity_id="+actId,headers:{Authorization:token,"Content-Type":"application/json"}}).success(function(response){return response}).error(function(response){return response})}function activityCreditCharge(actId,token){return $http({method:"GET",url:urls+"/activity/credit/estimate?activity_id="+actId,headers:{Authorization:token}}).then(function(response){return response.data.data})}function setStages(data,token){return $http({method:"POST",url:urls+"/activity/checkpoint/stages",data:data,headers:{Authorization:token}}).then(function(response){return response})}function getStages(activityID,token){return $http({method:"GET",url:urls+"/activity/checkpoint/stages?activity_id="+activityID,headers:{Authorization:token}}).then(function(response){return response})}function setObjectiveTemplateService(data,token,ids){return $http({method:"POST",url:urls+"/activity/problem/values?checkpoint_id="+ids,data:data,headers:{Authorization:token}}).then(function(response){return response}).catch(function(response){return response})}function updateObjectiveTemplateService(data,token,ids,problem_id){return $http({method:"PUT",url:urls+"/activity/problem/values?problem_id="+problem_id+"&checkpoint_id="+ids,data:data,headers:{Authorization:token}}).then(function(response){return response}).catch(function(response){return response})}function setCompetetiveProgrammingTemplateService(data,token,ids){return $http({method:"POST",url:urls+"/activity/problem/values?checkpoint_id="+ids,data:data,headers:{Authorization:token}}).then(function(response){return response}).catch(function(response){return response})}function updateCompetetiveProgrammingTemplateService(data,token,ids,problem_id){return $http({method:"PUT",url:urls+"/activity/problem/values?problem_id="+problem_id+"&checkpoint_id="+ids,data:data,headers:{Authorization:token}}).then(function(response){return response}).catch(function(response){return response})}function setDataScienceTemplateService(data,token,ids){return $http({method:"POST",url:urls+"/activity/problem/values?checkpoint_id="+ids,data:data,headers:{Authorization:token}}).then(function(response){return response}).catch(function(response){return response})}function updateDataScienceTemplateService(data,token,ids,problem_id){return $http({method:"PUT",url:urls+"/activity/problem/values?problem_id="+problem_id+"&checkpoint_id="+ids,data:data,headers:{Authorization:token}}).then(function(response){return response}).catch(function(response){return response})}function setManualEvaluationTemplateService(data,token,ids){return $http({method:"POST",url:urls+"/activity/problem/values?checkpoint_id="+ids,data:data,headers:{Authorization:token}}).then(function(response){return response}).catch(function(response){return response})}function updateManualEvaluationTemplateService(data,token,ids,problem_id){return $http({method:"PUT",url:urls+"/activity/problem/values?problem_id="+problem_id+"&checkpoint_id="+ids,data:data,headers:{Authorization:token}}).then(function(response){return response}).catch(function(response){return response})}function setCheckedInTemplateService(data,token,ids){return $http({method:"POST",url:urls+"/activity/problem/values?checkpoint_id="+ids,data:data,headers:{Authorization:token}}).then(function(response){})}function updateCheckedInTemplateService(data,token,ids,problem_id){return $http({method:"PUT",url:urls+"/activity/problem/values?problem_id="+problem_id+"&checkpoint_id="+ids,data:data,headers:{Authorization:token}}).then(function(response){})}function setUnevaluatedTemplateService(data,token){return $http({method:"POST",url:urls+"/activity/problem/values?checkpoint_id=5",data:data,headers:{Authorization:token}}).then(function(response){})}function setTeamTemplateService(data,token,ids){return $http({method:"POST",url:urls+"/activity/problem/values?checkpoint_id="+ids,data:data,headers:{Authorization:token}}).then(function(response){return response}).catch(function(response){return response})}function updateTeamTemplateService(data,token,ids,problem_id){return $http({method:"PUT",url:urls+"/activity/problem/values?problem_id="+problem_id+"&checkpoint_id="+ids,data:data,headers:{Authorization:token}}).then(function(response){return response}).catch(function(response){return response})}function setBlackBoxTemplateService(data,token,ids){return $http({method:"POST",url:urls+"/activity/problem/values?checkpoint_id="+ids,data:data,headers:{Authorization:token}}).then(function(response){})}function updateBlackBoxTemplateService(data,token,ids,problem_id){return $http({method:"PUT",url:urls+"/activity/problem/values?problem_id="+problem_id+"&checkpoint_id="+ids,data:data,headers:{Authorization:token}}).then(function(response){})}function getCompleteDataOnChange(iD,token){return $http({method:"GET",url:urls+"/activity/?activity_id="+iD,headers:{Authorization:token,"Content-Type":"application/json"}}).then(function(response){return response})}var urls=ENV.apiEndpoint,urls=ENV.apiEndpoint,stepOneData={},tagData={};return{setObjectiveTemplateService:setObjectiveTemplateService,updateObjectiveTemplateService:updateObjectiveTemplateService,setCompetetiveProgrammingTemplateService:setCompetetiveProgrammingTemplateService,updateCompetetiveProgrammingTemplateService:updateCompetetiveProgrammingTemplateService,setDataScienceTemplateService:setDataScienceTemplateService,updateDataScienceTemplateService:updateDataScienceTemplateService,setManualEvaluationTemplateService:setManualEvaluationTemplateService,updateManualEvaluationTemplateService:updateManualEvaluationTemplateService,setCheckedInTemplateService:setCheckedInTemplateService,updateCheckedInTemplateService:updateCheckedInTemplateService,setUnevaluatedTemplateService:setUnevaluatedTemplateService,setTeamTemplateService:setTeamTemplateService,updateTeamTemplateService:updateTeamTemplateService,setBlackBoxTemplateService:setBlackBoxTemplateService,updateBlackBoxTemplateService:updateBlackBoxTemplateService,saveCheckpoints:saveCheckpoints,challengeDetails:challengeDetails,stepOneSetData:stepOneSetData,stepOneGetData:stepOneGetData,getCompleteDataOnChange:getCompleteDataOnChange,getTagsData:getTagsData,setTagsData:setTagsData,saveCheckpointId:saveCheckpointId,getCommunityId:getCommunityId,liveActivityId:liveActivityId,unpublishActivity:unpublishActivity,activityCreditCharge:activityCreditCharge,setStages:setStages,getStages:getStages}}function getPlatformData($http,$log,ENV){function getObjectiveDatas(id,token){return $http({method:"GET",url:urls+"/activity/?activity_id="+id,headers:{Authorization:token,"Content-Type":"application/json"}}).then(function(response){return response.data})}function saveEditActivityData(data){show=!1,editActivity=data}function getEditActivityData(){return editActivity}function getCheckpointData(checkptId,token){return $http({method:"GET",url:urls+"/activity/problem/values?checkpoint_id="+checkptId,headers:{Authorization:token,"Content-Type":"application/json"}}).then(function(response){return response.data})}function updateActivity(id,data,token){return editActivity=!1,$http({method:"PUT",url:urls+"/activity/?activity_id="+id,data:data,headers:{Authorization:token}}).then(function(response){return response})}function getLeaderBoard(activityId,checkpointId,token){return $http({method:"GET",url:urls+"/activity/leaderboard?checkpoint_id="+checkpointId+"&activity_id="+activityId,headers:{Authorization:token,"Content-Type":"application/json"}}).then(function(response){return response.data}).catch(function(error){return error})}var urls=ENV.apiEndpoint,editActivity={},show="",editActivity=!0;return{getObjectiveDatas:getObjectiveDatas,saveEditActivityData:saveEditActivityData,getEditActivityData:getEditActivityData,getCheckpointData:getCheckpointData,updateActivity:updateActivity,getLeaderBoard:getLeaderBoard}}function mapInputTypeFieldId($http,$log,ENV){function mapUserProfileData(){return{1:1,2:1,3:1,4:4,5:1,6:1,7:1,8:2,9:1,10:1,11:2,12:4,13:4,14:13,15:1,16:1,17:1,18:1,19:1,21:1,22:1}}ENV.apiEndpoint;return{mapUserProfileData:mapUserProfileData}}angular.module("skillenza").factory("vsityPlatformServices",["$http","$log","$httpParamSerializerJQLike","snackbar","ENV",vsityPlatformServices]).factory("getPlatformData",["$http","$log","ENV",getPlatformData]).factory("mapInputTypeFieldId",["$http","$log","ENV",mapInputTypeFieldId])}();