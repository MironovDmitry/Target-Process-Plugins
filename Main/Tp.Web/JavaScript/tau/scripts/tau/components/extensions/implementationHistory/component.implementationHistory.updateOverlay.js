define(["jQuery","tau/components/extensions/component.extension.base","tau/ui/behaviour/overlay/ui.behaviour.overlay"],function(e,t){return t.extend({"bus afterRender":function(t){var n=this._$element=t.data.element;setTimeout(function(){var t=n.find(".tau-historyGrid"),a=t.find(".tau-historyItem:last");e(t).scrollTo(a,1e3,{axis:"x",easing:"easeOutQuart"})},500)},"bus afterUpdate":function(){this._$element.tauOverlay(),this.fire("refresh")}})});