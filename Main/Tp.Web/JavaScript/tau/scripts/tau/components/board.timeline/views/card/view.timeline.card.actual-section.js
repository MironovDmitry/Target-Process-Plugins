define(["Underscore","jQuery","tau/components/board.timeline/views/card/view.timeline.card.section-base"],function(t,e,i){var s=i.extend({init:function(t,e,i){this._super(t,e),this._$section.find(".i-role-card-placeholder").replaceWith(i)},setContent:function(t){this._$section.find(".i-role-card").replaceWith(t)},_prepareSection:function(t){t.css({left:"",width:0}).mousedown(function(t){var i=e(this).offset();taus.track("action",{name:"timeline-actual-part-click",width:e(this).width(),height:e(this).height(),offsetX:t.pageX-i.left,offsetY:t.pageY-i.top})})},_isVisible:function(){return this._model.showActual?!0:this._model.showForecast&&this._model.hasActual?!0:this._model.showForecast&&this._model.hasPlanned&&!this._model.hasActual},_metrics:function(){return{left:this._zeroIfNaN(this._getLeft()),width:this._width()}},_getLeft:function(){return this._model.showActual?this._model.actualLeft:this._model.showForecast&&this._model.hasPlanned&&!this._model.hasActual?this._model.plannedLeft:this._model.forecastLeft},_width:function(){var t,e;return this._model.showForecast&&this._model.hasPlanned&&!this._model.hasActual?(t=this._model.forecastLeft-this._zeroIfNaN(this._model.plannedLeft),e=this._model.forecastWidth):(t=this._model.actualWidth,e=this._model.showForecast?this._model.forecastWidth:0),this._zeroIfNaN(t)+Math.max(e,0)}});return s});