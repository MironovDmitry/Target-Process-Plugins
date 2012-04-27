define(["Underscore","jQuery","tau/core/bus","tau/store/factory","tau/components/extensions/extension.storeErrorEmiter"],function(_,$,a,b,c){var d=function(){module("[storeErrorEmitter.extension]",{setup:function(){this.bus=new a,this.storeFactory=new b;var d=function(a){a.callbacks.failure({data:{cmd:a},status:500})};this.service={get:d,find:d,save:d},this.storeFactory.setService(this.service),this.store=this.storeFactory.getStore(),this.extension=new c({bus:this.bus,store:this.store}),this.bus.fire("beforeInit",{})},teardown:function(){delete this.bus,delete this.storeFactory,delete this.service,delete this.store,delete this.extension}}),test('should fire "refresh" on SAVE operation failure',function(){var a=0;this.bus.on("refresh",function(){++a}),this.store.save("bug",{$set:{name:"new name"}}).done(),equals(a,1,"Refresh is fired")}),test('should NOT fire "refresh" on GET operation failure',function(){var a=0;this.bus.on("refresh",function(){++a}),this.store.get("bug",{id:1,fields:["id","name"]}).done(),equals(a,0,"Refresh is NOT fired")}),test('should NOT fire "refresh" on FIND operation failure',function(){var a=0;this.bus.on("refresh",function(){++a}),this.store.find("bug",{fields:["id","name"],$query:{tags:{$contains:"duplicateOf#123"}}}).done(),equals(a,0,"Refresh is NOT fired")})};return{run:d}})