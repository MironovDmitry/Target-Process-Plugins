define(["Underscore","tau/models/dataProviders/model.provider.items.base","tau/models/dataProviders/model.provider.items.user_stories","tau/models/dataProviders/model.provider.items.bugs"],function(t,e,i,r){return e.extend({init:function(t){this.config=t,this.providers=[new i(t)],this.config.context.isPracticeAvailable("Bug Tracking")&&this.providers.push(new r(t))},_convertData:function(t){return t=this._calculateEffortToMaximum(t),this._sortByPriority(t)},fetch:function(e){var i=this,r=function(t){var r=i._convertData(t);e(r)},o=[];t.forEach(i.providers,function(t){o.push(function(e){t.fetch(function(t){e(null,t)})})}),t.parallel(o,function(e,i){var o=t.flatten(i);r(o)})}})});