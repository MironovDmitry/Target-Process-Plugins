define(["Underscore","jQuery","tau/core/extension.base","tau/core/termProcessor","tau/configurations/converters/converter.context","tau/services/service.entity-navigation"],function(e,t,n,i,a,o){return n.extend({"bus beforeInit":function(t,n){var o=n.config.options||{},r=n.config.context.entity,c=n.config.context.applicationContext.acid,s=n.config.context,u=n.config.context.configurator;n.config.useGlobalEntityViewer||this.fire("viewerBus.ready",this.bus);var y=n.config.context.applicationContext.culture;this.fire("culture.ready",y),o=e.defaults(o,{items:[]}),o.items=a.convert(o.items,e.pluck(s.getPractices(),"name"),s.getEdition()),0==o.items.length?this.fire("dataBind",{isEmpty:!0,types:[],entityTypes:[]}):this.getData(u,r,c,o).done(e.bind(function(t){var a=new i(n.config.context.getTerms()),o={};e.each(t,function(t,n){t.entityType={name:t.entityType,title:a.resolve(t.entityTypeTitle)},0===n&&(t.entityType.active=!0),"release"==r.entityType.name&&"iteration"==t.entityType.name.toLowerCase()&&(t.template.items=e.reject(t.template.items,function(e){return"release"==e.id.toLowerCase()})),o[t.entityType.name]=t}),this.fire("model.dataItems.template.ready",{types:o}),this.fire("dataBind",{types:o,entityTypes:e.pluck(o,"entityType"),mainEntity:r})},this))},"bus beforeInit:last + cardDataToShow.ready":function(e,t,n){var i=t.config.context.configurator,a=i.service("navigator");(new o).navigateToEntityView(a,n.entityId,n.entityType)},getData:function(n,i,a,o){var r=[],c=o.items;r.push(function(t){var o={global:{acid:a},entityType:i.entityType.name,entityId:i.id},r=n.getSliceFactory().create({definition:o});r.viewActions().done(function(n){var i=[];e.forEach(c,function(t){var a=e.find(n.data.data.types,function(e){return e.name.toLowerCase()==t.entityType.toLowerCase()});a&&i.push(a)});var a=e.map(i,function(e){return{templateAction:"viewDataTemplate",saveAction:"viewAddData",entityType:e.name,entityTypeTitle:e.title,slice:r}});t(!1,e.compact(a))})}),r.push(e.bind(function(t,n){return this.getTemplates(t).pipe(function(i){t=e.map(t,function(e,t){return e.template={items:i[t]},e}),n(!1,t)})},this));var s=t.Deferred();return e.waterfall(r,function(e,t){s.resolve(t)}),s},getTemplates:function(n){var i=[],a=t.Deferred();return e.forEach(n,function(e){i.push(function(t){var n={$set:{entityType:e.entityType}};e.slice[e.templateAction](n).done(function(e){t(!1,e.data)}).fail(function(){t(!1,null)})})}),e.parallel(i,function(t,n){a.resolve(e.compact(n))}),a}})});