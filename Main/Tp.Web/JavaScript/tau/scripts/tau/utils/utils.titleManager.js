define(["Underscore","tau/core/class"],function(i,t){var n=t.extend({init:function(t){this.config=i.defaults(t||{},{window:window,delimiter:" ",source:""}),this.config.source=this.config.source||i.asString(this.config.window.document.title)},set:function(t){this.config.window.document.title=i.asString(t)},setTitle:function(t){this.set(i.asString(t)+this.config.delimiter+this.config.source)},restoreDefault:function(){this.set(this.config.source)}});return n});