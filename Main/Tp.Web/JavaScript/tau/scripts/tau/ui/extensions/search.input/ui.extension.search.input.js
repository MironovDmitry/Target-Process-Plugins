define(["jQuery","tau/core/extension.base","tau/services/service.search"],function($,ExtensionBase,SearchServiceClass){return ExtensionBase.extend({loadSearchSettingsData:function(configurator){var x=this;return x.$d||(x.$d=$.Deferred(),configurator.getStore().get("entityType",{fields:["id","name"],list:!0}).done(function(r){var entityTypes=r[0].data;x.$d.resolve({entityTypes:entityTypes})})),x.$d},bindSearchSettingsTemplate:function(configurator,data){return configurator.getTemplateFactory().register({name:"search-input-settings",engine:"jqote2",markup:["<h3>Advanced search</h3>",'<div class="tau-line">','<select class="tau-select i-role-entity-types-filter">','<option value=""<% if (!this.params.entityTypeId) { %> selected<% } %>>Any entities</option>',"<% for(var i = 0; i < this.entityTypes.length; i++) { %>",'<option value="<%= this.entityTypes[i].id %>"<% if (this.entityTypes[i].id == this.params.entityTypeId) { %> selected<% } %>>',"<%= this.entityTypes[i].name %>","</option>","<% } %>","</select>","</div>",'<div class="tau-line">','<label class="tau-checkbox">','<input type="checkbox" class="i-role-all-projects-flag"<% if (this.params.isAllProjects) { %> checked="checked"<% } %>>',"<i></i><span>All projects</span>","</label>","</div>"]}).get().bind({},data)},setupSearchSettings:function($node,configurator){var self=this,searchServiceInstance=configurator.service("search"),onArrowPositionConfig=function(config){config.at="right bottom",config.my="center top",config.offset="-46 0"},onPositionConfig=function(config){config.at="right bottom",config.my="center top",config.offset="-100 5"},targetSelector=".tau-search:not(input,button)";$node.find(targetSelector).tauBubble({content:$("<span>Loading...</span>"),className:"tau-bubble-search",onArrowPositionConfig:onArrowPositionConfig,onPositionConfig:onPositionConfig,onShow:function(content){self.loadSearchSettingsData(configurator).done(function(d){d.params=searchServiceInstance.params().get();var $filters=self.bindSearchSettingsTemplate(configurator,d);content.find("[role=content]").html($filters)}),content.on("change",".i-role-entity-types-filter",function(e){var $target=$(e.target),v=$target.val();searchServiceInstance.params().set("entityTypeId",v?v:null)}),content.on("change",".i-role-entity-states-filter",function(e){var $target=$(e.target),v=$target.val();searchServiceInstance.params().set("entityStateIds",v?[v]:[])}),content.on("change",".i-role-all-projects-flag",function(e){var $target=$(e.target);searchServiceInstance.params().set("isAllProjects",$target.prop("checked"))})},onHide:function(content){content.off("change")}})},setupSearchTrigger:function($node,configurator){$node.find(".i-role-search-trigger").click(function(e){e.preventDefault(),configurator.service("search").params().set("searchString",$node.find(".i-role-search-string").val());var req=configurator.getRequireLoader();req(["all.components"],function(){req(["tau/components/component.application.generic","tau/components/extensions/comet/extension.comet.rest"],function(appComponent,CometExtension){var APP_ID="sp",external=configurator.getExternal(),d={};d[APP_ID]="search";var hashParams=external.hashParams(),newHashParams=_.extend(hashParams,d);external.applyHashObject(newHashParams,!0),configurator._id=_.uniqueId("search_results_viewer"),configurator.isBoardEdition=!0;var ROUTING_PATTERNS=[{pattern:/search/,adapter:function(){var ext=configurator.getExternal(),hashParams=ext.hashParams();this.resolve({id:null,entity:"search",searchArgs:hashParams})},type:"tau/components/component.page.search",host:"tau/components/component.master.empty"},{pattern:/(\w+)\/([0-9]+)($|\s|&)/,adapter:function(entityType,entityId,tail){this.resolve({id:parseInt(entityId),entity:entityType,action:"show"})},type:"tau/components/component.page.entity",host:"tau/components/component.master.empty"},{pattern:/(\w+)\/([0-9]+)\/(\w+)[&|]*.*/,adapter:function(entityType,entityId,action){this.resolve({id:parseInt(entityId),entity:entityType,action:action})},type:"tau/components/component.page.entity",host:"tau/components/component.master.empty"}],integration={showInPopup:!0,keepAlive:!1},appConfig={name:"application search",applicationId:APP_ID,pageType:"search",pageId:"",routes:ROUTING_PATTERNS,configurator:configurator,routing:{silent:!0},integration:integration,options:{integration:integration}},isCometFeatureEnabled=configurator.getFeaturesService().isEnabled("comet.notifications");isCometFeatureEnabled&&(appConfig.extensions=[CometExtension]);var appBus=appComponent.create(appConfig);appBus.on("beforeInit",function(e){var self=this,cfg=e.data.config;cfg.applicationId=APP_ID,cfg.routing={silent:!0};var configurator=cfg.context.configurator;self.fire("configurator.ready",configurator),self.fire("options.ready",cfg)}),appBus.on("contentRendered",function(e){var $el=e.data.element;setTimeout(function(){$el.parent(".ui-popup").addClass("tau-search-popup")},200)}),appBus.initialize(appConfig)})})})},"bus beforeInit":function(){this.fire("dataBind",{})},"bus afterInit + afterRender":function(e,init,render){var $node=render.element,searchSettings={searchString:"",entityTypeId:null,entityStateIds:[],isAllProjects:!1},parentConfigurator=init.config.context.configurator,searchViewConfigurator=parentConfigurator.createChild();searchViewConfigurator.getExternal().setFakeWindow();var searchServiceInstance=new SearchServiceClass({storage:searchSettings,configurator:searchViewConfigurator});searchViewConfigurator.registerService("search",searchServiceInstance),this.setupSearchSettings($node,searchViewConfigurator),this.setupSearchTrigger($node,searchViewConfigurator)}})})