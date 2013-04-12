define(["tau/core/Class","jQuery","Underscore","./url.resolver","tau/core/event"],function(Class,$,_,resolver,Event){var API=Class.extend({init:function(config){this.config=config||{},this.id=_.uniqueId("slice/"+ +(new Date)+"/"+_.UUID()),this._requests={},_.defaults(this.config,{definition:{},service:$.ajax,base64:!1,clientId:this.id,options:{}})},getSliceParams:function(){var slice=this,sliceConfig=slice.config,urlConfig=resolver.resolve(sliceConfig.definition,{method:"noop"},{base64:sliceConfig.base64,clientId:sliceConfig.clientId});return urlConfig.parameters},clone:function(){var cloneAPI=new API(_.deepClone(this.config));return cloneAPI.id=this.id,cloneAPI},_deferredResolved:function(config,result){this.fire("after."+config.command.method,{result:result.data,command:config.command}),config.$deferred.resolve(result)},_deferredRejected:function(config,result){config.$deferred.reject(result)},abort:function(){var values=_.values(this._requests);this._requests={};while(values.length>0){var ajaxCall=values.pop();ajaxCall.abort()}},getCallOptions:function(options){return options=options||{},_.defaults(options,{base64:this.config.base64}),options.sign&&(options.clientId=this.config.clientId),options},resolve:function(config,options){config=config||{};var command=config.command||{};options=this.getCallOptions(options);var urlConfig=resolver.resolve(this.config.definition,command,options),callStatistics={},ajaxConfig={type:"POST",url:urlConfig.serviceUrl,dataType:"json",data:JSON.stringify(urlConfig.parameters),contentType:"application/json; charset=utf-8",$scope:config,beforeSend:function(){callStatistics.start=(new Date).getTime()}},result={ajaxConfig:ajaxConfig,command:command},self=this,id=_.uniqueId("ajaxCall"),request=this.config.service(ajaxConfig);return self._requests[id]=request,request.done(function(r,status,responseValue){callStatistics.end=(new Date).getTime();if(!self._requests.hasOwnProperty(id))return;delete self._requests[id],result.data=r,result.isResolvedFromCache=!1,self.fire("request.completed",{time:callStatistics,command:command,response:responseValue,request:urlConfig.parameters}),self._deferredResolved(config,result)}).fail(function(r){if(!self._requests.hasOwnProperty(id))return;delete self._requests[id];try{r.responseText=$.parseJSON(r.responseText)}catch(e){}result.data=r,self._deferredRejected(config,result)}),config.$deferred},isUndefinedAxis:function(axisName){return this.getTypes(this.config.definition[axisName]).length===0},x:function(config){return this.axis("x",config)},y:function(config){return this.axis("y",config)},axis:function(axisName,config){if(this.isUndefinedAxis(axisName)){var cfg=this.createDeferredCall(axisName,config);return this._deferredResolved(cfg,{data:{items:[]}}),cfg.$deferred}return this.resolveDeferred(axisName+"axis",config)},size:function(){if(this.isUndefinedAxis("x")&&this.isUndefinedAxis("y")){var cfg=this.createDeferredCall("size",{});return this._deferredResolved(cfg,{data:{}}),cfg.$deferred}return this.resolveDeferred("size",{})},dataItemTemplate:function(config){return this.resolveDeferred("dataItemTemplate",config)},dataTemplate:function(config){return this.resolveDeferred("dataTemplate",config)},viewDataTemplate:function(config){return this.resolveDeferred("viewDataTemplate",config)},axisDataTemplate:function(config){return this.resolveDeferred("axisDataTemplate",config)},listDataTemplate:function(config){return this.resolveDeferred("listDataTemplate",config)},notifyBoardAccess:function(config){return this.resolveDeferred("notifyBoardAccess",config)},addData:function(config){return this.resolveDeferred("addData",config)},axisAddData:function(config){var commandOptions={sign:!0};return this.resolveDeferred("addAxisData",config,commandOptions)},listAddData:function(config){return this.resolveDeferred("listAddData",config)},viewAddData:function(config){return this.resolveDeferred("viewAddData",config)},cellActions:function(config){return this.resolveDeferred("cellActions",config)},cellActionsV2:function(config){return this.resolveDeferred("cellActionsV2",config)},axesActions:function(config){return this.resolveDeferred("axesActions",config)},viewActions:function(config){return this.resolveDeferred("viewActions",config)},move:function(config){return this.resolveDeferred("move",config)},listModeActionsV2:function(config){return this.resolveDeferred("listModeActionsV2",config)},cardDetails:function(config){var cells=this.config.definition.cells,types=this.getTypes(cells),items=_(types).filter(function(t){return t.data&&t.data!=="{}"});if(items.length===0||config.$set.CardsIds.length===0){var cfg=this.createDeferredCall("cardsDetails",config);return this._deferredResolved(cfg,{data:{items:[]}}),cfg.$deferred}cells.types=items;var commandOptions={disableWhereScope:!0};return this.resolveDeferred("cardsDetails",config,commandOptions)},moveAndPrioritizeBatch:function(config){var commandOptions={disableWhereScope:!0};return config.$set.items.length>this.config.options.DnDTurnOffCometWhenItemsCountExceed&&(commandOptions.sign=!0),this.resolveDeferred("moveAndPrioritizeBatch",config,commandOptions)},moveBatch:function(config){var commandOptions={disableWhereScope:!0};return config.$set.items.length>this.config.options.DnDTurnOffCometWhenItemsCountExceed&&(commandOptions.sign=!0),this.resolveDeferred("moveBatch",config,commandOptions)},prioritizeBatch:function(config){var commandOptions={};return config.$set.items.length>this.config.options.DnDTurnOffCometWhenItemsCountExceed&&(commandOptions.sign=!0),this.resolveDeferred("prioritizeBatch",config,commandOptions)},prioritize:function(config){return this.resolveDeferred("prioritize",config)},axes:function(){var axes=this.createDeferredCall("axes"),result={command:axes.command};return $.when(this.x(),this.y()).done(function(x,y){result.data={x:x.data.items,y:y.data.items},axes.$deferred.resolve(result)}).fail(function(r){result.data=r,axes.$deferred.reject(result)}),axes.$deferred},space:function(){return this.resolveDeferred("space",{})},getTypes:function(node){return node?_.isArray(node)?node:_.isString(node)?[node]:node.types?_.isArray(node.types)?node.types:_.isString(node.types)?[node.types]:[]:[]:[]},cell:function(config){if(this.getTypes(this.config.definition.cells).length===0){var cfg=this.createDeferredCall("cells",config);return this._deferredResolved(cfg,{data:{items:[]}}),cfg.$deferred}return this.resolveDeferred("cells",config)},cellCounts:function(config){return this.resolveDeferred("cellCounts",config)},axesCounts:function(config){return this.resolveDeferred("axesCounts",config)},list:function(config){if(this.getTypes(this.config.definition.cells).length===0){var cfg=this.createDeferredCall("list",config);return this._deferredResolved(cfg,{data:{items:[]}}),cfg.$deferred}return this.resolveDeferred("list",config)},createDeferredCall:function(method,config){var $deferred=$.Deferred(),cmd={config:config,method:method};return{$deferred:$deferred,command:cmd}},resolveDeferred:function(method,config,commandOptions){var self=this;return self.fire("before."+method,config),this.resolve(this.createDeferredCall(method,config),commandOptions).fail(function(err){if(err.data.status===0)return;var message="",error;err.data.readyState?(error=err.data.responseText,message=error.Message):error={message:message},self.fire("error",error),self.fire("slice.detailed.error",{message:message||"unknown issue",method:method,definition:self.config.definition})})}});return Event.implementOn(API.prototype),API})