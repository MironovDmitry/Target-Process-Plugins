define(["Underscore","tau/core/extension.base"],function(t,e){var s=function(t,e){window.appIsInDebugMode&&window.console&&console.log("model.page.entity.comet: "+t,e)};return e.extend({"bus configurator.ready:last + entity.ready":function(e,s,i){s.getAppStateStore().get({fields:["acid"],callback:t.bind(function(t){this.startCometLoop(s,i,t.acid)},this)})},"bus destroy":function(){this.lastChanges=null,this._stopSubscription(),this._super()},startCometLoop:function(e,i,n){var o=[{resourceType:i.entityType.name,filter:"? Id is "+i.id},{acid:n,resourceType:"assignment",filter:"? assignable.Id is "+i.id},{acid:n,resourceType:"roleEffort",filter:"? assignable.Id is "+i.id}];this._stopSubscription(),this.lastChanges={},this.subscription=e.getComet().listen("resource",t.map(o,function(t){return{parameters:t}})).on({callback:this.safeCallback(function(t){s("resource comet: ",t),this.handle(t,e)})}).aborted(t.bind(function(){this._stopSubscription(),t.defer(t.bind(this.startCometLoop,this),e,i,n)},this)).start()},_stopSubscription:function(){this.subscription&&this.subscription.stop()},handle:function(e,i){var n=this.processResponse(e),o=n.modification.toLowerCase(),a=n.data,r=n.reason;switch(s("type: ",o),o){case"updated":a.__type=n.type,r.push("id"),r.push("__type"),a.assignable&&r.push("assignable"),a=t.pick(a,r),s("changes: ",r),i.getStore().registerWithEvents(a);break;case"removed":a.__type=n.type,i.getStore().removeWithEvents(a,r);break;case"added":a.__type=n.type,i.getStore().registerWithEvents(a)}},processResponse:function(e){var s=e.data,i=e.timestamp,n=s.type+s.id,o=t.map(s.reason,t.toCamelCase);t.has(this.lastChanges,n)||(this.lastChanges[n]={});var a=this.lastChanges[n];return s.reason=t.filter(o,function(t){var e=i>(a[t]||0);return e&&(a[t]=i),e}),s}})});