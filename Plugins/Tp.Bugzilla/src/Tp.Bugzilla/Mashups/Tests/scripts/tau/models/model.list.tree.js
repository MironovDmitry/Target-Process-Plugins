define(["Underscore","tau/core/model-base","tau/models/dataProviders/model.provider.groups.default","tau/extensions/extension.underscore"],function(a,b,c){var d=b.extend({onInit:function(){var b=this;this.config.groupsDataProvider&&(c=this.config.groupsDataProvider);var d=a.isArray(this.config.groupBy)?this.config.groupBy[0]:this.config.groupBy,e=new c(this.config);e.fetch(d,[],function(a){b.fire("afterGroupsProvided",{data:a})})},"bus afterGroupsProvided":function(b){var c=b.data.data,d=this,e=new this.config.itemsDataProvider(this.config),f=[];a.forEach(c,function(a){var b=function(b){e.fetchForGroup(a,function(c){a.items=c,b()})};f.push(b)}),a.parallel(f,function(){d.fire("afterDataProvided",{data:{items:[],groups:c}})})},"bus afterDataProvided":function(a){var b=this.preProcess(a.data.data);this.fire("preDataBind",b),this.fire("dataBind",b)},preProcess:function(b){var c=this.config.views[0];a.forEach(b.groups,function(b){b.title||(a.isObject(b.key)?b.title=a.complexKey(b.key,c.group.dataIndex):b.title=b.key)}),b.config={views:this.config.views,currentView:c};return b},innerGroupBy:function(b,c){var d=a.isArray(this.config.groupBy)?this.config.groupBy[0]:this.config.groupBy,e=this;a.forEach(c,function(c){a.forEach(b,function(b){var e=a.complexKey(b,d);a.isArray(c.key)&&a.indexOf(c.key,e)>-1?c.items.push(b):a.isEqual(c.key,e)&&c.items.push(b)})});return c}});return d})