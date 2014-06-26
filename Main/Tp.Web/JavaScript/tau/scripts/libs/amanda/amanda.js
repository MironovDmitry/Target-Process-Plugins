define([],function(){return function(){var t=function(t){return"[object Object]"===Object.prototype.toString.call(t)},r=function(t){return"[object Array]"===Object.prototype.toString.call(t)},e=function(e){if(r(e)||"string"==typeof e)return 0===e.length;if(t(e))for(var n in e)if(e.hasOwnProperty(n))return!1;return!0},n=function(t,r){for(var e in r)r.hasOwnProperty(e)&&!t.hasOwnProperty(e)&&(t[e]=r[e]);return t},o=function(n,o,i){var a=function(n,o){if(r(n)&&!e(n))for(var i=0,a=n.length;a>i;i++)o.apply(n,[i,n[i]]);if(t(n)&&!e(n))for(var u in n)n.hasOwnProperty(u)&&o.apply(n,[u,n[u]])},u=function(n,o,i){var a=[],u=function(t,r){var e=a.length+1;a.push(function(){var n=function(t){var r=a[e];return!t&&r?r():t||r?i(t):i()};return o(t,r,n)})};if(r(n)&&!e(n))for(var p=0,f=n.length;f>p;p++)u(p,n[p]);else{if(!t(n)||e(n))return i();for(var s in n)n.hasOwnProperty(s)&&u(s,n[s])}return a[0]()};return"undefined"==typeof i?a.apply(this,arguments):u.apply(this,arguments)},i=function(t,r){for(var e=[],n=0,o=t.length;o>n;n++){var i=t[n][r];-1===e.indexOf(i)&&e.push(i)}return e},a=function(){this.length=0};a.prototype.addError=function(t){this[this.length]=t,this.length++},o({getProperties:"property",getMessages:"message"},function(t,r){a.prototype[t]=function(){return i(this,r)}});var u={required:"The ‘{{property}}’ property is required.",minLength:"The ‘{{property}}’ property must be at least {{validator}} characters.",maxLength:"The ‘{{property}}’ property must not exceed {{validator}} characters.",length:"The ‘{{property}}’ property must be exactly {{validator}} characters.",format:"The ‘{{property}}’ property must be a/an {{validator}}.",type:"The ‘{{property}}’ property must be a/an {{validator}}.",except:"The ‘{{property}}’ property must not be {{propertyValue}}",minimum:"The minimum value of the ‘{{property}}’ must be {{validator}}",maximum:"The maximum value of the ‘{{property}}’ must be {{validator}}",pattern:"The `{{property}}` does not match the ‘{{validator}}’ pattern.",maxItems:"The `{{property}}` property must not contain more than {{validator}} items.",minItems:"The `{{property}}` property must contain at least {{validator}} items.",divisibleBy:"The ‘{{property}}’ property is not divisible by {{validator}}.",uniqueItems:"All items in the ‘{{property}}’ property must be unique.","enum":function(t,r,e){return"Value of the ‘"+t+"’ must be "+e.join(" or ")+"."}},p=function(t){this.singleError=t.hasOwnProperty("singleError")?t.singleError:!0,this.validators=f,this.messages=t.messages?n(t.messages,u):u,this.Errors=new a};p.prototype.renderErrorMessage=function(t,r){var e=this.messages[t];return"function"==typeof e?e(r.property,r.propertyValue,r.validator):"string"==typeof e?(o(r,function(t,r){e=e.replace(new RegExp("{{"+t+"}}","g"),r)}),e.replace(/\s+/g," ")):""},p.prototype.validateProperty=function(t,r,e,n){var i=this,a=function(n,o,a){var u=function(o){if(!o)return a();var u=i.renderErrorMessage(n,{property:t,propertyValue:r,validator:e[n]});return i.Errors.addError({property:t,propertyValue:r,validator:n,validatorValue:e[n],message:u}),a(i.singleError?!0:null)};return e[n]?o(t,r,e[n],e,u):a()};return e.required!==!0&&"undefined"==typeof r?n():o(i.validators,a,n)},p.prototype.validate=function(t,r,e){var n=this;return this.Errors=new a,this.validateSchema(t,r,"",function(){return e(n.Errors.length>0?n.Errors:void 0)})},p.prototype.validateProperties=function(t,r,e,n){var i=this;return o(r.properties,function(n,o,a){var u="object"===o.type&&o.properties,p="array"===o.type,f=i.getProperty(t,n),s=-1!==n.indexOf(" ")?"['"+n+"']":"."+n,c=0===e.length?n:e+s;return u||p?i.validateSchema(f,r.properties[n],c,a):i.validateProperty(c,f,o,a)},n)},p.prototype.validateItems=function(t,r,n,i){var a=this;return t&&!e(t)?-1!==["object","array"].indexOf(r.items.type)?o(t,function(t,e,o){var i=n+"["+t+"]";return a.validateSchema(e,r.items,i,o)},i):o(t,function(t,e,o){var i=n+"["+t+"]";return a.validateProperty(i,e,r.items,o)},i):i()},p.prototype.validateSchema=function(t,r,e,n){var o=this;return-1!==["object","array"].indexOf(r.type)?o.validateProperty(e,t,r,function(){return r.properties?o.validateProperties(t,r,e,n):r.items?o.validateItems(t,r,e,n):n()}):o.validateProperty(e,t,r,n)},p.prototype.getProperty=function(t,r){return t?t[r]:void 0};var f={required:function(t,r,e,n,o){return e&&void 0===r?o(!0):o()},type:function(){for(var t={object:function(t){return"[object Object]"===Object.prototype.toString.call(t)},array:function(t){return"[object Array]"===Object.prototype.toString.call(t)},integer:function(t){return"number"==typeof t&&t%1===0}},r=["string","number","function","boolean"],e=0,n=r.length;n>e;e++)t[r[e]]=function(t){return function(){return typeof arguments[0]===t}}(r[e]);return function(r,e,n,o,i){if("[object Array]"===Object.prototype.toString.call(n)){var a=n.some(function(r){return t[r](e)});return a?i():i(!0)}return t[n](e)?i():i(!0)}}(),format:function(){var t={alpha:function(t){return"string"==typeof t&&t.match(/^[a-zA-Z]+$/)},alphanumeric:function(t){return"string"==typeof t&&/^[a-zA-Z0-9]+$/.test(t)||"number"==typeof t},ipv4:function(t){return"string"==typeof t&&t.match(/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/)},ipv6:function(t){return"string"==typeof t&&t.match(/(?:(?:[a-f\d]{1,4}:)*(?:[a-f\d]{1,4}|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})|(?:(?:[a-f\d]{1,4}:)*[a-f\d]{1,4})?::(?:(?:[a-f\d]{1,4}:)*(?:[a-f\d]{1,4}|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}))?)/)},ip:function(r){return t.ipv4(r)||t.ipv6},email:function(t){return"string"==typeof t&&t.match(/^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/)},url:function(t){return"string"==typeof t&&t.match(/^(?:(?:ht|f)tp(?:s?)\:\/\/|~\/|\/)?(?:\w+:\w+@)?((?:(?:[-\w\d{1-3}]+\.)+(?:com|org|cat|coop|int|pro|tel|xxx|net|gov|mil|biz|info|mobi|name|aero|jobs|edu|co\.uk|ac\.uk|it|fr|tv|museum|asia|local|travel|[a-z]{2})?)|((\b25[0-5]\b|\b[2][0-4][0-9]\b|\b[0-1]?[0-9]?[0-9]\b)(\.(\b25[0-5]\b|\b[2][0-4][0-9]\b|\b[0-1]?[0-9]?[0-9]\b)){3}))(?::[\d]{1,5})?(?:(?:(?:\/(?:[-\w~!$+|.,=]|%[a-f\d]{2})+)+|\/)+|\?|#)?(?:(?:\?(?:[-\w~!$+|.,*:]|%[a-f\d{2}])+=?(?:[-\w~!$+|.,*:=]|%[a-f\d]{2})*)(?:&(?:[-\w~!$+|.,*:]|%[a-f\d{2}])+=?(?:[-\w~!$+|.,*:=]|%[a-f\d]{2})*)*)*(?:#(?:[-\w~!$ |\/.,*:;=]|%[a-f\d]{2})*)?$/)},date:function(t){return"[object Date]"===Object.prototype.toString.call(t)},decimal:function(t){return/^[0-9]+(\.[0-9]{1,2})?$/.test(t)},"int":function(t){return/^-?[0-9]+$/.test(t)},percentage:function(t){return"string"==typeof t&&t.match(/^-?[0-9]{0,2}(\.[0-9]{1,2})?$|^-?(100)(\.[0]{1,2})?$/)||t>=-100&&100>=t},port:function(t){return/\:\d+/.test(t)},regexp:function(t){return t&&t.test&&t.exec},unsignedInt:function(t){return/^[0-9]+$/.test(t)}};return function(r,e,n,o,i){return t[n](e)?i():i(!0)}}(),minLength:function(t,r,e,n,o){return"string"==typeof r&&r.length>=e?o():o(!0)},maxLength:function(t,r,e,n,o){return"string"==typeof r&&r.length<=e?o():o(!0)},length:function(t,r,e,n,o){return"string"==typeof r&&r.length===e?o():o(!0)},"enum":function(t,r,e,n,o){return-1===e.indexOf(r)?o(!0):o()},except:function(t,r,e,n,o){return-1!==e.indexOf(r)?o(!0):o()},minimum:function(t,r,e,n,o){if("number"==typeof r){var i=n.exclusiveMinimum?r>e:r>=e;return i?o():o(!0)}return o(!0)},maximum:function(t,r,e,n,o){if("number"==typeof r){var i=n.exclusiveMaximum?e>r:e>=r;return i?o():o(!0)}return o(!0)},pattern:function(t,r,e,n,o){return"string"!=typeof r||r.match(e)?o():o(!0)},minItems:function(t,e,n,o,i){return r(e)&&e.length>=n?i():i(!0)},maxItems:function(t,e,n,o,i){return r(e)&&e.length<=n?i():i(!0)},uniqueItems:function(t,r,e,n,i){return o(r,function(t,e,n){return r.indexOf(e)<t?n(!0):n()},i)},divisibleBy:function(t,r,e,n,o){var i="number"==typeof r,a=r%e===0;return i&&a?o():o(!0)}};return p}()});