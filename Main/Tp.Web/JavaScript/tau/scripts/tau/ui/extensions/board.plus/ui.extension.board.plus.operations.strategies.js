define(["Underscore","jQuery","tau/slice/api.cache.axes.instance"],function(e,t,i){var a={user:"assigneduser"},n={applyCompleteHandler:function(e,t,i){var a=i.operation,r=a.options||{},o=a.location;if(n.evictCache(a),"card"!==o)if(r.force)"added"===a.name?n.highlight(i,t,e,a):n.refresh(e);else if(i.affected$CellsArray.length>0)switch(a.name){case"added":n.generateNotificationMessage(e,a.items);break;case"notinslice":case"deleted":n.generateNotificationMessage(e,null)}},highlight:function(t,i,a,r){var o=t.dataItems;if(e.isArray(o)&&o[0]&&e.contains(["project","team"],o[0].type.toLowerCase())){var s=i.getAppStateStore(),c=i.getApplicationContextService();c.appendToContext(o[0].type.toLowerCase(),e.pluck(o,"id"),s).then(function(){a.fire("operation.highlightItems",r.items)})}else n.refresh(a,r.items)},refresh:function(e,t){t&&e.fire("operation.highlightItems",t),e.fire("refresh")},generateNotificationMessage:function(i,a){var n=this,r=t(["<h3>","Attention","</h3>","<p>","The lanes have been updated, please, ",'<a href="#" class="i-role-refresh-action">refresh the View.</a>.',"</p>"].join(""));r.delegate(".i-role-refresh-action","click",e.bind(function(e){var t=this;return e.preventDefault(),n.refresh(t,a),!1},i)),i.fire("notification",{$node:r,type:"warning"})},evictCache:function(t){e.forEach(t.items,function(e){var t=(e.data.type||e.data.data.type).toLowerCase(),n=a[t]||t;i.evict(n)})}};return n});