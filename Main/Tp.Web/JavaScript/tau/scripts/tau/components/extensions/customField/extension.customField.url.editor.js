define(["Underscore","jQuery","tau/core/extension.base","tau/ui/behaviour/customField/ui.behaviour.customField.url.editor"],function(e,a,i){return i.extend({category:"edit","bus dataBind+afterRender":function(e){var a=this,i=e.dataBind.data,t=e.afterRender.data.element;this.$widget=t,t.find("[name=url]").val(i.value.url),t.find("[name=label]").val(i.value.label),t.behaviourUrlEditor({onSave:function(e){a.bus.fire("save",{customFields:[{name:i.name,type:"URL",value:e}]})}}),t.find(":button:eq(1)").click(function(){a.bus.fire("close")})},"bus validate":function(){this.$widget.behaviourUrlEditor("resetValidationErrors")},"bus afterValidate":function(e){this.$widget.behaviourUrlEditor("setValue",e.data.validation.instance.value)},"bus validationFailed":function(a){var i={};e.each(a.data.validation.errors,function(a){e.each(["url","label"],function(t){-1!==e.indexOf(a.path,t)&&(i[t]=a.description)})}),this.$widget.behaviourUrlEditor("setValidationErrors",i)}})});