define(["require","exports","module","./objecttools","./utils","./schema","./validation"],function(e,t,a){var i=(e("./objecttools"),e("./utils")),n=Array.prototype.slice,r=i.extend,c=(i.locale,function(t,a){var i;if("object"==typeof t)a=t;else{if(c.instances[t])return c.instances[t];i=this,this.id=t,c.instances[t]=this}a=a||{};var n=a.i18n||["../i18n/default"];n instanceof Array||(n=[n]);for(var o,s=this.i18n=function(e){return s[e]||{en:function(){return""}}},l=0,h=n.length;h>l;l++)o=n[l],"object"==typeof o?r(s,o):r(s,e(o));delete a.i18n,this.locale=a.locale||"en",delete a.locale,this.v="draft-02",delete a.v,this.detectRecursion=void 0===a.detectRecursion?!0:a.detectRecursion,delete a.detectRecursion,e("./schema").call(this);var u=this.Schema;u.v=this.v,e("./validation").call(this);var f=this.Validation,d=a.fallbacks||"TOLERANT_FALLBACKS";this.fallbacks="object"==typeof d?r(f.STRICT_FALLBACKS,d):f[d],delete a.fallbacks,r(this,a),e("./"+this.v+"/setupSchemaSchema").call(this);var v=this.schemaSchema.validate(this.schemaSchema,{detectRecursion:!0});if(v.isError())throw console.log("The core schema is not valid!"),v.getError()});r(c.prototype,{validateCall:function(e,t){if(!(e.SCHEMA instanceof this.Schema))throw"No SCHEMA defined";var a=e.SCHEMA.validate(n.call(arguments,2)),i=a.instance;if(a.isError())throw a.getError();return e.apply(t,i)},validateCallAsync:function(e,t){if(!(e.SCHEMA instanceof this.Schema))throw"No SCHEMA defined";var a=n.call(arguments,2),i=a.pop(),r=e.SCHEMA.validate(a),a=r.instance;return r.isError()?i(r.getError()):(a.push(i),void e.apply(t,a))},f:function(e,t,a,i){var r=n.call(arguments),i=r.pop();if(0===r.length)return i.IS_ASYNC=!1,i;if(e instanceof Object){var c,o,t=!!r[1],e=this.Schema.create(e),a=!!r[2],s=this;return c=a?function(){return s.validateCallAsync.apply(s,[i,this].concat(n.call(arguments)))}:function(){return s.validateCall.apply(s,[i,this].concat(n.call(arguments)))},i.SCHEMA=e,i.IS_VALIDATING=t,i.IS_ASYNC=a,c.SCHEMA=e,c.IS_VALIDATING=t,c.IS_ASYNC=a,o=t?c:i,t||(o.validate=c),o}return i.IS_ASYNC=!!r[0],i}}),c.instances={};var o=function(e,t){return new c(e,t)};return a.exports={},"object"==typeof a&&a.exports?a.exports=o:window.createEnvironment=o,a.exports});