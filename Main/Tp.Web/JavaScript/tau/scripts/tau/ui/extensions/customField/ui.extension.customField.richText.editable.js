define(["./ui.extension.customField.editable"],function(e){var t=e.extend({"bus preRefreshRow + allow.close.editor":function(){this._markElementAsUpdate()},"bus preRefreshRow":function(){},"bus allow.close.editor > afterSave":function(){this._refreshElement()},"bus refreshRow":function(){this.element.find(".i-role-property").richeditor("option","active")||this._refreshElement()}});return t});