define(["Underscore","tau/components/extensions/component.extension.base","tau/configurator","tau/utils/utils.date"],function(a,b,c,d){return b.extend({showTestCaseEditor:function(){var a=this.config.context,b=a.assignable.id,c=this;window.processConfigurations||(window.processConfigurations={}),Ext.WindowMgr.zseed=9999999;var d=new Tp.controls.TestCaseCreateEditorWindow({userStoryId:b,processId:a.applicationContext.processes[0].id});d.show(),d.on("saved",function(){c.fire("testCaseWasAdded",{assignable:{id:b}})})},"bus action.add":function(){this.showTestCaseEditor()}})})