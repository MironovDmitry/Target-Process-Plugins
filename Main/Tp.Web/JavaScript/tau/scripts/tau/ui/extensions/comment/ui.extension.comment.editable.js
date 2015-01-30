define(["Underscore","jQuery","tau/components/extensions/component.extension.base","tau/ui/templates/comments/ui.template.comments.actions","tau/ui/behaviour/common/ui.behaviour.richeditor","tau/ui/extensions/comment/mention.ckeditor.plugin"],function(e,t,n,i,o,s){return n.extend({category:"edit",destroy:function(){this.destroyDynamicComponents(),this._super()},lifeCycleCleanUp:function(){this.destroyDynamicComponents(),this._super()},destroyDynamicComponents:function(){var e=this;e.componentList&&(e.componentList.destroy(),delete e.componentList)},"bus applyTo + permissionsReady":function(e){var t=e.applyTo.data,n=e.permissionsReady.data;this.applyPermissions(t.config,t.data,t.element,n)},"bus applyTo":function(e,t){this.comment=t.data},applyPermissions:function(t,n,o,s){var a=this.config=e.extend({},t,{comment:n}),c=this.element=o,r=c.children(".ui-comment-body"),m=this.config.context.configurator.getTemplateFactory().get(i.name).bind({},s);r.children(".ui-comment-heading").append(m.eq(0)),r.append(m.eq(1)),s.editable&&r.addClass("editable"),s.deletable&&r.addClass("deletable"),m.on("click",".reply",e.bind(this.onReply,this,n.owner)),m.on("click",".edit",e.bind(this.onEdit,this)),m.on("click",".delete",e.bind(this.onDelete,this));var d=c.children(".ui-comments"),l={components:[{type:"commentList"}],context:a.context};this.componentList||this.createComponents(l,e.bind(function(t){var i=t[0],o={element:d,data:{comments:n.comments||[]},config:e.extend({},i.config,{commentId:this.config.comment.id})};this.componentList=i.component,i.component.fire("applyTo",o)},this))},showEditorForEdit:function(){var t=this.element.find("> .ui-comment-body > .ui-comment-text"),n=this.comment;this.showEditor({element:t,text:n.description,checkChanges:!1,saveHandler:e.bind(function(e){this.fire("saveComment",{description:e})},this)})},showEditorForReply:function(e){var t=this,n=this.element.find("> .ui-comment-body > .ui-comment-reply > .ui-editor-placeholder"),i=this.comment;t.showEditor({element:n,text:"",hideTarget:!1,mentionUser:e,saveText:"Add Reply",saveHandler:function(e){t.fire("replyToComment",{description:e,parentId:i.id})
}})},showEditor:function(n){var i=n.element,o="richeditor",a=i.parent(),c=i;if(!c.data("ui-richeditor")){var r=this.config.context.configurator,m={configurator:r,mentionUser:n.mentionUser};c=c[o]({ckPath:r.getCkPath(),text:n.text,settings:{toolbar:"Basic",removePlugins:"autogrow,magicline",allowedContent:!0,MentionPlugin:s.getMentionPlugin(m),height:200},executionGroupName:"comments",onSave:e.bind(function(e){this.fire("editorSave"),c[o]("hide"),n.saveHandler.call(this,e)},this),onCancel:function(){c[o]("hide")},onCreate:e.bind(function(){var e=i.parents(".ui-popup-content:first");0===e.length&&(e=t(window)),e.scrollTo(c.parent(),100),this.fire("$editor.ready",c),this.fire("$editorHolder.ready",a)},this),saveAction:{text:n.saveText||"Save",disableIfEmpty:!0,checkChanges:n.checkChanges},cancelAction:{available:!0}})}c[o]("show")},onReply:function(e,t){t.stopPropagation(),t.preventDefault(),this.showEditorForReply(e)},onEdit:function(e){e.stopPropagation(),e.preventDefault(),this.showEditorForEdit()},onDelete:function(){var t=this.element.find("> .ui-comment-body");t.confirmation({message:"Delete comment?",ok:e.bind(this.onConfirmDelete,this),cancel:e.bind(this.onCancelDelete,this)}),t.confirmation("show")},onCancelDelete:function(e){e.stopPropagation(),e.preventDefault(),this.element.find("> .ui-comment-body").confirmation("hide")},onConfirmDelete:function(e){e.stopPropagation(),e.preventDefault(),this.fire("deleteComment")}})});