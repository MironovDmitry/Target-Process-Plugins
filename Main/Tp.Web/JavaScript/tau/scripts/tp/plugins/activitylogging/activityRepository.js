define(["libs/jquery/jquery","tp/plugins/profileNameSource"],function($,a){function b(){this._create()}return b.prototype={_getGetActivityLogUrlBase:"/api/v1/Plugins.asmx/{PluginName}/Profiles/{ProfileName}/Commands/GetActivityLog",_getClearActivityLogUrlBase:"/api/v1/Plugins.asmx/{PluginName}/Profiles/{ProfileName}/Commands/ClearActivityLog",_pluginName:null,_create:function(){this._pluginName=a.getPluginName()},_getGetActivityLogUrl:function(a){return this._getUrl(this._getGetActivityLogUrlBase,a)},_getClearActivityLogUrl:function(a){return this._getUrl(this._getClearActivityLogUrlBase,a)},_getUrl:function(a,b){var c=a.replace(/{PluginName}/g,this._pluginName).replace(/{ProfileName}/g,b);return(new Tp.WebServiceURL(c)).url},_post:function(a,b,c,d,e){$.ajax({url:a,data:JSON.stringify(c),success:d,error:e,type:"POST",dataType:"json"})},getActivityLog:function(a,b,c,d){this._post(this._getGetActivityLogUrl(a),a,b,c,d)},clearActivityLog:function(a,b,c,d){this._post(this._getClearActivityLogUrl(a),a,b,c,d)}},b})