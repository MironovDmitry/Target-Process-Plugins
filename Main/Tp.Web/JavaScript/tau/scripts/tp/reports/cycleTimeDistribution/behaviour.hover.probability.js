define(["jQuery","libs/d3/d3","tp/reports/cycleTimeDistribution/chart.axes.format"],function($,d3,format){function getHtmlMouseXPosition($element){return d3.event.pageX-$element.offset().left}function getSVGMouseXPosition(element){return d3.event.pageX-$(element).closest("div").offset().left}function line(svg){return{render:function(p1,p2){var path=svg.selectAll("path.hover").data([[p1,p2]]);path.enter().insert("path",":first-child").attr("class","hover"),path.attr("stroke","black").attr("d",d3.svg.line())}}}function tooltip(container,html){return{render:function(position,data){var tooltip=container.selectAll("div.hover").data([position]);tooltip.enter().append("div").attr("class","hover tau-chart-tooltip"),tooltip.exit().remove(),tooltip.style("position","absolute").style("left",function(d){return d[0]+"px"}).style("top",function(d){return d[1]+"px"}).attr("class","hover tau-chart-tooltip").html(html(data))}}}function html(context){return function(d){return["<span>probability to complete entities in "+format.days(d.x)+": </span>"].concat(d.values.map(function(d){return'<span class="'+context.scales.fill(d.fill)+'">'+format.y(d.y+d.y0)+" </span>"})).join("")}}return{create:function(config){return{mousemove:function(d,context){var $div=$(this).closest("div"),div=d3.select($div[0]),chart=d3.select($(this).closest(".chart")[0]),probability=div.selectAll(".probability.data-x-"+d.x),x=getSVGMouseXPosition(this),p1=[x,context.scales.y.range()[0]],p2=[x,context.scales.y.range()[1]-20];line(chart).render(p1,p2),tooltip(div,html(context)).render([getHtmlMouseXPosition($div),39],probability.datum())},mouseout:function(d){var div=$(this).closest("div")[0],path=d3.select(div).selectAll("path.hover, div.hover").remove()}}}}})