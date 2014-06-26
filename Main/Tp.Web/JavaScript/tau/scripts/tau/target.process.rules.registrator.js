define(["Underscore","tau/store/types.targetprocess"],function(e,t){return{typeContainSimpleField:function(t,o){return e.find(t.simpleFields,function(e){return e===o})},registerRules:function(o,r){this.registeredEntityTypes={},this.rules=o,e.each(t.getDictionary(),this.registerType,this),o.register({type:"feature",changes:["initialEstimate"],fields:["timeRemain"]}),o.register({type:"iteration",changes:["startDate"],fields:["endDate"]}),o.register({type:"iteration",changes:["endDate"],fields:["startDate"]}),o.register({type:"teamIteration",changes:["startDate"],fields:["endDate"]}),o.register({type:"teamIteration",changes:["endDate"],fields:["startDate"]}),o.register({type:"testPlanRun",changes:["release"],fields:[{build:["id","name"]}]}),o.register({type:"testPlanRun",changes:["iteration","teamIteration"],fields:[{build:["id","name"]}]}),o.registerRule({name:"auto-include-before-save",type:"roleEffort",changes:["effort"],fields:[{assignable:["id","effort","effortToDo","effortCompleted","timeSpent","timeRemain"]}]}),o.registerRule({name:"auto-include-before-save",type:"userStory",changes:["release","iteration","teamIteration"],fields:[{tasks:[{release:["id","name"]},{iteration:["id","name"]},{teamIteration:["id","name"]}]}]}),o.registerRule({name:"auto-include-before-save",type:"task",changes:["entityState"],fields:[{release:["id","name"]},{iteration:["id","name"]},{teamIteration:["id","name"]}]}),o.registerRule({name:"auto-action-after-save",type:"assignable",changes:["times"],action:function(e){e.store.refresh("assignable",{id:e.data.id,fields:["effortCompleted","effortToDo","timeSpent","timeRemain",{roleEfforts:["id","effort","effortToDo"]}]}).done()}}),o.registerRule({name:"auto-action-after-save",type:"feature",changes:["userStories"],action:function(e){e.store.refresh("feature",{id:e.data.id,fields:["effortCompleted","effortToDo","timeSpent","timeRemain","userStories-count","effort",{roleEfforts:["id","effort","effortToDo"]}]}).done()}}),o.registerRule({name:"auto-action-after-save",type:"iteration",changes:["userStories|bugs"],action:function(e){e.store.refresh("iteration",{id:e.data.id,fields:["bugs-effortToDo-sum","bugs-effortCompleted-sum","userStories-effortToDo-sum","userStories-effortCompleted-sum"]}).done()}}),o.registerRule({name:"auto-action-after-save",type:"teamIteration",changes:["userStories|bugs"],action:function(e){e.store.refresh("teamIteration",{id:e.data.id,fields:["bugs-effortToDo-sum","bugs-effortCompleted-sum","userStories-effortToDo-sum","userStories-effortCompleted-sum"]}).done()}}),o.registerRule({name:"auto-action-after-save",type:"release",changes:["userStories"],action:function(e){e.store.refresh("release",{id:e.data.id,fields:["bugs-effortToDo-sum","bugs-effortCompleted-sum","userStories-effortToDo-sum","userStories-effortCompleted-sum",{features:["effortToDo","effortCompleted","userStories-count"]}]}).done()}}),o.registerRule({name:"auto-action-after-save",type:"userStory",changes:["tasks"],action:function(e){var t=e.data,o=t.cmd?t.cmd.type:t.obj?t.obj.type:t.type,r=t.cmd?t.cmd.config.id:null;"task"!==o||r?e.store.refresh("userStory",{id:e.data.id,fields:["effort","effortToDo","effortCompleted","timeSpent","timeRemain","tasks-count","tasks-effort-sum","tasks-effortToDo-sum"]}).done():e.store.refresh("userStory",{id:e.data.id,fields:["tasks-count","tasks-effort-sum","tasks-effortToDo-sum",{entityState:["id","name"]}]}).done()}}),o.registerRule({name:"auto-include-before-save",type:"task",changes:["entityState"],fields:[{userStory:["id","tasks-effort-sum","tasks-effortToDo-sum","effort","effortToDo","effortCompleted","timeSpent","timeRemain","tasks-count",{entityState:["id","name","isInitial","isFinal","isPlanned","isCommentRequired"]}]}]}),o.registerRule({name:"auto-include-before-save",type:"userStory",changes:["entityState"],fields:["tasks-effortToDo-sum",{feature:["effortToDo","effortCompleted","userStories-count"]},{iteration:["userStories-effortToDo-sum","userStories-effortCompleted-sum"]},{teamIteration:["userStories-effortToDo-sum","userStories-effortCompleted-sum"]},{release:["bugs-effortToDo-sum","bugs-effortCompleted-sum","userStories-effortToDo-sum","userStories-effortCompleted-sum",{features:["effortToDo","effortCompleted","userStories-count"]}]}]}),o.registerRule({name:"auto-action-after-save",type:"feature",changes:["userStories"],action:function(e){e.store.refresh("feature",{id:e.data.obj.id,fields:["effortToDo","effortCompleted","userStories-count"]}).done()}}),o.registerRule({name:"auto-include-before-save",type:"bug",changes:["entityState"],fields:[{iteration:["bugs-effortToDo-sum","bugs-effortCompleted-sum"]},{teamIteration:["bugs-effortToDo-sum","bugs-effortCompleted-sum"]}]}),o.registerRule({name:"auto-action-after-save",type:"roleEffort",changes:["effort"],action:function(t){var o=t.store,r=t.data.obj;o.get(r.type,{id:r.id,fields:[{assignable:["id"]}]}).done({success:function(t){t=t[0];var r=t.data.assignable.id,s=t.data.assignable.__type,i={task:[{userStory:["id","effort","effortToDo","effortCompleted","timeSpent","timeRemain","tasks-count","tasks-effort-sum","tasks-effortToDo-sum",{roleEfforts:["effort","effortToDo"]}]}],userStory:[{iteration:["userStories-effortToDo-sum","userStories-effortCompleted-sum"]},{teamIteration:["userStories-effortToDo-sum","userStories-effortCompleted-sum"]},{release:["userStories-effortToDo-sum","userStories-effortCompleted-sum"]},{feature:["userStories-count","effort","effortToDo","effortCompleted","timeSpent","timeRemain"]}],bug:[{iteration:["bugs-effortToDo-sum","bugs-effortCompleted-sum"]},{teamIteration:["bugs-effortToDo-sum","bugs-effortCompleted-sum"]},{release:["bugs-effortToDo-sum","bugs-effortCompleted-sum"]}]},a=i[s];if(a){var f=e(a).filter(function(t){var i=e.getFieldName(t);return o.isPropertyInitialized(r,s,i)});f.length&&o.refresh(s,{id:r,fields:f}).done()}}})}}),o.registerRule({name:"auto-action-after-save",type:"comment",action:function(t){var o=t.data,s=o.cmd["comment-practices-notification-opts"];if(s&&e(s).keys().length){var i=r.getNotificationService();i.notifyComment(o.id,s)}}})},registerType:function(t){var o=this.registeredEntityTypes,r=this.rules;if(!o.hasOwnProperty(t.name)){o[t.name]=!0,e.each(t.aliases,function(e){o[e]=!0});var s="endDate";t.refs.hasOwnProperty("entityState")&&this.typeContainSimpleField(t,s)&&(r.register({type:t.name,changes:["entityState"],fields:["endDate","leadTime","cycleTime"]}),r.register({type:t.name,changes:["entityState"],fields:[{roleEfforts:["effort","effortToDo"]}]}))}}}});