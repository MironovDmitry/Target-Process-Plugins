define(["Underscore","tau/core/extension.base","tau/services/customize/service.customize.card.layout.factory.newlist"],function(e,t,r){return t.extend({"bus configurator.ready:last + boardSettings.ready":function(e,t,a){this.fire("cardLayoutFactory.ready",new r(t,a.boardSettings))}})});