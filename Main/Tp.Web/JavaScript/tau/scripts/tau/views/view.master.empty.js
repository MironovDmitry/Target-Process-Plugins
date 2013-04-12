define(["Underscore","tau/core/view-base","tau/components/component.container","tau/configurations/empty.container.config"],function(_,ViewBase,containerComponent,factoryConfig){return ViewBase.extend({init:function(config){this._super(config)},initialize:function(){},"bus view.dom.ready":function(e){this.container.fire("view.dom.ready",e.data)},"bus beforeInit":function(e,initConfig){var self=this,config=initConfig.config,containerConfig=_.extend(config,factoryConfig.getMasterConfig(config)),c=self.container=containerComponent.create({name:"empty page container",layout:containerConfig.layout,template:containerConfig.template,store:config.store,extensions:_.union([],containerConfig.extensions||[]),context:config.context});c.on("afterInit",self["container afterInit"],self),c.on("afterRender",self["container afterRender"],self),c.on("componentsCreated",self["container componentsCreated"],self),self.fire("component.ready",c),c.initialize(containerConfig)},"container afterInit":function(evt){this.fireAfterInit()},"container componentsCreated":function(evt){this.fire(evt.name,evt.data)},"container afterRender":function(evt){this.fireBeforeRender(),this.element=evt.data.element,this.fireAfterRender()},lifeCycleCleanUp:function(){this.destroyContainer(),this._super()},destroyContainer:function(){if(!this.container)return;this.container.destroy(),this.container=null},destroy:function(){this.destroyContainer(),this._super()}})})