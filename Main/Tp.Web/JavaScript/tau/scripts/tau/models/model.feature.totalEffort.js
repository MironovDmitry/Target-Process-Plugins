define(["tau/core/model-base","tau/core/termProcessor"],function(t,e){var i=t.extend({onInit:function(){var t=this,e=t.config.context,i=e.entity.entityType.name,s=e.entity.id;t.store.unbind(t),t.store.on({eventName:"afterSave",type:i,filter:{id:s},hasChanges:["userStories|effort"],listener:t},_.bind(t.onDataUpdated,t)),t.store.get(i,{id:s,fields:["id","userStories-count","effort"]},{scope:this,success:this.onGetEntity}).done({scope:this,success:this.onRequestCompleted})},onDataUpdated:function(){this.fire("refresh")},floatToString:function(t){return t.toFixed(2).replace(".00","")},_getEffortPoints:function(){return this.config.context.getEffortPoint().shortName},onGetEntity:function(t){if(this.config){var i=t.data,s=this.config.context.getTerms(),o=new e(s),r=i["userStories-count"];r>0?(this.userStoriesCount=r,this.featureTerm=o.getTerms("feature").name,this.userStoriesTerm=o.getTerms("userStory").names,this.effort=this.floatToString(i.effort),this.point=this._getEffortPoints(),this.hidden=!1):(this.label="",this.hidden=!0)}},onRequestCompleted:function(){this.fire("dataBind",{userStoriesCount:this.userStoriesCount,featureTerm:this.featureTerm,userStoriesTerm:this.userStoriesTerm,effort:this.effort,point:this.point,hidden:this.hidden})}});return i});