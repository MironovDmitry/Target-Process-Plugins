define(["Underscore","jQuery","tau/views/view.container"],function(i,t,e){return e.extend({"bus initialize":function(i,t){this.fire("configurator.ready",t.context.configurator)},"bus initialize + boardSettings.ready + configurator.ready":function(i,t,e,n){this.startLifeCycle(t,e.boardSettings,n)},"bus refresh":function(){this.destroyChildren(),this.startLifeCycle()},"bus beforeInit + boardSettings.ready":function(t,e,n){var r=n.boardSettings;r.unbind({listener:this}),r.bind({fields:["viewMode","isCustomizeDisabled"],listener:this,callback:i.bind(this.fire,this,"refresh")})},startLifeCycle:function(t,e,n){e=e||this.boardSettings,n=n||this.configurator,this.setDefaultConfig(),i.extend(this.config,(t||{}).data),this.boardSettings=e,this.configurator=n,this.children=[],e.get({fields:["viewMode"],callback:i.bind(function(t){var e=t.viewMode,n=i.filter(this.config.children,function(i){return i.viewMode==e});this.fire("beforeInit",{config:this.config});var r=i.isArray(n)&&i.size(n)>0&&this.config.visible;if(r){var s=this.config.context||{};this.fire("createComponents",{components:n,context:s})}else this.completeInitializationWithoutChildren()},this)})}})});