define(["Underscore","tau/configurator","tests/common/service.mock"],function(_,a,b){var c=function(){module("[rules/targetprocess]",{setup:function(){var c=this;c.serviceMock=new b,c.notificationServiceMock={notifyComment:function(a){this.__args=Array.prototype.slice.apply(arguments)},verify:function(a){same(this.__args,a,"Notify is not called")}},a.setService(c.serviceMock),a.setNotificationService(c.notificationServiceMock),a.enableRules(),this.repository=a.getProxy(),this.store=a.getStore()},teardown:function(){a.disableRules(),a.clearSingles(),delete this.serviceMock,delete this.notificationServiceMock}}),test("[comment/description][auto-action-after-save][no settings]",function(){var a=[{__type:"comment",id:1}];this.repository.registerData(a),this.serviceMock.registerSaveCommand({config:{id:1,$set:{description:"test"},fields:["id"]},returnedData:{id:1}}),this.store.save("comment",{id:1,$set:{description:"test"}}).done(),this.serviceMock.verify(!0),this.notificationServiceMock.verify()}),test("[comment/description][auto-action-after-save][notification settings]",function(){var a=[{__type:"comment",id:1}];this.repository.registerData(a),this.serviceMock.registerSaveCommand({config:{id:1,$set:{description:"test"},fields:["id"]},returnedData:{id:1}}),this.store.on({eventName:"beforeSave",type:"comment",listener:this},function(a){var b=a.data;b.cmd["comment-practices-notification-opts"]={Owner:!0,Assigned:!0,Team:!0}}),this.store.save("comment",{id:1,$set:{description:"test"}}).done(),this.serviceMock.verify(!0),this.notificationServiceMock.verify([1,{Owner:!0,Assigned:!0,Team:!0}]),this.store.unbind(this)}),test("[task/entityState][auto-include-before-save]",function(){var a=[{__type:"userStory",id:10,tasks:[{id:1}],entityState:{__type:"entityState",id:101,name:"story open",isInitial:!0,isFinal:!1,isPlanned:!1,isCommentRequired:!1}},{__type:"task",id:1,name:"Task 1",entityState:{id:1}}];this.repository.registerData(a),this.serviceMock.registerSaveCommand({config:{id:1,$set:{entityState:{id:2}},fields:["id",{userStory:["id","tasks-effort-sum","tasks-effortToDo-sum","effort","effortToDo","effortCompleted","timeSpent","timeRemain","tasks-count",{entityState:["id","name","isInitial","isFinal","isPlanned","isCommentRequired"]}]}]},returnedData:{id:1}}),this.store.save("task",{id:1,$set:{entityState:{id:2}},fields:["id"]}).done(),this.serviceMock.verify(!0)}),test("[entityState/tasks-effort][auto-include-before-save]",function(){var a=[{__type:"userStory",id:10,"tasks-effortToDo-sum":26,tasks:[{id:1}],entityState:{__type:"entityState",id:101,name:"story open",isInitial:!0,isFinal:!1,isPlanned:!1,isCommentRequired:!1}},{__type:"task",id:1,name:"Task 1",entityState:{id:1}}];this.repository.registerData(a),this.serviceMock.registerSaveCommand({config:{id:10,$set:{entityState:{id:2}},fields:["id","tasks-effortToDo-sum"]},returnedData:{id:10}}),this.store.save("userStory",{id:10,$set:{entityState:{id:2}},fields:["id"]}).done(),this.serviceMock.verify(!0)});var c=function(a,b){test("[roleEffort/effort][auto-include-before-save][auto-action-after-save:"+a.toUpperCase()+"]",function(){var c=[{__type:a,id:10,roleEfforts:[{id:1}],effort:100,effortToDo:0,effortCompleted:100,timeSpent:20,timeRemain:0},{__type:"roleEffort",id:1,effort:50}];_(b).each(function(a,b){if(!_.isSimple(a)){var d=_.getFieldName(a);c[0][d]={id:b}}}),this.repository.registerData(c),this.serviceMock.registerSaveCommand({config:{id:1,$set:{effort:70},fields:["id",{assignable:["id","effort","effortToDo","effortCompleted","timeSpent","timeRemain"]}]},returnedData:{id:1}}),this.serviceMock.registerRefreshCommand({config:{id:10,fields:b},returnedData:{id:10}}),this.store.save("roleEffort",{id:1,$set:{effort:70},fields:["id"]}).done(),this.serviceMock.verify(!0)})};c("task",["id",{userStory:["id","effort","effortToDo","effortCompleted","timeSpent","timeRemain","tasks-count","tasks-effort-sum","tasks-effortToDo-sum"]}]),c("userStory",["id",{iteration:["id","userStories-effortToDo-sum","userStories-effortCompleted-sum"]},{release:["id","userStories-effortToDo-sum","userStories-effortCompleted-sum"]},{feature:["id","userStories-count","effort","effortToDo","effortCompleted","timeSpent","timeRemain"]}]),c("bug",["id",{iteration:["id","bugs-effortToDo-sum","bugs-effortCompleted-sum"]},{release:["id","bugs-effortToDo-sum","bugs-effortCompleted-sum"]}])};return{run:c}})