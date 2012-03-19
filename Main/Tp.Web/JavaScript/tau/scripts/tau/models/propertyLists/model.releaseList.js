define(["Underscore","tau/models/propertyLists/model.propertyList.base","tau/configurator","tau/store/types","tau/utils/utils.date"],function(_,a,b,c,d){return a.extend({name:"release-list",propertyType:"release",onInit:function(){var a=this.config.context.entity,b=this;this.store.get(a.entityType.name,{id:a.id,fields:["id",{project:["id",{releases:["id","name","startDate","endDate"]}]}]}).done({success:function(a){var c=a[0].data.project;b.processData.call(b,c)}})},"bus beforeSave":function(a){var b=a.data.cmd,c=b.$set,d=b.fields=b.fields||[];this.entityContainIteration()&&d.push({iteration:["id","name"]})},entityContainIteration:function(){var a=c.findByKeyword(this.config.context.entity.entityType.name);return a.refs.hasOwnProperty("iteration")},getRequiredFields:function(){return[{entityState:["id"]}]},convertReleaseToDto:function(a){var b=this.isCurrentRelease(a),c=a.name+(b?" (current)":"");return{id:a.id,name:c,description:"From "+d.format.date.short(a.startDate)+" to "+d.format.date.short(a.endDate)}},isOldRelease:function(a){var c=b.getCurrentDate();return a.endDate<c},isCurrentRelease:function(a){var c=b.getCurrentDate();return a.startDate<=c&&c<=a.endDate},isCurrentOrFeatureRelease:function(a){return!this.isOldRelease(a)},selectOldReleases:function(){return _.select(this.projectReleaseList,this.isOldRelease,this)},selectCurrentAndFeatureReleases:function(a){return _.select(this.projectReleaseList,this.isCurrentOrFeatureRelease,this)},getCurrentRelease:function(){return _.detect(this.projectReleaseList,this.isCurrentRelease,this)},initProjectReleaseList:function(a){var b=this.getCurrentEntityId(),c=_.select(a.releases,function(a){return a.id!=b});_.each(c,function(a){a.startDate=d.parse(a.startDate),a.endDate=d.parse(a.endDate)}),this.projectReleaseList=c},processData:function(a){this.initProjectReleaseList(a);var b=this.getCurrentEntityId(),c=this.config,d=c.mode||"short",e=this.selectCurrentAndFeatureReleases(),f=[],g=this.selectOldReleases(),h=g.length==0;d=="short"&&e.length>0?f=e:(d=="full",f=f.concat(g,e),h=!0),f=_.map(f,this.convertReleaseToDto,this);var i={nullableValue:b!==null&&this.config.context.entity.entityType.name.toLowerCase()!=="iteration"&&this.propertyIsNotEmpty(),states:f,completed:h},j=this.getCurrentRelease();j&&(i.defaultValue=j.id),this.fire("dataBind",i)}})})