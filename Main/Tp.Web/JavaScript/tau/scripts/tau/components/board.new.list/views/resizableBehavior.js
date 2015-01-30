define(["Underscore","tau/core/class","tau/components/board.new.list/views/units/nameUnit"],function(t,e){return e.extend({init:function(t){this._eventAggregator=t.eventAggregator,this._columnWidthService=t.skeletonView.columnWidthService,this._$el=t.skeletonView.$el},getResizeControl:function(){return this._$el.find(".tau-board-list-view-resizer")},attach:function(){this._eventAggregator.treeRendered.once(this.attachHandlerResizable.bind(this))},attachHandlerResizable:function(){var t=this._$el;t.find(".i-role-list-root-container").css("position","relative");var e=this.getResizeControl(),i=t.find(".tau-list-collapser-cell").width()||0,n=Math.ceil(e.width()/2),a=t.find(".tau-drag-handler-cell").width()||0,o=i+a-n,r=this._columnWidthService.getMinNameUnitWidth(),s=this._columnWidthService.layout.name||r,l=s+o;e.css({left:l,right:0}),e.draggable({helper:function(){return e.clone().addClass("tau-list-caption-cell__resizable-helper")},start:function(){var t=e.parent().offset().left+r+o;e.data("ui-draggable").containment=[t],e.draggable("option","containment",[t])},stop:function(t,i){var n=i.position.left-o;this._columnWidthService.setNameWidth(n,this._$el).then(function(){e.css({left:i.position.left})}.bind(this)).then(function(){taus.track({action:"name column resize",columnSize:n,tags:["newlist"]})})}.bind(this),appendTo:"parent",axis:"x"})},destroy:function(){var t=this.getResizeControl();t.data("ui-draggable")&&t.draggable("destroy")}})});