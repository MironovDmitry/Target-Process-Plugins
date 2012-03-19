define(["Underscore","tau/store/types","tau/core/model-base","tau/models/assignmentsList/extension.model.effortRetriever","tau/models/assignmentsList/extension.model.store.operations","tau/models/assignmentsList/extension.model.effortPointsRetriever","tau/models/assignmentsList/extension.model.assignmentsRetriever","tau/models/assignmentsList/extension.model.entityRolesRetriever","tau/models/assignmentsList/extension.model.featureRolesRetriever","tau/models/assignmentsList/extension.model.assignmentToRolesMapper","tau/models/assignmentsList/extension.model.taskEffortRetriever"],function(_,a,b,c,d,e,f,g,h,i,j){var k=b.extend({"bus assignmentsReady":function(a){this.assignments=a.data},"bus roleEffortsReady":function(a){this.roleEfforts=a.data},destroyExtensions:function(){var a=this.extensions||[];_.each(a,function(a){a.destroy("destroy")}),delete this.extensions},initExtensions:function(){this.destroyExtensions();var b=a.findByKeyword(this.config.context.entity.entityType.name),k=new(b.name!="feature"?g:h)(this.config);this.extensions=[new c(this.config),new d(this.config),new e(this.config),new f(this.config),k,new i(this.config)],b.name.toLowerCase()=="userstory"&&this.extensions.push(new j(this.config))},onInit:function(){this.clearData();var a=this;a.store.unbind(a),a.initExtensions(),a.fire("registerStoreRequest"),a.fire("commitTransaction",{success:a.done,scope:a}),this.bindStoreListeners()},done:function(){var a={};this.bus.fire("extendDataToBind",a),this.bus.fire("dataBind",a),this.destroyExtensions()},bindStoreListeners:function(){var a=this;a.store.on({eventName:"afterSave",type:"assignment",listener:a},function(){a.afterAssignmentSaved.apply(a,arguments)}),a.store.on({eventName:"beforeSave",type:"assignment",listener:a},function(){a.beforeSaveAssignment.apply(a,arguments)}),a.store.on({eventName:"beforeSave",type:"roleEffort",listener:a},function(){a.beforeSaveRoleEffort.apply(a,arguments)}),a.store.on({eventName:"afterSave",type:"roleEffort",listener:a},function(){a.afterSaveRoleEffort.apply(a,arguments)}),a.store.on({eventName:"beforeRemove",type:"assignment",listener:a},function(){a.beforeRemoveAssignment.apply(a,arguments)}),a.store.on({eventName:"afterRemove",type:"assignment",listener:a},function(){a.afterAssignmentRemoved.apply(a,arguments)});var b=this.config.context.entity.id,c=this.config.context.entity.entityType.name,d={id:b};a.store.on({eventName:"beforeRemove",type:c,listener:a,filter:d},function(){a.store.unbind(a)}),a.store.on({eventName:"beforeSave",type:c,listener:a,filter:d,hasChanges:["entityState"]},_.bind(a.beforeEntityEntityStateChanged,a)),a.store.on({eventName:"afterSave",type:c,listener:a,filter:d,hasChanges:["entityState"]},_.bind(a.afterEntityEntityStateChanged,a)),a.store.on({eventName:"afterSave",type:c,listener:a,filter:d,hasChanges:["effort|effortToDo|effortCompleted|tasks-count|tasks-effort-sum|tasks-effortToDo-sum"]},_.bind(a.onDataUpdate,a))},beforeEntityEntityStateChanged:function(a){this.fire("beforeStateChanged")},afterEntityEntityStateChanged:function(a){this.fire("afterStateChanged")},onDataUpdate:function(a){this.fire("refresh")},beforeSaveRoleEffort:function(a){var b=a.data.id;if(_.isNumber(b)&&this.isRoleEffortOfCurrentEntity(b)){var c=a.data.cmd;c.config.fields=c.config.fields||[],c.config.fields.push("effortToDo"),this.fire("beforeSaveRoleEffort",{roleEffortId:b})}},afterSaveRoleEffort:function(a){var b=a.data.id;_.isNumber(b)&&this.isRoleEffortOfCurrentEntity(b)&&this.fire("afterSaveRoleEffort",{roleEffortId:b})},beforeRemoveAssignment:function(a){this.fireEventIfAssignmentFromCurrentEntity(a,"beforeRemoveAssignment")},afterAssignmentRemoved:function(a){this.fireEventIfAssignmentFromCurrentEntity(a,"afterAssignmentRemoved")},beforeSaveAssignment:function(a){_.isNumber(a.data.id)?this.fireEventIfAssignmentFromCurrentEntity(a,"beforeSaveAssignment"):this.fireEventIfAssignmentFromCurrentEntity(a,"beforeAddAssignment")},afterAssignmentSaved:function(a){_.isNumber(a.data.cmd.config.id)?this.fireEventIfAssignmentFromCurrentEntity(a,"afterAssignmentSaved"):this.fireEventIfAssignmentFromCurrentEntity(a,"afterAssignmentAdded")},fireEventIfAssignmentFromCurrentEntity:function(a,b){var c=a.data.id;if(this.isAssignmentOfCurrentEntity(c)||((a.data.changes||{}).assignable||{}).id===this.config.context.entity.id){var d=_.extend({assignmentId:c},a.data.changes);this.fire(b,d)}},isRoleEffortOfCurrentEntity:function(a){return _.any(this.roleEfforts,function(b){return b.id===a})},isAssignmentOfCurrentEntity:function(a){return _.any(this.assignments,function(b){return b.id===a})},clearData:function(){delete this.assignments,delete this.roleEfforts},destroy:function(){this.clearData(),this._super.apply(this,arguments)}});return k})