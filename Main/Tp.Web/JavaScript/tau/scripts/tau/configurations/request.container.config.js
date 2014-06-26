define(["Underscore","tau/configurations/baseAssignable.container.config","tau/models/model.extensions","tau/ui/extensions/list/request/extension.related_entities.action.detach","tau/models/dataProviders/request/request.model.provider.requesters.items","tau/ui/extensions/list/testplan/extension.list.editableCells","tau/ui/extensions/list/request/extension.list.entityState","tau/ui/extensions/list/request/extension.requesters.action.add","tau/components/extensions/bubble/extension.bubble.creator","tau/components/extensions/component.creator.extension","tau/ui/extensions/list/request/extension.requesters.action.detach"],function(e,t,i,s,n,r,o,a,u,l,d){return t.extend({init:function(e){this._super(e),this.registerAdditionalInfoItem("Owner",{label:{text:"Owner"},field:{type:"property.owner.request"}}),this.registerAdditionalInfoItem("RequestType",{label:{text:this.getTermName("RequestType")},field:{type:"property.requestType"}}),this.registerAdditionalInfoItem("Source",{label:{text:"Source"},field:{type:"property.requestSource"}}),this.registerTab("Requesters",{label:"requesters",header:[{type:"label",text:"Requesters",countFieldNames:["requesters"]}],items:[{type:"container",lazy:!0,name:"lazyPlaceholder container",children:[{type:"list",sortable:!1,itemsDataProvider:n,extensions:[a,u,l,d],views:[{rowTemplateName:"list-grid-entity__row_requester",type:"grid.entity.requesters"}]}]}]})},getTabsAliases:function(){return["Description","Requesters","Relations","Flow","Time","History"]},getAdditionalInfoAliases:function(){return["Project","Team","Owner","Business Value","IsPrivate","RequestType","Source","CreationDate","StartDate","CompletionDate","PlannedStartDate","PlannedEndDate"]},getEntityQuickAddOptions:function(){return{items:[{entityType:"time",relationName:"times",practices:["Time Tracking"]}]}},getActionsAliases:function(){return["Add Time","Create","Move or Copy","Copy to project","Convert","-----","Old Edit","Print","-----","Delete"]}})});