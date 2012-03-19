define(["Underscore","tau/core/class","tau/rules/auto-include-beforeSave"],function(_,a,b){return a.extend({init:function(a){var c=this;c.store=a.store||{},a.rulesImpl=a.rulesImpl||{},_.extend(c,b),_.extend(c,{name:"rules engine"}),_(a.rulesImpl).each(function(a){_.extend(c,a)}),c.register(a.rules||[])},register:function(a){var c=this;_.isArray(a)||(a=[a]),_(a).each(function(a){_.defaults(a,{name:_(b).keys()[0],fields:[],changes:[]});if(!a.hasOwnProperty("type"))throw"type should be configured for rule";if(a.fields.length===0)return;_.each(a.changes,function(b){var d=function(b){c[a.name](b,a)},e=a.name.split(" ");c.store.on({eventName:e[e.length-1],type:a.type,listener:c,hasChanges:[b]},d)})})},registerRule:function(a){var b=this;_.defaults(a,{fields:[],changes:[]});if(!a.hasOwnProperty("name"))throw'"name" field should be configured for rule';if(!a.hasOwnProperty("type"))throw'"type" field should be configured for rule';if(!b.hasOwnProperty(a.name))throw"unknown rule name ["+a.name+"]";b[a.name].call(b,a)},destroy:function(){var a=this.store;delete this.store,a.unbind(this)}})})