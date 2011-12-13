define(["Underscore","jQuery","tau/ui/extensions/editable-base","tau/ui/behaviour/common/ui.behaviour.tauBubble"],function(a,b,c,d){return c.extend({category:"edit",init:function(a){this._super(a),this.container=null},onEditActivated:function(c){var e=this,f=this.element=c.element;for(var g=0;g<e.config.popupEditorContainer.length;g++){var h=e.config.popupEditorContainer[g],i=f.find(h.targetSelector);i.find(".external-view").click(function(a){a.stopPropagation()}),i.each(function(){var c=b(this);h.component.data=c.tmplItem().data;var g={components:a.clone(h.component),context:e.config.context};c.addClass("tau-bubble-target"),h.targetCssClass&&c.addClass(h.targetCssClass);var i=!1;h.alignmentSelector&&(h.alignmentSelectorFrom=="target"?i=c.find(h.alignmentSelector):i=f.find(h.alignmentSelector));if(!i||!i.length)i=c;i.addClass("ui-link");var j=function(a){return function(){e.initializeContainer(this.$target,this.$popup,a)}}(g);d.call(c,{alignTo:i,onShow:j})})}},initializeContainer:function(a,b,c){var d=this,e=b.find(".tau-bubble__inner");d.$popupInner=e,d.$target=a;a.data("bubbleLoaded")!==!0&&(e.find("div.ui-loading-message").remove(),e.append("<div class='ui-loading-message'>Loading...</div>"),d.createComponents(c,function(b){var c=b[0].component;c.on("afterRender",function(b){e.find(".ui-loading-message").remove();var d=b.data.element;d.appendTo(e),a.data("bubbleLoaded",!0),b.removeListener(),a.tauBubble("adjustPosition"),a.tauBubble("adjustPositionStart"),a.tauBubble("adjustPosition"),a.bind("close",function(){c.fire("blur",{})}),a.bind("show",function(){c.fire("focus",{}),c.fire("popupResize",a.tauBubble("getMaxSize")),a.tauBubble("adjustPosition")}),c.fire("popupResize",a.tauBubble("getMaxSize")),a.tauBubble("adjustPosition"),a.tauBubble("adjustPosition"),setTimeout(function(){c.fire("focus",{})},500)}),c.initialize();var d=function(){a.data("bubbleLoaded",!1),a.tauBubble("destroy")};c.on("beforeSave",d),c.on("beforeRemove",d),c.on("destroy",d);var f=function(){a.data("bubbleLoaded",!1),a.tauBubble("empty")};c.on("reset",f)}))}})})