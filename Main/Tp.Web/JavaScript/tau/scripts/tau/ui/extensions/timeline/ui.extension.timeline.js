define(["Underscore","jQuery","tau/components/board.timeline/controllers/controller.timeline","tau/core/extension.base"],function(e,t,i,n){return n.extend({resetLifecycle:!0,init:function(t,n,d,s){this._super(t),this._model=n,this._timelineAxesModelRegistry=d.axesModel,this._timelineViewRegistry=d.view,this._busEvents=s,this._model.onPageChanged.add(function(t){this.fire("page.changed",e.deepClone(t.page))}.bind(this)),this._model.onZoomLevelChanged.add(this.fire.bind(this,"model.zoomLevelChanged")),this._model.onSliceInfoRetrieved.add(this.fire.bind(this,"model.sliceInfo.retrieved")),this._model.onBoardPagingSettingsRetrieved.add(this.fire.bind(this,"board.paging.settings")),this._model.onAcidReady.add(this.fire.bind(this,"acid.ready")),this._model.onBoardConfigurationReady.add(this.fire.bind(this,"board.configuration.ready")),this._model.onViewModeReady.add(this.fire.bind(this,"viewMode.ready")),this._model.onDefinitionReady.add(this.fire.bind(this,"definition.ready")),this._model.onPageReady.add(this.fire.bind(this,"page.ready")),this._model.onBoardDefinitionReady.add(this.fire.bind(this,"board.definition.ready")),this._model.onBoardDefinitionReady.add(function(e,t){taus.track({"@":["open-board-action"],boardSettings:t,definition:e})}),this._model.onSliceReady.add(function(e){this.fire("slice.ready",e),this.fire("comet.parameters",e.slice.getCometParameters())}.bind(this)),this._model.onCardLayoutFactoryReady.add(this.fire.bind(this,"cardLayoutFactory.ready")),this._busEvents.onBeforeUpdateCell.add(function(e){this.fire("view.cell.skeleton.element.beforeUpdate",e)}.bind(this)),this._busEvents.onAfterUpdateCell.add(function(e){this.fire("view.cell.skeleton.element.afterUpdate",e),this.fire("view.cell.skeleton.built",{element:e.cell,data:e.dataItem})}.bind(this)),this._translateViewEvents(),this._timelineController=new i(n,d,s),this._busEvents.rendered.add(this.fire.bind(this,"ruler.view.afterRender")),this._busEvents.hintHide.add(this.fire.bind(this,"hint.hide")),this._busEvents.cardUnselect.add(this.fire.bind(this,"card.unselect")),this._busEvents.viewTimelineTracksCountChanged.add(e.debounce(this.fire.bind(this,"view.timeline.tracks.count.changed"),1))
},_translateEvent:function(t,i){var n=t.result;n.$cell.data("istimeline")||this.fire("view.cell.skeleton.updated",{element:n.$cell}),this.fire("selection.reapply",{}),e.each(n.cards,function(e,t){var i=n.dataItems[t];this.fire("view.card.skeleton.built",{element:e,data:{id:i.id,type:i.type}})}.bind(this));var d=i();this.fire("operation.execute.done",{operation:t.operation,dataItems:e.pluck(n.dataItems,"data"),affected$CellsArray:d,cards:n.cards})},_translateViewEvents:function(){this._busEvents.onCellUpdated.add(function(e){this._translateEvent(e,function(){return[e.result.$cell]})}.bind(this)),this._busEvents.onAxisUpdated.add(function(i){this._translateEvent(i,function(){var n=i.result.$cell,d=n.data("y"),s=[];if("added"===i.operation.name)s.push(n);else{var o=n.closest(".i-role-board-body").find(".i-role-grid .i-role-cell").filter(function(e,i){var n=t(i);return n.data("y")===d});s=e.map(o.toArray(),t)}return s})}.bind(this))},destroy:function(){this._timelineController.destructor(),this._super()},"bus $el.ready:last + view.dom.ready:last + resize.completed":function(e,t){this._timelineController.resize(t)},"bus $el.ready:last + view.dom.ready":function(e,t){this._timelineController.render(t)},"bus model.execute.cell.query":function(e,t){this._model.setQuery(t.query)},"bus board.paging.settings:last + board.paging.settings.retrieve":function(e,t){this.fire("board.paging.settings.retrieved",t)},"bus page.move.to + board.paging.settings:last + boardSettings.ready:last":function(e,t,i,n){this._model.moveToPage(i.page,t.direction,n)},"bus boardSettings.ready:last + page.switched":function(e,t,i){this._model.setPage(t.boardSettings,i)},"bus configurator.ready:last + boardSettings.ready + start.lifecycle":function(e,t,i){this._model.startLifeCycle(t,i.boardSettings)},"bus configurator.ready > slice.ready":function(e,t,i){this._model.onGetSliceInfo(i.slice,t)},"bus slice.ready:last + before_destroy":function(){this.fire("clearError"),this._model.abortCurrentSlice()},"bus slice.ready:last + before_refresh":function(){this.fire("clearError"),this._model.abortCurrentSlice()
},"bus model.cells.content.loaded":function(){this._timelineController.onCellsContentLoaded()},"bus build.timeline.cell.skeleton":function(e,t){this._timelineController.onBuildCellSkeleton(t.configurator,t.boardLayout,t.buildCellCommand,t.boardSkeleton,t.timelineWidthDeferred)},"bus build.timeline.axis.skeleton":function(e,t){this._timelineController.onBuildAxisSkeleton(t.configurator,t.boardLayout,t.buildAxisCellCommand,t.boardSkeleton)},"bus timeline.card.batch.move.after":function(t,i){var n=e.chain(i.items).pluck("moves").flatten().value();this._timelineController.onCardsMoved(n,i.options)}})});