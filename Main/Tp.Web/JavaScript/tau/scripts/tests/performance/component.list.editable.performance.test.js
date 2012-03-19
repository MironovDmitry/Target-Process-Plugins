define(["Underscore","jQuery","tau/configurator","tau/core/profile.methods","tests/common/service.mock","tests/performance/profile.tree.visualizer","tau/components/component.list.editable","tests/performance/list.datapoint","tau/models/dataProviders/model.provider.items.tasks_bugs","tau/models/dataProviders/model.provider.groups.tasks_bugs","tau/ui/templates/list_/grid.entity/ui.template.list.grid.entity","tau/components/component.title","tau/components/component.property.severity","tau/components/component.property.priority","tau/components/component.property.entityState","tau/components/component.property.effort","tau/components/component.progressBar.small","tau/components/component.assignmentsList","tau/components/component.entity.actions","tau/components/component.property.release",,"tau/components/component.property.iteration",,"tau/components/component.property.build",,"tau/components/component.property.build.testPlanRun",,"tau/components/component.property.lastStatus",,"tau/components/component.property.lastRunDate.list",,"tau/components/component.steps",,"tau/components/component.success",,"tau/components/component.menu.testPlanRun"],function(_,$,a,b,c,d,e,f,g,h){function i(){$('<span>Amount: </span><input type="text" id="amount" value="100" />').appendTo("#toolbarContainer"),$("<button>Initialize</button>").click(l()).appendTo("#toolbarContainer");var a=$("<thead></thead>").append("<th>#</th>").append("<th>Prepare data</th>").append("<th>Register data</th>").append("<th>Create comp</th>").append("<th>Initialize</th>"),b=$('<table id="result" border="1" cellpadding="1" cellspacing="1" width="30%"></table>').append(a);b.appendTo("#resultsContainer");var c=$('<div id="visualResult"></div>');c.appendTo("#resultsContainer")}function j(a,b){a.setService(new c);var d=a.getStore().config.proxy;d.registerData(b),d.markRecordSetAsCompleteLoaded("severity"),d.markRecordSetAsCompleteLoaded("entityState"),d.markRecordSetAsCompleteLoaded("priority"),d.markRecordSetAsCompleteLoaded("process"),d.markRecordSetAsCompleteLoaded("project")}function k(b){var c={};c.start=+(new Date);var d={id:370,entityType:{name:"userStory"}},i={applicationContext:{selectedProjects:[{id:1}],processes:[{id:1,name:"Kanban",terms:[{name:"Bug",value:"Issue"},{name:"Bugs",value:"Issues"}],practices:[{name:"Planning",effortPoints:"Hour",isStoryEffortEqualsSumTasksEffort:!1},{name:"Time Tracking",isCloseAssignableIfZeroTimeRemaining:!1,isTimeDescriptionFieldVisible:!0,isTimeDescriptionRequired:!0,isRequiredShowRoleDropDown:!1},{name:"Bug Tracking"},{name:"Requirements"},{name:"Test Cases"},{name:"Source Control"},{name:"Help Desk"},{name:"Iterations"}]}]},entity:d,assignable:d,general:d,getTimeTrackingPolicies:function(){return{disableSpentRemain:!0}},isPracticeAvailable:function(){return!0},getEffortPoint:function(){return"h"},getTerms:function(){return[]}},k={context:i,itemsDataProvider:g,groupsDataProvider:h,groupBy:"entityState.name",multiprojects:!0,views:[{type:"grid.entity",group:{dataIndex:"name"}}]},l=f.prepareTestData(b);c.prepareTestData=+(new Date),j(a,l),c.registerData=+(new Date);var m=e.create(k);return c.createComponent=+(new Date),m.initialize(),c.initialize=+(new Date),{points:c}}function l(){return function(){a.clear();var c=$("#amount").val(),e=k(c),f=b.accumulate.result();d.build(f).appendTo("#resultsContainer");var g=e.points;$("<tr></tr>").append("<td>1</td>").append("<td>"+(g.prepareTestData-g.start)+"</td>").append("<td>"+(g.registerData-g.prepareTestData)+"</td>").append("<td>"+(g.createComponent-g.registerData)+"</td>").append("<td>"+(g.initialize-g.createComponent)+"</td>").appendTo("#result")}}return{run:i}})