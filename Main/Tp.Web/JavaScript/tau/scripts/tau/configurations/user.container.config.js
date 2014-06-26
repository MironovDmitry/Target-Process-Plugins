define(["tau/configurations/base.container.config","tau/models/extensions/container/container.save.freezer","tau/components/extensions/user.view/user.view","tau/models/dataProviders/user/user.model.provider.assignments.items","tau/models/model.list.open.assignments","tau/ui/extensions/list/open.assignments/extension.list.open.assignments","tau/ui/extensions/list/request/extension.list.entityState","tau/ui/extensions/ui.extension.add.css","tau/core/termProcessor","tau/models/dataProviders/user/user.model.provider.teams.items","tau/ui/extensions/list/user/ui.extension.list.user.teams.refresh","tau/ui/extensions/list/user/ui.extension.list.user.action.detach","tau/ui/templates/list_/user/ui.template.list.user.teams","tau/models/dataProviders/user/user.model.provider.projects.items","tau/ui/extensions/list/user/ui.extension.list.user.projects.refresh","tau/ui/extensions/list/user/ui.extension.list.user.action.detach","tau/ui/templates/list_/user/ui.template.list.user.projects","tau/ui/templates/property/ui.template.property.title","tau/utils/utils.date"],function(e,t,s,i,a,n,r,o,l,u,c,p,m,d,y,g,h,f,x){return e.extend({init:function(e){this._super(e),this.registerTab("Assignments",{selected:!0,label:"assignments",header:[{type:"label",text:"Open Assignments"}],items:[{type:"container",spinnerConfigForLazy:this.getSpinnerConfigForLazy(),children:[{type:"container",lazy:!0,name:"lazyPlaceholder container",children:[{type:"list.editable",itemsDataProvider:i,extensions:[a,n],multiprojects:!0,views:[{type:"grid.entity"}]}]}]}]}),this.registerTab("Account Settings",{label:"accountSettings",header:[{type:"label",text:"Account Settings"}],items:[{type:"container",spinnerConfigForLazy:this.getSpinnerConfigForLazy(),children:[{type:"container",lazy:!0,name:"lazyPlaceholder container",children:[{type:"user.settings"}]}]}]}),this.registerTab("Teams and Projects",{label:"teams-projects",header:[{type:"label",text:[this.getNames("project"),this.getNames("team")]}],items:[{type:"container",spinnerConfigForLazy:this.getSpinnerConfigForLazy(),children:[{type:"container",lazy:!0,name:"lazyPlaceholder container",children:[{type:"container",layout:"selectable",template:{name:"user.teamprojects.tab",markup:['<div class="tau-teamsProjects-tab">','<div class="tau-half-col" role="left"></div>','<div class="tau-half-col tau-right"  role="right"></div>',"</div>"].join("")},children:[{type:"finder.team.byUser",selector:"[role=right]"},{selector:"[role=right]",type:"list.editable",itemsDataProvider:u,sortable:!1,extensions:[c,p],template:m},{type:"finder.project.byUser",selector:"[role=left]"},{selector:"[role=left]",type:"list.editable",itemsDataProvider:d,sortable:!1,extensions:[y,g],template:h}]}]}]}]})},getTabsAliases:function(){return["Assignments","Account Settings","Teams and Projects"]},getPanelsAliases:function(){return[]},getAdditionalInfoAliases:function(){return[]},getConfig:function(e){var t=e.context.getTerms(),s=e.context,i=s.entity.id,a=s.getLoggedUser(),n=i===a.id||a.isAdministrator;return this.termProcessor=new l(t),{children:[{type:"container",name:"main entity container",layout:"list",cssClass:"main-container tau-user-view",cellsCssClass:["general-info","additional-info"],children:[{type:"breadcrumbs"},{type:"container",layout:"table",children:[{type:"avatar",isEdit:n},{type:"container",name:"main entity container",layout:"list",children:[{type:"container",layout:"table",children:[{type:"property.text",propertyName:"firstName",restoreText:!0,editable:n,placeholderText:"first name",template:f},{type:"property.text",propertyName:"lastName",restoreText:!0,editable:n,placeholderText:"last name",template:f}]},{type:"container",layout:"table",children:[{type:"property.role",propertyName:"role",cssClass:"tau-role",extensions:[o],editable:!0},{type:"property.text",propertyName:"lastLoginDate",cssClass:"tau-last_login_date",extensions:[o],template:{name:"user.lastLoginDate",customFunctions:{format:function(e){return e?x.format.date.short(e):"unknown"}},engine:"jqote2",markup:['<div class="tau-last_login_date">','<span class="property tau-property">','<span class="property-text tau-property__value tau-property__value_margin_right">',"Last login: <%= fn.format(this.text) %>","</span>","</span>","</div>"].join("")}}]}]}]},{type:"container",name:"general info column container",children:[{type:"tabs",cssClass:"tau-tabs",stateName:"generalTab",tabs:this.getTabs(e)}]}]}]}}})});