define(["Underscore","tau/components/component.creator","tau/models/model.property.bool","tau/models/model.property.editable","tau/components/extensions/property/extension.property.refresher","tau/components/extensions/property/extension.property.bool.editable","tau/ui/templates/property/ui.template.property.bool"],function(e,t,o,r,n,p,a){return{create:function(s){var l=e.concat([s.extensions,n]);s.editable===!0&&(l=e.concat([l,p,r]));var c={ModelType:o,template:s.template||a,extensions:l};return t.create(c,s)}}});