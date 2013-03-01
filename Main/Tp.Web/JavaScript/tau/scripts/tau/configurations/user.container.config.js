define(["tau/configurations/base.container.config","tau/models/extensions/container/container.save.freezer","tau/components/extensions/user.view/user.view","tau/models/dataProviders/user/user.model.provider.assignments.items","tau/models/model.list.open.assignments","tau/ui/extensions/list/open.assignments/extension.list.open.assignments","tau/ui/extensions/list/request/extension.list.entityState","tau/ui/extensions/ui.extension.add.css","tau/core/termProcessor","tau/models/dataProviders/user/user.model.provider.teams.items","tau/ui/extensions/list/user/ui.extension.list.user.teams.refresh","tau/ui/extensions/list/user/ui.extension.list.user.action.detach","tau/ui/templates/list_/user/ui.template.list.user.teams","tau/models/dataProviders/user/user.model.provider.projects.items","tau/ui/extensions/list/user/ui.extension.list.user.projects.refresh","tau/ui/extensions/list/user/ui.extension.list.user.action.detach","tau/ui/templates/list_/user/ui.template.list.user.projects","tau/ui/templates/property/ui.template.property.title"],function(BaseContainerConfig,ContainerSaveFreezerExtension,UserViewExtension,AssignmentsItemsDataProvider,ModelOpenAssignments,ExtensionOpenAssignments,EntityStateListExtension,ExtensionAddClass,TermProcessor,TeamsItemsDataProvider,TeamsRefreshExtension,TeamsDetachExtension,TeamsTemplate,ProjectsItemsDataProvider,ProjectsRefreshExtension,ProjectsDetachExtension,ProjectsTemplate,PropertyTitleTemplate){var UserContainerConfig=BaseContainerConfig.extend({init:function(appConfig){this._super(appConfig),this.registerTab("Assignments",{selected:!0,label:"assignments",header:[{type:"label",text:"Open Assignments"}],items:[{type:"list.editable",itemsDataProvider:AssignmentsItemsDataProvider,extensions:[ModelOpenAssignments,ExtensionOpenAssignments],multiprojects:!0,views:[{type:"grid.entity"}]}]}),this.registerTab("Account Settings",{label:"accountSettings",header:[{type:"label",text:"Account Settings"}],items:[{type:"user.settings"}]}),this.registerTab("Teams and Projects",{label:"teams-projects",header:[{type:"label",text:[this.getNames("team"),this.getNames("project")]}],items:[{type:"container",layout:"selectable",template:{name:"user.teamprojects.tab",markup:['<div class="tau-teamsProjects-tab">','<div class="tau-half-col" role="left"></div>','<div class="tau-half-col tau-right"  role="right"></div>',"</div>"].join("")},children:[{type:"finder.team.byUser",selector:"[role=left]"},{selector:"[role=left]",type:"list.editable",itemsDataProvider:TeamsItemsDataProvider,sortable:!1,extensions:[TeamsRefreshExtension,TeamsDetachExtension],template:TeamsTemplate},{type:"finder.project.byUser",selector:"[role=right]"},{selector:"[role=right]",type:"list.editable",itemsDataProvider:ProjectsItemsDataProvider,sortable:!1,extensions:[ProjectsRefreshExtension,ProjectsDetachExtension],template:ProjectsTemplate}]}]})},getTabsAliases:function(){return["Assignments","Account Settings","Teams and Projects"]},getPanelsAliases:function(){return[]},getAdditionalInfoAliases:function(){return[]},getConfig:function(appConfig){var terms=appConfig.context.getTerms(),configurator=appConfig.context,entityId=configurator.entity.id,userLogged=configurator.getLoggedUser(),isAllowedEdit=entityId===userLogged.id||userLogged.isAdministrator;return this.termProcessor=new TermProcessor(terms),{children:[{type:"container",name:"main entity container",layout:"list",cssClass:"main-container tau-user-view",cellsCssClass:["general-info","additional-info"],children:[{type:"breadcrumbs",fields:["firstName","lastName"]},{type:"container",layout:"table",children:[{type:"avatar",isEdit:isAllowedEdit},{type:"container",name:"main entity container",layout:"list",children:[{type:"container",layout:"table",children:[{type:"property.text",propertyName:"firstName",restoreText:!0,editable:isAllowedEdit,placeholderText:"first name",template:PropertyTitleTemplate},{type:"property.text",propertyName:"lastName",restoreText:!0,editable:isAllowedEdit,placeholderText:"last name",template:PropertyTitleTemplate}]},{type:"property.role",propertyName:"lastName",cssClass:"tau-role",extensions:[ExtensionAddClass],editable:!0}]}]},{type:"container",name:"general info column container",children:[{type:"tabs",cssClass:"tau-tabs",stateName:"generalTab",tabs:this.getTabs(appConfig)}]}]}]}}});return UserContainerConfig})