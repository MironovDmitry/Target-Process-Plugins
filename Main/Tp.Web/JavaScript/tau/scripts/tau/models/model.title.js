define(["tau/core/model-base","tau/configurator"],function(a,b){var c=function(a,b){this.model=a,this.appContext=b};c.prototype={onGetEntity:function(a){this.entity=a.data},setProcess:function(a){this.process=a},setProject:function(a){this.project=a},"get task subPath":function(){return"Project/Planning/UserStory"},done:function(){var a=b.getCurrentAcid()||this.appContext.acid,c={entity:this.entity,process:this.process,project:this.project,appPath:b.getApplicationPath(),url:b.getApplicationPath()+"/RestUI/TpView.aspx?acid="+a+"#"+this.entity.__type.toLowerCase()+"/"+this.entity.id};this.model.fire("dataBind",c)}};var d=a.extend({onInit:function(){var a=this,b=a.config.context,d=b.entity.entityType.name,e=b.entity.id,f=b.applicationContext.processes[0],g=new c(a,b.applicationContext);g.setProcess(f),g.setProject(b.applicationContext.selectedProjects[0]),a._signed||(a._signed=!0,a.store.on({eventName:"afterSave",type:d,listener:a,filter:{id:e},hasChanges:["name"]},function(){a.bus.fire("refresh")})),a.store.get(d,{id:e,fields:["id","name"]},{scope:g,success:g.onGetEntity}).done({scope:g,success:g.done})}});return d})