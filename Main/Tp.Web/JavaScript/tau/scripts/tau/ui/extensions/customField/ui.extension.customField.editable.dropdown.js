define(["Underscore","tau/core/extension.base","tau/models/customField/model.customField.entity.editable","tau/models/finder.entity/model.finder.entity.data.customField.entity"],function(e,t){return t.extend({"bus beforeInit + configurationProvided + afterRender":function(t,n,i,o){var r=n.customField,d=o.element.find("tr"),a=e.deepClone(i),u=o.view,c=this._createFinderConfig(a,r,i);this._initBubbleWithFinder(d,u,c),d.on("click",".i-role-reset",e.bind(function(){return this.fire("updateState",{}),!1},this))},_createFinderConfig:function(e){return{type:"customField.dropdown.list",customField:e,data:e}},_initBubbleWithFinder:function(e,t,n){e.addClass("tau-bubble-target ui-customfield_editable_true");var i={target:e,alignTo:e.find(".entity-custom-field-link"),onShow:function(){t.config.context.configurator.getKeyBoardManager().pushHandler({})},onHide:function(){t.config.context.configurator.getKeyBoardManager().popHandler()},componentsConfig:{components:[n]}};this.fire("initBubble",i)}})});