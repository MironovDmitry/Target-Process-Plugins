define(["Underscore","./extension.tracking.base","tracking/stores/store.mixpanel","tracking/stores/store.console","tracking/stores/store.tauspy"],function(_,Extension,MixPanel,Console,TauSpy){var storesTypeHash={mixpanel:MixPanel,console:Console,tauspy:TauSpy},emptyFn=function(){},storeApi={init:emptyFn,post:emptyFn},sid=(new Date).getTime();return Extension.extend({init:function(config){var self=this;self._super(config);var cfg=config.store||{empty:{api:storeApi,config:{}}};self.stores=[],_.each(_.keys(cfg),function(key){var store=cfg[key];if(!store.api&&storesTypeHash.hasOwnProperty(key))try{store.api=new storesTypeHash[key](store),self.stores.push(store)}catch(e){}else if(store.api)try{store.api.init(store.config),self.stores.push(store)}catch(e){}})},postData:function(data){if(!_.isObject(data))return;var self=this;for(var i=0;i<self.stores.length;i++){var store=self.stores[i];try{store.api.post(data,self.bus)}catch(e){}}},"bus track.application.context.ready":function(evt,data){this.postData({appContext:data})},"bus track.application.context.ready:last + track.context.ready":function(evt,appData,data){_.extend(data,{appContext:{id:appData._id,tau_ref:"appContext"}}),this.postData({context:data}),this.fire("context.ready",{context:{id:data._id,tau_ref:"context"},appContext:{id:appData._id,tau_ref:"appContext"},user:data.user,host:data.host})},"bus data.track":function(evt,data){this.postData(data)},"bus context.ready:last + track.node":function(evt,context,data){_.each(_.values(data),function(node){_.isArray(node)||(node=[node]),_.each(node,function(n){_.extend(n,context),n.tick=(new Date).getTime(),n.sid=sid})}),this.postData(data)},"bus context.ready:last + track.action":function(evt,context,data){_.extend(data,context),data.action=data.action||data.name,data.tick=(new Date).getTime(),data.sid=sid,this.postData({action:data})},"bus context.ready:last + track.action.id.sid":function(evt,context,data){_.extend(data,context),data.tick=(new Date).getTime(),data.sid=sid,data._id&&(data._id+="/"+sid),this.postData({action:data})},"bus context.ready:last + track.error":function(evt,context,data){_.extend(data,context),data.tick=(new Date).getTime(),this.postData({error:data})},"bus context.ready:last + track.statistics":function(evt,context,data){_.extend(data,context),data.tick=(new Date).getTime(),this.postData({statistics:data})}})})