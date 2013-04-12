define(["Underscore","jQuery","tau/components/extensions/component.extension.base"],function(_,$,ExtensionBase){return ExtensionBase.extend({whenFilterResolved:function(callback){var whenFilterResolved=$.Deferred();this.fire("filter.resolve",whenFilterResolved),whenFilterResolved.then(callback)},whenTimeResolved:function(callback){var whenTimeResolved=$.Deferred();this.fire("time.resolve",whenTimeResolved),whenTimeResolved.then(callback)},unbindSettings:function(){var self=this;self.whenFilterResolved(function(filter){self.whenTimeResolved(function(time){self.fire("formData.changed",$.extend({time:time},filter))})})},"bus afterRender":function(evt,renderData){var $form=renderData.element;this.fire("$form.ready",$form),this.fire("view.dom.ready",$form),this.unbindSettings()},"bus filter.form.changed":function(){this.unbindSettings()},"bus time.form.changed":function(){this.unbindSettings()}})})