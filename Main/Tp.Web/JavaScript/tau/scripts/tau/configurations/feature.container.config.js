define(["Underscore","jQuery","tau/configurations/baseContainable.container.config","tau/models/model.extensions","tau/components/extensions/requestsList/extensions.requestList.labelRefresher","tau/components/extensions/entity/extension.requestList.remover","tau/models/dataProviders/feature/feature.model.provider.user_stories.items","tau/models/dataProviders/feature/feature.model.provider.user_stories.groups","tau/ui/extensions/list/external.refresh.extension","tau/ui/extensions/list/request/extension.list.entityState","tau/ui/extensions/list/extension.list.refresher","tau/models/dataProviders/entity/entity.model.provider.bug.items"],function(e,t,i,r,s,n,a,o,l,d,u,p){return i.extend({init:function(e){this._super(e);var t=e.context.entity,i=e.context.configurator.getUrlBuilder();this.registerAdditionalInfoItem("PlannedStartDate",{label:{text:"Planned Start"},field:{type:"property.plannedStartDate",editable:!0}}),this.registerAdditionalInfoItem("PlannedEndDate",{label:{text:"Planned End"},field:{type:"property.plannedEndDate",editable:!0}}),this.registerAction("Add User Story",{disabledIf:{feature:"entity.quickAdd"},label:"Add "+this.getTermName("userStory"),url:i.getAddUserStoryForFeatureUrl(t.id)}),this.registerPanel("Progress Bar",{type:"progressBar"}),this.registerPanel("Total Effort",{type:"feature.totalEffort"}),this.registerPanel("Assignments",{type:"collapsible",collapsed:!1,stateName:"assignments",header:[{type:"label",text:"Assignments"}],items:[{type:"feature.assignmentList"}]});var r=this;this.registerTab("User Stories",{label:"userStories",header:[{type:"label",text:r.getNames("userStory"),countFieldNames:["userStories"]}],items:[{type:"container",spinnerConfigForLazy:this.getSpinnerConfigForLazy(),children:[{type:"container",lazy:!0,name:"lazyPlaceholder container",children:[{type:"quick.add",printable:!1,property:"feature",entityType:"userStory",evictProperties:["userStories","userStories-count"],label:"Add "+this.getNames("UserStory")},{type:"list.editable",externalRefreshEvents:["userStory.items.added"],multiprojects:!0,itemsDataProvider:a,views:[{type:"grid.entity"}],extensions:[d]}]}]}]}),this.registerTab("Bugs",{label:"bugs",practices:["Bug Tracking"],header:[{type:"label",text:r.getNames("bug"),countFieldNames:["bugs"]}],items:[{type:"container",spinnerConfigForLazy:this.getSpinnerConfigForLazy(),practices:["Bug Tracking"],children:[{type:"container",lazy:!0,name:"lazyPlaceholder container",practices:["Bug Tracking"],children:[{practices:["Bug Tracking"],type:"quick.add",printable:!1,property:"feature",entityType:"bug",evictProperties:["bugs","bugs-count"],label:"Add "+r.getNames("bug")},{type:"list.editable",extensions:[u,d],practices:["Bug Tracking"],externalRefreshEvents:["bug.items.added"],itemsDataProvider:p,multiprojects:!0,views:[{type:"grid.entity"}]}]}]}]})},getTabsAliases:function(){return["Description","User Stories","Bugs","Relations","Flow","Time","History"]},getActionsAliases:function(){return["Add User Story","Add Impediment","Attach to Request","Move or Copy","Copy to project","Convert","-----","Old Edit","Print","-----","Delete"]},getPanelsAliases:function(){return e.union(["Look Switcher","Diagnostic","Progress Bar","Requests","Impediments","Total Effort","Assignments"],["Additional Info"],!t.browser.msie||this.isIE9()?["Lead Cycle Time"]:[],["Custom Fields"])},getEntityQuickAddOptions:function(){return{items:[{entityType:"userstory",relationName:"userStories"},{entityType:"bug",relationName:"bugs",practices:["Bug Tracking"]},{entityType:"impediment",relationName:"impediments"}]}},getAdditionalInfoAliases:function(){return e.union(["Project","Team","Owner","Initial Estimate","Business Value","Release","StartDate","CompletionDate","PlannedStartDate","PlannedEndDate"],t.browser.msie&&!this.isIE9()?["CycleTime","LeadTime","CreationDate","CompletionDate"]:[])}})});