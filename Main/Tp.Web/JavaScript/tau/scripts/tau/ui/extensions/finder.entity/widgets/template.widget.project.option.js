define(["tau/core/templates-factory"],function(o){return o.register({name:"finder.entity.project.option",engine:"jqote2",markup:["<% _.forEach(this.items, function(v){ %>",'<div class="drop-down-option i-role-option" data-value="<%! v.value %>">','<% var color = v.label.color || "transparent"; %>','<i class="tau-icon tau-icon_type_color" style="background-color: <%= color %>"></i>','<span class="tau-bubble-txt"><%! v.label.name %></span>',"</div>","<% }); %>"]})});