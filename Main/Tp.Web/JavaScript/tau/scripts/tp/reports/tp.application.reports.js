define(["Underscore","jQuery","application.creator","tau/services/service.navigator","tp/reports/service.chart.size"],function(e,t,n,r,o){var a="appReports",i=function(r){r._id=e.uniqueId("report_charts_viewer"),r.isBoardEdition=!0;var o=[{pattern:/reports$/,adapter:function(){this.resolve({id:null,entity:"reports"})},type:"tau/components/component.page.reports",host:"tau/components/component.master.empty"},{pattern:/reports\/(\w+)/,adapter:function(e){this.resolve({id:null,entity:"reports",reportType:e})},type:"tau/components/component.page.reports",host:"tau/components/component.master.empty"},{pattern:/(\w+)\/([0-9]+)($|\s|&)/,adapter:function(e,t){this.resolve({id:parseInt(t,10),entity:e,action:"show"})},type:"tau/components/component.page.entity",host:"tau/components/component.master.empty"},{pattern:/(\w+)\/([0-9]+)\/(\w+)[&|]*.*/,adapter:function(e,t,n){this.resolve({id:parseInt(t,10),entity:e,action:n})},type:"tau/components/component.page.entity",host:"tau/components/component.master.empty"}],i={name:"application charts",applicationId:a,routes:o,configurator:r,options:{routing:{silent:!0}},integration:{disableProgressIndicator:!0,showInPopup:!0,keepAlive:!1}};return n.create(i).then(function(e){var n=t.Deferred();return e.on("innerContentRendered",function(e,t){{var n=t.element;n.parents(".i-role-application")}}),e.initialize(i),n.resolve(e),n})},p=function(e,t){var n=e.createChild();n.getExternal().setFakeWindow(),n.registerService("chart.size",new o),n.registerService("navigator",new r(n,{parameterName:a})),n.service("navigator").to("reports/"+t.active),i(n)};return{initialize:p}});