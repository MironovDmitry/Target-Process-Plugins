define(["Underscore","jQuery","tau/core/extension.base"],function(e,t,n){return n.extend({"bus $el.ready":function(e,t){var n=t.find(".ui-menu__trigger"),i=t.find(".ui-menu__popup");n.length&&(n.tauBubble({stackName:"entityMenu",className:"ui-menu-actions__bubble",content:i.detach(),dontCloseSelectors:[".tau-bubble"],template:['<div class="tau-bubble">','<div class="tau-bubble__inner" role="content"></div>',"</div>"].join(""),onPositionConfig:function(e){e.my="right top+2",e.at="right bottom"}}),this.fire("$bubbled.ready",n))}})});