define(["Underscore","jQuery","tau/core/view-base","tau/core/event-dispatcher","tau/ui/templates/container/ui.template.container.list","tau/ui/templates/container/ui.template.container.table","tau/ui/templates/container/ui.template.container.replaceable"],function(e,i,n,t){return n.extend({init:function(e){this._loaded=!1,this._super(e)},"bus initialize":function(e,i){this.startLifeCycle(e,i)},"bus refresh":function(e,i){this.startLifeCycle(e,i)},"bus componentCreated":function(e){var i=e.data.component;this.fire("childComponentCreated",i),this.children.push(i)},"bus afterRender + afterRenderLazy":function(e,i){this.fire("afterRenderAll",i)},"bus afterInit + internalChildrenRendered":function(i,n,t){var s=this._getRenderConfig();this.fireBeforeRender({data:s}),this.doRender(s),e.extend(t,{config:this.config}),this.fire("childrenRendered",t),1==this.config.visibility&&this.fire("visibility.on"),this.fireAfterRender({data:s})},"bus afterInit + internalChildrenRenderedLazy":function(i,n,t){e.extend(t,{config:this.config}),this.fire("childrenRenderedLazy",t),1==this.config.visibility&&this.fire("visibility.on")},"bus componentsCreated:last + sendEventToComponents":function(i,n,t){e.forEach(n,function(e){e.component.fire(t.name,t.data)})},"bus componentsCreated":function(i,n){this.fire("beforeComponentsInitialize",i.data);var t={};e.forEach(n,function(i,n){var s=i.config,r=i.component;e.has(s,"label")?t[s.label]=r:t[n]=r}),this.fire("childrenBuses.ready",t),this.initializeComponents(i),this.fire("afterComponentsInitialize",i.data)},"bus show":function(){this.show(),this._loaded?this.fire("show.completed",this.element):this.fire("initialize")},"bus hide":function(){this.hide(),this.fire("hide.completed",this.element)},"bus $children.rendered":function(e,i){1==this.config.visible?this.fire("show.completed",i):this.fire("hide.completed",i)},completeInitializationWithoutChildren:function(){this.fire("afterInit"),this._fireChildrenRendered({children:[],childrenEvtArgs:[]})},completeInitializationWithoutChildrenLazy:function(){this._fireChildrenRenderedLazy({children:[],childrenEvtArgs:[]})},setDefaultConfig:function(){this._super(),e.defaults(this.config,{template:{name:"container."+(this.config.layout||"list")}})},_fireChildrenRendered:function(e){this.fire("internalChildrenRendered",e)},_fireChildrenRenderedLazy:function(e){this.fire("internalChildrenRenderedLazy",e)},initializeComponents:function(i){var n=e.pluck(i.data,"config"),t=this.separateChildComponents(this.children,n);this.listenContainerChildren(t.containerComponents),t.lazyComponents.components.length&&this.fire("existLazyChildren"),this.bus.on("internalChildrenRendered",e.bind(function(){this.initializeLazyComponents(t.lazyComponents)},this)),this.initializeFastComponents(t.fastComponents)},separateChildComponents:function(i,n){var t={components:[],configs:[]},s={components:[],configs:[]},r={components:[],configs:[]};return e.each(this.children,function(e,i){var o=n[i];o.lazy?(t.components.push(e),t.configs.push(o)):(s.components.push(e),s.configs.push(o));var h=this.config.visible!==!1&&o.visible!==!1,a="tabs"===o.type||o.children&&0!==o.children.length;a&&h&&(r.components.push(e),r.configs.push(e))},this),{lazyComponents:t,fastComponents:s,containerComponents:r}},initializeFastComponents:function(i){return 0===i.components.length?void this.completeInitializationWithoutChildren():(this.dispatcher=new t(i.components),this.dispatcher.listen("afterInit",e.bind(function(e){this.fire(e.eventName)},this)),this.dispatcher.listen("afterRender",e.bind(function(e){var n=e.argsArr,t={children:i.components,childrenEvtArgs:n};this._fireChildrenRendered(t)},this)),void e.forEach(i.components,e.bind(function(e,i,n){i.fire("initialize",e[n])},this,i.configs)))},initializeLazyComponents:function(i){return 0===i.components.length?void this.completeInitializationWithoutChildrenLazy():(this.dispatcherLazy=new t(i.components),this.dispatcherLazy.listen("afterRender",e.bind(function(e){var n=e.argsArr,t={children:i.components,childrenEvtArgs:n};this._fireChildrenRenderedLazy(t)},this)),void this.config.store.freeze(!0).done(e.bind(function(i){this.fire("storeFreeze.ready",i);var n=["afterInit"];e.forEach(n,e.bind(function(n){this.dispatcherLazy.listen(n,e.bind(function(){i.unfreeze()},this))},this))},this)).done(e.bind(function(){e.forEach(i.components,function(e,n){e.fire("initialize",i.configs[n])})},this)))},"bus storeFreeze.ready + destroy":function(e,i){i.unfreeze()},"bus storeFreeze.ready + refresh":function(e,i){i.unfreeze()},listenContainerChildren:function(n){var s=i.Deferred(),r=i.Deferred(),o=i.Deferred(),h=i.Deferred(),a=i.Deferred();return a.done(e.bind(function(){this.fire(this.fire("afterRenderLazy"))},this)),this.bus.on("afterRender",e.bind(function(e,i){r.resolve(i)},this)),this.bus.on("internalChildrenRenderedLazy",e.bind(function(){o.resolve()},this)),this.dispatcherContainers=new t(n.components),this.dispatcherContainers.listen("afterRenderLazy",e.bind(function(){h.resolve()},this)),s.done(e.bind(function(n){this.fire("isLazy",n),this.config.lazy&&i.when(r,o).done(e.bind(function(){this.fire("afterRenderLazy")},this)),n&&!this.config.lazy?i.when(r,h,o).done(e.bind(function(){this.fire("afterRenderLazy")},this)):i.when(r,o).done(e.bind(function(){this.fire("afterRenderLazy")},this))},this)),this.config.lazy?void s.resolve(!0):0===n.components.length?void s.resolve(!1):void this.dispatcherContainers.listen("isLazy",e.bind(function(i){var n=!0;-1===e.indexOf(i.argsArr,!0)&&(n=!1),s.resolve(n)},this))},lifeCycleCleanUp:function(){this.destroyChildren()},startLifeCycle:function(i,n){this.setDefaultConfig(),e.extend(this.config,n||{}),this.fire("beforeInit",{config:this.config});var t=this.config.children;this.children=[];var s=e.isArray(t)&&e.size(t)>0&&this.config.visible;if(s){var r=this.config.children,o=this.config.context||{};this.fire("createComponents",{components:r,context:o})}else this.completeInitializationWithoutChildren(),this.completeInitializationWithoutChildrenLazy()},toggle:function(e,n,t){var s=this.config.useAnimation!==!1&&!i.fx.off&&t!==!1;s&&!e.parents(".tau-bubble:first").length?n?e.slideDown(200):this._loaded?e.slideUp(200):this._super(e,n):this._super(e,n)},_getRenderConfig:function(){var e=this.config;return e.visible&&(this._loaded=!0),e},destroyChildren:function(){this.children&&this.children.length&&e.invoke(this.children,"destroy"),this.children=null},destroy:function(){this.dispatcher=null,this.dispatcherLazy=null,this.dispatcherContainers=null,this.destroyChildren(),this._super()}})});