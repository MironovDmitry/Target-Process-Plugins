define(["tau/core/templates-factory"],function(o){var t={name:"state.project.option",engine:"jqote2",markup:['<div role="option" data-id="<%! this.id %>" data-project-name="<%! this.name %>" class="drop-down-option drop-down-option-project  i-role-option" <% if (this.description) { %> title=<%! this.description %> <% } %> >','<span class="drop-down-option__prefix">',"<% if (this.color) { %>",'<i style="background-color: <%! this.color %>;" class="tau-icon tau-icon_type_color"></i>',"<% } else { %>",'<i class="tau-icon tau-icon_type_color tau-icon_name_empty "></i>',"<% } %>","</span>",'<span class="drop-down-option__text i-role-optiontext"><%! this.name %></span>',"</div>"]};return o.register(t)});