define(["tau/core/templates-factory"],function(t){var e={name:"board.flowHelp.popup",engine:"jqote2",markup:['<div class="tau-flow-steps">',"<% for (var i = 0; i < this.subFlows.length; i++) { %>","    <% var sf = this.subFlows[i]; %>",'    <% var attr = ""; %>','    <% attr += (sf.state === "done")   ? " tau-step-done"   : ""; %>','    <% attr += (sf.state === "active") ? " tau-step-current": ""; %>','    <div class="tau-step <%= attr %>"><%= sf.name %></div>',"<% } %>","</div>"],dependencies:[]};return t.register(e)});