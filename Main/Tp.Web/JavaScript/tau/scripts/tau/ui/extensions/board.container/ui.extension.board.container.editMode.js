define(["Underscore","jQuery","tau/core/extension.base"],function(t,e,s){return s.extend({"bus boardSettings.ready:last + destroy":function(t,e){e.boardSettings.unbind({listener:this})},"bus childrenBuses.ready + afterRender:last + boardSettings.ready:last":function(t,e,s,i){var n=this,a=e.board_editor_container;a&&(a.on("boardSettings.cardSetIsEmpty",function(){n._showEmptyCardsSetNotification(s.element.find(".tau-board-settings-cards h4"),a)}),i.boardSettings.bind({fields:["emptyCardsSet"],listener:this,callback:function(){n._showEmptyCardsSetNotification(s.element.find(".tau-board-settings-cards h4"),a)}}))},"bus beforeInit:last + boardSettings.ready:last + afterRender":function(t,e,s,i){var n=s.boardSettings,a=i.element,r=e.config.context.configurator.getLoggedUser(),o=e.config.context.configurator.getBoardAccessService();n.get({fields:["ownerIds","edit","isDraft"],callback:function(t){var e=!!t.edit;t.cells.types&&0===t.cells.types.length&&(e=!0,n.set({set:{edit:!0}})),t.isDraft&&!o.isEditable(t,r)&&(e=!1,n.set({set:{edit:!1}})),a.toggleClass("tau-settings-active",e)}}),n.unbind({listener:this}),n.bind({fields:["edit","editMore"],listener:this,callback:function(t){a.toggleClass("tau-settings-active",t.edit||!1)}})},_showEmptyCardsSetNotification:function(t,e){e.fire("tab.activate","setup"),t.addClass("tau-attention"),t.animateWithCss({cssClassName:"tau-attention-shake"})}})});