define(["Underscore","jQuery","tau/ui/extensions/inviter/ui.extension.inviter.widget.abstract"],function(t,e,i){return i.extend({"bus configurator.ready":function(t,e){this._initTemplates(e)},"bus configurator.ready + $teamSection.ready":function(t,e,i){i.length&&this._initWidget(e,i)},"bus configurator.ready + $projectSection.ready":function(t,e,i){i.length&&this._initWidget(e,i)}})});