define(["Underscore","jQuery","tau/core/class","tau/core/extension.base","libs/parseUri"],function(t,e,i,r,a){return r.extend({"bus initialize":function(){this._id=t.uniqueId("navigator")},"bus options.ready:last + view.dom.ready:last + configurator.ready:last + afterRender":function(i,r,n,o,s){if(r.routing.silent){var c=s.element;c.parent().off("click."+this._id,"a"),c.parent().on("click."+this._id,"a",t.bind(function(i,r){if(!r.ctrlKey&&!r.metaKey){var n=e(r.currentTarget),o=t.asString(n.attr("href"));if("#"!==o){var s="";"#"===o.charAt(0)?s=o.substr(1):n.data("target")||n.attr("target")||(s=a(o).anchor),s&&(r.preventDefault(),r.stopPropagation(),i.service("navigator").to(s))}}},this,o))}},"bus configurator.ready:last + routes.bound:last + application.navigate.entity":function(e,i,r,a){var n=t.compact([a.entity||a.type,a.id,a.action]).join("/");i.service("navigator").to(n)},"bus configurator.ready":function(e,i){i.service("navigator").on("back",t.bind(function(e){var r=i.getHistory(),n=r.pop();n?(r.setCurrent(null),i.service("navigator").to(a(n.url).anchor)):this.fire("application.exit"),e.data.clearNotification&&t.delay(t.bind(this.fire,this,"clearError"),100)},this),this)},"bus configurator.ready:last + destroy":function(t,e){e.service("navigator").removeAllListeners(this)},"bus contentRendered + destroy":function(t,e){var i=e.element;i.parent().off("click."+this._id,"a")}})});