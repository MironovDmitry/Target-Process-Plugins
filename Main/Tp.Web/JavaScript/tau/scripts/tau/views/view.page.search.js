define(["Underscore","jQuery","tau/core/view-base","tau/components/component.container","tau/configurations/search.container.config"],function(e,t,n,i,r){return n.extend({init:function(e){this._super(e)},initialize:function(){},"bus beforeInit":function(){var t=this,n=t.config.context.configurator;n.getTitleManager().setTitle("Search");var o=n.getHistory();o.reset(),o.setCurrent({id:0,url:"#"+t.config.entity,title:"Back to search results"});var a=t.config,c=e.extend(a,new r(a).getConfig(a)),s=t.container=i.create({name:"board page container",layout:c.layout,template:c.template,extensions:e.union([],c.extensions||[]),context:a.context});s.on("afterInit",t["container afterInit"],t),s.on("afterRender",t["container afterRender"],t),s.on("componentsCreated",t["container componentsCreated"],t),s.initialize(c)},"container afterInit":function(){this.fireAfterInit()},"container componentsCreated":function(e){this.fire(e.name,e.data)},"container afterRender":function(e){this.fireBeforeRender(),this.element=e.data.element,this.fireAfterRender()},lifeCycleCleanUp:function(){this.destroyContainer(),this._super()},destroyContainer:function(){this.container&&(this.container.destroy(),this.container=null)},destroy:function(){this.destroyContainer(),this._super()}})});