define(["require","exports","module"],function(e,n,r){"undefined"==typeof global&&"object"==typeof window&&(window.global=window),Object.keys||(Object.keys=function(e){if(e!==Object(e))throw new TypeError("Invalid object");var n=[];for(var r in e)e.hasOwnProperty.call(e,r)&&(n[n.length]=r);return n});{var t=0,o=["$ref","$refs","$$refs"],f={},i=f.find=function(e,n){for(var r,t=e,o=n.length,f=0;o>f&&void 0!==(r=n[f]);f++){if(!((t instanceof Object||t instanceof Array)&&r in t))return;t=t[r]}return t},s=f.id=function(e){return e instanceof Object?(e.hasOwnProperty("__id")||(e.__id=t++),e.__id):void 0},c=f.resetRefs=function(e){if(!(e instanceof Object))return null;var n=a(e);return n?(n.splice(0),n):(n=[],e instanceof Array?e.push({$$refs:n}):e.$refs=n,n)},a=f.getRefs=function(e){return e instanceof Object?e instanceof Array&&e[e.length-1]&&e[e.length-1].$$refs instanceof Array?e[e.length-1].$$refs:e.hasOwnProperty("$refs")?e.$refs:null:null};f.addRef=function(e,n,r){var t=a(e);if(!t)throw new Error("You need to call resetRefs(object) first!");return t.push(n),t.push(r),t},f.findRefs=function(e){var n={},r=[],t=c(e),f=function(i){if(i instanceof Object){var c=s(i);if(void 0!==n[c])return t.push([].concat(r)),void t.push(n[c]);if(n[c]=["#"].concat(r),e instanceof Array)for(var a=e.length,u=0;a>u;u++)r.push(u),f(i[u]),r.pop();else for(var l,p=Object.keys(i),a=p.length,u=0;l=p[u],a>u;u++)o.indexOf(l)>-1||(r.push(l),f(i[l]),r.pop())}};return f(e),e},f.resolveRefs=function(e,n){var r,t=e instanceof Array;if(t){var o=e[e.length-1];o instanceof Object&&o.$refs instanceof Array&&(r=o.$refs)}else e instanceof Object&&e.$refs instanceof Array&&(r=e.$refs);if(!r)return e;for(var f,s,c,a,u,l=r.length,p=0;l>p;p+=2)f=[].concat(r[p]),c=[].concat(r[p+1]),s=f.pop(),a=c.shift(),void 0!==s&&void 0!==a&&(u=i(e,f),u&&("#"!==a&&c.unshift(a),("#"===a||n)&&(u[s]=i("#"===a?e:global,c),r.splice(p,2),p-=2,l-=2)));return e}}r.exports={},"object"==typeof r&&r.exports&&(r.exports=f)});