define(["Underscore"],function(e){return{createSliceDefinitionFromBoardSettings:function(t){var n=t.global?t.global.acid:null,i={global:{acid:n}};if(t.hasOwnProperty("x")){var r=this._convertToDefinitionItem(t.x);r&&(i.x=r)}if(t.hasOwnProperty("user")){var l=e.cloneDeep(t.user);l&&(i.user=l)}if(t.hasOwnProperty("y")){var o=this._convertToDefinitionItem(t.y);o&&(i.y=o)}return t.hasOwnProperty("cells")&&(i.cells=this._convertToDefinitionCells(t.cells)),t.hasOwnProperty("entityId")&&t.hasOwnProperty("entityType")&&(i.entityId=t.entityId,i.entityType=t.entityType),i},_convertToDefinitionItem:function(t){if(!t)return null;t=e.cloneDeep(t);var n={};if(e.isString(t)&&(t=[t]),e.isArray(t))n.id=t.length?t[0]:null,n.filter=null,n.ordering=null;else if(e.isObject(t)){var i=t.type||t.types;n.id=e.isArray(i)?i.length?i[0]:null:i,e.isString(t.data)&&(n.data=t.data),this._convertFilterAndOrdering(t,n)}return n},_convertToDefinitionCells:function(t){if(!t)return null;t=e.cloneDeep(t);var n={};return e.isArray(t)?n.items=t:e.isObject(t)&&(n.items=t.items||t.types||t.type,this._convertFilterAndOrdering(t,n)),e.each(n.items,function(e,t){n.items[t]=this._convertToDefinitionItem(e)},this),n},_convertFilterAndOrdering:function(e,t){e.useFilter!==!1&&(t.filter=e.filter||null),t.ordering=e.ordering&&e.ordering.name?e.ordering:null}}});