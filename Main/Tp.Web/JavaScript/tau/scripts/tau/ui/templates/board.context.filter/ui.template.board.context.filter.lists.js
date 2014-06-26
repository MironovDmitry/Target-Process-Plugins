define(["tau/core/templates-factory","tau/ui/templates/board.context.filter/ui.template.board.context.filter.projects.list","tau/ui/templates/finder.project/ui.template.finder.project.add.form","tau/ui/templates/board.context.filter/ui.template.board.context.filter.teams.list","tau/ui/templates/finder.team/ui.template.finder.team.add.form"],function(t){var e={name:"board.context.filter.lists",engine:"jqote2",markup:['<div class="tau-teams-projects-manager i-role-popupcontent">',"<%var hideSearch = this.showSearch === true ? false : (this.teams.length < 25 && this.projects.length < 25);%>",'<section class="tau-teams-projects-search" <% if (hideSearch){ %>style="display:none"<% } %> >','<span class="tau-inline-group tau-search">','<input name="filter" type="text" placeholder="Search Projects and Teams" class="tau-in-text">','<button class="tau-btn tau-search" type="button"></button>',"</span>","</section>","<% if (this.showTeams !== false){ %>",'<section class="tau-managed-category <% if (this.teams.length == (this.canAddTeams === false ? 0 : 1)){ %>tau-managed-category_isempty_true tau-no-team<% } %> tau-teams i-role-section-teams">',"<header>",'<label class="tau-checkbox i-role-select-all-item">','<input <%if (this.checkedAllTeam) {%>checked<%}%> type="checkbox" value="">',"<i></i>",'<span class="tau-checkbox-label">Teams</span>',"</label>","<% if (this.canAddTeams !== false) { %>",'<button class="tau-add i-role-formtrigger" type="button">New team</button>',"<% } %>","</header>","<% if (this.canAddTeams !== false) { %>",'<%= fn.sub("finder.team.add.form", this) %>',"<% } %>",'<ul class="tau-category-items-selector i-role-list">','<%= fn.sub("board.context.filter.teams.list", this.teams) %>',"</ul>","<% if (this.canAddTeams !== false) { %>",'<div class="tau-no-message">','<div class="tau-img"></div>',"<p>Team is a group of people working together toward a common vision. Teams can work on projects.</p>",'<div class="tau-btn-wrap"><button class="tau-btn tau-success i-role-formtrigger" type="button">Create team</button></div>',"</div>","<% } %>",'<div class="tau-managed-category__message tau-managed-category__message_not-found" data-text-nofound="No such team found" data-text-noitems="No available teams"></div>','<div class="tau-managed-category__message tau-managed-category__message_isempty">You need to have some teams for custom sharing.</div>',"</section>","<% }%>","<% if (this.showProjects !== false){ %>",'<section class="tau-managed-category <% if (this.projects.length == (this.canAddProjects === false ? 0 : 1)){ %>tau-managed-category_isempty_true tau-no-project<% } %> tau-projects i-role-section-projects">',"<header>",'<label class="tau-checkbox i-role-select-all-item">','<input <%if (this.checkedAllProject) {%>checked<%}%> type="checkbox">',"<i></i>",'<span class="tau-checkbox-label">Projects</span>',"</label>","<% if (this.canAddProjects !== false) { %>",'<button class="tau-add i-role-formtrigger" type="button">New project</button>',"<% } %>","</header>","<% if (this.canAddProjects !== false) { %>",'<%= fn.sub("finder.project.add.form", this) %>',"<% } %>",'<ul class="tau-category-items-selector i-role-list">','<%= fn.sub("board.context.filter.projects.list", this.projects) %>',"</ul>","<% if (this.canAddProjects !== false) { %>",'<div class="tau-no-message">','<div class="tau-img"></div>',"<p>You usually need a project to deliver results. Projects hold all the work that needs to be done.</p>",'<div class="tau-btn-wrap"><button class="tau-btn tau-success i-role-formtrigger" type="submit">Create project</button></div>',"</div>","<% } %>",'<div class="tau-managed-category__message tau-managed-category__message_not-found" data-text-nofound="No such project found" data-text-noitems="No available projects"></div>','<div class="tau-managed-category__message tau-managed-category__message_isempty">You need to have some projects for custom sharing.</div>',"</section>","<% }%>","<% if (this.isEmailNotificationsEnabled){ %>",'<section class="tau-board-send-notification">','<button class="tau-btn tau-board-send-notification-submit i-role-action-bord-access-notify" role="action-bord-access-notify" type="button">Send Notification</button>',"</section>","<% } %>",'<section class="tau-teams-projects-updater <% if (this.teams.length > 1 || this.projects.length > 1){ %> tau-teams-projects-updater_state_enabled<% } %>">','<button class="tau-btn tau-primary tau-teams-projects-submit i-role-action-submit" role="action-submit" type="button">','<%= (this.submitLabel || "Show") %>',"</section>","</div>"],dependencies:[]};return t.register(e)});