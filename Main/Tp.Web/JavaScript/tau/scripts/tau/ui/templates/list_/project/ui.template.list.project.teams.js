define(["tau/core/templates-factory"],function(templates){var config={name:"list.project.teams",engine:"jqote2",markup:['<div class="tau-team-control">',"<% if (this.items.length){ %>",'<table class="tau-team-info">',"<colgroup>",'<col class="tau-team">','<col class="tau-us-progress">','<col class="tau-us-total">','<col class="tau-bug-progress">','<col class="tau-bug-total">','<col class="tau-actions tau-nonprintable">',"</colgroup>","<thead>","<tr>","<th>Team</th>",'<th><i class="tau-entity-icon tau-userstory">U</i>User&nbsp;Stories</th>',"<th>Done / Open</th>",'<th><i class="tau-entity-icon tau-bug">B</i>Bugs</th>',"<th>Done / Open</th>",'<th class="tau-nonprintable"></th>',"</tr>","</thead>","<tbody>","<% _.forEach(this.items, function(item){ %>",'<tr class="i-role-item" role="item" data-entity-id="<%= item.id %>">',"<td>",'<div class="tau-team">',"<h3>",'<a href="<%= item.uri %>">','<i class="tau-icon tau-icon_type_svg tau-icon_name_<%= item.team.icon || ""  %>"></i>',"<%! item.team.name %>","</a>","</h3>",'<span class="tau-team-count"><%= item.membersCount %></span>','<div class="tau-team-members">',"<div>",'<a href="<%= item.membersUri %>" title="Go to team members">',"<% _.forEach(item.members, function(user){ %>",'<img src="<%= user.avatarUri %>20">',"<% }); %>","</a>","</div>","<% if (item.membersMore) { %>",'<a class="tau-more" href="<%= item.membersUri %>"  title="Go to team members">','<img src="<%= item.appPath %>/JavaScript/tau/css/images/more-members.gif" class="tau-more">',"</a>","<% } %>","</div>","</div>","</td>",'<td  title="User Stories sparkline provides an overview of progress over the last 16 weeks. The numbers shown are: a maximum of user stories done/added at any given week out of those 16, and done/added in the current calendar week (on the right).">',"<svg class=\"tau-sparkline i-role-sparkline\" data-source='<%= JSON.stringify(item.userStoriesSparkline) %>'></svg>","</td>","<td>",'<div class="tau-fraction tau-userstory">','<span title="done"><%= item.team.closedUsCount %></span><br>','<b title="open"><%= item.team.openUsCount %></b>',"</div>","</td>",'<td title="Bugs sparkline provides an overview of progress over the last 16 weeks. The numbers shown are: a maximum of bugs fixed/added at any given week out of those 16, and fixed/added in the current calendar week (on the right).">',"<svg class=\"tau-sparkline tau-sparkline-bugs i-role-sparkline\" data-source='<%= JSON.stringify(item.bugsSparkline) %>'></svg>","</td>","<td>",'<div class="tau-fraction tau-bug">','<span title="done"><%= item.team.closedBugsCount %></span><br>','<b title="open"><%= item.team.openBugsCount %></b>',"</div>","</td>",'<td class="tau-nonprintable">','<button class="tau-btn tau-attention" role="action-detach" type="button" ',"data-confirm-message=\"Are you sure you want to remove team '<%! item.team.name %>' from this project?\">Unassign</button>","</td>","</tr>","<% }); %>","</tbody>","</table>","<% }else{ %>",'<div class="tau-message">This project has no teams</div>',"<% }  %>","</div>"]};return templates.register(config)})