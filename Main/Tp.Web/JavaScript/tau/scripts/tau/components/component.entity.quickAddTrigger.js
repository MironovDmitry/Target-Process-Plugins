define(["Underscore","tau/components/component.creator","tau/ui/extensions/entity.quickAddTrigger/ui.extension.entity.quickAddTrigger","tau/components/extensions/bubble/extension.bubble.creator","tau/components/extensions/component.creator.extension","tau/ui/templates/entity.quickAddTrigger/ui.template.entity.quickAddTrigger"],function(_,ComponentCreator,ExtensionMain,ExtensionBubble,ExtensionCreator,Template){return{create:function(config){var creatorConfig={extensions:[ExtensionMain,ExtensionBubble,ExtensionCreator],template:Template};return ComponentCreator.create(creatorConfig,config)}}})