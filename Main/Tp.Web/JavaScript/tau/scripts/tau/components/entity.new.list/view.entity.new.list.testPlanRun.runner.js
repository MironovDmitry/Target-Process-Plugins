define(["require","Underscore","jQuery","tau/core/class"],function(e){var i=e("Underscore"),r=e("jQuery"),t=e("tau/core/class");return t.extend({init:function(e){this._newListFacade=e,this.nextViewed=i.Callbacks()},runNext:function(e){this._buildCardViewerModel(e).done(this.nextViewed.fire.bind(this.nextViewed))},_buildCardViewerModel:function(e){var i=r.Deferred();return this._newListFacade.getTreeView().done(function(r){var t=r.findChildCardById(e.card.id);t.length>0&&i.resolve({$card:t,cardData:t.data()})}.bind(this)),i.promise()},destroy:function(){this.nextViewed.empty()}})});