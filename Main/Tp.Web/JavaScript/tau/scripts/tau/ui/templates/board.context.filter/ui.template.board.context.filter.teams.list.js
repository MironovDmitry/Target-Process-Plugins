define(["tau/core/templates-factory"],function(t){return t.register({name:"board.context.filter.teams.list",engine:"jqote2",markup:['<li class="i-role-item">','<label class="tau-checkbox <% if (this.id == -1){ %>  tau-null-selector <% } %>">','<input type="checkbox" id="content_filter_project_<%= this.id %>" value="<%= this.id %>"',"<% if (this.selected){ %>"," checked","<% } %> ","/>","<i></i>",'<span class="tau-checkbox-label">','<i class="tau-icon tau-icon_type_svg tau-icon_name_<%= this.icon || ""  %>"></i>',"<%! this.name %>","</span>","</label>","<% if (this.isSupportView){ %>",'<i title="Select this team only" class="tau-category-items-selector__selecttrigger tau-icon tau-icon_type_svg tau-icon_name_aim i-role-selecttrigger" data-entity-id="<%! this.id %>" data-entity-type="team"></i>','<i  title="Open this team in a popup" class="tau-category-items-selector__viewtrigger tau-icon tau-icon_type_svg tau-icon_name_newwindow i-role-viewtrigger" data-entity-id="<%! this.id %>" data-entity-type="team"></i>',"<% } %>","</li>"]})});