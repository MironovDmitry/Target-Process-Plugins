define(["Underscore","jQuery","tau/components/extensions/component.extension.base"],function(e,n,a){return a.extend({"bus afterRender":function(n){var a=n.data.element,i=a.find("[role=zoomer]"),o={max:i.data("zoomMax"),min:i.data("zoomMin"),animate:!0,slide:e.bind(this.onSliderSlide,this),change:e.bind(this.onSliderChange,this),value:i.data("zoomValue")};i.slider(o)},onSliderSlide:function(e){n(e.target).slider("option","disabled")&&e.preventDefault()},onSliderChange:function(e,n){var a=this;a.bus.fire("zoom.updated",{value:n.value})},"bus afterRender:last+zoom.provided":function(n){var a=e.values(n)[0].data.element,i=e.values(n)[1].data,o=a.find("[role=zoomer]"),t=o.slider("value");t!=i.value&&o.slider("value",i.value)}})});