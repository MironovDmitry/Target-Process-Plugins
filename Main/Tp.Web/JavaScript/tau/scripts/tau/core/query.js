define(["jQuery","Underscore","libs/json2"],function($,_){return{find:function(a,b){var c=[],d=this,e=d._formWhere(b,"",function(a,b,c){return{operator:a,key:b,value:c}});return _.each(a,function(a){var b=!1;_.each(e,function(c){if(b)return;var e=d._getObjectValue(a,c.key);_.isUndefined(e)&&(b=!0),c.operator.compare(e,c.value)||(b=!0)}),b||c.push(a)}),c},render:function(a,b){return this._getWhere(a,b)},_initializeDefaultRenders:function(a){_.defaults(a,{defaultRenderer:function(a,b){var c=this,d=[];return _.isArray(b)||(b=[b]),_.each(b,function(b){d.push("("+a+c.name+JSON.stringify(b)+")")}),d},$in:function(a,b){var c=this,d=[];_.isArray(b)||(b=[b]);var e=[];return _(b).each(function(a){e.push(JSON.stringify(a))}),d.push("("+a+" "+c.name+" ["+e.join(",")+"])"),d}})},_getObjectValue:function(a,b){var c=b.split("."),d=a;for(var e=0;e<c.length;e++){if(!a.hasOwnProperty(c[e]))return undefined;d=a[c[e]]}return d},_getQueryOperators:function(){var a={};this._initializeDefaultRenders(a);var b={$in:{name:"in",compare:function(a,b){return _.any(b,function(b){return b==a})}},$ne:{name:"!=",compare:function(a,b){return a!=b}},$eq:{name:"==",compare:function(a,b){return a==b}}};return _.each(_(b).keys(),function(c){var d=b[c];d.render=a.hasOwnProperty(c)?a[c]:a.defaultRenderer}),b},_isQueryValueWithOperator:function(a,b){var c=_(a).keys();if(c.length===0)return!1;var d=b||this._getQueryOperators();return d.hasOwnProperty(c[0])},_formWhere:function(a,b,c){var d=[];c=c||function(a,b,c){return a.render(b,c)};var e=this;b=b||"";var f=e._getQueryOperators();return _.each(_(a).keys(),function(g){if(g[0]==="$")return;var h=a[g],i=b+g;if(_.isString(h)||_.isNumber(h)||_.isDate(h)||_.isArray(h)||_.isBoolean(h)||_.isNull(h)){var j=h===null?"$isNull":"$eq";d=d.concat(c(f[j],i,h));return}if(e._isQueryValueWithOperator(h,f)){_.each(_(h).keys(),function(a){d=d.concat(c(f[a],i,h[a]))});return}var k=e._formWhere(h,g+".",c);_.each(k,function(a){d.push(a)})}),d},_getWhere:function(a,b){b=b||function(a){return"("+c.join("and")+")"};var c=this._formWhere(a);return c.length===0?"":b(c)}}})