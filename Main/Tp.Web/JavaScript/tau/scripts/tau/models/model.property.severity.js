define(["Underscore","tau/models/model.property","tau/models/dataprocessor/model.processor.importance"],function(e,r,t){return r.extend({getPropertyFields:function(){var r=this._super(),t=e.union(r,["importance"]);return t},buildRequest:function(e){var r=this._super(e);return r=r.get("severity",{fields:["id","importance"]})},onProcessProperty:function(e){if(this.config){var r=this._super(e);return r.kind=this.importanceProcessor.getKind(e.importance),r}},onEntityRetrieved:function(r){var o=this.property=r[0].data[this.propertyName]||{},i=e(r[1].data).pluck("importance"),n=e.min(i),s=e.max(i);this.importanceProcessor=new t(n,s),this.processProperty(o)}})});