define(["Underscore","jQuery"],function(e,t){t.widget("ui.listSelectable",{_create:function(){},_handler:function(){},enable:function(i){if(i=e.defaults(i||this.options,{saveScroll:!1,onSelect:t.noop}),!this._enabled){this._enabled=!0;var s=this.element.parents(".ui-drop-down:first").find(".filter-field-wrapper :text");s.length&&s.focus();var n=this;this.reset(i),this.$items.on("click",function(){i.onSelect(t(this))});var o=function(e){return e++,e>=n._max?0:e},r=function(e){return e--,0>e?n._max-1:e},a=this.options.className;this.options.keyboardManager.pushHandler({handleKeyDown:function(e){var i=n._index;switch(e.keyCode){case t.ui.keyCode.DOWN:e.preventDefault(),i=o(i);break;case t.ui.keyCode.UP:e.preventDefault(),i=r(i);break;case t.ui.keyCode.ENTER:if(e.preventDefault(),0>i)return;n.$items.eq(i).trigger("click");break;default:return}n._index=i,n.$items.removeClass(a),i>=0&&n.$items.eq(i).addClass(a),n.$list.animate({scrollTop:n._getOffset(i)},{duration:0})}})}},_getOffset:function(e){var t=this.$items.eq(e);if(!t.length)return 0;var i=t.position().top;this.$inner.length&&(i-=this.$inner.position().top);var s=t.parent("i-group");return s.length&&(i+=s.position().top),i-this.$list.height()/2},reset:function(t){t=e.defaults(t||{},{saveScroll:!1}),this.$list=this.element,this.$items=this.$list.find(this.options.items).filter(":visible"),this.$inner=this.$list.find(this.options.inner||".i-inner"),t.saveScroll||this.$list.scrollTop(0),this.step=.5*this.$items.eq(0).height(),this._index=-1,this._max=this.$items.length,t.saveScroll||this.$items.removeClass(this.options.className)},disable:function(){this._enabled&&(this._enabled=!1,this.options.keyboardManager.popHandler())},destroy:function(){this.disable()}})});