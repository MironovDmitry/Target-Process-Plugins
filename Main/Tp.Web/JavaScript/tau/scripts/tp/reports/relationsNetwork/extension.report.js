define(["Underscore","jQuery","libs/d3/d3","tau/components/extensions/component.extension.base","tp/reports/chart.plot","tp/reports/relationsNetwork/chart.network","tp/reports/relationsNetwork/chart.scales","tau/ui/templates/board.plus/customized/ui.template.boardplus.default.card.customized","tp/reports/relationsNetwork/chart.network.layout","tp/reports/relationsNetwork/behaviour.network.popup","tp/reports/relationsNetwork/behaviour.focus"],function(e,t,r,o,a,n,s,i,l,d,u){return o.extend({"bus configurator.ready:last + afterRender":function(e,r,o){var i=new n({templateFactory:r.getTemplateFactory(),handlers:[d.create({navigator:r.service("navigator")}),u]}),l=r.service("chart.size"),c=new a({scales:new s,placeholder:o.element.find(".tau-chart-plot").get(0),axes:[],size:{size:function(e){var t=l.size(e);return{width:t.width/.9,height:t.height}}},charts:[i]});t(i).on("afterRender",function(){c.loading(!1)}),t(c).on("nodata",function(){c.loading(!1),o.element.find(".tau-chart-box").hide()}),this.fire("plot.ready",c)},"bus data.ready":function(e,t){t.metaData.hasMore&&alert("There are more items to show.\n\nOne can only see up to 100 items at a time. You might want to narrow down your filter settings.")},"bus plot.ready:last + error":function(e,t){t.loading(!1)},"bus plot.ready:last + beforeLoad":function(e,t){t.loading(!0)},"bus plot.ready:last + nodes.ready":function(e,t,r){t.data(r),this.fire("plot.afterRender",t)}})});