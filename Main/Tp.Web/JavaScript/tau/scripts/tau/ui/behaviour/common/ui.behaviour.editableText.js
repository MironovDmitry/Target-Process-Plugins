define(["Underscore","jQuery"],function(t,e){e.widget("ui.editableText",{_create:function(){this.element.textEditor(this.options)},enable:function(){this.element.data("textEditor").enable()},disable:function(){this.element.data("textEditor").disable()},activate:function(){var t=this.element.data("textEditor");t.isActive()?t.onBlur():t.onFocus()},setValidationErrors:function(e){this.element.addClass("ui-validationerror"),t.isString(e)&&this.element.attr("title",e)},resetValidationErrors:function(t){this.element.removeClass("ui-validationerror"),this.element.removeAttr("title",t)},setValue:function(t){this.element.text(t),this.element.data("textEditor").setInitialText(t)},destroy:function(){this._super()}})});