define(["Underscore","jQuery"],function(e,n){n.widget("ui.behaviourUrlEditor",{options:{onSave:n.noop},_create:function(){var n=this.element;this.$element=n;var t=this;n.find(":button:first").click(function(n){n.preventDefault(),e.bind(t._save,t)()}),n.find(":input").keyup(function(n){n.keyCode==jQuery.ui.keyCode.ENTER&&(n.preventDefault(),e.bind(t._save,t)())})},_save:function(){var e=this.element;this.options.onSave({url:e.find("[name=url]").val(),label:e.find("[name=label]").val()})},setValidationErrors:function(n){var t=this.$element;e.each(n,function(e,n){t.find("[name="+n+"]").addClass("ui-validationerror").attr("title",e)})},resetValidationErrors:function(){this.$element.find(":text").removeClass("ui-validationerror").attr("title",null)},setValue:function(n){var t=this.$element;e.each(n,function(e,n){t.find("[name="+n+"]").val(e)})},destroy:function(){}})});