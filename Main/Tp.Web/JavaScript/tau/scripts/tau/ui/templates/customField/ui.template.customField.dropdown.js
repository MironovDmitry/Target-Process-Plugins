define(["tau/core/templates-factory"],function(e){var t={name:"customField-dropdown",engine:"jqote2",markup:['<% var className = this.value ? "" : "ui-customfield_empty_true"; %>','<div class="ui-customfield ui-customfield-dropdown <%= className %>">',"<table>","<tbody>","<tr>",'<td class="ui-customfield__label"><%= this.name %></td>','<td class="ui_custom_field_value_container">','<div class="ui-customfield__value ui-customfield__value_margin_right"><%! this.value %></div>',"<% if (this.actionReset && this.actionReset.enable) { %>",'<% var title = this.actionReset.label || "reset"; %>','<span class="i-role-reset tau-clear-filter tau-clear-filter_margin_left" title="<%! title %>"></span>',"<% } %>","</td>","</tr>","</tbody>","</table>","</div>"]};return e.register(t)});