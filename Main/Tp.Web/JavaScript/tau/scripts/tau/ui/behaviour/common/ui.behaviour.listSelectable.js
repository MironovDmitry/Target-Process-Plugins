define(["Underscore","jQuery","tau/configurator"],function(_,$,a){$.widget("ui.listSelectable",{_create:function(){},_handler:function(a){},enable:function(){if(this._enabled)return;this._enabled=!0;var b=this.element.parents(".ui-drop-down:first").find(".filter-field-wrapper :text");b.length&&b.focus();var c=this;this.reset();var d=function(a){return a++,a>=c._max&&(a=0),a},e=function(a){return a--,a<0&&(a=c._max-1),a},f=this.$items,g=this.options.className;a.getKeyBoardManager().pushHandler({handleKeyDown:function(a){var b=c._index;switch(a.keyCode){case $.ui.keyCode.DOWN:a.preventDefault(),b=d(b);break;case $.ui.keyCode.UP:a.preventDefault(),b=e(b);break;case $.ui.keyCode.ENTER:a.preventDefault();if(b<0)return;c.$items.eq(b).trigger("click")}c._index=b,c.$items.removeClass(g),b>=0&&c.$items.eq(b).addClass(g),c.$list.animate({scrollTop:c._getOffset(b)},{duration:0})}})},_getOffset:function(a){var b=this.$items.eq(a);if(b.length==0)return 0;var c=b.parents(".i-inner:first").position().top,d=b.position().top,e=b.parent("i-group");e.length&&(d+=e.position().top);var f=-c+d-this.$list.height()/2;return f},reset:function(){this.$items=this.element.find(this.options.items).filter(":visible");var a=this.element;this.$list=a,a.scrollTop(0);var b=a.height();this.step=this.$items.eq(0).height()*.5,this._index=-1,this._max=this.$items.length;var c=this.options.className;this.$items.removeClass(c)},disable:function(){if(!this._enabled)return;this._enabled=!1,a.getKeyBoardManager().popHandler()},destroy:function(){this.disable()}})})