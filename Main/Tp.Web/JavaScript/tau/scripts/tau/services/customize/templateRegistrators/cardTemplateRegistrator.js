define(["jQuery","Underscore","tau/core/class","tau/core/templates-factory","tau/services/customize/templateRegistrators/templateRegistrator.functions"],function(t,e,a,n,s){return a.extend({registerUnit:function(t){var a={name:"unit."+t.id,engine:"jqote2",customFunctions:e.extend({createClassName:function(a){var n=["i-role-card-content-"+t.id,this.unitClass(a),e.isFunction(t.classId)?t.classId(a.data):t.classId];return n.join(" ")},_hideIf:function(t){return!t.data||this.hideIf(t.data)}},t.template.customFunctions),markup:e.flatten(["<% if (!fn._hideIf(this)) { %>",'<div class="<%= fn.createClassName(this) %>" ',"<%= fn.unitData(this) %> ",s.getDataAttributes(t.data),">",t.template.markup||t.template,"</div>","<% } %>"])};return n.register(a),{card:a.name}}})});