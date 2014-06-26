define(["tau/core/extension.base","tau/core/bus","tau/services/service.entity-navigation"],function(e,t,i){return e.extend({init:function(e){this._super.apply(this,arguments);var t=e.context.configurator,i=this._createViewerBus(t);this._registerViewerBus(t,i),this._initViewer(t,i)},_createViewerBus:function(e){var i=new t({name:"entityViewer",globalBus:e.getGlobalBus(),"queue.bus":!0});return this.on("destroy",this._destroyViewerBus.bind(this,i),this),i},_destroyViewerBus:function(e){e.removeAllListeners(this),e.destroy()},_registerViewerBus:function(e,t){e.getComponentBusRegistry().register(t),t.on("destroy",function(){e.getComponentBusRegistry().unregister(this)})},_initViewer:function(e,t){t.on("cardDataToShow.ready",function(t,n){var r=e.service("navigator");(new i).navigateToEntityView(r,n.entityId,n.entityType)},this)}})});