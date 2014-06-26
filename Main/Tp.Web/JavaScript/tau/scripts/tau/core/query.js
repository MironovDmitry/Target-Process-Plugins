define(["jQuery","Underscore","libs/json2"],function(r,e){return{find:function(r,n){var t=[],i=this,u=i._formWhere(n,"",function(r,e,n){return{operator:r,key:e,value:n}});return e.each(r,function(r){var n=!1;e.each(u,function(t){if(!n){var u=i._getObjectValue(r,t.key);e.isUndefined(u)&&(n=!0),t.operator.compare(u,t.value)||(n=!0)}}),n||t.push(r)}),t},render:function(r,e){return this._getWhere(r,e)},_initializeDefaultRenders:function(r){e.defaults(r,{defaultRenderer:function(r,n){var t=this,i=[];return e.isArray(n)||(n=[n]),e.each(n,function(e){i.push("("+r+t.name+JSON.stringify(e)+")")}),i},$in:function(r,n){var t=this,i=[];e.isArray(n)||(n=[n]);var u=[];return e(n).each(function(r){u.push(JSON.stringify(r))}),i.push("("+r+" "+t.name+" ["+u.join(",")+"])"),i}})},_getObjectValue:function(r,e){for(var n=e.split("."),t=r,i=0;i<n.length;i++){if(!r.hasOwnProperty(n[i]))return void 0;t=r[n[i]]}return t},_getQueryOperators:function(){var r={};this._initializeDefaultRenders(r);var n={$in:{name:"in",compare:function(r,n){return e.any(n,function(e){return e==r})}},$ne:{name:"!=",compare:function(r,e){return r!=e}},$eq:{name:"==",compare:function(r,e){return r==e}}};return e.each(e(n).keys(),function(e){var t=n[e];t.render=r.hasOwnProperty(e)?r[e]:r.defaultRenderer}),n},_isQueryValueWithOperator:function(r,n){var t=e(r).keys();if(0===t.length)return!1;var i=n||this._getQueryOperators();return i.hasOwnProperty(t[0])},_formWhere:function(r,n,t){var i=[];t=t||function(r,e,n){return r.render(e,n)};var u=this;n=n||"";var a=u._getQueryOperators();return e.each(e(r).keys(),function(o){if("$"!==o[0]){var f=r[o],c=n+o;if(e.isString(f)||e.isNumber(f)||e.isDate(f)||e.isArray(f)||e.isBoolean(f)||e.isNull(f)){var s=null===f?"$isNull":"$eq";return void(i=i.concat(t(a[s],c,f)))}if(u._isQueryValueWithOperator(f,a))return void e.each(e(f).keys(),function(r){i=i.concat(t(a[r],c,f[r]))});var h=u._formWhere(f,o+".",t);e.each(h,function(r){i.push(r)})}}),i},_getWhere:function(r,e){e=e||function(){return"("+n.join("and")+")"};var n=this._formWhere(r);return 0===n.length?"":e(n)}}});