define(["Underscore","jQuery","tau/core/class","tau/ui/extensions/board.plus/ui.board.plus.dom.utils","tau/ui/extensions/board.plus/ui.board.plus.utils","tau/components/board.new.list/templates/template.new.list.header","tau/components/board.new.list/templates/template.new.list.card.customized","tau/components/board.new.list/templates/template.new.list.subtree","tau/ui/templates/board.plus/ui.template.board.plus.emptyMessage","./editors/view.new.list.editor","tau/components/board.new.list/views/units/unit","tau/components/board.new.list/views/units/nameUnit","tau/components/board.new.list/views/view.new.list.tree.quickAdd","tau/components/board.new.list/views/view.new.list.tree.counts"],function(e,t,i,n,r,a,s,d,o,l,u,h,c,p){return i.extend({_cardTypes:[],init:function(t,i,n,r,a){this.skeleton=r,this.configurator=r.configurator,this.eventAggregator=r.eventAggregator,this.parentView=n,this.treeModel=t,this.level=this.treeModel.level,this.$el=i,this.$treeContainer=this.$el.find(".i-role-cardsholder").first(),this.columnWidthService=a,this.expansionStateToggled=e.Callbacks(),this.collapseAllClicked=e.Callbacks(),this.openCardDetailsClicked=e.Callbacks(),this.subViews=[]},renderTree:function(){return this._renderTreeNode(this.treeModel).then(this._updateEmptyLevelState.bind(this))},_renderTreeNode:function(e){if(this._cardTypes=e.getCardTypes(),!e.items.length&&!this._cardTypes.length)return t.Deferred().resolve().promise();this._attachCardBehaviors();var i=this.$treeContainer;return t.when(this.renderHeader()).then(this.appendHeader.bind(this)).then(this.updateHeaderExpansionState.bind(this)).then(this.renderCards.bind(this,e.items)).then(this.insertCards.bind(this,i)).promise()},getListLayout:function(){var i=e.pluck(this._cardTypes,"typeId");return t.when(this.skeleton.cardLayoutFactory.getLayoutFactory()).then(this._createLayout.bind(this,i))},_createLayout:function(t,i){var n=e.chain(i(t)).toArray().flatten().uniq(e.property("id")).value();return this.configurator.getFeaturesService().isEnabled("board.customize.list")?r.orderListUnits(n):n},renderHeader:function(){return t.when(this.getListLayout()).then(function(t){var i=e.extend(r.getCardRenderData({},t,this.configurator),{cardTypes:this._cardTypes,enable:!0,level:this.level,levelKey:this.treeModel.getLevelKey(),renderSortingHeaders:!this.treeModel.isInnerCollectionsLevel(),renderCollapser:this.treeModel.canExpandCard(),isCollapserEnabled:!0,parentEntityType:this.treeModel.hierarchyMetaInfo.parentEntityType,ordering:this.treeModel.hierarchyMetaInfo.ordering});return a.render(i)}.bind(this))},renderCards:function(i){return t.when(this.getListLayout()).then(function(n){return t.when.all(e.map(i,function(e){return this.renderCard(e.card,n)},this))}.bind(this)).then(function(e){return e.join("")})},renderCard:function(t,i){var n=e.extend({},t,{levelKey:this.treeModel.getLevelKey(),renderCollapser:this.treeModel.canExpandCard(),isCollapserEnabled:this.treeModel.canExpandCard(t.type)}),a=this.configurator.getTemplateFactory().get(s.name);return a.bindPure({},r.getCardRenderData(n,i,this.configurator))},_updateEmptyLevelState:function(){this.$el.toggleClass("tau-list-level-empty",!this.treeModel.items.length)},findHeaderHolder:function(){var e=".i-role-headerholder";return this.$treeContainer.siblings(e)},_findHeaderCollapser:function(){return this.findHeaderHolder().find(".i-role-header-collapser")},appendHeader:function(e){var t=this.findHeaderHolder();t.append(e)},insertCards:function(e,t){e.append(t)},_attachCardBehaviors:function(){this.$el.off("click.newlist"),this.$el.on("click.newlist",".i-role-card-collapser",function(e){var i=t(e.target),n=i.closest(".tau-list-entity"),r=n.data("id").toString();this.expansionStateToggled.fire(r),e.stopPropagation()}.bind(this)),this.$el.on("click.newlist",".i-role-header-collapser",function(e){this.collapseAllClicked.fire(),e.stopPropagation()}.bind(this)),this.$treeContainer.off("click.newlist"),this.$treeContainer.on("click.newlist",".tau-board-list-view_details-view-trigger",function(e){var i=t(e.target),n=i.closest(".tau-list-entity");this.openCardDetailsClicked.fire({cardData:n.data(),$card:n}),e.stopPropagation()}.bind(this))},appendNodes:function(e){return this.renderCards(e).then(function(e){return this.$treeContainer.append(e)}.bind(this))},updateHeaderExpansionState:function(){var t=e.any(this.treeModel.items,function(e){return e.getIsExpanded()});this._findHeaderCollapser().toggleClass("tau-v-collapser-expanded",t)},calculateColumnWidths:function(){this.skeleton.calculateColumnWidthsForLevel(this.treeModel.level)},createTreeView:function(e){var t=d.render(e),i=this._getParentNodeByCardId(e.cardId);i.after(t);var n=this._getViewConstructor(),r=new n(e,t,this,this.skeleton,this.columnWidthService);return this.subViews.push(r),this.skeleton.treeViewCreated.fire(r),r},findView:function(t){if(0===t.length)return this;var i=e.find(this.subViews,function(e){return e.treeModel.cardId===t[0]});return i?i.findView(e.rest(t)):null},_getViewConstructor:function(){return null},setExpandedStateForCardId:function(e){var t=this._getParentNodeByCardId(e);t.addClass("tau-list-entity-open")},removeChildTreeNodeView:function(t){var i=this._getParentNodeByCardId(t);i.removeClass("tau-list-entity-open");var n='div[data-list-parent-id="'+t+'"]',r=this.$el.find(n);r.remove();var a=e.findIndex(this.subViews,function(e){return e.treeModel.cardId===t});a>=0&&(this.subViews[a].destroy(),this.subViews.splice(a,1))},_getParentNodeByCardId:function(e){var t='> .tau-list-entity[data-id="'+e+'"]';return this.$treeContainer.find(t).eq(0)},updateCardUnit:function(t,i,n){var r=this._findUnit(t.id,i);if(e.contains(["orderingValue","cardData"],i))return void r.$card.data(i,n);var a=r.$cell,s=this.skeleton.cardLayoutFactory.findUnitById(i);if(a.length&&s){var d=this.configurator.getTemplateFactory().get(s.getTemplateName("list")).bind({},{type:t.type.toLowerCase(),configurator:this.configurator,settings:{},data:n,unit:s,first:a.is(":has(.i-role-name)")});d.html()!=a.html()&&(a.children().remove(),a.append(d.children())),a.toggleClass("tau-board-unit_updating",!1)}},_findUnit:function(e,t){var i=this.findChildCardById(e),n=i.find(".tau-board-unit[data-id="+t+"]"),r=n.closest(".tau-elems-cell");return{$card:i,$unit:n,$cell:r}},moveCard:function(e,t){var i=this.findChildCardById(e.id);i.detach();var r=null!==t;r&&this.insertCardByIndex(this.$treeContainer,i,t),n.animated(i,"tau-operation_card_updated")},removeCardsSilent:function(t){e.each(t,function(e){this.removeCard(e.card,!0)},this)},removeCard:function(e,i){var r=this.findChildCardById(e.id);return r.removeClass("i-role-card"),t.when(i?!0:n.animated(r,"tau-operation_card_deleted")).then(function(){r.remove(),this.removeChildTreeNodeView(e.id)}.bind(this)).then(this._updateEmptyLevelState.bind(this))},addCard:function(e,i,r){return t.when(this.getListLayout()).then(this.renderCard.bind(this,i)).then(function(e){var i=t(e);this.insertCardByIndex(this.$treeContainer,i,r),n.animated(i,"tau-operation_card_added")}.bind(this)).then(this._updateEmptyLevelState.bind(this))},insertCardByIndex:function(e,t,i){if(i>=0){var n=e.children(".i-role-card").eq(i);if(n.length)return void n.before(t)}e.append(t)},createEditorView:function(){return new l(this.$treeContainer)},createCountsView:function(e){var t=this._getCountsViewConstructor();this.countsView=new t(this,e,this.treeModel)},createQuickAddView:function(e){this.quickAddView=new c(this,e)},_getCountsViewConstructor:function(){return p},toggleNodeExpansionProgress:function(e,t){var i=this.findChildCardById(e),n=i.find(".i-role-card-collapser");n.toggleClass("tau-loading",t)},highlightCard:function(e){var t=this.findChildCardById(e);n.animated(t,"tau-operation_card_added")},findChildCardById:function(e){return this.$treeContainer.children('.i-role-card[data-id="'+e+'"]')},updateCardFinalState:function(e,t){var i=this.findChildCardById(e);i.toggleClass(s.get().config.customFunctions.getFinalStateClass(),!!t)},destroy:function(){this.quickAddView&&this.quickAddView.destroy(),this.countsView&&this.countsView.destroy()}})});