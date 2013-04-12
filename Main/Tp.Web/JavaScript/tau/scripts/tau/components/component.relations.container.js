define(["Underscore","tau/components/component.container","tau/components/extensions/component.creator.extension","tau/components/extensions/bubble/extension.bubble.creator","tau/models/dataProviders/model.provider.items.relations","tau/ui/extensions/list/relations/ui.extension.list.relations.action.detach","tau/ui/extensions/list/relations/ui.extension.list.relations.action.attach","tau/ui/extensions/ui.extension.help","tau/ui/extensions/list/request/extension.list.entityState","tau/ui/templates/list_/grid.entity.relations/ui.template.list.grid.entity.relations"],function(_,ComponentContainer,CreatorExtension,BubbleCreatorExtension,RelationsDataProvider,RelationsActionDetachExtension,RelationsActionAttachExtension,HelpExtension,EntityStateListExtension,EntityRelationsGridTemplate){return{create:function(config){var creatorConfig={template:{name:"relations-container",markup:['<div class="tau-relations"></div>']},children:[{name:"master relations list",type:"list.editable",itemsDataProvider:RelationsDataProvider,dependencyType:"master",externalRefreshEvents:["relations.changed"],extensions:[CreatorExtension,BubbleCreatorExtension,RelationsActionDetachExtension,RelationsActionAttachExtension,HelpExtension,EntityStateListExtension],views:[{rowTemplateName:"list-grid-entity__row_relation",headerText:"Inbound",headerHelp:"The inbound entities must be completed <b>BEFORE</b> the core entity is done."}],template:EntityRelationsGridTemplate},{type:"label.relations",entity:config.context.entity},{name:"slave relations list",type:"list.editable",itemsDataProvider:RelationsDataProvider,dependencyType:"slave",externalRefreshEvents:["relations.changed"],extensions:[CreatorExtension,BubbleCreatorExtension,RelationsActionDetachExtension,RelationsActionAttachExtension,HelpExtension,EntityStateListExtension],views:[{rowTemplateName:"list-grid-entity__row_relation",headerText:"Outbound",headerHelp:"The outbound entities can be completed only <b>AFTER</b> the core entity is done."}],template:EntityRelationsGridTemplate}]};return ComponentContainer.create(_.extend(config,creatorConfig))}}})