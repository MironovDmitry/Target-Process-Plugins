define(["Underscore"],function(_){var a=function(a,b){var c=_.extend({},a);return _.each(_.keys(a),function(a){b.hasOwnProperty(a)||delete c[a]}),c};window.included=QUnit.included=function(b,c,d){var e=a(_.extend({},b),c),f=QUnit.equiv(e,c);QUnit.push(f,e,c,d)}})