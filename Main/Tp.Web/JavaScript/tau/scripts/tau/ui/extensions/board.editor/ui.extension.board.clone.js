define(["Underscore","tau/core/extension.base.stateful"],function(e,t){return t.extend({"bus boardSettings.ready:last + command.clone":function(e,t){var o=this,n=this.config.context.configurator,i=t.boardSettings,a=["cells","x","y","zoomLevel","viewMode","cardSettings","timelineSettings"];n.getBoardDefinitionFactory().cloneDefinition(i.settings.id,a).done(function(e){n.getBoardApiService().createBoard(e).done(function(t){e.id=t.data.key,o.navigateToCloned(n,e)})}.bind(this))},createTooltip:function(e,t){e.tauBubble({content:t,template:['<div class="tau-bubble-board">','<div class="tau-bubble-board__arrow"  role="arrow"></div>','<div class="tau-bubble-board__inner tau-container"  role="content"></div>',"</div>"].join(""),zIndex:999,className:"tau-bubble-tooltip",showEvent:"mouseenter",hideEvent:"mouseleave",mode:"tooltip",onPositionConfig:function(e){e.at="center top",e.my="center bottom"},onShow:function(){this.adjustPosition()}})},navigateToCloned:function(e,t){var o=e.getUrlBuilder().getRelativeBoardUrl(t.id);e.getRouting().redirect(o)}})});