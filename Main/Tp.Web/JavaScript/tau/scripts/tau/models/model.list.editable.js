define(["Underscore","tau/core/model.editable.base"],function(_,a){var b=a.extend({name:"model.list.editable",category:"edit","bus dataBind":function(){this.bus.fire("permissionsReady",{editable:!0,deletable:!0})},"bus positionUpdated":function(a){var b=a.data,c=this,d=b.item,e=this.config.store,f=[];b.isCollapsed==0&&f.push(function(a){var d=new c.config.itemsDataProvider(c.config);d.changePriority(b.item,b.prev,b.next,function(b){a(null,b)})}),b.group&&f.push(function(a){var d=new c.config.groupsDataProvider(c.config);d.moveToGroup(b.item,b.group,b.prevGroup,function(b){a(null,b)})}),b.isCollapsed==1?(c.fire("beforeUpdate"),c.fire("showOverlay"),_.parallel(f,function(){c.fire("refresh")})):(c.fire("beforeUpdate"),_.parallel(f,function(a,b){var d={};_.forEach(b,function(a){a&&_.extend(d,a.changed||{})}),c.fire("afterUpdate",{changedItem:d})}))}});return b})