define(["jQuery","Underscore","tau/ui/extensions/board.plus/card-context-menu/menu-action-item-base","tau/utils/utils.window"],function(e,t,n,i){return n.extend({name:"Open in new tab",className:"i-role-card-context-menu-open-new-tab",init:function(e){this.configurator=e.configurator},itemClickCallback:function(e){var t=e.$trigger.data(),n=this.configurator.getUrlBuilder().getNewViewUrl(t.entityId,t.entityType,!0);i.tryOpenInBackgroundTab(n)},getDisabledEntityTypes:function(){return["projectmember"]}})});