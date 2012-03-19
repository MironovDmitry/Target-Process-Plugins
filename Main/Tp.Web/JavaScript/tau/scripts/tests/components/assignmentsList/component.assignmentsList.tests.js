define(["Underscore","jQuery","tau/core/class","tau/core/tau","tau/components/component.assignmentsList","tests/common/testData","tests/common/testData.Generator","tests/common/service.mock","tau/configurator","tests/components/common/common.setup","tests/components/component.specs"],function(_,$,a,b,c,d,e,f,g,h,i){function j(a){return a.replace(/\s/gi,"")}function q(a){if($.browser.msie){var b=document.location;if($.browser.version==="7.0"){if(b.protocol=="file:"){var c=b.pathname.split("/");return"file:///"+c[1]+a}return a}}return a}function s(a,b){b=b||{},equal(a.find(".user-avatar-container .user-avatar").attr("src"),q(b.avatar),"User avatar is valid"),equal(a.find(".user-info .user-name").text(),b.name,"User name is valid")}function t(a){return[a.effort,"h",a.remain,"h"].join("")}function u(a,b){var c=a.find(".user"),d=b.users,e=a.find(".add-btn");b.allowAdd?ok(!e.hasClass("disabled"),b.role.name+" add btn is enabled"):ok(e.hasClass("disabled"),b.role.name+" add btn is disabled"),equal(c.length,d.length,"Count of users is valid"),c.each(function(a){s($(this),d[a])})}var k=new e;k.initDefaultData();var l=k.getUserStories(),m=k.getData(),n=l[3],o=n.id,p={context:{type:"story",id:o}},r={effortPoints:"h",assignments:{groups:[{roleEffort:{effort:"20",remain:$.browser.msie?"15.56":"15.55",id:350},role:{id:1,name:"Developer",isPair:!0,__type:"role"},users:[{id:254,name:"John Brown",avatar:"/TP/Avatar.ashx?UserId=254&size=32",assignmentId:250,roleId:1},{id:257,name:"Sandra Red",avatar:"/TP/Avatar.ashx?UserId=257&size=32",assignmentId:252,roleId:1}],allowAdd:!1},{roleEffort:{effort:"15",remain:"8",id:351},role:{id:4,name:"QA Engineer",isPair:!1,__type:"role"},users:[{id:256,name:"Andrew Gray",avatar:"/TP/Avatar.ashx?UserId=256&size=32",assignmentId:251,roleId:4}],allowAdd:!1}]},totalEffort:{effort:"25.11",remain:"98.51"},tasksEffort:{effort:"18.21",remain:"12.21"}},v=function(a,b){var c=function(){b=b||r;var a=this.$el,c=a.find(".user-list"),d=c.find('.role-title:contains("Developer")'),e=c.find('.role-title:contains("QA")'),f=b.assignments.groups[0],g=b.assignments.groups[1],h=c.children(".group");h.each(function(a){u($(this),b.assignments.groups[a])}),ok(d.length==1,"Developer role"),ok(e.length==1,"QA Engineer role"),equal(j(a.find(".user-list .group").eq(0).find(".role-effort").text()),j(t(f.roleEffort)),"Developers efforts (effort, remain)"),equal(j(a.find(".user-list .group").eq(1).find(".role-effort").text()),j(t(g.roleEffort)),"QS efforts (effort, remain)"),equal(j(a.find(".total-row .effort-cell").text()),t(b.totalEffort),"Total done,effort"),equal(j(a.find(".tasks-row .effort-cell").text()),t(b.tasksEffort),"Tasks done,effort")},d=[],e={name:a||"should render valid markup",preSetup:function(){var a=this.service=new f;g.setService(a)},test:function(){var a=this;_.each(d,function(b){b.call(a)})},addTest:function(a){return d.push(a),this}};return e.addTest(c),e},w=function(){var a=[v()],b=h.create("[component.assignmentsList]",m,c);i.create(b,p).viewShouldFollowDataComponentLifeCycle().viewShouldPassTests(a).done()};return{run:w,generateBaseViewTest:v}})