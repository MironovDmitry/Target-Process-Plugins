define(["Underscore","tau/models/dataProviders/model.provider.groups.base"],function(a,b){return b.extend({fetch:function(b,c,d){var e=a(c).pluck("projectId"),f=this.config.store,g={fields:[{process:["id"]}],list:!0};f.get("projects",g,{scope:this,success:this.onProjects(e,b,d)}).done()},onProjects:function(b,c,d){return function(e){var f=a(e.data).chain().select(function(c){return a(b).include(c.id)}).map(function(a){return a.process.id}).uniq().value(),g=function(b){var c=(b.entityType.name||"").toLowerCase();return c==="userstory"&&a(f).include(b.process.id)};return this._fetchState(c,g,d)}},fetchForGroup:function(a,b){}})})