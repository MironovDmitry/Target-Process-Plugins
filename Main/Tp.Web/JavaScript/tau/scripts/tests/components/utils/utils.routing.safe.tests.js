define(["Underscore","jQuery","tau/utils/utils.routing"],function(_,$,a){var b=function(){module("[utils.routing.safe] tests",{setup:function(){}}),test("should register routes",function(){var b=!1,c="preved",d=new a({safe:!0,safeParameterName:"route"});d.reset().register({pattern:"task/{id}",callback:function(a){b=a.id}}).register({pattern:"bug/{id}",callback:function(a){b=a.id}}).register("project/{id}",function(a){b=a.id}).start(),d.execute("task/126"),equals(b,!1,"Routing is not executed and processed"),$(window).triggerHandler($.Event("hashchange",{hash:"route=task/123"})),equals(b,123,"Routing is executed and processed"),$(window).triggerHandler($.Event("hashchange",{hash:"index=1&route=bug/555&preved=medved"})),equals(b,555,"Routing is executed and processed"),$(window).triggerHandler($.Event("hashchange",{hash:"#route=project/545||{}"})),equals(b,545,"Routing is executed and processed"),d.stop(),b=null,$(window).triggerHandler($.Event("hashchange",{hash:"route=project/577"})),equals(b,null,"Routing is executed and processed")}),test("should handle routes with state data",function(){var b=!1,c="preved",d={},e=new a({safe:!0,safeParameterName:"route"});e.reset().register({pattern:"task/{id}",callback:function(a,c){b=a.id,d=c}}),e.start(),$(window).triggerHandler($.Event("hashchange",{hash:'route=task/555||{"tab":3}'})),equals(b,555,"Extract request parameters"),same(d,{tab:3},"Extract state parameters"),e.stop()}),test("should produce routes with state data",function(){var b=!1,c="preved",d={},e=new a({window:window});e.reset().register({pattern:"task/{id}",callback:function(a,b){}}),e.start();var f=e.generateUrl();equals(f,"","Generate correct url"),$(window).triggerHandler($.Event("hashchange",{hash:"route=task/555"}));var f=e.generateUrl();equals(f,"route=task/555","Generate correct url"),$(window).triggerHandler($.Event("hashchange",{hash:'route=task/555||{"tab":3}'})),f=e.generateUrl(),equals(f,'route=task/555||{"tab":3}',"Generate correct url"),e.stop()})};return{run:b}})