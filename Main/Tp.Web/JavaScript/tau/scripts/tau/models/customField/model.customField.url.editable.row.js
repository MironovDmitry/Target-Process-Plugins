define(["tau/models/customField/model.customField.url.editable"],function(e){var t=e.extend({onInit:function(){{var e=this.config.context;e.entity.entityType.name}},"bus afterSaveToStore":function(){this.bus.fire("refreshRow",{})}});return t});