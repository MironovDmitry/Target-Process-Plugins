define([],function(){var t=function(){function t(t,e){function r(){this.constructor=t}r.prototype=e.prototype,t.prototype=new r}function e(t,e,r,n,u,o){this.message=t,this.expected=e,this.found=r,this.offset=n,this.line=u,this.column=o,this.name="SyntaxError"}function r(t){function r(e){function r(e,r,n){var u,o;for(u=r;n>u;u++)o=t.charAt(u),"\n"===o?(e.seenCR||e.line++,e.column=1,e.seenCR=!1):"\r"===o||"\u2028"===o||"\u2029"===o?(e.line++,e.column=1,e.seenCR=!0):(e.column++,e.seenCR=!1)}return fe!==e&&(fe>e&&(fe=0,he={line:1,column:1,seenCR:!1}),r(he,fe,e),fe=e),he}function n(t){de>le||(le>de&&(de=le,ye=[]),ye.push(t))}function u(n,u,o){function i(t){var e=1;for(t.sort(function(t,e){return t.description<e.description?-1:t.description>e.description?1:0});e<t.length;)t[e-1]===t[e]?t.splice(e,1):e++}function s(t,e){function r(t){function e(t){return t.charCodeAt(0).toString(16).toUpperCase()}return t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\x08/g,"\\b").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\f/g,"\\f").replace(/\r/g,"\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g,function(t){return"\\x0"+e(t)}).replace(/[\x10-\x1F\x80-\xFF]/g,function(t){return"\\x"+e(t)}).replace(/[\u0180-\u0FFF]/g,function(t){return"\\u0"+e(t)}).replace(/[\u1080-\uFFFF]/g,function(t){return"\\u"+e(t)})}var n,u,o,i=new Array(t.length);for(o=0;o<t.length;o++)i[o]=t[o].description;return n=t.length>1?i.slice(0,-1).join(", ")+" or "+i[t.length-1]:i[0],u=e?'"'+r(e)+'"':"end of input","Expected "+n+" but "+u+" found."}var a=r(o),c=o<t.length?t.charAt(o):null;return null!==u&&i(u),new e(null!==n?n:s(u,c),u,c,o,a.line,a.column)}function o(){var t;return t=i()}function i(){var e,r,u,o,p;if(e=le,r=s(),r!==h?(t.substr(le,8).toLowerCase()===g?(u=t.substr(le,8),le+=8):(u=h,0===Ce&&n(v)),u!==h?(pe=e,r=b(r),e=r):(le=e,e=C)):(le=e,e=C),e===h&&(e=le,t.substr(le,7).toLowerCase()===m?(r=t.substr(le,7),le+=7):(r=h,0===Ce&&n(w)),r!==h&&(pe=e,r=x()),e=r,e===h&&(e=le,t.substr(le,4).toLowerCase()===A?(r=t.substr(le,4),le+=4):(r=h,0===Ce&&n(L)),r!==h?(u=i(),u!==h?(41===t.charCodeAt(le)?(o=F,le++):(o=h,0===Ce&&n(R)),o!==h?(pe=e,r=E(u),e=r):(le=e,e=C)):(le=e,e=C)):(le=e,e=C),e===h&&(e=le,r=l(),r!==h?(t.substr(le,1).toLowerCase()===k?(u=t.charAt(le),le++):(u=h,0===Ce&&n(S)),u!==h?(o=i(),o!==h?(41===t.charCodeAt(le)?(p=F,le++):(p=h,0===Ce&&n(R)),p!==h?(pe=e,r=j(r,o),e=r):(le=e,e=C)):(le=e,e=C)):(le=e,e=C)):(le=e,e=C),e===h&&(e=le,r=c(),r!==h?(40===t.charCodeAt(le)?(u=k,le++):(u=h,0===Ce&&n(S)),u!==h?(o=i(),o!==h?(41===t.charCodeAt(le)?(p=F,le++):(p=h,0===Ce&&n(R)),p!==h?(pe=e,r=q(r,o),e=r):(le=e,e=C)):(le=e,e=C)):(le=e,e=C)):(le=e,e=C),e===h&&(e=a(),e===h&&(e=s(),e===h))))))){if(e=le,r=[],t.length>le?(u=t.charAt(le),le++):(u=h,0===Ce&&n(M)),u!==h)for(;u!==h;)r.push(u),t.length>le?(u=t.charAt(le),le++):(u=h,0===Ce&&n(M));
else r=C;r!==h&&(pe=e,r=B(r)),e=r}return e}function s(){var e,r,u;if(e=le,r=[],D.test(t.charAt(le))?(u=t.charAt(le),le++):(u=h,0===Ce&&n(P)),u!==h)for(;u!==h;)r.push(u),D.test(t.charAt(le))?(u=t.charAt(le),le++):(u=h,0===Ce&&n(P));else r=C;return r!==h&&(pe=e,r=Q(r)),e=r}function a(){var e,r,u,o;return e=le,r=s(),r!==h?(46===t.charCodeAt(le)?(u=U,le++):(u=h,0===Ce&&n(W)),u!==h?(o=i(),o!==h?(pe=e,r=Y(r,o),e=r):(le=e,e=C)):(le=e,e=C)):(le=e,e=C),e}function c(){var e,r;return e=le,t.substr(le,4).toLowerCase()===z?(r=t.substr(le,4),le+=4):(r=h,0===Ce&&n(G)),r!==h&&(pe=e,r=H()),e=r,e===h&&(e=le,t.substr(le,3).toLowerCase()===I?(r=t.substr(le,3),le+=3):(r=h,0===Ce&&n(J)),r!==h&&(pe=e,r=K()),e=r,e===h&&(e=le,t.substr(le,4).toLowerCase()===N?(r=t.substr(le,4),le+=4):(r=h,0===Ce&&n(O)),r!==h&&(pe=e,r=T()),e=r,e===h&&(e=le,t.substr(le,5).toLowerCase()===V?(r=t.substr(le,5),le+=5):(r=h,0===Ce&&n(X)),r!==h&&(pe=e,r=Z()),e=r,e===h&&(e=le,t.substr(le,7).toLowerCase()===$?(r=t.substr(le,7),le+=7):(r=h,0===Ce&&n(_)),r!==h&&(pe=e,r=te()),e=r)))),e}function l(){var e,r;return e=le,t.substr(le,3).toLowerCase()===ee?(r=t.substr(le,3),le+=3):(r=h,0===Ce&&n(re)),r!==h&&(pe=e,r=ne()),e=r,e===h&&(e=le,t.substr(le,3).toLowerCase()===ue?(r=t.substr(le,3),le+=3):(r=h,0===Ce&&n(oe)),r!==h&&(pe=e,r=ie()),e=r,e===h&&(e=le,t.substr(le,3).toLowerCase()===se?(r=t.substr(le,3),le+=3):(r=h,0===Ce&&n(ae)),r!==h&&(pe=e,r=ce()),e=r)),e}var p,f=arguments.length>1?arguments[1]:{},h={},d={start:o},y=o,C=h,g=".count()",v={type:"literal",value:".Count()",description:'".Count()"'},b=function(t){return"#"+t},m="count()",w={type:"literal",value:"Count()",description:'"Count()"'},x=function(){return"Count"},A="sum(",L={type:"literal",value:"sum(",description:'"sum("'},F=")",R={type:"literal",value:")",description:'")"'},E=function(t){return t+" Sum"},k="(",S={type:"literal",value:"(",description:'"("'},j=function(t,e){return t+" "+e},q=function(t,e){return{label:e+" by "+t,tickPeriod:t.toLowerCase()}},M={type:"any",description:"any character"},B=function(t){return t.join("")
},D=/^[^\- .()+*\/[\]]/,P={type:"class",value:"[^\\- .()+*\\/[\\]]",description:"[^\\- .()+*\\/[\\]]"},Q=function(t){return t.join("")},U=".",W={type:"literal",value:".",description:'"."'},Y=function(t,e){return t+("name"==e.toLowerCase()?"":" "+e)},z="week",G={type:"literal",value:"week",description:'"week"'},H=function(){return"Week"},I="day",J={type:"literal",value:"day",description:'"day"'},K=function(){return"Day"},N="year",O={type:"literal",value:"year",description:'"year"'},T=function(){return"Year"},V="month",X={type:"literal",value:"month",description:'"month"'},Z=function(){return"Month"},$="quarter",_={type:"literal",value:"quarter",description:'"quarter"'},te=function(){return"Quarter"},ee="avg",re={type:"literal",value:"avg",description:'"avg"'},ne=function(){return"Average"},ue="max",oe={type:"literal",value:"max",description:'"max"'},ie=function(){return"Max"},se="min",ae={type:"literal",value:"min",description:'"min"'},ce=function(){return"Min"},le=0,pe=0,fe=0,he={line:1,column:1,seenCR:!1},de=0,ye=[],Ce=0;if("startRule"in f){if(!(f.startRule in d))throw new Error("Can't start parsing from rule \""+f.startRule+'".');y=d[f.startRule]}if(p=y(),p!==h&&le===t.length)return p;throw p!==h&&le<t.length&&n({type:"end",description:"end of input"}),u(null,ye,de)}return t(e,Error),{SyntaxError:e,parse:r}}();return t});