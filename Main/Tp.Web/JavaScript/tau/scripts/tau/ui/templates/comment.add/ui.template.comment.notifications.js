define(["tau/core/templates-factory"],function(e){var t={name:"comment.notifications",engine:"jqote2",markup:['<div class="tau-notification-practices-settings">','<span class="prompt">Notify by email: </span>',"<% if (this.owner){ %>",'<label><input type="checkbox" value="Owner" />Owner</label>',"<% } %>","<% if (this.assigned){ %>",'<label><input type="checkbox" value="Assigned" />Assigned people</label>',"<% } %>","<% if (this.requesters){ %>",'<label><input type="checkbox" value="Requesters" />Requester(s)</label>',"<% } %>","<% if (this.team){ %>",'<label><input type="checkbox" value="Team" />Project Team</label>',"<% } %>","</div>"]};return e.register(t)});