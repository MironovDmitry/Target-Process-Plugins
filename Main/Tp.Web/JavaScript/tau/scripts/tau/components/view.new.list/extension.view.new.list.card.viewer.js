define(["tau/core/extension.base","./view.new.list.card.viewer"],function(e,i){return e.extend({init:function(e){this._super(e),this._cardViewer=new i(e.context.configurator)},"bus afterRender:last + new.list.open.card.details.view":function(e,i,t){var r=i.element,n=t.cardData;this._cardViewer.isShown(n)?this._cardViewer.hide():this._cardViewer.show(r,t.$card,n)},"bus destroy":function(){this._cardViewer.destroy()}})});