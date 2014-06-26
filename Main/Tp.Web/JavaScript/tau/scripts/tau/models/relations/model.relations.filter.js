define(["Underscore","tau/core/model-base"],function(i,t){return t.extend({"bus public.relationsReady":function(i,t){this.fire("dataBind",{isInitiallyHidden:t.master.length+t.slave.length<2})},"bus public.relationsReady.filtered":function(t,e){var n=i.flatten([e.master,e.slave]);this._buildRelationTypes(n),this._buildEntityTypes(n),this._buildProjects(n),this._buildTeams(n)},_buildRelationTypes:function(i){var t=this._buildFilter(i,function(i){return i.relation.relationType});this.fire("relationTypes.ready",t)},_buildEntityTypes:function(i){var t=this._buildFilter(i,function(i){return i.entityType});this.fire("entityTypes.ready",t)},_buildProjects:function(t){var e=this._buildFilter(t,function(i){return i.project});e=i.chain(e).map(function(i){return i?i:{id:-1,color:"",abbreviation:"No Project",name:"No Project"}}).sortBy(function(i){return i.id}).value(),this.fire("projects.ready",e)},_buildTeams:function(t){var e=this._buildFilter(t,function(i){return i.team});e=i.chain(e).map(function(i){return i?i:{id:-1,name:"No Team"}}).sortBy(function(i){return i.id}).value(),this.fire("teams.ready",e)},_buildFilter:function(t,e){return i.chain(t).map(e).uniq(!1,function(i){return i?i.id:null}).value()}})});