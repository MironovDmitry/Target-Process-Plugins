define(["Underscore","tau/components/extensions/component.creator.extension"],function(_,a){var b=a.extend({"bus initialize":function(a){var b=a.data.context,c=b.assignable;this.contextForPreview={applicationContext:b.applicationContext};var d={entityType:c.entityType,id:c.id};_(this.contextForPreview).extend({assignable:d,general:d,entity:d})},"bus attachmentSelected":function(a){var b=a.data.attachment;b.mimeType=b.mimeType||"";if(b.mimeType.indexOf("image/")==0){var c={components:[{type:"attachmentsPreview",selected:{id:b.id}}],context:this.contextForPreview};this.createComponents(c,function(a){var b=a[0],c=b.component;c.on("afterRender",function(a){a.removeListener(),a.data.element.appendTo($("body"))}),c.fire("initialize")})}else window.location.assign(b.uri)}});return b})