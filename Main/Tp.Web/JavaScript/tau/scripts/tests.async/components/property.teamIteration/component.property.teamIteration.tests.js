define(["jQuery","tests.async/testkit/testkit.component","tau/components/component.property.teamIteration","tests/common/remoteConstants","tau/ui/extensions/container/ui.extension.container.childrenEvents"],function($,TestKit,Component,Constants,ExtensionChildrenEvents){var testKit=new TestKit(Component);testKit.registerSetup("fixtures",function(test,next){var practices={planning:{id:Constants.Practices.PLANNING.id}},processes={scrum:{name:"scream"+parseInt(Math.random()*1e11),practices:["planning"]}},teams={t1:{name:"TEAM A"+ +(new Date)},t2:{name:"TEAM B"+ +(new Date)}},projects={p_scrum:{name:"Project Scrum"+parseInt(Math.random()*1e11),process:"scrum"}},teamProjects={tp1:{team:"t1",project:"p_scrum"}},entityTypes={us:{id:Constants.EntityTypes.USERSTORY.id,name:"userStory"}},teamIterations={ti1:{name:"Foo iteration"+parseInt(Math.random()*1e11),team:"t1",startDate:"01.01.2012",duration:14},ti2:{name:"Bar iteration"+parseInt(Math.random()*1e11),team:"t1",startDate:"01.15.2012",duration:14},ti3:{name:"NA team iteration"+parseInt(Math.random()*1e11),team:"t2",startDate:"01.29.2012",duration:14}},userStories={us1:{name:"US1",entityType:"us",team:"t1"}};test.set("fixtures",{practices:practices,processes:processes,projects:projects,entityTypes:entityTypes,teams:teams,teamProjects:teamProjects,teamIterations:teamIterations,userStories:userStories}),next()}),testKit.registerSetup("componentBus",function(test,next){test.set("componentBus",test.get("componentClass").create({extensions:[ExtensionChildrenEvents],context:{getTerms:$.noop}})),next()}),testKit.registerSetup("component.initialize",function(test,next){var testData=test.get("data"),componentBus=test.get("componentBus");componentBus.initialize({context:{entity:testData.userStory.us1,configurator:test.get("configurator")}}),next()});var testcase={name:"component.property.teamIteration"};return testcase["should render valid markup and allow to edit"]=testKit.test(function(test){var teamIterations=test.get("data").teamIteration;testKit.flow(test,{"bus afterRender[0]":function(e,renderData){var $el=renderData.element;test.equals($el.text().length,0,"should be empty by default");var $value=$el.find(".tau-property__value");test.equals($value.length,1,"should find value field"),$value.click()},"bus state-list.afterRender[0]":function(e,renderData){var $el=renderData.element,$teamIterations=$el.find(".drop-down-option"),size=$teamIterations.size();test.equals(size,2,"should have 2 teamIterations available");if(size===0){test.ok(!1,"No teamIterations available"),test.done();return}var $firstTeamIterationEl=$el.find(".drop-down-option:contains("+teamIterations.ti1.name+")");test.equals($firstTeamIterationEl.length,1,"should find first teamIteration"),$firstTeamIterationEl.click()},"bus afterRender[1]":function(e,renderData){var $el=renderData.element,$teamIterationLabel=$el.find(".tau-linkentity__inner");test.equals($teamIterationLabel.text(),teamIterations.ti1.name,"first team iteration should be choosen"),test.done()}})}),testcase})