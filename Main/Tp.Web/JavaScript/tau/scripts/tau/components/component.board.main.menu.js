define(["tau/components/component.creator","tau/models/board.main.menu/model.board.main.menu","tau/ui/extensions/board.main.menu/ui.extension.board.main.menu","tau/ui/extensions/board.main.menu/ui.extension.board.main.menu.viewer","tau/ui/extensions/board.main.menu/ui.extension.board.main.menu.feedback","tau/ui/templates/board.main.menu/ui.template.board.main.menu"],function(ComponentCreator,Model,Extension,ExtensionViewer,ExtensionFeedback,Template){return{create:function(config){var creatorConfig={extensions:[Model,Extension,ExtensionViewer,ExtensionFeedback],template:Template},componentBus=ComponentCreator.create(creatorConfig,config);return componentBus}}})