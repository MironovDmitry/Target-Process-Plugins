define(["Underscore","tau/core/class","tau/components/board.changelog/views/view.board.changelog","tau/components/board.changelog/models/model.board.changelog"],function(e,i,n,o){return i.extend({init:function(i){this.onError=e.Callbacks(),this._model=i||new o,this._view=new n,this._view.onPopupClosed.add(this._updateSeenVersion.bind(this))},checkNewVersion:function(){this._model.retrieveData().done(function(e){e.newVersion&&(this._newVersion=e.newVersion,this._view.showPopup(),this._view.setPopupData(e.versions))}.bind(this))},show:function(){this._view.showPopup(),this._model.retrieveData().done(function(e){this._newVersion=null,this._view.setPopupData(e.versions)}.bind(this)).fail(this._serverError.bind(this))},_serverError:function(){this._view.hidePopup();var e=["Targetprocess was updated. See ",'<a style="font-size:20px !important" target="_blank" href="http://www.targetprocess.com/agileproductblog/tag/changelog">what\'s new</a>'].join("");this.onError.fire({message:e,type:"information"})},_updateSeenVersion:function(){this._newVersion&&this._model.setSeen(this._newVersion)}})});