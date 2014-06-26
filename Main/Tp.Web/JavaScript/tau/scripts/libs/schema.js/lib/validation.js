define(["require","exports","module","./utils","./objecttools"],function(t,r,i){var s=t("./utils"),e=t("./objecttools"),n=s.locale,h=Array.prototype.slice;i.exports=function(){var r=this,i=this.detectRecursion,o=this.Validation=function(t,e,h){h=h||{},this._flags={},this._errors={},this._wasError=0,this._stack=[],this.path=[],this.id=o._id++,this.schema,this.push(t),this.instance=e,this.locale=r.locale||"en",this.detectRecursion=h.detectRecursion||i,this.errors=[];var a=this,c=this.Error=function(t,r,i){this.schema=a.schema,this.path=a.path?[].concat(a.path):[],this.attribute=t||"",this.description="object"==typeof r?n(r,a.locale)(this):r||"",i&&s.extend(this,i),a._errors[this.id()]||(a._errors[this.id()]=!0,a.errors.push(this)),a._wasError++};c.prototype.toJSON=function(){return{path:this.path,name:this.attribute,description:this.description}},c.prototype.id=function(){return[this.path,void 0,this.attribute]+""},this.instance=this.start(e),delete this._flags,this._errors,this._wasError,this._stack,this.path,this.id};s.extend(o.prototype,{isError:function(){return this.errors.length>0},getError:function(){if(0===this.errors.length)return null;var t=new Error(n(r.i18n("validation_error"),this.locale)(this));return t.errors=this.errors,t.toJSON=function(){return{message:this.message,errors:this.errors}},t},wasError:function(){var t=this._wasError;return this._wasError=0,t},push:function(t,r){this.schema=t,this._stack.push(t),void 0!==r&&this.path.push(r)},pop:function(t){var r=[this._stack.pop(),t?void 0:this.path.pop()],i=this._stack.length;return this.schema=i?this._stack[i-1]:null,r},getFlag:function(t){return e.id(t)+"_"+this.schema.id},flagObject:function(t){return this._flags[this.getFlag(t)]=!0,t},isObjectFlagged:function(t){return this.getFlag(t)in this._flags},callPlugin:function(t,r){var i=arguments.length>2?h.call(arguments,1):[r];return"function"!=typeof t&&(t=o.plugins[t]||o.plugins.addError),t.apply(this,i)}}),s.extend(o,{_id:1,registerPlugins:function(t){s.extend(o.plugins,t)},plugins:{addError:function(t,i){return new this.Error(i,r.i18n["validation_error_"+i]),t}}}),t("./"+this.v+"/validation").call(this)}});