define(["tau/core/templates-factory"],function(a){var e={name:"auditHistory.record.changes",engine:"jqote2",markup:['<div class="tau-updates i-role-changes" style="display: none">',"<% if (this.changes.length) {%>","<% _.each(this.changes, function(change) { %>",'<div class="tau-txt">',"<b><%! change.fieldName%></b>","<% if (change.oldValue) { %>","<% if (change.toBeEncoded) { %>",' changed from <span class="tau-old-data"><%! change.oldValue%></span> to ',"<% } else { %>",' changed from <span class="tau-old-data"><%= change.oldValue%></span> to ',"<% } %>","<% } else { %>",": ","<% } %>","<% if (change.toBeEncoded) { %>",'<span class="tau-new-data"><%! change.newValue %></span><br/>',"<% } else { %>",'<span class="tau-new-data"><%= change.newValue %></span><br/>',"<% } %>","</div>","<% }); %>","<% } else { %>",'<div class="tau-txt"><b>no details...</b></div>',"<% } %>","</div>"]};return a.register(e)});