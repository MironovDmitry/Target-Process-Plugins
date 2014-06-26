define(["tau/configurations/baseContainable.container.config","tau/models/model.extensions","tau/models/dataProviders/release/release.model.provider.iterations.items","tau/models/dataProviders/release/release.model.provider.iterations.groups","tau/ui/extensions/list/iterations/extension.list.release_iterations","tau/models/dataProviders/release/release.model.provider.user_stories_bugs.items","tau/models/dataProviders/release/release.model.provider.user_stories_bugs.groups","tau/models/dataProviders/release/release.model.provider.features.items","tau/models/dataProviders/entity/entity.model.provider.bug.items","tau/models/dataProviders/release/release.model.provider.user_stories.items","tau/ui/extensions/list/request/extension.list.entityState","tau/ui/extensions/list/external.refresh.extension"],function(e,t,r,i,s,a,n,o,l,d,u){return e.extend({init:function(e){this._super(e),this.registerPanel("Progress Bar",{type:"release.progressBar"}),this.registerTab("Iterations",{practices:["Iterations"],label:"iterations",header:[{type:"label",text:this.getNames("iteration"),countFieldNames:["iterations"]}],items:[{type:"container",spinnerConfigForLazy:this.getSpinnerConfigForLazy(),practices:["Iterations"],children:[{type:"container",lazy:!0,name:"lazyPlaceholder container",practices:["Iterations"],children:[{practices:["Iterations"],type:"list",itemsDataProvider:r,groupsDataProvider:i,groupBy:"iteration.id",extensions:[s],externalRefreshEvents:["iteration.items.added"],views:[{type:"grid.entity",group:{dataIndex:"id"}}]}]}]}]});var t=this;this.registerTab("User Stories",{label:"userStories",header:[{type:"label",text:t.getNames("userStory"),countFieldNames:["userStories"]}],items:[{type:"container",spinnerConfigForLazy:this.getSpinnerConfigForLazy(),children:[{type:"container",lazy:!0,name:"lazyPlaceholder container",children:[{type:"quick.add",printable:!1,property:"release",entityType:"userStory",evictProperties:["userStories","userStories-count"],label:"Add "+t.getNames("UserStory")},{type:"list.editable",externalRefreshEvents:["userStory.items.added"],itemsDataProvider:d,views:[{type:"grid.entity"}],extensions:[u]}]}]}]}),this.registerTab("Bugs",{practices:["Bug Tracking"],label:"bugs",header:[{type:"label",text:t.getNames("bug"),countFieldNames:["bugs"]}],items:[{type:"container",spinnerConfigForLazy:this.getSpinnerConfigForLazy(),practices:["Bug Tracking"],children:[{type:"container",lazy:!0,name:"lazyPlaceholder container",practices:["Bug Tracking"],children:[{type:"quick.add",printable:!1,property:"release",entityType:"bug",evictProperties:["bugs","bugs-count"],label:"Add "+t.getNames("Bug"),practices:["Bug Tracking"]},{type:"list.editable",itemsDataProvider:l,externalRefreshEvents:["bug.items.added"],views:[{type:"grid.entity"}],practices:["Bug Tracking"],extensions:[u]}]}]}]}),this.registerTab("Features",{practices:["Requirements"],label:"features",header:[{type:"label",text:t.getNames("feature"),countFieldNames:["features"]}],items:[{type:"container",spinnerConfigForLazy:this.getSpinnerConfigForLazy(),practices:["Requirements"],children:[{type:"container",lazy:!0,name:"lazyPlaceholder container",practices:["Requirements"],children:[{type:"quick.add",printable:!1,property:"release",entityType:"feature",evictProperties:["features","features-count"],label:"Add "+t.getNames("Feature"),practices:["Requirements"]},{practices:["Requirements"],type:"list.editable",externalRefreshEvents:["feature.items.added"],itemsDataProvider:o,views:[{type:"grid.entity"}]}]}]}]}),this.registerTab("Release Notes",{label:"notes",header:[{type:"label",text:"Notes"}],items:[{type:"container",spinnerConfigForLazy:this.getSpinnerConfigForLazy(),children:[{type:"container",lazy:!0,name:"lazyPlaceholder container",children:[{type:"releaseNotes"}]}]}]})},getAdditionalInfoAliases:function(){return["Project","StartDate","FinishDate","Release Assigned Effort"]},getPanelsAliases:function(){return["Look Switcher","Diagnostic","Progress Bar","Additional Info","Custom Fields"]},getActionsAliases:function(){return["Add Iteration","-add-","Old Edit","Print","-----","Delete"]},getEntityQuickAddOptions:function(){return{items:[{entityType:"iteration",relationName:"iterations",practices:["Iterations"]},{entityType:"feature",relationName:"features",practices:["Requirements"]},{entityType:"userstory",relationName:"userStories"},{entityType:"bug",relationName:"bugs",practices:["Bug Tracking"]}]}},getTabsAliases:function(){return["Description","Iterations","User Stories","Bugs","Features","Release Notes","Relations","Time","History"]}})});