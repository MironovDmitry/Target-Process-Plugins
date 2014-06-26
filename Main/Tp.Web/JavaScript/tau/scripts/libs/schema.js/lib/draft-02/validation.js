define(["require","exports","module","Underscore","../utils","../objecttools"],function(t,i,e){var r=t("Underscore"),s=t("../utils"),a=t("../objecttools");e.exports=function(){var t=this,i=this.Schema;s.extend(this.Validation.prototype,{start:function(t){if(this.detectRecursion&&t instanceof Object){if(this.isObjectFlagged(t))return t;this.flagObject(t)}return t=this["extends"](t),this.wasError()?t:(t=this.adapters(t,"pre"),this.wasError()?t:(t=this.optional(t),this.wasError()||void 0===t?t:(t=this.empty(t),this.wasError()||""===t||null===t?t:(t=this.type(t),this.wasError()?t:(t=this.requires(t),this.wasError()?t:t=this.adapters(t,"post"))))))},"extends":function(t){return this.schema["extends"]?(this.push(this.schema["extends"]),t=this.start(t),this.pop(!0),t):t},optional:function(t){return this.schema.optional||void 0!==t?t:this.callPlugin(this.schema.fallbacks.optional,t,"optional")},empty:function(t){return this.schema.empty||void 0!==t&&""!==t&&null!==t?t:this.callPlugin(this.schema.fallbacks.optional,t,"empty")},adapters:function(t,i){if(!this.schema[i])return t;var e=this.schema[i];e instanceof Array||(e=[e]);for(var r,s=this.errors.length,a=e.length,n=0;a>n;n++)if(r=e[n],t=this.callPlugin(r,t),this.errors.length>s)return t;return t},type:function(t,i,e){e=e===!1?!1:!0;var r=i||this.schema.type;if(!(r instanceof Array)){var s=typeof t,a=function(){return"any"===r?!0:"null"===r?null===t:"array"===r?t instanceof Array:"object"===r?t instanceof Object&&!(t instanceof Array):"number"===r?"number"===s:"integer"===r?"number"===s&&Math.round(t)===t:"string"===r?"string"===s:"boolean"===r?"boolean"===s:void 0}();if(!a&&(t=this.callPlugin(this.schema.fallbacks.type,t,"type"),this.wasError()))return t;var i=typeof t;return"number"===i?(t=this.minimum(t),this.wasError()?t:(t=this.maximum(t),this.wasError()?t:(t=this.maxDecimal(t),this.wasError()?t:(e&&(t=this["enum"](t)),t)))):"string"===i?(t=this.pattern(t),this.wasError()?t:(t=this.minLength(t),this.wasError()?t:(t=this.maxLength(t),this.wasError()?t:(e&&(t=this["enum"](t)),t)))):t instanceof Array?(t=this.minItems(t),this.wasError()?t:(t=this.maxItems(t),this.wasError()?t:(t=this.items(t),this.wasError()?t:(t=this.additionalProperties(t),this.wasError()?t:(e&&(t=this["enum"](t)),t))))):t instanceof Object?(t=this.properties(t),t=this.additionalProperties(t),this.wasError()?t:(e&&(t=this["enum"](t)),t)):t}for(var n,h=this.errors.length,o=r.length,m=0;o>m;m++){if(n=this.type(t,r[m],0===m),this.errors.length===h){t=n;break}o>m+1&&(this.errors.splice(h,1),this.wasError())}return t},"enum":function(t){return"enum"in this.schema?r.indexOf(this.schema["enum"],t)>-1?t:this.callPlugin(this.schema.fallbacks["enum"],t,"enum"):t},requires:function(t){if(void 0!==this.schema.requires&&this.parentInstance){var e;"string"==typeof this.schema.requires?(e={properties:{}},e.properties[this.schema.requires]={type:"any"}):e={properties:this.schema.requires},e=i.create(e);var r=this.pop();this.push(e),this.properties(this.parentInstance),this.pop(!0),this.push.apply(this,r)}return t},properties:function(t){if("properties"in this.schema){var i,e=this.schema.properties;this.parentInstance=t;var r,i;for(var s in e)this.push(e[s],s),r=s in t,"__id"!=s?i=this.start(t[s]):(i=void 0,r=!1),(r||void 0!==i)&&(t[s]=i),this.pop();this.parentInstance=null}return this.wasError(),t},additionalProperties:function(t){if("additionalProperties"in this.schema)if(t instanceof Object&&!(t instanceof Array)){var i=this.schema.properties||{};if(this.schema.additionalProperties){if(this.schema.additionalProperties!==!0)for(var e,r=Object.keys(t),s=r.length,a=0;e=r[a],s>a;a++)e in i||(this.push(this.schema.additionalProperties,e),"__id"!==e&&(t[e]=this.start(t[e])),this.pop())}else for(var e,r=Object.keys(t),s=r.length,a=0;e=r[a],s>a;a++)if(!(e in i)&&"__id"!=e)return this.callPlugin(this.schema.fallbacks.additionalProperties,t,"additionalProperties")}else if(this.schema.items instanceof Array)if(this.schema.additionalProperties){if(this.schema.additionalProperties!==!0)for(var s=t.length,a=this.schema.items.length;s>a;a++)this.push(this.schema.additionalProperties,a),t[a]=this.start(t[a]),this.pop()}else if(t.length>this.schema.items.length)return this.callPlugin(this.schema.fallbacks.additionalProperties,t,"additionalProperties");return t},items:function(t){if("items"in this.schema)if(this.schema.items instanceof Array)for(var i,e,r=this.schema.items.length,s=0;r>s;s++)this.push(this.schema.items[s],s),i=s in t,"__id"!=s?e=this.start(t[s]):(i=!1,e=void 0),(i||void 0!==e)&&(t[s]=e),this.pop();else for(var r=t.length,s=0;r>s;s++)this.push(this.schema.items,s),"__id"!=s&&(t[s]=this.start(t[s])),this.pop();return t},maxItems:function(t){return this.schema.maxItems&&t.length>this.schema.maxItems?this.callPlugin(this.schema.fallbacks.maxItems,t,"maxItems"):t},minItems:function(t){return this.schema.minItems&&t.length<this.schema.minItems?this.callPlugin(this.schema.fallbacks.minItems,t,"minItems"):t},minimum:function(t){if(!("minimum"in this.schema))return t;var i="minimumCanEqual"in this.schema?this.schema.minimumCanEqual:!0;return(i?t>=this.schema.minimum:t>this.schema.minimum)?t:this.callPlugin(this.schema.fallbacks.minimum,t,"minimum")},maximum:function(t){if(!("maximum"in this.schema))return t;var i="maximumCanEqual"in this.schema?this.schema.maximumCanEqual:!0;return(i?t<=this.schema.maximum:t<this.schema.maximum)?t:this.callPlugin(this.schema.fallbacks.maximum,t,"maximum")},maxDecimal:function(t){if("maxDecimal"in this.schema){var i=Math.pow(10,this.schema.maxDecimal);return Math.round(t*i)/i===t?t:this.callPlugin(this.schema.fallbacks.maxDecimal,t,"maxDecimal")}return t},pattern:function(t){return this.schema.pattern?this.schema.pattern.test(t)?t:this.callPlugin(this.schema.fallbacks.pattern,t,"pattern"):t},minLength:function(t){return void 0===this.schema.minLength?t:t.length>=this.schema.minLength?t:this.callPlugin(this.schema.fallbacks.minLength,t,"minLength")},maxLength:function(t){return void 0===this.schema.maxLength?t:t.length<=this.schema.maxLength?t:this.callPlugin(this.schema.fallbacks.maxLength,t,"maxLength")}}),s.extend(this.Validation,{TOLERANT_FALLBACKS:{optional:"setDefault",type:"castTolerantlyToType","enum":"setDefault",requires:"addError",additionalProperties:"removeAdditionalProperties",maxItems:"sliceToMaxItems",minItems:"addError",maximum:"setMaximum",minimum:"setMinimum",maxDecimal:"roundToMaxDecimal",pattern:"addError",minLength:"addError",maxLength:"addError"},STRICT_FALLBACKS:{optional:"addError",type:"addError","enum":"addError",requires:"addError",additionalProperties:"addError",maxItems:"addError",minItems:"addError",maximum:"addError",minimum:"addError",maxDecimal:"addError",pattern:"addError",minLength:"addError",maxLength:"addError"}}),this.Validation.registerPlugins({addToRefs:function(t){if(t instanceof Object&&!(t instanceof Array)&&"string"==typeof t.$ref){var i=this.path,e=t.$ref.split(".");a.addRef(this.instance,[].concat(i),"#"===e[0]?[].concat(e):["#","constructor","instances"].concat(e))}return t},instantiateSchema:function(t){if(!(t instanceof Object)||t instanceof Array)return t;var e=t===this.instance;if(t instanceof i||(t=new i(t)),e&&(this.instance=t),t.properties instanceof Object){var r=t.properties||{};for(var s in r)r[s]instanceof Object&&!(r[s]instanceof i)&&(r[s]=new i(r[s]))}if(t.items instanceof Array)for(var n=t.items,h=n.length,o=0;h>o;o++)n[o]instanceof Object&&!(n[o]instanceof i)&&(n[o]=new i(n[o]));else t.items instanceof Object&&(t.items instanceof i||(t.items=new i(t.items)));if(t.requires&&t.requires instanceof Object&&!(t.requires instanceof Array)){var r=t.requires;for(var s in r)r[s]=new i(r[s])}return t.additionalProperties instanceof Object&&!(t.additionalProperties instanceof i)&&(t.additionalProperties=new i(t.additionalProperties)),t["extends"]instanceof Object&&(t["extends"]instanceof i||(t["extends"]=new i(t["extends"]))),t.setFallbacks(t.fallbacks),a.resetRefs(t),t},castTolerantlyToType:function(i,e){e=e||"type";var r,s=this.schema.type,a=typeof i;if("string"===s)return"object"===a?null!==i&&"function"==typeof i.toString&&i.toString!==Object.prototype.toString&&i.toString!==Array.prototype.toString?""+i:(new this.Error(e,t.i18n["validation_error_"+e]),i):""+i;if("number"===s){if("boolean"!==a)return r=parseFloat(i),isNaN(r)&&0!=i?(new this.Error(e,t.i18n["validation_error_"+e]?t.i18n["validation_error_"+e]:"validation_error_"+e),i):isNaN(r)?i:r;if(i===!1)return 0;if(i===!0)return 1}if("integer"===s){if("boolean"!==a)return r=parseInt(i,10),isNaN(r)?(new this.Error(e,t.i18n["validation_error_"+e]),i):r;if(i===!1)return 0;if(i===!0)return 1}if("boolean"===s)return"string"===a?"false"===i.trim().toLowerCase()?!1:(r=parseFloat(i),isNaN(r)?!0:!!r):!!i;if("object"===s)return i instanceof Array&&0===i.length?{}:(("object"!==a||null===i||i instanceof Array)&&new this.Error(e,t.i18n["validation_error_"+e]),i);if("array"===s){if(!i)return[];if(i instanceof Object){var n,r=[],h=!0;if(0===Object.keys(i).length)return r;for(var o in i){n=parseInt(o,10),""+n===o?r[n]=i[o]:h=!1;break}}return new this.Error(e,t.i18n["validation_error_"+e]),i}return"null"===s?(new this.Error(e,t.i18n["validation_error_"+e]),i):void 0},roundToMaxDecimal:function(i,e){if(void 0===this.schema.maxDecimal)return new this.Error(e,t.i18n["validation_error_"+e]),i;var r=Math.pow(10,this.schema.maxDecimal);return Math[0>i?"ceil":"floor"](i*r)/r},setMinimum:function(i,e){return void 0===this.schema.minimum?(new this.Error(e,t.i18n["validation_error_"+e]),i):this.schema.minimum},setMaximum:function(i,e){return void 0===this.schema.maximum?(new this.Error(e,t.i18n["validation_error_"+e]),i):this.schema.maximum},truncateToMaxLength:function(i,e){return void 0===this.schema.maxLength?(new this.Error(e,t.i18n["validation_error_"+e]),i):i.substr(0,this.schema.maxLength)},setDefault:function(i,e){return"default"in this.schema?this.schema["default"]:void new this.Error(e,t.i18n["validation_error_"+e])},removeAdditionalProperties:function(t){if("object"===this.schema.type){for(var i,e=this.schema.properties||{},r=Object.keys(t),s=r.length,a=0;i=r[a],s>a;a++)void 0===e[i]&&delete t[i];return t}if(this.schema.items&&this.schema.items instanceof Array)for(var s=t.length,a=this.schema.items.length;s>a;a++)delete t[a];return t},sliceToMaxItems:function(i,e){return void 0!==this.schema.maxItems?i.length>this.schema.maxItems&&i.splice(this.schema.maxItems):new this.Error(e,t.i18n["validation_error_"+e]),i},deleteInstance:function(){return void 0}})}});