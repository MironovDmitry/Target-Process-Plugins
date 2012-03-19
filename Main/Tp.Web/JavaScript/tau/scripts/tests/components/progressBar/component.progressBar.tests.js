define(["jQuery","tau/components/component.progressBar","tests/components/common/common.setup","tests/components/component.specs","tests/common/testData.Generator","tau/components/component.property.entityState","tests/common/service.mock","tau/configurator"],function($,a,b,c,d,e,f,g){var h=function(){var e=new d;e.initDefaultData();var h=e.getData(),i=e.getBugs()[0],j={context:{type:"bug",id:i.id}},k=function(a,b){equals(a.find(".state-select > .attr-item > .attr-name").text(),b,"State text is valid")},l=b.create("[component.progressBar]",h,a,j),m=[{name:"should render correct markup for non-zero effort",preSetup:function(){var a=this.service=new f;g.setService(a)},test:function(){var a=this.$el,b=this.data;k(a,i.entityState.name),ok(a.find(".ui-progressbar__data").css("display")!=="none","spent/remain labels are visible"),equals(a.find("span.ui-label-remain > .value").eq(0).text(),b.timeRemain+"h","Time Remain should be rendered"),equals(a.find("span.ui-label-spent .value").eq(0).text(),b.timeSpent+"h","Time Spent text label text is valid"),equals(a.find(".ui-progress-progress").eq(0).tmplItem().data.percentCompleted,b.percentCompleted,"Percent completed in data"),equals(a.find(".ui-progress-progress").eq(0)[0].style.width,Math.round(b.percentCompleted)+"%","Progress line should be rendered (rounded)"),equals(a.find("span.ui-label").eq(0).text(),Math.round(b.percentCompleted)+"%","Percent text label is valid (rounded)")}},{name:"should refresh on dependent data change [timeSpent|timeRemain|effortToDo|effortCompleted]",preSetup:function(){var a=this.service=new f;g.setService(a)},test:function(){var a=this.$el,b=this.data;k(a,i.entityState.name),ok(a.find(".ui-progressbar__data").css("display")!=="none","spent/remain labels are visible"),equals(a.find("span.ui-label-remain > .value").eq(0).text(),b.timeRemain+"h","Time Remain should be rendered"),equals(a.find("span.ui-label-spent .value").eq(0).text(),b.timeSpent+"h","Time Spent text label text is valid"),equals(a.find(".ui-progress-progress").eq(0).tmplItem().data.percentCompleted,b.percentCompleted,"Percent completed in data"),equals(a.find(".ui-progress-progress").eq(0)[0].style.width,Math.round(b.percentCompleted)+"%","Progress line should be rendered (rounded)"),equals(a.find("span.ui-label").eq(0).text(),Math.round(b.percentCompleted)+"%","Percent text label is valid (rounded)");var c=b.timeRemain+b.timeSpent;this.service.registerRefreshCommand({config:{fields:["id","timeSpent","timeRemain","effortToDo","effortCompleted"],id:i.id},returnedData:{id:i.id,timeSpent:c,timeRemain:0,effortToDo:0,effortCompleted:b.effortCompleted+b.effortToDo}}),g.getStore().refresh("bug",{id:i.id,fields:["id","timeSpent","timeRemain","effortToDo","effortCompleted"]}).done(),a=this.$el,equals(a.find("span.ui-label-remain > .value").eq(0).text(),"0h","Time Remain should be rendered"),equals(a.find("span.ui-label-spent .value").eq(0).text(),c+"h","Time Spent text label text is valid"),equals(a.find(".ui-progress-progress").eq(0).tmplItem().data.percentCompleted,100,"Percent completed in data"),equals(a.find(".ui-progress-progress").eq(0)[0].style.width,"100%","Progress line should be rendered (rounded)"),equals(a.find("span.ui-label").eq(0).text(),"100%","Percent text label is valid (rounded)")}}];c.create(l,j).viewShouldFollowDataComponentLifeCycle().viewShouldPassTests(m).done();var n={processes:[{id:1,name:"Kanban",terms:[],practices:[]}]},o=b.create("[component.progressBar][no time tracking]",h,a,j,n),p=[{name:"should not show spent/remain labels if time tracking is OFF",preSetup:function(){var a=this.service=new f;g.setService(a)},test:function(){var a=this.$el,b=this.data;k(a,i.entityState.name),ok(a.find(".ui-progressbar__data").css("display")==="none","spent/remain labels are hidden"),equals(a.find(".ui-progress-progress").eq(0).tmplItem().data.percentCompleted,b.percentCompleted,"Percent completed in data"),equals(a.find(".ui-progress-progress").eq(0)[0].style.width,Math.round(b.percentCompleted)+"%","Progress line should be rendered (rounded)"),equals(a.find("span.ui-label").eq(0).text(),Math.round(b.percentCompleted)+"%","Percent text label is valid (rounded)")}}];c.create(o,j).viewShouldPassTests(p).done();var q=e.getBugs()[1],r={context:{type:"bug",id:q.id}},s=b.create("[component.progressBar][zero effort]",h,a,r),t=[{name:"should render markup for zero effort",preSetup:function(){var a=this.service=new f;g.setService(a)},test:function(){var a=this.$el;k(a,i.entityState.name),equals(a.find("span.ui-label-remain > .value").eq(0).text(),q.timeRemain+"h","Time Remain should be rendered"),equals(a.find(".ui-progress-progress").length,0,"Progress line should not be rendered")}}];c.create(s,r).viewShouldFollowDataComponentLifeCycle().viewShouldPassTests(t).done()};return{run:h}})