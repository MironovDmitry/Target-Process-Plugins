define(["Underscore","tau/components/extensions/component.extension.base"],function(e,n){return n.extend({"bus createComponents":function(n){var t=n.data,o=n.caller;e.isArray(t.components)||(t.components=[t.components]);var a=this.getDependencies(t.components);requireSync(a,this.createDependenciesLoadedCallback(t,o))},getDependencies:function(n){var t=[];return e.forEach(n,function(n){if(n.path)t.push(n.path);else{if(!n.type)throw"Configuration error: type or path is missing";e.defaults(n,{namespace:"tau"});var o=n.namespace+"/components/component."+n.type;t.push(o)}}),t},_createComponent:function(e){return e.name||(e.name="",e.type&&(e.name=e.type),e.id&&(e.name+=":"+e.id)),e.component.create(e)},childrenLoadedCallback:function(n,t){var o=[];e.forEach(n,function(e){var n=this._createComponent(e);this.fire("componentCreated",{component:n}),o.push({config:e,component:n})},this),this.fire("componentsCreated",o,t)},createDependenciesLoadedCallback:function(n,t){var o=this,a=n.components,c=n.context;return function(){var n=arguments;e.forEach(a,function(e,t){e.component=n[t],e.context=c}),o.childrenLoadedCallback(a,t)}}})});