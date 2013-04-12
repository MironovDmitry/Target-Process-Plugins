define(["jQuery","Underscore","libs/d3/d3","tp/reports/chart.behaviour"],function($,_,d3,ChartBehavior){return ChartBehavior.extend({init:function(config){this.handlers=this.initHandlers(config.handlers||[])},data:function(histograms,context){var data=histograms[0].values.map(function(d){return{x:d.x,dx:d.dx}}),bins=d3.select(context.placeholder).selectAll("rect.transparent").data(data),height=context.scales.y.domain()[1];bins.enter().append("rect").attr("class","transparent"),bins.attr("x",function(d){return context.scales.x(d.x)}).attr("y",context.scales.y.range()[1]).attr("width",function(d){return context.scales.width(d.dx)}).attr("height",context.scales.height(height)),bins.exit().remove(),this._subscribe(bins,["mousemove","mouseover","mouseout"],context)}})})