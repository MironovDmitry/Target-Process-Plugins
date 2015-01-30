define(["Underscore","jQuery","tau/core/model-base","tau/models/relations/model.relations.data.fetcher"],function(e,t,i,n){return i.extend({"bus beforeInit":function(e,t){var i=t.config;this.entityId=i.context.entity.id,this.store=i.store,this.entityTypeName=i.context.entity.entityType.name,this.masterFetcher=new n(i,"master"),this.slaveFetcher=new n(i,"slave"),this._fetch()},_fetch:function(){this.store.evictProperties(this.entityId,this.entityTypeName,["masterRelations","slaveRelations"]),t.when(this.masterFetcher.fetchRelatedEntities(),this.slaveFetcher.fetchRelatedEntities()).then(e.bind(function(e,t){var i={master:e,slave:t};this.fire("public.relationsReady",i)},this))},"bus relations.changed":function(){this._fetch()},"bus public.relationsReady:last + public.relation.filter.changed:last":function(e,t,i){this.fire("public.relationsReady.filtered",{master:this._filter(t.master,i),slave:this._filter(t.slave,i)})},_filter:function(t,i){return t=e.chain(t),i.relationType&&(t=t.filter(function(e){return e.relation.relationType.id===i.relationType.id})),i.entityType&&(t=t.filter(function(e){return e.entityType.id===i.entityType.id})),i.project&&(t=t.filter(function(e){return e.project?e.project.id===i.project.id:-1===i.project.id})),i.team&&(t=t.filter(function(e){return e.team?e.team.id===i.team.id:-1===i.team.id})),t.value()}})});