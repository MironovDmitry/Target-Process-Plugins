define(["Underscore","jQuery","tau/components/board.new.list/extension.base.new.list","tau/slice/entity.new.list.factory","tau/components/board.new.list/new.list.quickAdd.component.builder"],function(t,e,i,n,o){return i.extend({_defaultOnPage:20,_quickAddOptions:{positionConfig:{collision:"fit flip"}},init:function(t,e,i,n){var r=new o(t.bus,t.context.configurator,n,this._quickAddOptions);this._super(t,e,i,n,r)},"bus afterInit + configurator.ready":function(t,e,i){this._initViewNewListSettings(e.config,i),this._initSliceFactory(e.config)},"bus afterRender":function(){this.fire("view.dom.ready",{})},_initViewNewListSettings:function(t,e){var i=this._createViewNewListSettings(t,e);this.fire("boardSettings.ready",{boardSettings:i})},_initSliceFactory:function(t){var e={prefix:"EntityTreeView",entityId:t.context.entity.id},i=new n(t.context.configurator.getSliceFactoryOptions(),e);this.fire("sliceFactory.ready",i)},_createViewNewListSettings:function(e,i){var n=e.context.entity,o=n.entityType.name.toLowerCase(),r=[o,n.id.toString(),e.name.toLowerCase()].join(""),s=t.extend(e.definition,{id:r,viewMode:"newlist",x:{types:[o]},cellPaging:{onPage:this._defaultOnPage}});return i.getBoardSettingsFactory().createStaticSettings(s)}})});