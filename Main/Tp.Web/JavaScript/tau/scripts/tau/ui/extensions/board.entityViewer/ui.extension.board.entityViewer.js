define(["Underscore","jQuery","tau/core/extension.base"],function(e,t,a){return a.extend({"bus configurator.ready":function(t,a){var r=this,n=a.getRequireLoader();n(["all.components"],function(){n(["tau/components/component.application"],function(t){var n=a.createChild();n._id=e.uniqueId("board_entityViewer_"),n.isBoardEdition=!0,r.fire("appData.ready",{component:t,configurator:n})})})},"bus afterRender":function(){var e=t("body");e.tauProgressIndicator(),this.fire("$progressIndicator.ready",e)},"bus appData.ready":function(e,t){var a=t.configurator,r=t.component;a.getHashService().setFakeWindow();var n=this,i={name:"viewer",context:{configurator:a},options:{applicationId:"boardEntityViewerPopup",integration:{showInCoverView:!0,keepAlive:!0},routing:{silent:!0,executeOnStart:!1},comet:{enabled:!0}}},o=r.create(i);o.on("application.error",function(e){n.fire("error",e.data),n.fire("application.error",e.data)}),o.on("contentRendered",function(e){n.fire("application.contentRendered",e.data)}),o.initialize(i),n.fire("appBus.ready",o)},"bus appData.ready:last + appBus.ready:last + cardDataToShowSilent.ready":function(e,t,a,r){this.showCard(t,a,r,"silent")},"bus appData.ready:last + appBus.ready:last + cardDataToShow.ready":function(e,t,a,r){this.showCard(t,a,r)},"bus appBus.error":function(e,t){this.fire("error",t)},"bus appBus.ready + destroy":function(e,t){t.destroy()},showCard:function(e,t,a,r){var n=e.configurator;return a.entityId&&a.entityType?(this.cleanupStore(n),t.fire("history.reset"),void t.fire("application.navigate.entity",{id:a.entityId,entity:a.entityType,action:r})):void console.error("bad data for viewer",a)},cleanupStore:function(e){e.getStore().evictData()}})});