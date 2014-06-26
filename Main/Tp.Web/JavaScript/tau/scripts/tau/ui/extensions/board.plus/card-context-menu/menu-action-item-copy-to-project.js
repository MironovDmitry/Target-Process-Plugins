define(["Underscore","jQuery","tau/models/page.entity/entity.context.factory","tau/ui/extensions/board.plus/card-context-menu/menu-bubbleCreator","tau/ui/extensions/board.plus/card-context-menu/menu-action-item-base","tau/services/entities/service.entities.copy-to-project"],function(e,t,n,i,o,r){return o.extend({name:"Copy to project&hellip;",className:"i-role-card-context-menu-copyToProject",itemClickCallback:function(e){var t=new i(e.$trigger,this);n.create(t.entity,this.settings.configurator).done(this._createBubble.bind(this,t))},_createBubble:function(e,n){var i=new r,o=this.settings.configurator,a=function(e){var t=o.getComponentBusRegistry().getByName("entityViewer");t.done(function(t){t.fire("cardDataToShow.ready",e)}.bind(this))}.bind(this),c=function(t){t("choice.editable.filter.changed",function(){e.getTarget().tauBubble("adjust")})},s=i.createCopyToProjectBubbleConfig({applicationContext:n,navigateToEntityDetails:a,subscribeToComponentEvents:c,eventBus:this.settings.bus});s.alignTo=function(){var n=t(e.cardSelector);return 0===n.length&&(n=t(e.$trigger.data("card-selector"))),n},e.createBubble(s)},getSupportedEntityTypes:function(){return["feature","userstory","bug","testcase","testplan","request"]}})});