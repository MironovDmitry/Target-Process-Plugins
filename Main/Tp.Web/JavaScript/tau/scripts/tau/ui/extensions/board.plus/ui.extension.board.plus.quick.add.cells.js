define(["Underscore","jQuery","tau/components/extensions/component.extension.base","tau/ui/extensions/board.plus/ui.board.plus.decorator.quick-add-cells","tau/ui/extensions/board.plus/ui.board.plus.decorator.quick-add-list"],function(t,e,o,i,a){return o.extend({resetLifecycle:!0,"bus cardLayoutFactory.ready:last + slice.cells.quickadd.api.ready:last + model.cellActions.ready":function(e,o,i){i.on(["after.addData","after.listAddData"],t.bind(this.onAfterAddData,this,o))},"bus slice.cells.quickadd.api.ready:last + domWrapper.ready:last + model.cellActions.ready":function(e,o,n,d){var r;switch(n.definition.viewMode){case"list":r=a;break;default:r=i}this.decorator&&this.decorator.destroy(),this.decorator=new r(n,{items:d.items,onActivate:t.bind(this.showQuickAddPopup,this,o,n)})},onAfterAddData:function(t,e){var o=e.data.result,i=o[0];this.fire("operation.execute",{name:"added",options:{forceAppend:!0},items:[{data:i.dataItem,x:i.x,y:i.y}],layout:t})},showQuickAddPopup:function(o,i,a){var n=this,d=a.target,r=a.data.actionItems,s=t.find(r.fixed.items,function(t){return"AddAction"===t.type}),c=i.getCellByCoordinate(r),l=i.getCellsEmptyStatuses(c),u=i.isListMode()?"list":"board",f=i.getGrid().parents(".i-role-board-body-holder,.tau-entity-list"),p=function(t){t=!!t,f.prop("disabled",t),d.parent().toggleClass("tau-quick-add_expand",t),n.decorator&&(n.decorator.isActivated=t)},m={target:d,cleanupOnHide:!0,stackName:"quickAdd",showOnCreation:!0,zIndex:1e4,within:this.decorator.element,onShow:function(){p(!0)},onHide:function(){p(!1),a.deactivate(),t.each(l,function(t){t.emptyBeforeAdd&&i.cellHasCards(t.$cell)&&i.expandCell(n,e(t.$cell).attr("data-x"),e(t.$cell).attr("data-y"))})},onPositionConfig:function(t){var e=d.tauBubble("widget").height()<d.offset().top,o={my:e?"left bottom":"left top",at:e?"left-30 top":"left-30 bottom",of:d,within:t.within,collision:"fit flipfit"};return o},onArrowPositionConfig:function(t,e){var o={my:"center top",at:"center bottom",of:d,within:t.within,collision:"fit flipfit"};return"bottom"===e&&(o.my="center bottom",o.at="center top"),o},dontCloseSelectors:["#ui-datepicker-div"],componentsConfig:{components:[{name:"board plus quick add cells",type:"board.cell.quick.add",options:{slice:o,action:r,addAction:s,viewMode:u}}]}};this.fire("initBubble",m)}})});