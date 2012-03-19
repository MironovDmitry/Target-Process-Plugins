define(["Underscore","tau/models/dataProviders/model.provider.items.base"],function(_,a){return a.extend({fetch:function(a){this._fetch("userStories","userStory","priority",a)},fetchForGroup:function(a,b){var c=this.config.context,d=c.entity.entityType.name,e=c.entity.id,f=c.applicationContext.processes[0].practices,g=_.pluck(f,"name"),h=this.config.store,i="userStories",j="userStory",k=this._createDetailCommand(i),l={id:e,nested:!0,fields:[k]};h=h.get(d,l);var m=this,n=function(c){var d=_(c).pluck("data")[0][i];_.map(d,function(a){a.__type=j}),d=_.filter(d,function(b){return b.entityState.name==a.key});var e=m._convertData(d);b(e)};h.done({success:n,scope:m})},_createDetailCommand:function(a){var b={};b[a]=["id","name","numericPriority","tags",{priority:["id","name","importance"]},"effort","effortCompleted","effortToDo","timeSpent","timeRemain","tasks-count","tasks-effort-sum","tasks-effortToDo-sum",{feature:["id"]},{entityState:["id","name","isInitial","isFinal","numericPriority","isCommentRequired",{nextStates:["id"]}]},{roleEfforts:["id","effort","effortToDo",{role:["id","name","isPair","hasEffort"]}]},{assignments:["id",{role:["id"]},{generalUser:["id","firstName","lastName"]}]}];var c={project:["id"]};return this.config.multiprojects&&c.project.push("abbreviation"),b[a].push(c),this.config.additionalFields&&_.indexOf(this.config.additionalFields,"iteration")>-1&&b[a].push({iteration:["id","name"]}),b},_convertData:function(b){return b=a.prototype._convertData.call(this,b),b=this._calculateEffortToMaximum(b),this._sortByPriority(b)},_convertItem:function(a){var b=this,c={id:a.id,name:a.name,__type:a.__type,numericPriority:a.numericPriority,entityState:{id:a.entityState.id,name:a.entityState.name,isInitial:a.entityState.isInitial,isFinal:a.entityState.isFinal,numericPriority:a.entityState.numericPriority},tags:this._processTags(a),priority:{id:a.priority.id,name:a.priority.name,kind:b.importanceProcessor.getKind(a.priority.importance)},effort:this._getEffortData(a),assignments:this._processAssignments(a),projectId:a.project.id,entitiesCount:a["tasks-count"]};return this.config.multiprojects&&(c.project={id:a.project.id,abbreviation:a.project.abbreviation}),this.config.additionalFields&&_.indexOf(this.config.additionalFields,"iteration")>-1&&(c.iteration={id:a.iteration?a.iteration.id:null,name:a.iteration?a.iteration.name:null}),c}})})