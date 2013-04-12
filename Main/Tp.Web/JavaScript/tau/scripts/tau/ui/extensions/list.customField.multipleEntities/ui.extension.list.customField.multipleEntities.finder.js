define(["Underscore","tau/core/extension.base","tau/ui/extensions/list.customField.multipleEntities/ui.extension.list.customField.multipleEntities.finder.attach"],function(_,ExtensionBase,ExtensionAttach){return ExtensionBase.extend({"bus beforeInit":function(evt,initConfig){this.store=initConfig.config.context.configurator.getStore(),this.entity=initConfig.config.context.entity,this._registerRefreshHandler(this.store,this.entity)},"bus beforeInit + afterRender":function(evt,initConfig,renderData){this.customField=initConfig.config.customField,this.fire("customField.ready",this.customField),this._initFinder(renderData.element.find(".i-role-action-attach"),this.customField)},"bus beforeInit:last + customField.ready + afterRender":function(evt,initEvt,customField,renderData){var self=this;this._retrieveIdsForField(this.store,this.entity.id,this.entity.entityType.name,this.customField.name,function(ids){var $detach=renderData.element.find(".i-role-action-detach");$detach.on("click",function(el){self._doDetach(el,ids,self.store,self.customField,self.entity)})})},_doDetach:function(target,ids,store,customField,entity){var id=$(target.currentTarget).attr("data-entity-id"),entityType=$(target.currentTarget).attr("data-entity-type").toLowerCase(),ids=ids;ids=_.reject(ids,function(el){return el==id+" "+entityType}).join(","),this._saveIds(store,entity.id,entity.entityType.name,customField.name,ids,function(res){})},_saveIds:function(store,entityId,entityTypeName,customFieldName,ids,doneCallback){store.save(entityTypeName,{id:entityId,$set:{customFields:[{name:customFieldName,value:ids}]},fields:["id","customFields"]}).done(function(res){doneCallback&&doneCallback(res)})},_registerRefreshHandler:function(store,entity){var self=this;store.unbind(this),store.on({eventName:"afterSave",type:entity.entityType.name,listener:this,filter:{id:entity.id},hasChanges:["customFields"]},function(){self.fire("refresh")})},_initFinder:function($action,customField){var bubbleConfig={actionOnBlur:"destroy",target:$action,componentsConfig:{components:[{type:"finder",fields:["id","name",{entityType:["name"]},{project:["abbreviation"]}],additionalExtensions:[ExtensionAttach],customField:customField}]}};customField.value&&(bubbleConfig.componentsConfig.components[0].$query={entityType:{id:{$in:_.asString(customField.value).split("\r\n").join(",")}}}),this.fire("initBubble",bubbleConfig)},_retrieveIdsForField:function(store,entityId,entityTypeName,customFieldName,idsCallback){store.get(entityTypeName,{id:entityId,fields:["customFields"]}).done(function(res){var field=_.find(res[0].data.customFields,function(v){return v.name==customFieldName}),ids=field.value!=null?field.value.split(","):[];idsCallback(ids)})}})})