define(["Underscore","tau/components/extensions/component.extension.base"],function(_,a){var b=function(a,b){var c=b.split(":"),d=a;return _(c).each(function(a){d=d[a]}),d};return function(c,d){return a.extend({name:"extension.list.handleAction.generator/"+c,init:function(){this._super.apply(this,arguments),this.bus.getGlobalBus().on(c,this.onGlobalAction,this)},destroy:function(){this.bus.getGlobalBus().removeListener(c,this.onGlobalAction,this),this._super.apply(this,arguments)},onGlobalAction:function(a){var c=b(a.data,d);this.fire("handleGlobalAction",{id:c})}})}})