define(["Underscore","tau/components/component.property.bool"],function(_,a){return{create:function(b){return b=_.clone(b||{}),b.propertyName="isPrivate",b.editable=!0,a.create(b)}}})