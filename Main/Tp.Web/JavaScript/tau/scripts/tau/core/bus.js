define(["Underscore","tau/core/class","tau/core/bus.reg","tau/core/event","tau/core/event.queued"],function(_,Class,busRegistry,event,EventQueued){function debug(bus,arguments,pattern){var data=arguments[1],name=arguments[0];bus.name.match(/(application board)/)&&console.log(bus.name,"["+bus.id+"]",":",name,data||"")}var generateFire=function(eventInterface){return function(eventName,data,sender){this.globalBus&&this.globalBus.fire(eventName,data,this);var args=eventInterface.prototype.fire.apply(this,arguments);return eventName==="destroy"&&(busRegistry.onDestroy(this),delete this.globalBus),args}},queuedFire=generateFire(EventQueued),Bus=Class.extend({globalBus:null,init:function(config){config=config||{};if(config["queue.bus"]||config.queuedBus)this.fire=queuedFire;this.globalBus=config&&config.globalBus?config.globalBus:null,this.name=config&&config.name?config.name:_.uniqueId()+"",_.defaults(config,{id:_.uniqueId("bus_")}),this.id=config.id,busRegistry.onCreate(this)},initialize:function(config){this.fire("initialize",config)},destroy:function(){this.fire("destroy"),delete this.globalBus},getGlobalBus:function(){return this.globalBus}});return event.implementOn(Bus.prototype),Bus.prototype.fire=generateFire(event),Bus})