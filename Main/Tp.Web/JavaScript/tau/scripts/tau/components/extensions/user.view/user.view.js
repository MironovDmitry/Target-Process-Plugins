define(["Underscore","tau/components/extensions/component.extension.base"],function(n,t){return t.extend({category:"edit","bus componentsCreated":function(t){var e=n.find(t.data,function(n){return"btnUpdateSettings"==n.component.name});this.fire("update.button.found",e.component)},"bus update.button.found":function(n){n.data.on("view.button.click",this.onButtonClickHandler,this)},"bus update.button.found:last+event.suspended":function(n){n["update.button.found"].data.fire("enable")},"bus update.button.found:last+before_resumeSave":function(n){n["update.button.found"].data.fire("disable")},onButtonClickHandler:function(){this.fire("resumeSave")}})});