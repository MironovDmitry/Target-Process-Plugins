define(["Underscore","jQuery","tau/components/extensions/component.extension.base"],function(e,n,a){return a.extend({"bus afterRender":function(e){var a=this;a.element=e.data.element;var l=e.data.data,d=l.collapsed;a.collapsed=d;var s=d?"collapsed":"expanded";a.element.addClass(s),a.element.bind("click",n.proxy(a._onClickHandler,a))},"bus collapse":function(){var e=this;e.collapsed||e._onClickHandler()},"bus expand":function(){var e=this;e.collapsed&&e._onClickHandler()},_onClickHandler:function(){var e=this;e.collapsed=!e.collapsed;var n=e.collapsed,a=n?"expanded":"collapsed",l=n?"collapsed":"expanded",d=e.element;d.removeClass(a),d.addClass(l),this.fire(l)}})});