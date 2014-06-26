define(["Underscore","jQuery","tau/core/extension.base","tau/ui/extensions/board.plus/ui.board.plus.domWrapper","tau/ui/extensions/board.plus/ui.extension.board.plus.operations.strategies","tau/ui/extensions/board.plus/ui.board.plus.utils"],function(e,t,a,o,i,n){var r={added:"Add",updated:"Update",cascade:"Update",deleted:"Remove",notinslice:"Remove"};return a.extend({resetLifecycle:!0,locationNamesMap:{card:"Cards",x:"Axis",y:"Axis"},operationNamesMap:r,allowedOperationNames:e.keys(r),createDomWrapper:function(){throw new Error("Create [DomWrapper] instance in component according to view mode specific")},"bus configurator.ready + definition.ready + model.cells.metaInfo.ready + view.skeleton.built + board.paging.settings + cardLayoutFactory.ready":function(e,t,a,o,i,n,r){var s=this.createDomWrapper(i.element,t,a,o);s.getPagingSettings=function(){return n},s.cardLayoutFactory=r,this.fire("domWrapper.ready",s)},"bus domWrapper.ready:last > view.cell.skeleton.element.beforeUpdate":function(e,a,o){a.applyCellPagingUpdate({$cell:o.cell,$cards:t(o.content)})},"bus domWrapper.ready:last + comet.tick":function(e,t,a){this.fire("operation.execute",a.data)},"bus domWrapper.ready:last + operation.execute":function(e,t,a){this.executeCometOperation(t,a)},"bus configurator.ready:last + operation.execute.done":function(e,t,a){this._onOperationExecuted(t,a)},executeCometOperation:function(e,t){var a=this.createOperation(t);this.isAllowedToExecute(a)&&this.executeOperation(e,a)},createOperation:function(t){var a=t.items,o=e.first(a);return{name:(t.name||o.modification).toLowerCase(),location:this.createLocation(o),items:a,options:t.options||{}}},createLocation:function(e){return e.location?e.location.toLowerCase().replace(/^(\w)axis$/,"$1"):"card"},isAllowedToExecute:function(t){return e.contains(this.allowedOperationNames,t.name)},executeOperation:function(a,o){return this.fire("operation."+o.name,o),o=e.defaults(o,{options:{}}),"cascade"===o.name&&(o.options.suspendAnimation=!0),t.when(e.bind(this.performOperation,this,a,o)()).then(e.bind(this.completeOperation,this,a,o))},performOperation:function(e,t){return e[this.createMethodName(t)](t)},completeOperation:function(e,t,a){var o={operation:t,dataItems:a.affectedDataItems,affected$CellsArray:a.$affectedCells,cards:a.cards||[]};this.notifyUpdatedCells(o),this.reapplySelection(o,e),this.notifyUpdatedCards(o),this.fire("operation.execute.done",o)},_onOperationExecuted:function(e,t){i.applyCompleteHandler(this,e,t)},createMethodName:function(e){return["apply",this.locationNamesMap[e.location],"Batch",this.operationNamesMap[e.name]].join("")},notifyUpdatedCells:function(e){for(var t=e.affected$CellsArray,a=t.length,o=0;a>o;o++){var i=t[o];this.fire("view.cell.skeleton.updated",{element:i})}},reapplySelection:function(e,t){t.isListMode()&&"deleted"===e.operation.name?this._debounceSelectionReapply():this.fire("selection.reapply",{})},notifyUpdatedCards:function(t){this.isCardReBuildOperation(t.operation)&&e.forEach(t.cards,function(e){var t=e.data();this.fire("view.card.skeleton.built",{element:e,data:{id:t.id,type:t.type}})},this)},isCardReBuildOperation:function(e){return n.isCardReBuildOperation(e)},_debounceSelectionReapply:e.debounce(function(){this.fire("selection.reapply",{})},500)})});