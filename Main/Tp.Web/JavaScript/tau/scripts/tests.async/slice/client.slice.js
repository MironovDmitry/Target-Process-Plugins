define(["Underscore","tau/core/tau","tau/core/Class","tau/core/query"],function(_,a,b,c){var d=function(a){var b=a.substr(0,1),c=a.substr(1);return b.toUpperCase()+c};return b.extend({init:function(a){this.config=a||{}},generateDataItem:function(a){var b=d(a.entityType.name),c={id:a.id.toString(),type:b,data:{id:a.id,name:a.name,type:b}};return c},generateItem:function(a,b){var c={fixed:{items:[]},dynamic:{items:[]}};return c.dynamic.items.push(this.generateDataItem(b)),c[a]=b.id.toString(),c},move:function(a,b){var c=b.$scope.command.config||{};return{x:c.$set.x,y:c.$set.y,id:c.$set.itemId}},doRange:function(a,b){var d=b.$scope.command.config||{},e=c.find(a.items,d);return d.$skip&&e.length>d.$skip&&(e=e.slice(d.$skip,e.length-1)),d.$take&&d.$take<e.length&&(e=e.slice(0,d.$take)),{items:e}},getXResponse:function(a,b){var c={items:[]},d=this,e=_.values(a[d.config.x]);return _.each(e,function(a){c.items.push(d.generateItem("x",a))}),this.doRange(c,b)},getYResponse:function(a,b){var c={items:[]},d=this,e=_.values(a[d.config.y]);return _.each(e,function(a){c.items.push(d.generateItem("y",a))}),this.doRange(c,b)},getCells:function(a,b){var c={items:[]},d=this,e=_.values(a[d.config.x]),f=_.values(a[d.config.y]),g=_(a[d.config.cells]).values(),h=function(a,b){var c=_(g).chain().select(function(c){return c[d.config.x].id==a&&c[d.config.y].id==b}).map(function(a){var b=d.generateDataItem(a);return b}).value();return c};return _.each(e,function(a){_.each(f,function(b){c.items.push({y:b.id.toString(),x:a.id.toString(),dynamic:{items:h(a.id,b.id)},fixed:{items:[]}})})}),this.doRange(c,b)},getList:function(a,b){var c={items:[]},d=this,e=_(a[d.config.cells]).values(),f=function(){var a=_(e).chain().map(function(a){var b=d.generateDataItem(a);return b}).value();return a};c.items.push({dynamic:{items:f()},fixed:{items:[]}});var g=this.doRange(c,b);return g}})})