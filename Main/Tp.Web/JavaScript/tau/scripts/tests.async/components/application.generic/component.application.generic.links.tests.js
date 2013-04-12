define(["jQuery","tests.async/testkit/testkit.component","tau/components/component.application.generic","tau/services/service.navigator"],function($,TestKit,Component,ServiceNavigator){var testKit=new TestKit(Component);testKit.registerSetup("fixtures",function(test,next){test.set("fixtures",{});var configuratorInstance=test.get("configurator");configuratorInstance.getHashService().setHash("module1/action2"),configuratorInstance.setApplicationPath("http://porn.com/targetprocess"),configuratorInstance.registerService("navigator",new ServiceNavigator(configuratorInstance)),next()}),testKit.registerSetup("componentBus",function(test,next){var componentConfig={name:"cool app",context:{configurator:test.get("configurator")}};test.set("componentBus",test.get("componentClass").create(componentConfig)),next()}),testKit.registerSetup("component.initialize",function(test,next){var configuratorInstance=test.get("configurator"),componentBus=test.get("componentBus"),$body=$('<div class="bodymock"></div>');componentBus.once("afterRender",function(evt,renderData){renderData.element.appendTo($body),componentBus.fire("view.dom.ready",$body)}),componentBus.initialize({options:{applicationId:null,routing:{silent:!0}},routes:[{pattern:"module1/action1",host:{name:"h1",type:"label",text:"host module 1",template:{name:"l1.host",engine:"jqote2",markup:["<div>","<h1>host module 1</h1>",'<a href="#module1/action2">host module 1 start</a>','<div role="main"></div>',"</div>"]}},type:{type:"label",text:"page action 1",template:{name:"m1a1",engine:"jqote2",markup:['<a href="#module2/action21">go to module 2 action1</a>',"<span>page action 2</span>"]}}},{pattern:"module1/action2",host:{name:"h1",type:"label",text:"host module 1",template:{name:"l1.host.2",engine:"jqote2",markup:["<div>","<h1>host module 1</h1>",'<a href="#module1/action2">host module 1 start</a>','<div role="main"></div>',"</div>"]}},type:{type:"label",text:"page action 2",template:{name:"m1a2",engine:"jqote2",markup:['<a href="#module1/action1">go to action1</a>',"<span>page action 2</span>"]}}},{pattern:"module2/action21",host:{name:"h2",type:"label",text:"host module 2",template:{name:"l2.host.1",engine:"jqote2",markup:["<div>","<h1>host module 2</h1>",'<div role="main"></div>',"</div>"]}},type:{type:"label",text:"page action 21",template:{name:"m2a1",engine:"jqote2",markup:['<a href="http://porn.com/targetprocess/TpView.aspx?acid=22323&smth=666#module2/action22">go to module 2 action2</a>',"<span>page action 1</span>"]}}},{pattern:"module2/action22",host:{name:"h2",type:"label",text:"host module 2"},type:{type:"label",text:"page action 22"}}],context:{configurator:configuratorInstance}}),next()});var testcase={name:"component.application.generic.links"};return testcase["should process click links, do not change url, internal navigate"]=testKit.test(function(test){var configurator=test.get("configuratorInstance");return testKit.flow(test,{"bus contentRendered[0]":function(evt,renderData){var $el=renderData.element;test.equals($el.length,1,"render el"),test.equals($el.find("h1").text(),"host module 1","render correct host"),$el.find("h1").text("host module 1 changed");var $ha=$el.find("a").eq(0);test.equals($ha.text(),"host module 1 start","render correct host"),test.equals($ha.attr("href"),"#module1/action2","render correct host"),test.equals($el.find("[role=main] span").text(),"page action 2","render correct host");var $aa=$el.find("[role=main] a");test.equals($aa.text(),"go to action1","render correct host"),test.equals($aa.attr("href"),"#module1/action1","render correct host"),$aa.click()},"bus contentRendered[1]":function(evt,renderData){var $el=renderData.element;test.equals($el.length,1,"render el"),test.equals($el.find("h1").text(),"host module 1 changed","render correct host");var $aa=$el.find("[role=main] a");test.equals($aa.text(),"go to module 2 action1","render correct host"),test.equals($aa.attr("href"),"#module2/action21","render correct host"),$aa.click()},"bus contentRendered[2]":function(evt,renderData){var $el=renderData.element;test.equals($el.length,1,"render el"),test.equals($el.find("h1").text(),"host module 2","render correct host");var $aa=$el.find("[role=main] a");test.equals($el.find("[role=main] span").text(),"page action 1","render correct host"),test.equals($aa.text(),"go to module 2 action2","render correct host"),test.equals($aa.attr("href"),"http://porn.com/targetprocess/TpView.aspx?acid=22323&smth=666#module2/action22","render correct host, link hard"),$aa.click()},"bus contentRendered[3]":function(evt,renderData){var $el=renderData.element;test.equals($el.length,1,"render el"),test.equals($el.find("h1").text(),"host module 2","render correct host"),test.equals($el.find("[role=main] span").text(),"page action 22","render correct host"),test.done()}})}),testcase})