define(["Underscore","jQuery","tau/components/extensions/component.extension.base"],function(_,$,a){return a.extend({"bus permissionsReady+afterRender":function(a){this.$element=a.afterRender.data.element;var b=a.permissionsReady.data;b.deletable&&this._createDeleteTriggers()},"bus attachmentUploaded":function(a){this._createDeleteTriggers()},"bus afterAttachmentRemove":function(a){var b=this,c=a.data.id,d=this.$element.find("#attach-"+c);this.bus.fire("deleteElement",{element:d,callback:function(){$(this).remove()}})},_getDeleteTriggerProto:function(){return this._deleteTriggerProto||(this._deleteTriggerProto=$('<button class="delete" type="button">delete</button>').click($.proxy(this,"_onAttachmentDelete"))),this._deleteTriggerProto},_createDeleteTriggers:function(){var a=this;this.$element.find(".ui-attach:not(.deletable)").each(function(b,c){$(c).addClass("deletable").find(".toolbar").append(a._getDeleteTriggerProto().clone(!0))})},_onAttachmentDelete:function(a){var b=this._findUpConfirmationPlaceholder($(a.target));b.data("confirmation")||this._createConfirmation(b),this._showConfirmation(b)},_findUpConfirmationPlaceholder:function(a){return a.closest(".ui-attach").children(".inner")},_findUpAttachElement:function(a){return a.closest(".ui-attach")},_createConfirmation:function(a){a.confirmation({message:"Delete attachment?",ok:$.proxy(this,"_deleteAttachment"),cancel:$.proxy(this,"_cancelAttachmentDelete")})},_showConfirmation:function(a){a.confirmation("show")},_hideConfirmation:function(a){a.confirmation("hide")},_deleteAttachment:function(a){var b=$(a.target);this._hideConfirmation(this._findUpConfirmationPlaceholder(b));var c=this._findUpAttachElement(b);this.bus.fire("markElementToBeDeleted",{element:c}),this.bus.fire("remove",{id:c.attr("id").replace(/[^\d]/g,""),typeName:"attachment"})},_cancelAttachmentDelete:function(a){this._hideConfirmation(this._findUpConfirmationPlaceholder($(a.target)))}})})