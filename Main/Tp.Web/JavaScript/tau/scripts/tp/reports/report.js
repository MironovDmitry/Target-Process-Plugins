define(["jQuery","tp/reports/plot","tp/reports/burndown/summaryPopup"],function(t,r){var i=function(t){this._ctor(t)};return i.prototype={template:'<div class="burnDownReport _burnDownReport">\n    <span class="tableTitle">Burn Down</span>\n    <div>\n        <div id="report-filter">\n        </div>\n    </div>\n    <div id="report-chart" class="tau-chart-plot">    \n    </div>\n</div>',_ctor:function(i){this.filter=i.filter,this.name=i.name,this.placeholder=t(i.placeholder),this.dataProvider=i.dataProvider,this.plot=new r({charts:i.charts,captions:i.captions,height:i.height,margin:50}),this.contextProvider=i.contextProvider,this.navigator=i.navigator,t(i.charts).on("click",t.proxy(this._chartClick,this))},render:function(){this.contextProvider.onReady(t.proxy(function(){this.placeholder.html(t.tmpl(this.template,{name:this.name})),t(this).trigger("afterInit"),this.plot.placeholder=this.placeholder.find("#report-chart"),this.plot.optimalWidth=.85*t(window).width(),this.filter.initialize({placeholder:this.placeholder.find("#report-filter"),update:t.proxy(this._renderChart,this),dataProvider:this.dataProvider,contextProvider:this.contextProvider})},this))},_renderChart:function(){this._showLoader(),this.dataProvider.initialize(this.filter.getData(),t.proxy(function(){this.placeholder.find("#report-chart").removeClass("loader"),this.plot.render(this.dataProvider),t(this).trigger("afterRender")},this))},_showLoader:function(){this.placeholder.find("#report-chart").addClass("loader")},_chartClick:function(r,i){if(i.data.effort){var e=i.$rect;if(e.data("summaryPopup")&&e.summaryPopup("popup").is(":visible"))return void i.origin.stopPropagation();var o=this,a=this.contextProvider.getTermProcessorForCurrentProject(),n=this.navigator;this.dataProvider.getDetails(i.data,function(s){e.summaryPopup({alignTo:i.$pointer,termProcessor:a,index:i.index,data:s,show:function(){r.target.fadeOut(i.rect)},hide:function(){r.target.fadeIn(i.rect)},navigate:function(t){n.navigate(t)}}).summaryPopup("show"),t(o).trigger("details.afterRender",[e.summaryPopup("popup")])})}}},i});