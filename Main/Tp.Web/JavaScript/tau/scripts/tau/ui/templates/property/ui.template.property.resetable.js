define(["tau/core/templates-factory"],function(e){var t={name:"property-resetable",engine:"jqote2",markup:['<% var title = this.target.actionReset.label || "reset"; %>','<% var offsetStyle = this.suppressOffsetCrossbar ? "" : "tau-clear-filter_margin_left";%>','<span class="i-role-reset tau-clear-filter <%! offsetStyle %>" title="<%! title %>"></span>']};return e.register(t)});