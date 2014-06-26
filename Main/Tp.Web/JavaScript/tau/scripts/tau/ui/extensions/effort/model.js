define(["Underscore","jQuery","tau/core/class","tau/core/event","tau/utils/utils.translation","tau/models/dataprocessor/model.processor.context"],function(t,e,o,r,i,n){return r.extend(o.extend({init:function(t,e,o){this.store=t,this.contextService=e,this.groups=[],this.entity=o},load:function(){return e.when(this.loadPoints()).then(this.loadEfforts.bind(this))},loadPoints:function(){return e.when(this.contextService.findByEntity(this.entity)).then(function(t){this.points=this._getEffortPoints(t)}.bind(this))},loadEfforts:function(){var t=e.Deferred();return this.store.get(this.entity.entityType.name,{id:this.entity.id,fields:["effort","effortCompleted","effortToDo",{roleEfforts:["id","effort","effortToDo",{role:["id","name","hasEffort"]}]}]}).done(function(e){this.effort=e[0].data.effort,this.roleEfforts=e[0].data.roleEfforts,this.groups=this.processEfforts(this.roleEfforts),t.resolve(this)}.bind(this)),t},createGroupFromRole:function(t){return{id:t.id,name:i.shorten(t.name),role:t,users:[]}},processEfforts:function(e){return t.forEach(e,function(e){if(e.role.hasEffort){var o=t.find(this.groups,function(t){return t.role.id==e.role.id});if(!o){var r=this.createGroupFromRole(e.role);this.groups.push(r),o=r}o.effort=e.effort,o.roleEffortId=e.id}},this),this.groups},saveEfforts:function(t){return this.store.saveDef(this.entity.entityType.name,{$set:{id:this.entity.id,roleEfforts:t}})},_getEffortPoints:function(t){var e={entity:this.entity,applicationContext:t},o=n(e);return o.getEffortPoint()}}))});