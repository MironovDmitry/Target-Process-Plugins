define(["tau/components/component.creator","tau/models/customField/model.customField","tau/models/customField/model.customField.multiselect.editable","tau/ui/extensions/choice/ui.extension.choice.editable.multiselect","tau/ui/extensions/bubble/ui.extension.bubble.listResizer","tau/ui/templates/choice/ui.template.choice.list.multiselect"],function(e,t,i,u,o,l){return{create:function(c){var s={extensions:[t,i,u,o],template:l};return e.create(s,c)}}});