define(["jQuery"],function(n){function t(n){this._create(n)}return t.prototype={_create:function(n){this.name=n},hideDeleteButton:function(){var t=setInterval(n.proxy(function(){var e=this._findPluginBlock();e&&n(e).find("li.delete").remove(),clearInterval(t)},this),200)},hideAddButton:function(){var t=setInterval(n.proxy(function(){var e=this._findPluginBlock();e&&n(e).find('button:contains("Add Profile")').remove(),clearInterval(t)},this),200)},_findPluginBlock:function(){var t=n("div.plugin-block");return 0===t.length?null:n.grep(t,n.proxy(function(t){return n(t).find("h4._pluginName").text()==this.name},this))}},t});