define(["Underscore","tau/components/component.list","tau/ui/templates/list_/grid.entity/ui.template.list.grid.entity","tau/ui/extensions/list/extension.list.editable.progress","tau/views/view.compositeControl"],function(e,t,r,p,s){return{create:function(o){return o=e(o).defaults({ViewType:s,template:o.template||r,extensions:[],dependencies:["title","property.severity","property.priority","property.relationType","property.entityState","assignmentsList","property.effort","progressBar.small","property.release","property.responsible","property.iteration","property.build","property.build.testPlanRun","property.lastStatus","property.lastRunDate.list","property.status.testCaseRun","property.completeDate","property.endDate.list","property.role","property.role.modern","property.startDate.projectMember","property.endDate.projectMember","steps","success","menu.testPlanRun","entity.quickAddTrigger","entity.menuTrigger"]}),o.extensions.push(p),t.create(o)}}});