define(["Underscore","jQuery","tau/core/extension.base"],function(e,t,a){return a.extend({"bus configurator.ready:last + template.bind":function(e,t,a){var n=a.name,r=a.data,i=a.config||{};a.element=t.getTemplateFactory().get(n).bind(i,r),this.fire("template."+n+".bound",a)},"bus configurator.ready:last + template.pure.bind":function(e,t,a){var n=a.name,r=a.data,i=a.config||{};a.html=t.getTemplateFactory().get(n).bindPure(i,r),this.fire("template."+n+".pure.bound",a)},"bus configurator.ready:last + template.multiply.pure.bind":function(t,a,n){var r=n.name,i=n.arrayData,u=n.config||{},o={},l=a.getTemplateFactory().get(r);o.items=e.map(i,function(e){return{html:l.bindPure(u,e),data:e}}),this.fire("template.multiply."+r+".pure.bound",o)}})});