define(["jQuery","Underscore","tau/core/extension.base","tau/components/component.board.user-help"],function(n,e,t,o){return t.extend({"bus afterRender + afterInit":function(n,t,i){var p=t.element,u=p.find(".tau-popup-link");u.on("click",e.bind(function(){this.component?this.component.fire("refresh"):(this.component=o.create({context:i.config.context}),this.component.on("afterRender",function(n,e){var t=e.element;u.tauPopup({className:"tau-help-popup",hideOnEscape:!0,show:function(){u.tauPopup("setContent",t)},hide:function(){u.tauPopup("clearContent")}}),u.tauPopup("show")}),this.component.initialize({hidePopup:function(){u.tauPopup("hide")}}))},this))},destroy:function(){this.component&&(this.component.fire("destroy"),this.component=null),this._super()}})});