define(["Underscore","tau/core/view-base","tau/components/component.container","tau/configurations/factory.container.config","tau/components/extensions/customField/extension.customField.multipleEntities.count.label.setter"],function(_,ViewBase,containerComponent,factoryConfig,MultipleEntitiesCountExtension){return ViewBase.extend({init:function(config){this._super(config),this.config.placeholder&&this.config.placeholder.addClass("ui-entity-view")},"container afterInit":function(evt){this.fireAfterInit()},initialize:function(){},"container afterRender":function(evt){this.fireBeforeRender(),this.element=evt.data.element,this.config.placeholder&&this.config.placeholder.append(this.element),this.config.placeholder&&this.config.placeholder.addClass("tau-entity-loaded"),this.fireAfterRender()},initializeContainer:function(config){this.container&&this.container.initialize(config)},getStateFields:function(config){var states={};config.hasOwnProperty("stateName")&&(states[config.stateName]=config);var self=this,children=[];if(_.isArray(config.children))children=config.children;else if(_.isArray(config.tabs)){var items=_.pluck(config.tabs,"items");children=_.flatten(items)}return _.each(children,function(children){_.extend(states,self.getStateFields(children))}),states},"bus contextRetrieved":function(evt){var self=this,config=evt.data;_.extend(config,self.config.containerConfig||factoryConfig.getConfig(config));var entityType=config.context.entity.entityType.name.toLowerCase(),specialFields=_.filter(config.context.getCustomFields(),function(v){return v.type.toLowerCase()=="multipleentities"&&v.entityKind.toLowerCase()==entityType});config=this._addTabsBySpecialFields(specialFields,config),this.container=containerComponent.create({name:"entity container",store:this.config.store,context:self.config.context}),this.container.on("afterInit",this["container afterInit"],this),this.container.on("afterRender",this["container afterRender"],this),self.fire("onConfigContainerCreated",config),self.fire("initializeContainer",config)},"bus onConfigContainerCreated+initializeContainer":function(evt){var self=this,config=evt.onConfigContainerCreated.data,stateFields=self.getStateFields(config),configurator=self.config.context.configurator;if(!_.isEmpty(stateFields)){var stateFieldNames=_.pluck(stateFields,"stateName");config.context.componentSettings.get({fields:stateFieldNames,callback:function(state){_.each(stateFields,function(val,key){state.hasOwnProperty(key)&&(stateFields[key][key]=state[key])}),config.context.configurator=configurator,self.initializeContainer(config)}})}else config.context.configurator=configurator,self.initializeContainer(config)},lifeCycleCleanUp:function(){this.destroyContainer(),this._super()},destroyContainer:function(){if(!this.container)return;this.container.destroy(),this.container=null},destroy:function(){this.destroyContainer(),this.container=null,this._super()},_addTabsBySpecialFields:function(fields,config){var children;return config.children&&config.children.length&&config.children[0].children&&config.children[0].children.length&&config.children[0].children[0].children&&config.children[0].children[0].children.length&&(children=config.children[0].children[0].children),children?(_.forEach(fields,function(v,i){children[2].tabs.push({label:"MultipleEntitiesCustomFieldEditor"+i,header:[{type:"label",text:v.name,extensions:[MultipleEntitiesCountExtension],customField:{name:v.name,type:v.type}}],items:[{type:"customField.multipleEntities",customField:{name:v.name,type:v.type,value:v.value}}]})}),config):config}})})