define(["jQuery","tests.async/testkit/testkit.component","tau/components/component.application.generic"],function($,TestKit,Component){var testKit=new TestKit(Component);testKit.registerSetup("fixtures",function(test,next){test.set("fixtures",{});var configuratorInstance=test.get("configurator");configuratorInstance.getHashService().setHash("module1/action2"),next()}),testKit.registerSetup("componentBus",function(test,next){var componentConfig={name:"cool app",context:{configurator:test.get("configurator")}};test.set("componentBus",test.get("componentClass").create(componentConfig)),next()}),testKit.registerSetup("component.initialize",function(test,next){var configuratorInstance=test.get("configurator"),componentBus=test.get("componentBus");componentBus.initialize({options:{applicationId:null},routes:[{pattern:"module1/action1",host:{name:"h1",type:"label",text:"host module 1",template:{name:"l1.host",engine:"jqote2",markup:["<div>","<h1>host module 1</h1>",'<div role="main"></div>',"</div>"]}},type:{type:"label",text:"page action 1"}},{pattern:"module1/action2",host:{name:"h1",type:"label",text:"host module 1",template:{name:"l1.host.2",engine:"jqote2",markup:["<div>","<h1>host module 1</h1>",'<div role="main"></div>',"</div>"]}},type:{name:"h1p2",type:"label",text:"page action 2"}},{pattern:"module2/action21",host:{name:"h2",type:"label",text:"host module 2",template:{name:"l2.host.1",engine:"jqote2",markup:["<div>","<h1>host module 2</h1>",'<div role="main"></div>',"</div>"]}},type:{type:"label",text:"page action 21"}},{pattern:"module2/action22",host:{name:"h2",type:"label",text:"host module 2"},type:{type:"label",text:"page action 22"}}],context:{configurator:configuratorInstance}}),next()});var testcase={name:"component.application.generic"};return testcase["should be in global bus registry for mashups"]=testKit.test(function(test){var configurator=test.get("configuratorInstance");return testKit.flow(test,{"bus afterRender[0]":function(){configurator.getBusRegistry().getByName("cool app").done(function(bus){test.equals(bus,test.get("componentBus"),"same bus"),test.done()})}})}),testcase["should init components and process init url"]=testKit.test(function(test){var configurator=test.get("configuratorInstance");return testKit.flow(test,{"bus contentRendered[0]":function(evt,renderData){var $el=renderData.element;test.equals($el.length,1,"render el"),test.equals($el.text(),"host module 1page action 2","render correct host");var $hostholder=$el.find("h1");test.equals($hostholder.length,1,"render el"),test.equals($hostholder.text(),"host module 1","render correct host");var $pageholder=$el.find("[role=main]");test.equals($pageholder.length,1,"render pageholder"),test.equals($pageholder.text(),"page action 2","render correct page"),test.done()}})}),testcase["should init components and process change url"]=testKit.test(function(test){var configurator=test.get("configuratorInstance");return testKit.flow(test,{"bus contentRendered[0]":function(evt,renderData){var $el=renderData.element;test.equals($el.length,1,"render el"),test.equals($el.text(),"host module 1page action 2","render correct host");var $hostholder=$el.find("h1");test.equals($hostholder.length,1,"render el"),test.equals($hostholder.text(),"host module 1","render correct host");var $pageholder=$el.find("[role=main]");test.equals($pageholder.length,1,"render pageholder"),test.equals($pageholder.text(),"page action 2","render correct page"),$hostholder.text("host module 1 changed"),configurator.getHashService().setHash("module1/action1"),configurator.getHashService().fire("changed")},"bus contentRendered[1]":function(evt,renderData){var $el=renderData.element;test.equals($el.length,1,"render el"),test.equals($el.text(),"host module 1 changedpage action 1","render correct host, replace page");var $hostholder=$el.find("h1");test.equals($hostholder.length,1,"render el"),test.equals($hostholder.text(),"host module 1 changed","render correct host");var $pageholder=$el.find("[role=main]");test.equals($pageholder.length,1,"render pageholder"),test.equals($pageholder.text(),"page action 1","render correct page"),configurator.getHashService().setHash("module2/action21"),configurator.getHashService().fire("changed")},"bus contentRendered[2]":function(evt,renderData){var $el=renderData.element;test.equals($el.length,1,"render el"),test.equals($el.text(),"host module 2page action 21","replace host, replace page");var $hostholder=$el.find("h1");test.equals($hostholder.length,1,"render el"),test.equals($hostholder.text(),"host module 2","render correct host");var $pageholder=$el.find("[role=main]");test.equals($pageholder.length,1,"render pageholder"),test.equals($pageholder.text(),"page action 21","render correct page"),$hostholder.text("host module 2 changed"),configurator.getHashService().setHash("module2/action22"),configurator.getHashService().fire("changed")},"bus contentRendered[3]":function(evt,renderData){var $el=renderData.element;test.equals($el.length,1,"render el"),test.equals($el.text(),"host module 2 changedpage action 22","save old host, replace page");var $hostholder=$el.find("h1");test.equals($hostholder.length,1,"render el"),test.equals($hostholder.text(),"host module 2 changed","render correct host");var $pageholder=$el.find("[role=main]");test.equals($pageholder.length,1,"render pageholder"),test.equals($pageholder.text(),"page action 22","render correct page"),configurator.getHashService().setHash("module1/action1"),configurator.getHashService().fire("changed")},"bus contentRendered[4]":function(evt,renderData){var $el=renderData.element;test.equals($el.length,1,"render el"),test.equals($el.text(),"host module 1page action 1","return to start"),test.done()}})}),testcase["should  process refresh"]=testKit.test(function(test){var configurator=test.get("configuratorInstance");return testKit.flow(test,{"bus contentRendered[0]":function(evt,renderData){var $el=renderData.element;test.equals($el.length,1,"render el"),test.equals($el.text(),"host module 1page action 2","render correct host");var $hostholder=$el.find("h1");test.equals($hostholder.length,1,"render el"),test.equals($hostholder.text(),"host module 1","render correct host");var $pageholder=$el.find("[role=main]");test.equals($pageholder.length,1,"render pageholder"),test.equals($pageholder.text(),"page action 2","render correct page"),$pageholder.find("span").text("page action 2 changed"),configurator.getComponentBusRegistry().getByName("h1p2").done(function(bus){bus.fire("refresh"),setTimeout(function(){var $el=renderData.element;test.equals($el.length,1,"render el"),test.equals($el.text(),"host module 1page action 2","render correct host");var $hostholder=$el.find("h1");test.equals($hostholder.length,1,"render el"),test.equals($hostholder.text(),"host module 1","render correct host");var $pageholder=$el.find("[role=main]");test.equals($pageholder.length,1,"render pageholder"),test.equals($pageholder.text(),"page action 2","render correct page"),test.done()},10)})}})}),testcase})