define(["Underscore","tau/core/model-base","tau/models/dataProviders/model.provider.groups.default"],function(i,r,e){var t=r.extend({onInit:function(){var r=this;this.config.groupsDataProvider&&(e=this.config.groupsDataProvider);var t=this.config.groupBy;t=i.isArray(t)?t[0]:t;var o=new e(this.config);o.fetch(t,[],function(i){r.fire("afterGroupsProvided",{data:i})})},"bus afterGroupsProvided":function(r){var e=r.data.data,t=this,o=new this.config.itemsDataProvider(this.config),a=[];i.forEach(e,function(i){var r=function(r){o.fetchForGroup(i,function(e){i.items=e,r()})};a.push(r)}),i.parallel(a,function(){t.fire("afterDataProvided",{data:{items:[],groups:e}})})},"bus afterDataProvided":function(i){var r=this.preProcess(i.data.data);this.fire("preDataBind",r),this.fire("dataBind",r)},preProcess:function(r){var e=this.config.views[0];return i.forEach(r.groups,function(r){r.title||(r.title=i.isObject(r.key)?i.complexKey(r.key,e.group.dataIndex):r.key)}),r.config={views:this.config.views,currentView:e},r},innerGroupBy:function(r,e){var t=this.config.groupBy;return t=i.isArray(t)?t[0]:t,i.forEach(e,function(e){i.forEach(r,function(r){var o=i.complexKey(r,t);i.isArray(e.key)&&i.indexOf(e.key,o)>-1?e.items.push(r):i.isEqual(e.key,o)&&e.items.push(r)})}),e}});return t});