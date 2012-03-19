define(["Underscore","tau/models/propertyLists/model.propertyList.base"],function(_,a){return a.extend({name:"priority-list-model",propertyType:"priority",onInit:function(){var a=this,b=function(b){var c=b[0].data;a.assignable=c,a.store.get(a.propertyType,a.createGetPrioritiesCommand()).done({success:a.onDataRetrieved.tauCreateDelegate(a)})};this.getAssignable(b)},getRequiredFields:function(){return[{entityType:["id"]}]},createGetPrioritiesCommand:function(){return{fields:["id","name","importance",{entityType:["id"]}]}},processData:function(a){var b=this.getCurrentEntityId(),c=this.assignable.entityType.id,d=[];_.each(a,function(a){a.id!==b&&a.entityType.id===c&&d.push({id:a.id,name:a.name,importance:a.importance||0})}),d.sort(function(a,b){return a.importance-b.importance}),this.fire("dataBind",{states:d,completed:!0,nullableValue:!1})}})})