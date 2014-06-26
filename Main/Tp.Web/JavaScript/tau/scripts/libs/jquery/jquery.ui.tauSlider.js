define(["libs/jquery/jquery.ui"],function(t){function i(t){return t.position().left+t.outerWidth()}var e=function(t,i){return i.offset().left-t};t.widget("ui.tauSlider",t.ui.slider,{_refresh:function(){this.element.removeClass("ui-slider").removeClass("ui-slider-"+this.orientation).removeClass("ui-corner-all"),this._super()},_create:function(){this.handle=this.options.handle,this._super(),this._mouseOffset=0},_rewritePosition:function(t){return t.pageX+=this._mouseOffset,t},_mouseCapture:function(s){var n=s.originalEvent;return t.contains(this.handle[0],n.target)&&(this._mouseOffset=e(n.pageX,this.handle)),this.gridSize={width:i(this.options.grid.last())},this._super(this._rewritePosition(s))},_slide:function(t,i,e){return this._super(t,i,Math.min(this.options.max-this.options.selectionWidth+1,e))},_mouseStop:function(t){return this._mouseOffset=0,this.elementSize=null,this._super(this._rewritePosition(t))},_mouseDown:function(t){return this._super(this._rewritePosition(t))},_mouseMove:function(t){return this._super(this._rewritePosition(t))},_mouseUp:function(t){return this._super(this._rewritePosition(t))},_createHandles:function(){this.handles=this.handle,this.handles.each(function(i){t(this).data("ui-slider-handle-index",i)})},_normValueFromMouse:function(t){if(!this.options.grid)return void this._super();var i,e,s,n,o;return i=this.gridSize.width,e=t.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0),s=e/i,s>1&&(s=1),0>s&&(s=0),"vertical"===this.orientation&&(s=1-s),n=this._valueMax()-this._valueMin()+1,o=this._valueMin()+s*n,this._trimAlignValue(o)},_refreshValue:function(){if(!this.options.grid)return void this._super();var t,i,e,s,n=this.options.range,o=this.options,r=this._animateOff?!1:o.animate,h={};i=this.value(),e=this._valueMin(),s=this.elementSize||{width:this.element.outerWidth()},t=100*this.options.grid.eq(i-e).position().left/s.width,h["horizontal"===this.orientation?"left":"bottom"]=t+"%",this.handle.stop(1,1)[r?"animate":"css"](h,o.animate),"min"===n&&"horizontal"===this.orientation&&this.range.stop(1,1)[r?"animate":"css"]({width:t+"%"},o.animate),"max"===n&&"horizontal"===this.orientation&&this.range[r?"animate":"css"]({width:100-t+"%"},{queue:!1,duration:o.animate}),"min"===n&&"vertical"===this.orientation&&this.range.stop(1,1)[r?"animate":"css"]({height:t+"%"},o.animate),"max"===n&&"vertical"===this.orientation&&this.range[r?"animate":"css"]({height:100-t+"%"},{queue:!1,duration:o.animate})},destroy:function(){this.handles=t(),this._super()},setValueWithoutEvents:function(i){t.Widget.prototype._setOption.apply(this,["value",i]),this._animateOff=!0,this._refreshValue(),this._animateOff=!1}})});