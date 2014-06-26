define(["Underscore","tau/models/dataProviders/model.provider.groups.base"],function(e,t){return t.extend({fetch:function(t,n,r){var i={tasks:[],bugs:[]},u=e(n).select(function(e){return"task"===e.__type}),o=e(n).select(function(e){return"bug"===e.__type});i.tasks=e(u).chain().pluck("projectId").uniq().value(),this.config.context.isPracticeAvailable("Bug Tracking")&&(i.bugs=e(o).chain().pluck("projectId").uniq().value());var s=this.config.store,c=this;s.get("projects",{fields:[{process:["id"]}],list:!0}).done({success:function(n){var u=n[0].data,o={tasks:[],bugs:[]};e.forEach(i,function(t,n){o[n]=e(u).chain().select(function(n){return e(t).include(n.id)}).map(function(e){return e.process.id}).uniq().value()});var s=function(t){var n=(t.entityType.name||"").toLowerCase(),r=t.process.id;return"task"===n&&e(o.tasks).include(r)||"bug"===n&&e(o.bugs).include(r)};return c._fetchState(t,s,r)}})},moveToGroup:function(e,t,n,r){return this._moveToGroupByState(e,t,n,r)},isAvailableForItem:function(t,n,r){var i=e.find(r.realGroups,function(e){return e.id==t.entityState.id}),u=e.find(n.realGroups,function(e){return e.entityType.name.toLowerCase()==t.__type.toLowerCase()&&e.process.id==i.process.id}),o=e.pluck(i.nextStates,"id");return o.push(i.id),u&&e.include(o,u.id)},getCommentRequirements:function(t,n,r){var i=e.find(r.realGroups,function(e){return e.id==t.entityState.id}),u=[];return e.forEach(n,function(n){var r=e.find(n.realGroups,function(e){return e.entityType.name.toLowerCase()==t.__type.toLowerCase()&&e.process.id==i.process.id});u.push({isCommentRequired:r?r.isCommentRequired:!1})}),u}})});