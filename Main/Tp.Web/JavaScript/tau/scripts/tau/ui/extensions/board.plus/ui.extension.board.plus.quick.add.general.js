define(["jQuery","tau/components/extensions/component.extension.base","tau/models/board.cell.quick.add/model.board.general.quick.add"],function(e,n,t){return n.extend({resetLifecycle:!0,"bus afterRender:last + boardSettings.ready":function(e,n,t){var i=n.element,o=t.boardSettings,a=function(e){var n=e.cells&&e.cells.types||[];this.appendQuickAddPopup(i.find("[role=action-quick-add]"),n)}.bind(this);o.get({fields:["cells"]}).done(a),o.unbind(this),o.bind({fields:["cells"],listener:this,callback:a})},"bus boardSettings.ready:last + destroy":function(e,n){n.boardSettings.unbind(this)},appendQuickAddPopup:function(e,i){var o={target:e,applyBubbleClasses:!1,cleanupOnHide:!0,stackName:"quickAddGeneral",showArrow:!0,showOnCreation:!1,zIndex:1e4,onShow:function(){e.removeClass("tau-quick-add-collapse")},onHide:function(){e.addClass("tau-quick-add-collapse")},className:"tau-quick-add-dialog-general",onPositionConfig:function(){return{of:e,collision:"none none",my:"left top",at:"left-12 bottom+1"}},dontCloseSelectors:["#ui-datepicker-div"],componentsConfig:{components:[{name:"board plus quick add general",type:"board.cell.quick.add",extensions:n.extend({"bus beforeInit:last + afterRender":function(e,n,t){var i=t.element,o=t.data;if(o.isEmpty){var a=n.config.context.configurator.getGlobalBus();a.fire("general.quick.add.empty"),i.find(".i-role-select-context-link").on("click",function(){a.fire("select.context.link.click"),this.fire("close")}.bind(this)).addClass("ui-link")}}}),QuickAddModel:t,defaultType:i[0]}]}};this.fire("initBubble",o)}})});