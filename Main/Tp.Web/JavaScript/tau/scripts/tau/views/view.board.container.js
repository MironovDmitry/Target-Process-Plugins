define(["Underscore","jQuery","tau/views/view.container"],function(_,$,ViewBase){return ViewBase.extend({"bus initialize":function(evt){},"bus initialize+boardSettings.ready":function(evt){this.startLifeCycle(_.values(evt)[0],_.values(evt)[1].data.boardSettings)},"bus append.child.element":function(evt){},"bus refresh":function(){this.destroyChildren(),this.startLifeCycle()},startLifeCycle:function(evt,boardSettings){boardSettings=boardSettings||this.boardSettings;var self=this;self.setDefaultConfig(),_.extend(self.config,(evt||{}).data),self.boardSettings=boardSettings;var children=self.config.children;self.children=[],boardSettings.get({fields:["viewMode"],callback:function(r){var viewMode=r.viewMode;_.forEach(self.config.children,function(v,k){v.name=="board_plus"&&(self.config.children[k].type="board.plus"+(viewMode=="list"?".list":"")),v.name=="board_tools_main_container"&&(self.config.children[k].visible=viewMode!="list")}),self.fire("beforeInit",{config:self.config});var loadDependencies=_.isArray(children)&&_.size(children)>0&&self.config.visible;if(loadDependencies){var components=self.config.children,context=self.config.context||{};self.fire("createComponents",{components:components,context:context})}else self.completeInitializationWithoutChildren()}})}})})