define(["jQuery","tau/components/extensions/component.extension.base"],function(t,o){return t.widget("ui.tauBubbleTooltip",t.ui.tauBubble,{}),o.extend({_initTooltip:function(t){t.tauBubbleTooltip({content:"<span>"+t.data("title")+"</span>",zIndex:999,template:['<div class="tau-bubble-board">','<div class="tau-bubble-board__arrow" role="arrow"></div>','<div class="tau-bubble-board__inner tau-container" role="content"></div>',"</div>"].join(""),className:"tau-bubble-tooltip",showEvent:"mouseenter",hideEvent:"mouseleave mousedown",mode:"tooltip",stackName:"tooltip",delay:500,onPositionConfig:this._tooltipPositionConfig,onArrowPositionConfig:this._tooltipPositionConfig,onBeforeShow:this._tooltipBeforeShow})},_tooltipPositionConfig:function(t){t.at="center bottom-1",t.my="center top"},_tooltipBeforeShow:function(){var t=this.$target,o=t.data("title"),e=t.data("collapsed-selector")||".tau-collapsed";if(t.is(e)){var n=t.data("title-collapsed");n&&(o=n)}var i=t.data("expanded-selector")||".tau-expanded";if(t.is(i)){var a=t.data("title-expanded");a&&(o=a)}return o?void this.option("content","<span>"+o+"</span>"):!1},"bus afterRender":function(){var o=this,e=function(e){var n=t(e.currentTarget);n.data("ui-tauBubbleTooltip")||(o._initTooltip(n),n.trigger("mouseenter"))};t(document).on("mouseenter.tooltip",".tau-extension-board-tooltip",e);var n=function(o){t(o.currentTarget).closest(".tau-template-item__inner").trigger("mouseleave")};t(document).on("mouseenter.tooltip",".tau-extension-board-tooltip-inner",n);var i=function(o){t(o.currentTarget).closest(".tau-template-item__inner").trigger("mouseenter")};t(document).on("mouseleave.tooltip",".tau-extension-board-tooltip-inner",i),this.on("destroy",function(){t(document).on("mouseenter.tooltip",".tau-extension-board-tooltip",e),t(document).off("mouseenter.tooltip",".tau-extension-board-tooltip-inner",n),t(document).off("mouseleave.tooltip",".tau-extension-board-tooltip-inner",i)})}})});