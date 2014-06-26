define(["Underscore","jQuery","tau/core/view-base","tau/core/event-dispatcher"],function(e,i,n,t){var r=n.extend({init:function(e){this._loaded=!1,this._super(e)},initialize:function(){var i=this,n=i.config.children,t=e.isArray(n)&&e.size(n)>0&&i.config.visible;if(t){var r=i.config.children,d=i.config.context||{};this.fire("createComponents",{components:r,context:d})}else i._super.apply(i,arguments),i._fireChildrenRendered({children:[],childrenEvtArgs:[]})},"bus componentCreated":function(e){var i=e.data.component;this.fire("childComponentCreated",i)},"bus componentsCreated":function(e){this.fire("beforeComponentsInitialize",e.data),this.initializeChildrenComponents(e),this.fire("afterComponentsInitialize",e.data)},initializeChildrenComponents:function(i){var n=this,r=e(i.data).pluck("component"),d=e(i.data).pluck("config");n.dispatcher=new t(r),n.dispatcher.listen("afterInit",function(){n.fireAfterInit()}),n.dispatcher.listen("afterRender",function(e){var i=e.argsArr,t={children:r,childrenEvtArgs:i};n._fireChildrenRendered(t)}),e(r).each(function(e,i){var n=d[i];n.disableSubscriptions=!0,e.fire("initialize",n)})},_fireChildrenRendered:function(e){this.fire("internalChildrenRendered",e)},"bus afterInit+dataBind":function(){},"bus afterInit+dataBind+internalChildrenRendered":function(n){this.destroyChildComponents();var t=this,r=n.afterInit.data,d=n.dataBind.data,a=n.internalChildrenRendered.data;if(t.children=a.children,t.config.visible&&(t._loaded=!0),0===a.children.length)t.render(d,r);else{t.fireBeforeRender({data:d});var o=t.bindTemplate(d);o.find("[runas]").each(function(){var n=i(this),t=n.attr("runas"),r=n.attr("componentId"),d=e(a.childrenEvtArgs).detect(function(e){var i=e.view.config;return i.type===t&&i.id.toString()===r});if(!d){var o='Component "'+r+'" type of ['+t+"] not found";throw o}var s=d.element;n.replaceWith(s)}),o=t.prepareElement(o),t.fire("childrenRendered",a.children),t.updateElement(o,r.refreshSelector),!t.config.visible&&t.hide(),t.fireAfterRender({data:d})}},"bus show":function(){this._super(),this._loaded||this.fire("initialize",{})},lifeCycleCleanUp:function(){this._super()},destroyChildComponents:function(){delete this.dispatcher;var e=null;if(this.children&&this.children.length)for(;e=this.children.pop();)e.destroy();delete this.children},destroy:function(){this.destroyChildComponents(),this._super()}});return r});