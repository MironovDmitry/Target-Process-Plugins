define(["Underscore","tau/core/class"],function(_,a){var b=a.extend({init:function(a){this.config=a},getActionUrl:function(a){return this.config.appPath+"/PageServices/ActionsService.asmx/"+a},getActiveProjectForEntity:function(a,b,c){var d={generalId:a};this.sendRequest("GetActiveProjectForEntity",d,b,c)},copyGeneralToProject:function(a,b,c,d){var e={generalId:a,projectId:b};this.sendRequest("CopyGeneralToProject",e,c,d)},getProjectIds:function(a,b){var c={};this.sendRequest("GetProjectIds",c,a,b)},moveGeneralToProject:function(a,b,c,d){var e={generalId:a,projectId:b};this.sendRequest("MoveGeneralToProject",e,c,d)},attachGeneralToRequest:function(a,b,c,d){var e={generalId:a,requestId:b};this.sendRequest("AttachGeneralToRequest",e,c,d)},detachRequest:function(a){var b=function(){},c={generalId:a.generalId,requestId:a.requestId};a=_(a).defaults({success:b,error:b}),this.sendRequest("DetachRequestFromGeneral",c,a.success,a.error)},generalCanConvertTo:function(a,b,c){var d={generalId:a};this.sendRequest("GeneralCanConvertTo",d,b,c)},convertGeneralToTask:function(a,b,c,d){var e={generalId:a,userStoryId:b};this.sendRequest("ConvertGeneralToTask",e,c,d)},convertGeneralToType:function(a,b,c,d){var e={generalId:a,entityTypeId:b};this.sendRequest("ConvertGeneralToType",e,c,d)},splitUserStory:function(a,b,c){var d={generalId:a};this.sendRequest("SplitUserStory",d,b,c)},sendRequest:function(a,b,c,d){$.ajax(this.getActionUrl(a),{contentType:"application/json",type:"POST",data:JSON.stringify(b),success:c,error:d})}});return b})