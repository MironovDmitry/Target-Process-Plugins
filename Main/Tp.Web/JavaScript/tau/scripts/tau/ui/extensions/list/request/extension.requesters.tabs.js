define(["tau/components/extensions/component.extension.base"],function(t){return t.extend({"bus afterRender":function(t){var e=this.$el=t.data.element;setTimeout(function(){e.find(":input[data-autofocus]:visible").focus()},10)},"bus tabs.switched":function(){var t=this;setTimeout(function(){t.$el.find(":input[data-autofocus]:visible").focus()},10)}})});