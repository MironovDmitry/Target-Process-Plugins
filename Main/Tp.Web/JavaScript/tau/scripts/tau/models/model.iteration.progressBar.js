define(["Underscore","tau/core/model-base"],function(_,a){var b=a.extend({name:"Iteration Progress Bar",afterSaveRoleEffort:function(a){var b=this;b.fire("roleEffortChanged")},onDataUpdate:function(a){var b=this;b.fire("refresh")},floatToString:function(a){return a.toFixed(2).replace(".00","")},_getEffortPoints:function(){return this.config.context.getEffortPoint().shortName},onInit:function(){var a=this,b=this.config.context,c=b.entity.entityType.name,d=b.entity.id,e=["bugs-effortToDo-sum","bugs-effortCompleted-sum","userStories-effortToDo-sum","userStories-effortCompleted-sum"];a.store.unbind(a),a.store.on({eventName:"afterSave",type:"roleEffort",listener:a,filter:{assignable:{id:d}}},_.bind(a.afterSaveRoleEffort,a)),a.store.on({eventName:"afterSave",type:c,listener:a,filter:{id:d},hasChanges:[e.join("|")]},_.bind(a.onDataUpdate,a)),a.store.get(c,{id:d,fields:e},{success:a.onEntityRetrieved,scope:a}).done({success:a.done,scope:a})},onEntityRetrieved:function(a){var b=a.data,c=b["bugs-effortToDo-sum"]+b["userStories-effortToDo-sum"],d=b["bugs-effortCompleted-sum"]+b["userStories-effortCompleted-sum"],e=Math.round(100*parseFloat(c)+100*parseFloat(d))/100,f=Math.round(1e4*(d/e))/100;f=isNaN(f)?0:f,f=f>100?100:f,this.effortToDo=c,this.effortCompleted=d,this.percentCompleted=f},done:function(){this.fire("dataBind",{effortToDo:this.floatToString(this.effortToDo),effortCompleted:this.floatToString(this.effortCompleted),percentCompleted:this.percentCompleted,totalEffort:this.floatToString(this.effortToDo+this.effortCompleted),point:this._getEffortPoints()})}});return b})