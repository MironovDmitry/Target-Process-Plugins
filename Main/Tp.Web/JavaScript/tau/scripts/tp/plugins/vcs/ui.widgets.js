define(["jQuery","tp/jquery.utils"],function(){function a(){}return $.widget("ui.error",{messageTemplate:'<span class="error">${message}</span>',_create:function(){this.element.focus($.proxy(this.clear,this)),this.element.addClass("ui-error"),this.element.addClass("error"),this.errorSpan=$.tmpl(this.messageTemplate,this.options),this.element.prev("p").append(this.errorSpan)},clear:function(){this.errorSpan.remove(),this.element.removeClass("error"),this.element.removeClass("ui-error"),this.destroy()}}),$.widget("ui.synchronizeUser",{_create:function(){this._synchronizeId(),this._synchronizeName(),this.element.blur($.proxy(this._synchronizeId,this))},userId:function(a){return a&&this.element.attr("userId",a),this.element.attr("userId")},userName:function(a){return a&&this.element.val(a),this.element.val()},_synchronizeName:function(){var a=this.userId();if(a==null||a==-1)return;var b=$.grep(this.options.source,function(b){return b.Id==a});b.length>0?this.userName(b[0].Name):this._userDeleted()},_userDeleted:function(){this.element.enabled(!1),this.element.parents(".users-block").find(".svnuser").enabled(!1)},_synchronizeId:function(){var a=this,b=$.grep(this.options.source,function(b){return b.Name==a.userName()});b.length>0&&this.userId(b[0].Id)}}),$.widget("ui.tpUserInput",{_create:function(){this.element.trigger("mappingadded"),this.element.change(function(){$(this).attr("userId",-1)}),this.element.bind("validate",function(){if($(this).val()=="")return;if($(this).attr("userId")!=null&&$(this).attr("userId")!=-1)return;$(this).error({message:""})})},validate:function(){this.element.trigger("validate")}}),$.widget("ui.success",{_create:function(){this.successElement=$('<p class="message-ok"><span>Connection was established successfully</span></p>'),this.element.before(this.successElement)},clear:function(){this.successElement.remove(),this.destroy()}}),$.widget("ui.editorAnimation",{animation:{appendTo:function(a,b){a.hide(),a.appendTo(b),a.show("blind",{direction:"vertical"},500)},remove:function(a){a.hide("blind",{direction:"vertical"},500),a.remove()}},noAnimation:{appendTo:function(a,b){a.appendTo(b)},remove:function(a){a.remove()}},_create:function(){},_getStrategy:function(){return a.prototype.turnedOn?this.animation:this.noAnimation},appendTo:function(a){this._getStrategy().appendTo(this.element,a)},remove:function(){this._getStrategy().remove(this.element)}}),a.prototype={turnedOn:!1},a})