define(["jQuery","tests/common/testkit","tau/configurator","tau/components/component.property.build.testPlanRun","tau/components/component.finder"],function($,a,b,c){var d=function(){var b=new a("[component.property.build.testPlanRun.practices]",c),d={p1:"Preved",p2:"Medved"},e={r1:"Release",r2:"Release2",r3:"Release3"},f={i1:"Iter1",i2:"Iter2"},g={b1:{name:"Build1",project:"p1",release:"r1"},b2:{name:"Build2",project:"p1",release:"r2",iteration:"i1"}},h={tpr1:{name:"TPR1",project:"p1",release:"r2",build:"b2"},tpr2:{name:"TPR2",project:"p1"},tpr3:{name:"TPR3",project:"p1",release:"r2",iteration:"i1"}},i=b.loadFixtures({projects:d,iterations:f,releases:e,testPlanRuns:h,builds:g});return b.setData(i),b.setEntity(i.testPlanRun.tpr1),b.selectProject(i.project.p1,["iterations"]),b.addTest({name:"should change property, correct find3 -- when iteration practice disable",context:{type:"testPlanRun",id:i.testPlanRun.tpr3.id},test:function(){var a=i.testPlanRun.tpr3;b.getService().registerFindCommand({config:{$skip:0,$limit:20,fields:["id","name",{project:["id","abbreviation"]}],$query:{"Project.Id":i.project.p1.id,"Release.Id":i.release.r2.id}},returnedData:[i.build.b1,i.build.b2]});var c=this.$el,d=c.find(".tau-property__value");d.click();var e=$(".tau-bubble");equal(e.size(),1,"Count of bubbles");var f=e.find(".tau-result-list-row");equals(f.length,2,"Options");var g=e.find(":text.filter-field");b.getService().registerFindCommand({config:{$skip:0,$limit:20,fields:["id","name",{project:["id","abbreviation"]}],$query:{name:{$contains:"preved"},"Project.Id":i.project.p1.id,"Release.Id":i.release.r2.id}},returnedData:[]}),g.val("preved"),g.trigger(jQuery.Event("keyup",{keyCode:jQuery.ui.keyCode.ENTER})),b.getService().verify()}}),b.run()};return{run:d}})