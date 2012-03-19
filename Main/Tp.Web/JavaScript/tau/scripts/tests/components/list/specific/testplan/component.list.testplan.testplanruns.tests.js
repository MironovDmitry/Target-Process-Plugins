define(["Underscore","tests/components/list/specific/component.list.spec.base","tau/models/dataProviders/testplan/testplan.model.provider.testplanruns.items","tau/models/dataProviders/testplan/testplan.model.provider.testplanruns.groups","tau/ui/templates/list_/grid.entity/ui.template.list.grid.entity"],function(_,a,b,c){var d=function(){var d=a.Testcase.create("[list.testplan.testplanruns]",b,c,function(){this.componentConfig={itemsDataProvider:this.providers.items,groupsDataProvider:this.providers.groups,groupBy:"entityState.name",views:[{rowTemplateName:"list-grid-entity__rowtestplanrun",type:"grid.entity",group:{dataIndex:"name"}}]};var a={tpr:"TestPlanRun"},b={kanban:"Kanban",scrum:"Scrum"},c={p1:"Good"},d={s1:"Good"},e={p_kanban:{name:"Project Kanban",process:"kanban"},p_scrum:{name:"Project Scrum",process:"scrum"}},f={r1:"Release1",r2:"R2"},g={i1:"Iter1",i2:"Iter2"},h={b1:"Build1",b2:"Build2"},i={kanban_tpr_new:{name:"New",entityType:"tpr",process:"kanban",nextStates:["kanban_tpr_inprogress"],isInitial:!0},kanban_tpr_inprogress:{name:"In Progress",entityType:"tpr",nextStates:["kanban_tpr_done"],process:"kanban"},kanban_tpr_done:{name:"Done",entityType:"tpr",process:"kanban",isFinal:!0},scrum_tpr_open:{name:"Open",entityType:"tpr",process:"scrum",nextStates:["scrum_tpr_planned"],isInitial:!0},scrum_tpr_planned:{name:"Planned",entityType:"tpr",nextStates:["scrum_tpr_indevelopment","scrum_tpr_closed"],process:"scrum"},scrum_tpr_indevelopment:{name:"In Development",entityType:"tpr",nextStates:["scrum_tpr_intesting"],isCommentRequired:!0,process:"scrum"},scrum_tpr_intesting:{name:"In Testing",entityType:"tpr",nextStates:["scrum_tpr_closed"],process:"scrum"},scrum_tpr_closed:{name:"Closed",entityType:"tpr",process:"scrum",isFinal:!0}},j={tp1:{name:"Test Plan",testPlanRuns:["tpr1","tpr2","tpr3"],project:"p_kanban",process:"kanban"}},k={tpr1:{name:"TPR1",entityState:"kanban_tpr_inprogress",priority:"p1",project:"p_kanban",release:"r1",build:"b2",passedCount:42,failedCount:888,numericPriority:20},tpr2:{name:"TPR2",entityState:"scrum_tpr_planned",priority:"p1",project:"p_scrum",iteration:"i1",notRunCount:666,numericPriority:30},tpr3:{name:"TPR3",entityState:"scrum_tpr_planned",priority:"p1",project:"p_scrum",iteration:"i1",notRunCount:666,numericPriority:10}};this.loadFixtures({entityType:a,projects:e,entityStates:i,testPlanRuns:k,priority:c,severity:d,processes:b,testPlans:j,releases:f,iterations:g,builds:h}),this.setProject(this.data.project.p_kanban),this.setEntity(this.data.testPlan.tp1)});d.add(new a.Test({name:"should render valid markup view",test:function(){var a=this.data,b=this.$el,c=[{title:"New, Open",items:[]},{title:"In Progress",items:["TPR1"]},{title:"Planned",items:["TPR3","TPR2"]},{title:"In Development",items:[]},{title:"In Testing",items:[]},{title:"Done, Closed",items:[]}],d=b.find("[role=group]");equals(d.length,c.length,"Groups amount");for(var e=0;e<d.length;e++){var f=d.eq(e);equals(f.find("[role=title]").text(),c[e].title,"Group title"),equals(f.find("[role=counter]").text(),c[e].items.length,"Group counter")}var g=b.find("[role=list]");for(var h=0;h<g.length;h++){var i=g.eq(h),j=i.find("[role=item]");for(var k=0;k<j.length;k++){var l=j.eq(k).find(".tau-list__table__cell"),m=a.groups[h].items[k];equals(_.trim(l.eq(1).text()),m.id,"ID Data column");var n=l.eq(1).find(".tau-entitylink").attr("title"),o=c[h].items[k];equals(n,o,"Name Data column"),_.forEach(["release","iteration","build"],function(a){var b=l.filter(".tau-list__table__cell-"+a);equals(b.length,1,a+" output"),equals(_.trim(b.text()),m[a]?m[a].name:"",a+" output")});var p=l.filter(".tau-list__table__cell-stat");equals(p.length,1,"Stat cell"),equals(_.trim(p.text()),(m.passedCount||0)+""+(m.failedCount||0)+""+(m.notRunCount||0),"Stat cell");var q=l.filter(".tau-list__table__cell-assignments");equals(q.length,1,"Assignemtn output");var r=q.find(".ui-assignment__group");equals(r.length,m.assignments.groups.length,"Assignments items"),_.forEach(m.assignments.groups,function(a,b){var c=r.eq(b);equals(c.find(".ui-assignment__group__title").text(),a.role.name,"Group title");var d=c.find(".ui-assignment__user");equals(d.length,a.users.length,"Group users length"),_.forEach(a.users,function(b,c){var e=d.eq(c),b=a.users[c];equals(e.find("img").attr("src"),"/TP/Avatar.ashx?UserId="+b.id+"&size=24","User avatar"),equals(e.find("img").prop("title"),b.name,"User name")})});var s=l.filter(".tau-list__table__cell-additionalactions");equals(s.length,1,"Additional actions cell")}}}}));var e=new a.Test;d.add(new a.Test({name:"dnd available states using process",test:function(){var a=this.$el.find("[role=group]:eq(2)"),b=this.$el.find("[role=group]:eq(5)");b.find("[role=title]").click();var c=a.find("[role=item]:eq(1)"),f=d.data.testPlanRun.tpr2,g=d.data.entityState.scrum_tpr_closed;e.registerPrioritize(f.id,{beforeId:null,afterId:null}),e.registerChangeState(f,g),e.$el=this.$el,e.checkGroupsAvailability(6,0),e.startMove(c),e.checkGroupsAvailability(3,3);var h=this.$el.find("[role=group]");ok(h.eq(3).hasClass("tau-list__group_available_true"),"In Dev available"),ok(h.eq(5).hasClass("tau-list__group_available_true"),"Done available"),e.moveAfter(c,b),e.endMove(),e.checkGroupsAvailability(6,0)}})),d.add(new a.Test({name:"dnd change state use comment",test:function(){var a="fuck you",b=this.$el.find("[role=group]:eq(2)"),c=this.$el.find("[role=group]:eq(3)"),f=b.find("[role=item]:eq(1)"),g=d.data.testPlanRun.tpr2,h=d.data.entityState.scrum_tpr_indevelopment;e.$el=this.$el,e.checkGroupsAvailability(6,0),e.startMove(f),e.checkGroupsAvailability(3,3),e.moveAfter(f,c),e.checkBubble(f),e.cancelBubble(f),b=this.$el.find("[role=group]:eq(2)"),c=this.$el.find("[role=group]:eq(3)"),f=b.find("[role=item]:eq(1)"),e.registerComment(g,a),e.registerPrioritize(g.id,{beforeId:null,afterId:null}),e.registerChangeState(g,h),e.$el=this.$el,e.checkGroupsAvailability(6,0),e.startMove(f),e.checkGroupsAvailability(3,3),e.moveAfter(f,c),e.checkBubble(f),e.submitBubble(f,a),e.endMove(),e.checkGroupsAvailability(6,0)}})),d.run()};return{run:d}})