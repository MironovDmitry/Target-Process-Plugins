define(["Underscore","tau/core/model-base","tau/models/dataProviders/model.provider.groups.default"],function(_,a,b){var c=a.extend({name:"model.list",onInit:function(){var a=this;a.store.unbind(this);var b=new this.config.itemsDataProvider(this.config);b.fetch(function(b){a.fire("afterItemsProvided",{data:b})})},"bus afterItemsProvided":function(a){var c=this,d=null;this.config.groupsDataProvider?d=this.config.groupsDataProvider:d=b;var e=a.data.data,f=_.isArray(this.config.groupBy)?this.config.groupBy[0]:this.config.groupBy,g=new d(this.config);g.fetch(f,e,function(a){c.fireAfterGroupsProvided(a)})},fireAfterGroupsProvided:function(a){this.fire("afterGroupsProvided",{data:a})},createSubscription:function(a,b){var c=this;c.store.on({eventName:"beforeRemove",type:a,listener:c},function(a){var d=a.data.id;b(d)&&c.fire("beforeDeleteRow",{id:d})}),c.store.on({eventName:"afterRemove",type:a,listener:c},function(a){var d=a.data.id;b(d)&&c.fire("afterDeleteRow",{id:d})})},"bus afterItemsProvided+afterGroupsProvided":function(a){var b=this,c=a.afterItemsProvided.data.data,d=a.afterGroupsProvided.data.data;if(c&&c.length){var e=function(a){return _(c).detect(function(b){return b.id==a})};_(c).chain().map(function(a){return a.__type}).unique().each(function(a){b.createSubscription(a,e)})}var f={items:[],groups:[],isEmpty:c.length?!1:!0};d!==!1?f.groups=this.innerGroupBy(c,d):f.items=c,this.data=f,b.fire("afterDataProvided",{data:f})},"bus afterDataProvided":function(a){var b=this.preProcess(a.data.data);this.fire("preDataBind",b),this.fire("dataBind",b)},preProcess:function(a){var b=this.config.views[0];return _.forEach(a.groups,function(a){a.title||(_.isObject(a.key)?a.title=_.complexKey(a.key,b.group.dataIndex):a.title=a.key)}),a.config={views:this.config.views,currentView:b},a},innerGroupBy:function(a,b){var c=_.isArray(this.config.groupBy)?this.config.groupBy[0]:this.config.groupBy,d=this;return _.forEach(b,function(b){_.forEach(a,function(a){var d=_.complexKey(a,c);_.isArray(b.key)&&_.indexOf(b.key,d)>-1?b.items.push(a):_.isEqual(b.key,d)&&b.items.push(a)})}),b},"bus prioritize.start":function(a){var c=a.data.item,d=a.data.group,e=null;this.config.groupsDataProvider?e=this.config.groupsDataProvider:e=b;var f=new e(this.config),g=_.filter(this.data.groups,function(a){return f.isAvailableForItem(c,a,d)});this.fire("prioritize.updateGroupsAvailability",{groups:g});var h=f.getCommentRequirements(c,this.data.groups,d);this.fire("prioritize.updateGroupsCommentRequirements",{groups:h})}});return c})