define(["Underscore","tau/components/component.list","tau/views/view.compositeControl","tau/models/dataProviders/customField/customField.multipleEntities.model.provider.entities.items","tau/ui/extensions/list/request/extension.list.entityState","tau/ui/extensions/list.customField.multipleEntities/ui.extension.list.customField.multipleEntities","tau/ui/templates/list_/customField.multipleEntities/ui.template.list.customField.multipleEntities"],function(t,e,i,s,n,l,o){return{create:function(u){return u=t.extend(u,{itemsDataProvider:s,extensions:[n,l],template:o,ViewType:i,dependencies:["property.lastStatus","property.entityState"]}),e.create(u)}}});