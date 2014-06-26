define(["Underscore","tau/core/class","tau/core/extension.base"],function(e,t,i){var n=t.extend({init:function(e,t){this._timelineCellModelRegistry=e,this._timelineAxesModelRegistry=t},getHandler:function(e,t){var i="_"+e+"_"+t;if(!this[i])throw new Error("Comet operation ["+i+"] is not supported");return this[i].bind(this)},_card_notinslice:function(e,t){this._timelineCellModelRegistry.removeCards(e,t)},_card_deleted:function(e,t){this._timelineCellModelRegistry.removeCards(e,t)},_card_updated:function(e,t){this._timelineCellModelRegistry.updateCards(e,t)},_card_cascade:function(e,t){t.suspendAnimation=!0,this._timelineCellModelRegistry.updateCards(e,t)},_card_added:function(e,t){this._timelineCellModelRegistry.addCards(e,t)},_axis_notinslice:function(e,t){this._timelineAxesModelRegistry.removeAxes(e,t)},_axis_deleted:function(e,t){this._timelineAxesModelRegistry.removeAxes(e,t)},_axis_updated:function(e,t){this._timelineAxesModelRegistry.updateAxes(e,t)},_axis_cascade:function(e,t){t.suspendAnimation=!0,this._timelineAxesModelRegistry.updateAxes(e,t)},_axis_added:function(e,t){this._timelineAxesModelRegistry.addAxes(e,t)}});return i.extend({init:function(e,t,i){this._operationsMap=new n(t,i),this._super(e)},"bus operation.highlightItems > domWrapper.ready":function(e,t,i){i.highlightAxesLines(t)},"bus operation.execute":function(e,t){var i=this.createOperation(t);this.executeOperation(i),this.fire("operation.execute.comet.done")},createOperation:function(t){var i=t.items,n=e.first(i);return{name:(t.name||n.modification).toLowerCase(),location:this._extractLocation(n.location),items:i,options:t.options||{}}},executeOperation:function(t){t=e.defaults(t,{options:{}}),this.fire("operation."+t.name,t),"cascade"===t.name&&(t.options.suspendAnimation=!0),this.handleOperationItems(t.items,t.location,t.name,t.options)},handleOperationItems:function(e,t,i,n){this._operationsMap.getHandler(t,i)(e,n)},_extractLocation:function(e){var t=(e||"card").toLowerCase();return"card"===t?"card":"axis"}})});