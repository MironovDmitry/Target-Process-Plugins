define(["Underscore","jQuery"],function(e,t){t.widget("ui.tauOverlay",{options:{showOnCreation:!0},_create:function(){this.$target=this.element,this.options.showOnCreation&&this.show()},showLarge:function(){this._show("ui-spinner-centered")},show:function(){this._show("ui-overlay")},_show:function(e){var o=this;o.$overlay=o.overlay||t(['<div class="',e,'"></div>'].join("")),o.$overlay.detach(),o.$target.addClass("ui-overlay-container");var r=t("body");r="relative"===o.$target.css("position")?o.$target:o.$target.offsetParent(),r.append(o.$overlay)},hide:function(){var e=this;e.destroy()},destroy:function(){var e=this;e.$target.removeClass("ui-overlay-container"),e.$overlay&&e.$overlay.remove(),t.Widget.prototype.destroy.apply(this,arguments)}})});