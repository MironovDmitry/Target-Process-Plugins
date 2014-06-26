define(["tau/core/templates-factory","tau/ui/templates/board.context.filter/ui.template.board.context.filter.projects.list","tau/ui/templates/finder.project/ui.template.finder.project.add.form"],function(t){var a={name:"finder.project",engine:"jqote2",markup:['<div class="tau-team-control">','<div class="tau-actions i-role-tabheaders">','<div class="tau-assign-btn i-role-tabheader <% if (this.activeTab == "assign"){ %> tau-active <% } %>" data-tab="assign">',"<span></span>Assign to Project","</div>","<i>or</i>",'<div class="tau-new-project i-role-tabheader <% if (this.activeTab == "add"){ %> tau-active <% } %>" data-tab="add">',"<span></span>New project","</div>","</div>",'<div class="tau-tab-content">','<div class="tau-tab-pane tau-teams-list <% if (this.showSearch) { %>tau-teams-list_use_filter<% } %> i-role-tab-assign <% if (this.activeTab == "assign"){ %> tau-active <% } %> ">',"<% if (this.showSearch) { %>",'<div class="tau-search-team">','<span class="tau-inline-group tau-search">','<input name="filter" type="text" class="tau-in-text" placeholder="Search Projects" />','<button type="button" class="tau-btn tau-search"></button>',"</span>",'<i class="tau-pointer"></i>',"</div>","<% } %>",'<div class="tau-existing-team-holder">','<div class="tau-existing-team i-role-section-projects <% if (!this.projects.length) { %>tau-empty<% } %>">','<div class="tau-button-wrap">','<button class="tau-btn tau-primary" role="action-submit" type="button">Assign</button>',"</div>",'<ul class="tau-project-list tau-existing-team-list_cols_3 i-role-list">','<%= fn.sub("board.context.filter.projects.list", this.projects) %>',"</ul>",'<div class="tau-existing-team__message" data-text-nofound="No such project found" data-text-noitems="No available projects"></div>',"</div>","</div>","</div>",'<div class="tau-tab-pane tau-new-entity-holder  i-role-tab-add  <% if (this.activeTab == "add"){ %> tau-active <% } %> ">','<%= fn.sub("finder.project.add.form", this) %>',"</div>","</div>","</div>"]};return t.register(a)});