define(["Underscore","jQuery","tau/components/extensions/component.extension.base","tau/ui/behaviour/common/ui.behaviour.richeditor"],function(_,$,a){var b=a.extend({category:"edit",destroy:function(){this.$ckEditor.richeditor("destroy"),this._super()},"bus afterRender":function(a){this.element=a.data.element,this.initializeEditor()},onSave:function(a){var b=this;b.fire("editorSave"),b.fire("saveComment",{description:a}),b.closeEditor()},onCancel:function(a){this.closeEditor()},closeEditor:function(){this.fire("destroy")},initializeEditor:function(){var a=this;this.$editorPlaceHolder=this.element.find(".ui-comment-text"),this.$ckEditor=this.$editorPlaceHolder.richeditor({executionGroupName:"comments",onSave:$.proxy(a.onSave,a),onCancel:$.proxy(a.onCancel,a),validation:{trim:!0},scrollToButtonBar:!0,settings:{toolbar:[["Bold","Italic","Strike"],["NumberedList","BulletedList"],["Link","Unlink"],["Image"],["Source"]],startupFocus:!0,extraPlugins:""},saveAction:{text:"Add comment",disableIfEmpty:!0},cancelAction:{available:!0}});var b=this.$ckEditor.richeditor("showEditor");this.fire("editorCreated",{editorElement:b})}});return b})