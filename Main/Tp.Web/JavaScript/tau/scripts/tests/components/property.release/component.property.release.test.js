define(["jQuery","tests/common/testkit","tau/configurator","tau/components/component.property.release"],function($,a,b,c){var d=function(){var b=new a("[component.property.release]",c),d={p1:{name:"Preved",releases:["r1","r3"]},p2:{name:"Medved",releases:["r2"]}},e={r1:{name:"Do It"},r2:{name:"Go Fuck yourself"},r3:{name:"Innah"}},f={us1:{name:"US1",project:"p1",release:"r1"},us2:{project:"p1",release:null},us3:{project:"p2",release:null}},g=b.loadFixtures({projects:d,releases:e,userStories:f});return b.setData(g),b.setEntity(g.userStory.us3),b.selectProject(g.project.p1),b.addTest({name:"should show on edit depends on entity project",test:function(){var a=this.$el,b=a.find(".tau-property__value");b.click();var c=$(".tau-bubble");equal(c.size(),1,"Count of bubbles");var d=c.find(".drop-down-option");equals(d.length,1,"Options"),equals(d.eq(0).text(),"Go Fuck yourself")}}),b.run()};return{run:d}})