define(["libs/jquery/jquery"],function(a){return function(jQuery,a){function l(a,b,c,d){var g={data:d||(b?b.data:{}),_wrap:b?b._wrap:null,tmpl:null,parent:b||null,nodes:[],calls:t,nest:u,wrap:v,html:w,update:x};return a&&jQuery.extend(g,a,{nodes:[],parent:b}),c&&(g.tmpl=c,g._ctnt=g._ctnt||g.tmpl(jQuery,g),g.key=++i,(k.length?f:e)[i]=g),g}function m(a,b,d){var e,f=d?jQuery.map(d,function(b){return typeof b=="string"?a.key?b.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g,"$1 "+c+'="'+a.key+'" $2'):b:m(b,a,b._ctnt)}):a;return b?f:(f=f.join(""),f.replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/,function(a,b,c,d){e=jQuery(c).get(),s(e),b&&(e=n(b).concat(e)),d&&(e=e.concat(n(d)))}),e?e:n(f))}function n(a){var b=document.createElement("div");return b.innerHTML=a,jQuery.makeArray(b.childNodes)}function o(a){return new Function("jQuery","$item","var $=jQuery,call,_=[],$data=$item.data;with($data){_.push('"+jQuery.trim(a).replace(/([\\'])/g,"\\$1").replace(/[\r\t\n]/g," ").replace(/\$\{([^\}]*)\}/g,"{{= $1}}").replace(/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g,function(a,b,c,d,e,f,g){var h=jQuery.tmpl.tag[c],i,j,k;if(!h)throw"Template command not found: "+c;return i=h._default||[],f&&!/\w$/.test(e)&&(e+=f,f=""),e?(e=q(e),g=g?","+q(g)+")":f?")":"",j=f?e.indexOf(".")>-1?e+f:"("+e+").call($item"+g:e,k=f?j:"(typeof("+e+")==='function'?("+e+").call($item):("+e+"))"):k=j=i.$1||"null",d=q(d),"');"+h[b?"close":"open"].split("$notnull_1").join(e?"typeof("+e+")!=='undefined' && ("+e+")!=null":"true").split("$1a").join(k).split("$1").join(j).split("$2").join(d?d.replace(/\s*([^\(]+)\s*(\((.*?)\))?/g,function(a,b,c,d){return d=d?","+d+")":c?")":"",d?"("+b+").call($item"+d:a}):i.$2||"")+"_.push('"})+"');}return _;")}function p(a,b){a._wrap=m(a,!0,jQuery.isArray(b)?b:[d.test(b)?b:jQuery(b).html()]).join("")}function q(a){return a?a.replace(/\\'/g,"'").replace(/\\\\/g,"\\"):null}function r(a){var b=document.createElement("div");return b.appendChild(a.cloneNode(!0)),b.innerHTML}function s(a){function o(a){function o(a){a+=b,m=h[a]=h[a]||l(m,e[m.parent.key+b]||m.parent,null,!0)}var d,g=a,k,m,n;if(n=a.getAttribute(c)){while(g.parentNode&&(g=g.parentNode).nodeType===1&&!(d=g.getAttribute(c)));d!==n&&(g=g.parentNode?g.nodeType===11?0:g.getAttribute(c)||0:0,(m=e[n])||(m=f[n],m=l(m,e[g]||f[g],null,!0),m.key=++i,e[i]=m),j&&o(n)),a.removeAttribute(c)}else j&&(m=jQuery.data(a,"tmplItem"))&&(o(m.key),e[m.key]=m,g=jQuery.data(a.parentNode,"tmplItem"),g=g?g.key:0);if(m){k=m;while(k&&k.key!=g)k.nodes.push(a),k=k.parent;delete m._ctnt,delete m._wrap,jQuery.data(a,"tmplItem",m)}}var b="_"+j,d,g,h={},k,m,n;for(k=0,m=a.length;k<m;k++){if((d=a[k]).nodeType!==1)continue;g=d.getElementsByTagName("*");for(n=g.length-1;n>=0;n--)o(g[n]);o(d)}}function t(a,b,c,d){if(!a)return k.pop();k.push({_:a,tmpl:b,item:this,data:c,options:d})}function u(a,b,c){return jQuery.tmpl(jQuery.template(a),b,c,this)}function v(a,b){var c=a.options||{};return c.wrapped=b,jQuery.tmpl(jQuery.template(a.tmpl),a.data,c,a.item)}function w(a,b){var c=this._wrap;return jQuery.map(jQuery(jQuery.isArray(c)?c.join(""):c).filter(a||"*"),function(a){return b?a.innerText||a.textContent:a.outerHTML||r(a)})}function x(){var a=this.nodes;jQuery.tmpl(null,null,null,this).insertBefore(a[0]),jQuery(a).remove()}var b=jQuery.fn.domManip,c="_tmplitem",d=/^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,e={},f={},g,h={key:0,data:{}},i=0,j=0,k=[];jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){jQuery.fn[a]=function(c){var d=[],f=jQuery(c),h,i,k,l,m=this.length===1&&this[0].parentNode;g=e||{};if(m&&m.nodeType===11&&m.childNodes.length===1&&f.length===1)f[b](this[0]),d=this;else{for(i=0,k=f.length;i<k;i++)j=i,h=(i>0?this.clone(!0):this).get(),jQuery.fn[b].apply(jQuery(f[i]),h),d=d.concat(h);j=0,d=this.pushStack(d,a,f.selector)}return l=g,g=null,jQuery.tmpl.complete(l),d}}),jQuery.fn.extend({tmpl:function(a,b,c){return jQuery.tmpl(this[0],a,b,c)},tmplItem:function(){return jQuery.tmplItem(this[0])},template:function(a){return jQuery.template(a,this[0])},domManip:function(a,c,d,f){if(a[0]&&a[0].nodeType){var h=jQuery.makeArray(arguments),i=a.length,k=0,l;while(k<i&&!(l=jQuery.data(a[k++],"tmplItem")));i>1&&(h[0]=[jQuery.makeArray(a)]),l&&j&&(h[2]=function(a){jQuery.tmpl.afterManip(this,a,d)}),b.apply(this,h)}else b.apply(this,arguments);return j=0,g||jQuery.tmpl.complete(e),this}}),jQuery.extend({tmpl:function(a,b,c,d){var g,i=!d;if(i)d=h,a=jQuery.template[a]||jQuery.template(null,a),f={};else if(!a)return a=d.tmpl,e[d.key]=d,d.nodes=[],d.wrapped&&p(d,d.wrapped),jQuery(m(d,null,d.tmpl(jQuery,d)));return a?(typeof b=="function"&&(b=b.call(d||{})),c&&c.wrapped&&p(c,c.wrapped),g=jQuery.isArray(b)?jQuery.map(b,function(b){return b?l(c,d,a,b):null}):[l(c,d,a,b)],i?jQuery(m(d,null,g)):g):[]},tmplItem:function(a){var b;a instanceof jQuery&&(a=a[0]);while(a&&a.nodeType===1&&!(b=jQuery.data(a,"tmplItem"))&&(a=a.parentNode));return b||h},template:function(a,b){return b?(typeof b=="string"?b=o(b):b instanceof jQuery&&(b=b[0]||{}),b.nodeType&&(b=jQuery.data(b,"tmpl")||jQuery.data(b,"tmpl",o(b.innerHTML))),typeof a=="string"?jQuery.template[a]=b:b):a?typeof a!="string"?jQuery.template(null,a):jQuery.template[a]||jQuery.template(null,d.test(a)?a:jQuery(a)):null},encode:function(a){return(""+a).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;")}}),jQuery.extend(jQuery.tmpl,{tag:{tmpl:{_default:{$2:"null"},open:"if($notnull_1){_=_.concat($item.nest($1,$2));}"},wrap:{_default:{$2:"null"},open:"$item.calls(_,$1,$2);_=[];",close:"call=$item.calls();_=call._.concat($item.wrap(call,_));"},each:{_default:{$2:"$index, $value"},open:"if($notnull_1){$.each($1a,function($2){with(this){",close:"}});}"},"if":{open:"if(($notnull_1) && $1a){",close:"}"},"else":{_default:{$1:"true"},open:"}else if(($notnull_1) && $1a){"},html:{open:"if($notnull_1){_.push($1a);}"},"=":{_default:{$1:"$data"},open:"if($notnull_1){_.push($.encode($1a));}"},"!":{open:""}},complete:function(a){e={}},afterManip:function(b,c,d){var e=c.nodeType===11?jQuery.makeArray(c.childNodes):c.nodeType===1?[c]:[];d.call(b,c),s(e),j++}})}(a),a.fn.tmpl})