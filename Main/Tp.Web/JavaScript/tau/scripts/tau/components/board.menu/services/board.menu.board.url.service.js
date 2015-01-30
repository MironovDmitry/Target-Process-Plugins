define(["require","Underscore","tau/core/class"],function(i){var e=i("Underscore"),r=i("tau/core/class");return r.extend({init:function(i,r){this._acidService=r,this._urlBuilder=i,this.urlResolverInitialized=r.acidInitialized.promise(),this.urlRequiresInvalidation=e.Callbacks(),r.acidChanged.add(function(){this.urlRequiresInvalidation.fire()},this)},_setAcid:function(i,e){this._lastAcidValue={id:i,acid:e}},getViewUrl:function(i){if("resolved"!==this.urlResolverInitialized.state())return console.error("Acid is not initialized yet"),"";var e=i.boardId||i.key,r=this._acidService.getCurrentAcid();return r.acid=i.acid||r.acid,this._urlBuilder.getRelativeBoardPageUrl(i.itemType+"/"+e,r)},destroy:function(){this._acidService.acidChanged.remove(this)}})});