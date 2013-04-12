define(["Underscore","tau/models/dataProviders/model.provider.items.base"],function(_,BaseProvider){return BaseProvider.extend({fetch:function(fnCallback){this._fetch("userStories","userStory","priority",fnCallback)},_createDetailCommand:function(collectionType){var detailCommand={};return detailCommand[collectionType]=["id","name","numericPriority","tags",{priority:["id","name","importance"]},"effort","effortCompleted","effortToDo","timeSpent","timeRemain","tasks-count","tasks-effort-sum","tasks-effortToDo-sum",{entityState:this.fields.entityStateWithComment},{roleEfforts:["id","effort","effortToDo",{role:["id","name","isPair","hasEffort"]}]},{assignments:["id",{role:["id"]},{generalUser:this.fields.generalUser}]},{project:["id"]}],detailCommand},_convertData:function(data){return data=BaseProvider.prototype._convertData.call(this,data),data=this._calculateEffortToMaximum(data),this._sortByPriority(data)},_convertItem:function(data){var self=this;data.project=data.project||{};var item={id:data.id,name:data.name,__type:data.__type,numericPriority:data.numericPriority,entityState:{id:data.entityState.id,name:data.entityState.name,isInitial:data.entityState.isInitial,isFinal:data.entityState.isFinal,numericPriority:data.entityState.numericPriority},tags:this._processTags(data),priority:{id:data.priority.id,name:data.priority.name,kind:self.importanceProcessor.getKind(data.priority.importance)},effort:this._getEffortData(data),assignments:this._processAssignments(data),projectId:data.project.id,entitiesCount:data["tasks-count"],url:this.config.context.configurator.getUrlBuilder().getNewViewUrl(data.id,data.__type,!0)};return item.visibleEntityState=item.entityState,item}})})