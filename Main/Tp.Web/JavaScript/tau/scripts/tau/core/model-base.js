define(["Underscore","tau/core/event.emitter"],function(_,a){var b=a.extend({init:function(a){this._super(a),this.store=a.store,this.config=a},onInit:function(){},isCommandForEntityInContext:function(a){return a.data.cmd.config.id===this.config.context.entity.id},isPropertyChanged:function(a,b){var c=b.changes;return _.any(a,function(a){return c.hasOwnProperty(a)})},attachToChangePropertiesOfCurrentEntity:function(a){var b=_.isArray(a)?a:[a],c=this.config.context.entity.id,d=this,e=function(a){var c=a.data;d.isPropertyChanged(b,c)&&d.fire("propertyChanged",c)},f=function(a){var c=a.data;d.isPropertyChanged(b,c)&&d.fire("beforeChangeProperty",c)},g=this.config.context.entity.entityType.name||"general";d.store.on({type:g,eventName:"afterSave",filter:{id:c},listener:d},e),d.store.on({type:g,eventName:"beforeSave",filter:{id:c},listener:d},f),a[this.propertyName]=[this.displayField,this.valueField]},"bus beforeInit":function(a){this.config=a.data?a.data.config:{},this.onInit()},"bus evictData":function(){var a=this.config.context.entity,b=a.id;this.store.config.proxy.evictPersistedObject(b,"context"),this.store.config.proxy.evictPersistedObject(b,a.entityType.name)},destroy:function(){this.store.unbind(this),delete this.config,delete this.store,this._super()}});return b})