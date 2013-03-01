define(["Underscore","tau/models/propertyLists/model.propertyList.base","tau/utils/utils.date"],function(_,ModelProperyListBase,dateUtils){return ModelProperyListBase.extend({name:"team-iteration-list",propertyType:"teamIteration",onInit:function(){var entity=this.config.context.entity,self=this;this.store.get(entity.entityType.name,{id:entity.id,fields:["id",{team:["id",{teamIterations:["id","name","startDate","endDate","isCurrent"]}]}]}).done({success:function(result){result[0].data.team=result[0].data.team||{};var team=_.defaults(result[0].data.team,{teamIterations:[]});self.processData.call(self,team)}})},processData:function(team){var config=this.config,currentStateId=this.getCurrentEntityId(),availableToSelect=[],mode=config.mode||"short",fnFilter=null,currentTeamIteration=null,currentDate=this.config.context.configurator.getCurrentDate(),fnFilterFull=function(item){item.id!==currentStateId&&availableToSelect.push(item)};mode==="full"?fnFilter=fnFilterFull:fnFilter=function(item){var start=dateUtils.parse(item.startDate),end=dateUtils.parse(item.endDate);item.id!==currentStateId&&(start>=currentDate||end>=currentDate)&&availableToSelect.push(item)},_.each(team.teamIterations,fnFilter),availableToSelect.length===0&&(fnFilter=fnFilterFull,_.each(team.teamIterations,fnFilter));var resultTeamIterations=[];_(availableToSelect).each(function(teamIterationItem){var start=dateUtils.parse(teamIterationItem.startDate),end=dateUtils.parse(teamIterationItem.endDate),isCurrent=teamIterationItem.isCurrent,name=teamIterationItem.name+(isCurrent?" (current)":"");!currentTeamIteration&&isCurrent&&(currentTeamIteration=teamIterationItem),resultTeamIterations.push({id:teamIterationItem.id,name:name,description:"From "+dateUtils.format.date.short(start)+" to "+dateUtils.format.date.short(end)})});var fullLength=team.teamIterations.length,tailLength=currentStateId?fullLength-1:fullLength,data={nullableValue:currentStateId!==null&&this.propertyIsNotEmpty(),states:resultTeamIterations,completed:0===resultTeamIterations.length-tailLength};currentTeamIteration&&(data.defaultValue=currentTeamIteration.id),this.fire("dataBind",data)}})})