define(["Underscore","tau/core/class"],function(n,t){return t.extend({init:function(n){this._node=n},getExpandedModelsAtLevel:function(t){if(0===t)return[this._node];var e=n.filter(this._node.nodes.items,function(n){return n.nodes});return n.flatMap(e,function(n){return n.hierarchy.getExpandedModelsAtLevel(t-1)})},accept:function(t){var e=t.visit(this._node);this._node.nodes&&n.each(this._node.nodes.items,function(n){n.hierarchy.accept(e||t)})},getAllNodesAtLevel:function(t){if(0===t)return[this._node];var e=this._node.nodes.items;return n.flatMap(e,function(n){return n.hierarchy.getAllNodesAtLevel(t-1)})},findNodeByPath:function(n){return this._findNodeByPathInternal(this._node,n,function(n,t){return n.hierarchy.findChildByCardId(t)})},findRawNodeByPath:function(t,e){return this._findNodeByPathInternal(t,e,function(t,e){return n.find(t.nodes.items,function(n){return n.dataItem.id==e})})},_findNodeByPathInternal:function(t,e,r){if(!e.length)return t;var d=r(t,e[0]);return d?this._findNodeByPathInternal(d,n.rest(e),r):null},findChildByCardId:function(t){return this._node.nodes?n.find(this._node.nodes.items,this._getCardIdComparison(t)):null},findAllDescendantNodesByCardIdAndType:function(t,e){var r=this._getCardIdComparison(t),d=function(t,i){return i.nodes?(e=e.toLowerCase(),n.each(i.nodes.items,function(n){r(n)&&n.getCardType().toLowerCase()===e&&t.push(n),d(t,n)}),t):t};return d([],this._node)},getPath:function(){for(var n=[],t=this._node;t&&t.card;)n.unshift(t.card.id.toString()),t=t.parent;return n},getAllParentCards:function(){for(var n=[],t=this._node;t&&t.card;)n.unshift(t.card),t=t.parent;return n},_getCardIdComparison:function(t){if(n.isString(t)&&0===t.indexOf("b64_"))return function(n){return n.card&&n.card.getEncodedId()===t};var e=parseFloat(t);return n.isNaN(e)?function(n){return n.card&&n.card.getId()===t}:function(n){return n.card&&n.card.getId()===e}}})});