define(["jQuery","tau/core/tau-widget"],function(e,t){t.widget("ui.checkboxToggle",{options:{onSave:function(){},classNames:{checked:"checked",unchecked:"unchecked"}},_create:function(){this.init()},init:function(){var t=this.element;this.toggleProxy=e.proxy(this.onClick,this),t.click(this.toggleProxy)},activate:function(){var e=this.options.classNames;this._toggle(this.element,e.checked,e.unchecked),this.options.onSave(this.element.hasClass(e.checked))},onClick:function(e){e.stopPropagation(),this.toggle()},toggle:function(){var e=this.element,t=this.options.classNames;this._toggle(e,t.checked,t.unchecked),this.options.onSave(e.hasClass(t.checked))},_toggle:function(e,t,s){var o=e;o.hasClass(t)?(o.removeClass(t),o.addClass(s)):o.hasClass(s)?(o.removeClass(s),o.addClass(t)):o.addClass(t)},destroy:function(){delete this.toggleProxy}})});