define(["jQuery","Underscore","libs/d3/d3","tp/reports/chart.behaviour"],function(e,t,r,n){return n.extend({init:function(e){this.handlers=this.initHandlers(e.handlers||[])},data:function(e,t){var n=e.nodes,e=n[0].values.map(function(e){return{x:e.x,dx:e.dx}}),s=r.select(t.placeholder).selectAll("rect.transparent").data(e),a=t.scales.y.domain()[1];s.enter().append("rect").attr("class","transparent"),s.attr("x",function(e){return t.scales.x(e.x)}).attr("y",t.scales.y.range()[1]).attr("width",function(e){return t.scales.width(e.dx)}).attr("height",t.scales.height(a)),s.exit().remove(),this._subscribe(s,["mousemove","mouseover","mouseout"],t)}})});