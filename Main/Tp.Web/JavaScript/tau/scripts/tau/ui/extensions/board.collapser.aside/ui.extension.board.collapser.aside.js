define(["Underscore","jQuery","tau/components/extensions/component.extension.base"],function(e,n,t){return t.extend({"bus afterRender":function(e){var t=e.data.element,o=this;t.delegate("[role=collapser]","click",function(){n(this).toggleClass("tau-collapsed"),o.fire("collapser.switched",{})})}})});