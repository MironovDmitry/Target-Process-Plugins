define(["Underscore","jQuery","tau/core/extension.base","tau/ui/templateRenderer.extensions","tau/core/templates-factory","tau/ui/templateRenderer"],function(e,t,i,n,s){return i.extend({name:"view-base",init:function(e){this._super(e),this.config=e||{}},"bus initialize":function(e){this.startLifeCycle(e)},"bus refresh":function(e){this._super();var t=e.data||{},i=t.refreshSelector;this.startLifeCycle(e,i)},"bus show":function(){this.show()},"bus hide":function(){this.hide()},"bus applyTo":function(e){this.element=e.data.element},"bus afterInit+dataBind":function(e,t,i){this.render(i,t)},"bus render":function(e,t){this.fireBeforeRender({data:t.data}),this.doRender(t.data,!1,t.template),this.fireAfterRender({data:t.data})},destroy:function(){this._super(),this.element&&this.element.remove(),delete this.element,delete this.config},merge:function(i,n){if(n&&this.element){e.isArray(n)||(n=[n]);var s=n,r=this.element;e.forEach(s,function(e){var n=r.find(e),s=i.find(e);n.each(function(e){t(this).replaceWith(s.eq(e))})})}return this.element},bindTemplate:function(t,i){var n;if(e.isObject(i))n=s.process(i,this.config,t);else{var r;if(this.config.template.get&&this.config.template.render)r=this.config.template.get();else{var h=e.isString(i)?i:this.config.template.name;r=s.get(h)}n=r.bind(this.config,t)}return n},prepareElement:function(e){return e},updateElement:function(e,t){return this.element&&t?this.merge(e,t):(this.element&&(e.length?this.element.replaceWith(e):this.element.remove()),this.element=e),this.element},doRender:function(e,t,i){var n=this.bindTemplate(e,i);n=this.prepareElement(n),this.element=this.updateElement(n,t),this.toggleBase(this.element,this.config.visible)},fireAfterInit:function(e){this.fire("afterInit",{config:this.config,refreshSelector:e})},initialize:function(e){this.fireAfterInit(e)},setDefaultConfig:function(){e.defaults(this.config,{visible:!0})},"bus refreshData":function(e){this.doRender(e.data),this.fire("elementRefreshedWithData",{element:this.element,data:e.data,view:this})},startLifeCycle:function(t,i){this.setDefaultConfig(),e.extend(this.config,t.data),this.fire("beforeInit",{config:this.config}),this.initialize(i)},show:function(){this.element&&this.showElement(this.element),this.config.visible=!0},showElement:function(e){this.toggle(e,!0)},hide:function(){this.element&&this.hideElement(this.element),this.config.visible=!1},hideElement:function(e){this.toggle(e,!1)},toggleBase:function(e,t){this.config.visibilityClassName?e.toggleClass(this.config.visibilityClassName,t):t?e.removeAttr("hidden"):e.attr("hidden","hidden")},toggle:function(e,t){this.toggleBase(e,t)},render:function(e,t){this.fireBeforeRender({data:e}),this.doRender(e,t.refreshSelector),this.fireAfterRender({data:e})},fireBeforeRender:function(e){e=e||{},this.fire("beforeRender",{data:e.data,view:this,element:this.element})},fireAfterRender:function(e){e=e||{},this.fire("afterRender",{data:e.data,view:this,element:this.element})}})});