define(["Underscore","jQuery","tau/core/class","tau/ui/extensions/board.plus/ui.board.plus.dom.utils","./view.new.list.tree.dragndrop.scroll.helper","./view.new.list.tree.dragndrop.fixer"],function(e,t,i,r,o,n){return i.extend({PRIORITIZATION_OPTIONS:{enabled:{prioritizationPossible:!0,content:"Prioritization on",isMovedWithPrioritization:function(){return!0}},disabled:{prioritizationPossible:!1,content:"Prioritization off",isMovedWithPrioritization:function(){return!1}},shift:{prioritizationPossible:!0,content:'Hold <span class="shiftButton"></span> to prioritize',isMovedWithPrioritization:function(e){return e.shiftKey}}},options:{},_movableClasses:"tau-movable i-role-movable",_movableSelector:".i-role-movable",_movingClass:"tau-moving",_noConnectWith:"",_levelIndentPx:25,init:function(e,t){this.$treeContainer=e.$treeContainer,this.treeModel=e.treeModel,this.dndOptions=t.dndOptions,this.applyDndMove=t.applyDndMove.bind(t),this.containment=t.skeletonView.$el.find(".tau-board-list-view__inner"),this.level=this.treeModel.level,this._view=e,this.isDataPrioritizable()&&this._makeSortable()},_makeSortable:function(){var e=this.isDndPossible(),t=this.treeModel.level,i=this._canMove();this.$treeContainer.toggleClass("tau-sortable",e).toggleClass(this._movableClasses,i).sortable({disabled:!e,items:"> .i-role-card:not(.tau-axis-card-no-value), > .tau-list-level",handle:".tau-drag-handler-enabled.tau-drag-handler-level-"+t,connectWith:i?this._movableSelector:this._noConnectWith,axis:"y",opacity:.8,containment:!i&&this.containment,scrollSensitivity:33,tolerance:this.dndOptions.tolerance||"intersect",placeholder:this._createPlaceholder(),helper:this._createHelper.bind(this),start:function(e,t){var r=t.item;i&&this._toggleMovingState(r,!0),this._refreshPositions(),this._storeCurrentPathToItemData(r),r.data("list-startCoordinates",this._getCoordinates(r))}.bind(this),stop:function(e,t){var r=t.item;i&&this._toggleMovingState(r,!1),this.$treeContainer.find(".tau-list-sortable-placeholder-fixed").remove(),this._moveCardWithSubTree(r)
}.bind(this),receive:function(e,t){var i=t.item;this._view.addDirtyDOMCard(i),this._storeCurrentPathToItemData(i),this._removeSubTree(i)}.bind(this)});var r=this._getSortableInstance();i?this.$treeContainer.sortable("option","change",this._changeOnMove.bind(this)):this._overrideWidgetIntersectionLogic(r),this._scrollHelper=new o(r),n.fixSortable(r),n.fixHelperScrollParent(r,this._scrollHelper)},_getSortableInstance:function(){return this.$treeContainer.data("ui-sortable")},_getPrioritizationOptions:function(){return this.PRIORITIZATION_OPTIONS[this.dndOptions.prioritization]},_createPlaceholderElement:function(t){var i=this._getPrioritizationOptions().content,r=e.compact(["i-role-card","tau-list-entity",t]);return'<div class="'+r.join(" ")+' i-role-placeholder"><div class="tau-list-line"><div class="tau-elems-table tau-sortable__placeholder-inner">'+i+"</div></div></div>"},_createPlaceholder:function(){return{element:function(e){return e.before(this._createPlaceholderElement("tau-list-sortable-placeholder-fixed")),this._createPlaceholderElement("tau-list-sortable-placeholder-float")}.bind(this),update:function(){this._refreshPositions()}.bind(this)}},_createHelper:function(e,t){return this._scrollHelper.saveScrollPosition(),this._storeAndHideSubTree(t),t},_storeAndHideSubTree:function(e){var t=e.next(".tau-list-level");t.length?(e.data("list-subTree",t),e.toggleClass("tau-list-entity-open",!1),this._scrollHelper.lockScrollHeight(),t.detach(),t.hide(),this._refreshPositions()):e.data("list-subTree",null)},_adjustItemToLevel:function(e,t){var i=(t||e).closest(".tau-list-level"),r=i.data("list-level"),o=e.find(".tau-elems-table");o.not(".tau-elems-table-level-"+r)&&(o.attr("class",function(e,t){return t.replace(/(tau-elems-table-level-)(\d)/g,"$1"+r)}),e.width(i.width()),e.css("left",r*this._levelIndentPx+"px"))},isDataPrioritizable:function(){return this.treeModel.hierarchyMetaInfo.isPrioritizable},isDndPossible:function(){return this.isDataPrioritizable()&&this._getPrioritizationOptions().prioritizationPossible
},isMovedWithPrioritization:function(){return this._getPrioritizationOptions().isMovedWithPrioritization(this.dndOptions)},_refreshPositions:function(){this.$treeContainer.sortable("refreshPositions"),this.$treeContainer.sortable("refresh")},_overrideWidgetIntersectionLogic:function(t){t._intersectsWithPointer=e.wrap(t._intersectsWithPointer.bind(t),function(e,t){var i=e(t);return i&&(t.item.hasClass("tau-list-entity-open")?i=1:t.item.hasClass("tau-list-level")&&(i=2)),i})},_findSibling:function(e,t){var i=e;do i=i[t]();while(i.length&&!i.is(".i-role-card[id]"));return i},_getCoordinates:function(e){var t=e.closest(".tau-list-level");return{itemId:e.data("id").toString(),parentId:t.data("listParentId"),itemBefore:this._findSibling(e,"prev"),itemAfter:this._findSibling(e,"next"),path:JSON.parse(e.data("list-currentPath"))}},_moveCardWithSubTree:function(i){var o=t.Deferred(),n=i.data("list-startCoordinates"),s=this._getCoordinates(i);if(s.itemBefore[0]===n.itemBefore[0]&&s.itemAfter[0]===n.itemAfter[0]&&e.isEqual(s.path,n.path))return this._showSubTree(i),o.resolve();o.fail(function(){this._scrollHelper.restoreScrollPosition(),this._view.removeDirtyDOMCard(i),this._moveCardToCoordinates(i,n),this._adjustItemToLevel(i),this._showSubTree(i),r.animated(i,"tau-card_dnd_failed")}.bind(this));var a={item:i,treeModel:this.treeModel,fromPath:n.path,toPath:s.path};return this.isMovedWithPrioritization()?(a.itemBefore=s.itemBefore,a.itemAfter=s.itemAfter,this.applyDndMove(a).then(function(){o.resolve()}.bind(this),function(){o.reject()}.bind(this)),this._showSubTree(i),o):o.reject()},_moveCardToCoordinates:function(e,t){if(t.itemBefore.length){var i=t.itemBefore,r=i.next(".tau-list-level");e.insertAfter(r.length?r:i)}else t.itemAfter.length?e.insertBefore(t.itemAfter):console.error("Move card after d&d: cannot find position in DOM",t)},_showSubTree:function(e){var t=e.data("list-subTree");t&&(e.removeData("list-subTree"),e.toggleClass("tau-list-entity-open",!0),t.insertAfter(e).slideDown(this._scrollHelper.unlockScrollHeight.bind(this._scrollHelper)))
},_removeSubTree:function(e){var t=e.data("list-subTree");t&&(e.removeData("list-subTree"),t.remove(),this._scrollHelper.unlockScrollHeight())},setDndOptions:function(e){this.dndOptions=e;var t=this.isDndPossible();this.$treeContainer.toggleClass("tau-sortable",t).sortable({disabled:!t})},_storeCurrentPathToItemData:function(e){var t=this.treeModel.hierarchy.getPath();e.data("list-currentPath",JSON.stringify(t))},_canMove:function(){return this.treeModel.hierarchyMetaInfo.canMove},_toggleMovingState:function(e,t){this.containment.toggleClass(this._movingClass,t),this.$treeContainer.toggleClass("empty",t&&this._isEmpty(e))},_isEmpty:function(e){return 0===this.$treeContainer.find("> .i-role-card:not(.i-role-placeholder)").not(e).length},_changeOnMove:function(e,t){this._fixPlaceholderIfExpanded(t.placeholder),this._adjustItemToLevel(t.helper,t.placeholder)},_fixPlaceholderIfExpanded:function(e){e.next(".tau-list-level").after(e)}})});