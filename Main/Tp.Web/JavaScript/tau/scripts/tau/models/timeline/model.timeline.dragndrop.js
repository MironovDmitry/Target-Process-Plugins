define(["Underscore","tau/models/board.plus/model.board.dragndrop","tau/utils/utils.date"],function(e,t){var r=t.extend({init:function(e,t){this._super(e),this._timelineCellModelRegistry=t},_onBoardSettingsReady:function(e){this._super(e);var t=this.fire.bind(this,"ordering.refresh");e.get(["cells"]).then(t),e.bind({fields:["cells"],listener:this,callback:t})},"bus conditions.ready:last + dndOptions.ready:last + slice.ready:last + shift.isPressed + view.card.batch.move":function(e,t,r,s,i,n){this._super(e,t,r,s,i,n)},_afterCardBatchMove:function(t,r){r.forEach(function(r){var s=e.find(t,function(e){return r.entityId===e.source.entityId});s?(r.track=s.target.track,r.sourceX=s.source.x,r.sourceY=s.source.y):(r.sourceX=r.targetX,r.sourceY=r.targetY)}),this._super(t,r)},_prepareParameters:function(e,t,r){var s=this._super(e,t,r),i=this._timelineCellModelRegistry.whenCellRegistered(e[0].target);return $.when(s,i).then(function(e,t){return e.$set.items=t.getMoveParameters(e.$set.items),e})}});return r});