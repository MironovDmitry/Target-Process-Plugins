define(["tau/components/component.creator","tau/models/model.property.user","tau/models/model.property.editable","tau/components/extensions/property/extension.property.refresher","tau/components/extensions/bubble/extensions.bubble.creator","tau/components/extensions/component.creator.extension","tau/ui/templates/common/ui.template.owner","tau/components/extensions/user/extension.owner.editable"],function(a,b,c,d,e,f,g,h){return{create:function(i){var j={ModelType:b,template:g,extensions:[c,e,f,d,h]};return i=i||{},i.propertyName="owner",a.create(j,i)}}})