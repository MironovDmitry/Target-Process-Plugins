define(["jQuery","tests/common/testkit","tau/components/component.property.owner.project"],function($,a,b){var c=function(){var c=new a("[component.property.owner.project]",b),d={p1:{name:"Project",owner:"gu1"}},e={gu1:{id:777,firstName:"Ron",lastName:"Jeremy",role:"admin"}},f={u1:{id:777,firstName:"Ron",lastName:"Jeremy",role:"admin",isActive:!0},u2:{firstName:"Sasha",lastName:"Grey",role:"developer",isActive:!0,deleteDate:"12-Dec-2012"},u3:{firstName:"Max",lastName:"Hardcore",role:"developer",isActive:!0},u4:{firstName:"Bree",lastName:"Olson",role:"qa",isActive:!0},u5:{firstName:"Jenna",lastName:"Jameson",role:"developer",isActive:!0}},g={admin:"Admin",developer:"Developer",qa:"QA"},h=c.loadFixtures({generalUsers:e,users:f,projects:d,roles:g});return c.setData(h),c.setEntity(h.project.p1),c.selectProject(h.project.p1),c.loginAs(h.user.u2),c.addTest({name:"should render valid markup",test:function(){var a=this.$el;equal(a.find(".user-avatar-container .user-avatar").length,1,"Avatar src"),equal(a.find(".user-info .user-name").text(),"Ron Jeremy","User name")}}),c.addTest({name:"should change owner",test:function(){var a=this.$el,b=a.find(".user-info .user-name");b.click();var d=$(".tau-bubble");equal(d.size(),1,"Count of bubbles");var e=d.eq(0).find('.user-name:contains("Sasha Grey")');equals(e.length,0,"Not Has option");var e=d.eq(0).find('.user-name:contains("Bree Olson")');equals(e.length,1,"Has option");var f=h.user.u4,g=h.project.p1;c.getService().registerSaveCommand({config:{$set:{owner:{id:f.id}},fields:["id",{owner:["id","firstName","lastName"]}],id:g.id},returnedData:{id:g.id,owner:f}}),e.click(),equal(this.$el.find(".user-info .user-name").text(),"Bree Olson","Owner was changed"),c.getService().verify()}}),c.run()};return{run:c}})