define(["Underscore","tau/core/model-base","tau/utils/utils.htmlConverter"],function(_,a,b){var c=function(a){this.model=a};c.prototype={onGetDescription:function(a){var b=a.data;this.id=b.id,this.description=b.description},done:function(a){var c={description:b.fromSourceToHtml(this.description)};this.model.bus.fire("dataBind",c)}};var d=a.extend({name:"Description",bindCurrentEntityChanges:function(a,b){a=_.isArray(a)?a:[a],b=b||{before:"beforePropertyChanged",after:"afterPropertyChanged"};var c=this.config.context.entity.id;this.listenedEntities=this.listenedEntities||{};if(this.listenedEntities[c])return;this.listenedEntities[c]=!0;var d=this,e=function(c){var e=c.data;d.isPropertyChanged(a,e)&&d.fire(b.after,e)},f=function(c){var e=c.data;d.isPropertyChanged(a,e)&&d.fire(b.before,e)},g="general";d.store.on({eventName:"beforeSave",type:g,listener:this,filter:{id:c}},f),d.store.on({eventName:"afterSave",type:g,listener:this,filter:{id:c}},e)},onInit:function(){var a=new c(this),b=this.config.context,d=b.entity.entityType.name,e=b.entity.id;this.bindCurrentEntityChanges("description",{before:"prepareChanges",after:"applyChanges"});var f={id:e,fields:["id","description"]};this.store.get(d,f,{scope:a,success:a.onGetDescription}).done({success:a.done,scope:a})},destroy:function(){this.listenedEntities={},this._super()}});return d})