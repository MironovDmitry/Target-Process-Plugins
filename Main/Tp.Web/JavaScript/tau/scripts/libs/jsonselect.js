define([],function(){return function(e){function n(e){try{return JSON&&JSON.parse?JSON.parse(e):new Function("return "+e)()}catch(n){r("ijs",n.message)}}function r(e,n){throw new Error(y[e]+(n&&" in '"+n+"'"))}function t(e,t){t||(t=0);var i=j.exec(e.substr(t));if(!i)return void 0;t+=i[0].length;var u;return i[1]?u=[t," "]:i[2]?u=[t,i[0]]:i[3]?u=[t,w.typ,i[0]]:i[4]?u=[t,w.psc,i[0]]:i[5]?u=[t,w.psf,i[0]]:i[6]?r("upc",e):i[8]?u=[t,i[7]?w.ide:w.str,n(i[8])]:i[9]?r("ujs",e):i[10]&&(u=[t,w.ide,i[10].replace(/\\([^\r\n\f0-9a-fA-F])/g,"$1")]),u}function i(e,n){return typeof e===n}function u(e,r){var t,i=A.exec(e.substr(r));return i?(r+=i[0].length,t=i[1]||i[2]||i[3]||i[5]||i[6],i[1]||i[2]||i[3]?[r,0,n(t)]:i[4]?[r,0,void 0]:[r,t]):void 0}function o(e,n){n||(n=0);var t,i=u(e,n);if(i&&"("===i[1]){t=o(e,i[0]);var s=u(e,t[0]);s&&")"===s[1]||r("epex",e),n=s[0],t=["(",t[1]]}else!i||i[1]&&"x"!=i[1]?r("ee",e+" - "+(i[1]&&i[1])):(t="x"===i[1]?void 0:i[2],n=i[0]);var c=u(e,n);if(!c||")"==c[1])return[n,t];"x"!=c[1]&&c[1]||r("bop",e+" - "+(c[1]&&c[1]));var a=o(e,c[0]);n=a[0],a=a[1];var f;if("object"!=typeof a||"("===a[0]||S[c[1]][0]<S[a[1]][0])f=[t,c[1],a];else{for(f=a;"object"==typeof a[0]&&"("!=a[0][0]&&S[c[1]][0]>=S[a[0][1]][0];)a=a[0];a[0]=[t,c[1],a[0]]}return[n,f]}function s(e,n){function r(e){return"object"!=typeof e||null===e?e:"("===e[0]?r(e[1]):[r(e[0]),e[1],r(e[2])]}var t=o(e,n?n:0);return[t[0],r(t[1])]}function c(e,n){if(void 0===e)return n;if(null===e||"object"!=typeof e)return e;var r=c(e[0],n),t=c(e[2],n);return S[e[1]][1](r,t)}function a(e,n,i,u){i||(u={});var o,s,c=[];for(n||(n=0);;){var a=l(e,n,u);if(c.push(a[1]),a=t(e,n=a[0]),a&&" "===a[1]&&(a=t(e,n=a[0])),!a)break;if(">"===a[1]||"~"===a[1])"~"===a[1]&&(u.usesSiblingOp=!0),c.push(a[1]),n=a[0];else if(","===a[1])void 0===o?o=[",",c]:o.push(c),c=[],n=a[0];else if(")"===a[1]){i||r("ucp",a[1]),s=1,n=a[0];break}}i&&!s&&r("mcp",e),o&&o.push(c);var f;return f=!i&&u.usesSiblingOp?p(o?o:c):o?o:c,[n,f]}function f(e){for(var n,r=[],t=0;t<e.length;t++)if("~"===e[t]){if((2>t||">"!=e[t-2])&&(n=e.slice(0,t-1),n=n.concat([{has:[[{pc:":root"},">",e[t-1]]]},">"]),n=n.concat(e.slice(t+1)),r.push(n)),t>1){var i=">"===e[t-2]?t-3:t-2;n=e.slice(0,i);var u={};for(var o in e[i])e[i].hasOwnProperty(o)&&(u[o]=e[i][o]);u.has||(u.has=[]),u.has.push([{pc:":root"},">",e[t-1]]),n=n.concat(u,">",e.slice(t+1)),r.push(n)}break}return t==e.length?e:r.length>1?[","].concat(r):r[0]}function p(e){if(","===e[0]){for(var n=[","],r=r;r<e.length;r++){var t=f(t[r]);n=n.concat(","===t[0]?t.slice(1):t)}return n}return f(e)}function l(e,n){var i=n,u={},o=t(e,n);for(o&&" "===o[1]&&(i=n=o[0],o=t(e,n)),o&&o[1]===w.typ?(u.type=o[2],o=t(e,n=o[0])):o&&"*"===o[1]&&(o=t(e,n=o[0]));;){if(void 0===o)break;if(o[1]===w.ide)u.id&&r("nmi",o[1]),u.id=o[2];else if(o[1]===w.psc)(u.pc||u.pf)&&r("mpc",o[1]),":first-child"===o[2]?(u.pf=":nth-child",u.a=0,u.b=1):":last-child"===o[2]?(u.pf=":nth-last-child",u.a=0,u.b=1):u.pc=o[2];else{if(o[1]!==w.psf)break;if(":val"===o[2]||":contains"===o[2])u.expr=[void 0,":val"===o[2]?"=":"*=",void 0],o=t(e,n=o[0]),o&&" "===o[1]&&(o=t(e,n=o[0])),o&&"("===o[1]||r("pex",e),o=t(e,n=o[0]),o&&" "===o[1]&&(o=t(e,n=o[0])),o&&o[1]===w.str||r("sex",e),u.expr[2]=o[2],o=t(e,n=o[0]),o&&" "===o[1]&&(o=t(e,n=o[0])),o&&")"===o[1]||r("epex",e);else if(":has"===o[2]){o=t(e,n=o[0]),o&&" "===o[1]&&(o=t(e,n=o[0])),o&&"("===o[1]||r("pex",e);var c=a(e,o[0],!0);o[0]=c[0],u.has||(u.has=[]),u.has.push(c[1])}else if(":expr"===o[2]){u.expr&&r("mexp",e);var f=s(e,o[0]);o[0]=f[0],u.expr=f[1]}else{(u.pc||u.pf)&&r("mpc",e),u.pf=o[2];var p=O.exec(e.substr(o[0]));p||r("mepf",e),p[5]?(u.a=2,u.b="odd"===p[5]?1:0):p[6]?(u.a=0,u.b=parseInt(p[6],10)):(u.a=parseInt((p[1]?p[1]:"+")+(p[2]?p[2]:"1"),10),u.b=p[3]?parseInt(p[3]+p[4],10):0),o[0]+=p[0].length}}o=t(e,n=o[0])}return i===n&&r("se",e),[n,u]}function h(e){return Array.isArray?Array.isArray(e):"[object Array]"===m.call(e)}function d(e){if(null===e)return"null";var n=typeof e;return"object"===n&&h(e)&&(n="array"),n}function x(e,n,r,t,i){var u,o=[],s=">"===n[0]?n[1]:n[0],a=!0;if(s.type&&(a=a&&s.type===d(e)),s.id&&(a=a&&s.id===r),a&&s.pf&&(":nth-last-child"===s.pf?t=i-t:t++,0===s.a?a=s.b===t:(u=(t-s.b)%s.a,a=!u&&t*s.a+s.b>=0)),a&&s.has)for(var f=function(){throw 42},p=0;p<s.has.length;p++){try{v(s.has[p],e,f)}catch(l){if(42===l)continue}a=!1;break}return a&&s.expr&&(a=c(s.expr,e)),">"!==n[0]&&":root"!==n[0].pc&&o.push(n),a&&(">"===n[0]?n.length>2&&(a=!1,o.push(n.slice(2))):n.length>1&&(a=!1,o.push(n.slice(1)))),[a,o]}function v(e,n,r,t,i,u){var o,s,c=","===e[0]?e.slice(1):[e],a=[],f=!1,p=0,l=0;for(p=0;p<c.length;p++)for(s=x(n,c[p],t,i,u),s[0]&&(f=!0),l=0;l<s[1].length;l++)a.push(s[1][l]);if(a.length&&"object"==typeof n)if(a.length>=1&&a.unshift(","),h(n))for(p=0;p<n.length;p++)v(a,n[p],r,void 0,p,n.length);else for(o in n)n.hasOwnProperty(o)&&v(a,n[o],r,o);f&&r&&r(n)}function g(e,n){var r=[];return v(e,n,function(e){r.push(e)}),r}function b(e){return{sel:a(e)[1],match:function(e){return g(this.sel,e)},forEach:function(e,n){return v(this.sel,e,n)}}}var m=Object.prototype.toString,y={bop:"binary operator expected",ee:"expression expected",epex:"closing paren expected ')'",ijs:"invalid json string",mcp:"missing closing paren",mepf:"malformed expression in pseudo-function",mexp:"multiple expressions not allowed",mpc:"multiple pseudo classes (:xxx) not allowed",nmi:"multiple ids not allowed",pex:"opening paren expected '('",se:"selector expected",sex:"string expected",sra:"string required after '.'",uc:"unrecognized char",ucp:"unexpected closing paren",ujs:"unclosed json string",upc:"unrecognized pseudo class"},w={psc:1,psf:2,typ:3,str:4,ide:5},j=new RegExp('^(?:([\\r\\n\\t\\ ]+)|([~*,>\\)\\(])|(string|boolean|null|array|object|number)|(:(?:root|first-child|last-child|only-child))|(:(?:nth-child|nth-last-child|has|expr|val|contains))|(:\\w+)|(?:(\\.)?(\\"(?:[^\\\\\\"]|\\\\[^\\"])*\\"))|(\\")|\\.((?:[_a-zA-Z]|[^\\0-\\0177]|\\\\[^\\r\\n\\f0-9a-fA-F])(?:[_a-zA-Z0-9\\-]|[^\\u0000-\\u0177]|(?:\\\\[^\\r\\n\\f0-9a-fA-F]))*))'),O=/^\s*\(\s*(?:([+\-]?)([0-9]*)n\s*(?:([+\-])\s*([0-9]))?|(odd|even)|([+\-]?[0-9]+))\s*\)/,A=new RegExp('^\\s*(?:(true|false|null)|(-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?)|("(?:[^\\]|\\[^"])*")|(x)|(&&|\\|\\||[\\$\\^<>!\\*]=|[=+\\-*/%<>])|([\\(\\)]))'),S={"*":[9,function(e,n){return e*n}],"/":[9,function(e,n){return e/n}],"%":[9,function(e,n){return e%n}],"+":[7,function(e,n){return e+n}],"-":[7,function(e,n){return e-n}],"<=":[5,function(e,n){return i(e,"number")&&i(n,"number")&&n>=e}],">=":[5,function(e,n){return i(e,"number")&&i(n,"number")&&e>=n}],"$=":[5,function(e,n){return i(e,"string")&&i(n,"string")&&e.lastIndexOf(n)===e.length-n.length}],"^=":[5,function(e,n){return i(e,"string")&&i(n,"string")&&0===e.indexOf(n)}],"*=":[5,function(e,n){return i(e,"string")&&i(n,"string")&&-1!==e.indexOf(n)}],">":[5,function(e,n){return i(e,"number")&&i(n,"number")&&e>n}],"<":[5,function(e,n){return i(e,"number")&&i(n,"number")&&n>e}],"=":[3,function(e,n){return e===n}],"!=":[3,function(e,n){return e!==n}],"&&":[2,function(e,n){return e&&n}],"||":[1,function(e,n){return e||n}]};e._lex=t,e._parse=a,e.match=function(e,n){return b(e).match(n)},e.forEach=function(e,n,r){return b(e).forEach(n,r)},e.compile=b}("undefined"==typeof exports?window.JSONSelect={}:exports),window.JSONSelect});