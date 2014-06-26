define(["Underscore","./model.choice.base","tau/store/types","tau/utils/utils.date"],function(e,t,n,i){return t.extend({name:"release-list",propertyType:"release",onInit:function(){var t=this.config.context.entity,n=this;this.store.get(t.entityType.name,{id:t.id,fields:["id",{project:["id",{releases:["id","name","isCurrent","startDate","endDate"]}]}]}).done({success:function(t){t[0].data.project=t[0].data.project||{};var i=e.defaults(t[0].data.project,{releases:[]});n.processData(i)}})},"bus beforeSave":function(e){var t=e.data.cmd;t.fields=t.fields||[],this.entityContainIteration()&&t.fields.push({iteration:["id","name"]})},entityContainIteration:function(){var e=n.findByKeyword(this.config.context.entity.entityType.name);return e.refs.hasOwnProperty("iteration")},getRequiredFields:function(){return[{entityState:["id"]}]},convertReleaseToDto:function(e){return{id:e.id,name:e.name,description:"From "+i.format.date.short(e.startDate)+" to "+i.format.date.short(e.endDate),isCurrent:e.isCurrent}},isOldRelease:function(e){var t=this.config.context.configurator.getCurrentDate();return e.endDate<t},isCurrentRelease:function(e){return e.isCurrent},isCurrentOrFeatureRelease:function(e){return!this.isOldRelease(e)},selectOldReleases:function(){return e.select(this.projectReleaseList,this.isOldRelease,this)},selectCurrentAndFeatureReleases:function(){return e.select(this.projectReleaseList,this.isCurrentOrFeatureRelease,this)},getCurrentRelease:function(){return e.detect(this.projectReleaseList,this.isCurrentRelease,this)},initProjectReleaseList:function(t){var n=this.getCurrentEntityId(),s=e.select(t.releases,function(e){return e.id!=n});e.each(s,function(e){e.startDate=i.convertToTimezone(e.startDate),e.endDate=i.convertToTimezone(e.endDate)}),this.projectReleaseList=s},processData:function(t){this.initProjectReleaseList(t);var n=this.config,i=n.mode||"short",s=this.selectCurrentAndFeatureReleases(),r=[],a=this.selectOldReleases(),o=0===a.length;"short"==i&&s.length>0?r=s:(r=r.concat(a,s),o=!0),r=e.map(r,this.convertReleaseToDto,this);var u=this.getCurrentRelease(),l={nullableValue:this.isNullableValue(),states:r,completed:o};u&&(l.defaultValue=u.id),this.fire("dataBind",l)},isNullableValue:function(){return this._super()&&"iteration"!==this.config.context.entity.entityType.name.toLowerCase()}})});