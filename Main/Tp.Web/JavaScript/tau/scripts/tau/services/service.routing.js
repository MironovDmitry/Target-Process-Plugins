define(["Underscore","tau/core/Class"],function(_,a){var b=a.extend({init:function(a){a=a||{},this.config=a,this.external=a.external},get:function(a){var b={},c=a.id,d=a.fields,e=d.length,f=this.external.getHashParam(c);for(var g=0;g<e;g++){var h=d[g];b[h]=f.hasOwnProperty(h)?f[h]:null}a.callback(b)},set:function(a){var b=a.id,c=a.set,d=this.external.getHashParam(b),e=_(d).extend(c);this.external.setHashParam(b,e),a.callback(e)}});return b})