define(["jQuery"],function(r){function e(r){this._create(r)}return e.prototype={messageTemplate:'{{ if Message.Length }} <span>&nbsp;<span class="error">${Message}</span></span> {{/if}}',workingSpace:null,errorList:null,generalErrorContainer:null,generalErrorMessage:null,_create:function(r){this.workingSpace=r.placeholder,this.errorList=[],this.generalErrorContainer=r.generalErrorContainer,this.generalErrorMessage=r.generalErrorMessage},reset:function(){this.errorList=[],this.workingSpace.find('[name*="ErrorLabel"]').html("")},add:function(r){this.errorList.push(r)},addRange:function(e){var n=this;r(e).each(function(r,e){n.add(e)})},_renderError:function(r,e){this.workingSpace.find('*[name="'+e.FieldName+'"]').addClass("error"),this.workingSpace.find('*[name="'+e.FieldName+'ErrorLabel"]').html(e.Message)},render:function(){0==this.errorList.length?this.workingSpace.find(".error").removeClass("error"):(r(this.errorList).each(r.proxy(this._renderError,this)),r('*[name="'+this.errorList[0].FieldName+'"]').focus(),this._renderGeneralError())},_renderGeneralError:function(){var e;if(this.generalErrorMessage&&(e=this.generalErrorMessage),this.generalErrorContainer){var n=r.grep(this.errorList,function(r){return!r.FieldName});n.length>0&&(e=r.map(n,function(r){return r.Message}).join(" "))}e&&this.workingSpace.find(this.generalErrorContainer).show().text(e)},clearErrors:function(){this._removeErrorClass("input"),this._removeErrorClass("textarea"),this._removeErrorClass("select"),this.reset(),this.generalErrorContainer&&this.workingSpace.find(this.generalErrorContainer).hide().text("")},setOnFocusEvent:function(){this._setOnFocusForControl("input"),this._setOnFocusForControl("textarea"),this._setOnFocusForControl("select")},_setOnFocusForControl:function(e){this.workingSpace.find(e).focus(function(){r(this).removeClass("error")})},_removeErrorClass:function(r){this.workingSpace.find(r).removeClass("error")}},e});