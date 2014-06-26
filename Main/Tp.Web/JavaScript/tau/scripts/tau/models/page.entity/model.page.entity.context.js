define(["Underscore","tau/core/extension.base","tau/models/page.entity/entity.context.factory"],function(t,e,i){return e.extend({name:"Entity","bus initialize":function(t,e){e&&e.context.configurator.getStore().evictData()},"bus beforeInit":function(e,n){var r=t.isObject(n.config.entity)?n.config.entity:{id:n.config.id,type:n.config.entity},o=n.config.context.configurator,a=o.getStore().getTypes().findByKeyword(r.type);if(!a){var d=new Error(t.sprintf('Entity type "%s" does not exist',r.type));return void this.fire("loadingError.ready",d)}var c={id:r.id,entityType:{name:a.name}},y=o.getBoardCacheService(),f=y.getData()||{};r.id==f.id&&f.name&&(o.getStore().registerWithEvents({id:f.id,name:f.name,__type:r.type}),y.evict()),r.id==f.id&&(f.projectId||f.teamId)&&(c.projectId=f.projectId||null,c.teamId=f.teamId||null,y.evict()),this.fire("configurator.ready",o),i.create(c,o).done(t.bind(function(t){this.fire("entity.ready",t.entity),this.fire("contextRetrieved",{context:t})},this)).fail(t.bind(function(t){this.fire("loadingError.ready",t)},this))},"bus entity.ready + afterRender":function(t,e){this.fire("application.entity.loaded",{id:e.id,entity:e.entityType.name})}})});