define(["jQuery","Underscore","tau/core/extension.base","tau/services/service.search"],function(e,r,t){return t.extend({"bus afterRenderAll":function(e,t){var n=t.data.context.configurator,i=n.service("search"),a=t.element,o=r.bind(this._hideFilterIfNeeded,this,i,a),s=function(e){var r;return function(){r&&(clearTimeout(r),r=null),r=setTimeout(function(){e()},200)}};a.on("keyup",".i-role-search-string",s(o)),a.on("change",".i-role-search-string",o),o()},_hideFilterIfNeeded:function(e,t){var n=r.trim(t.find(".i-role-search-string").val()),i=!e.getSuitableCommand(n).allowsToBeFiltered;t.toggleClass("tau-search-no-filter",i)}})});