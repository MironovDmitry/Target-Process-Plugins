define(["tau/core/templates-factory","tau/ui/templates/diagnostics/ui.template.diagnostics.globalListeners.details"],function(t){var e={name:"diagnostics.globalListeners",dependencies:["diagnostics.globalListeners.details"],markup:['<div class="tau-diagnostics-globalListeners">',"<table>","{{each data}}",'<tr class="tau-diagnostics-row">','<td>${count}</td><td>${name}</td><td>{{tmpl(listeners) "diagnostics.globalListeners.details"}}</td>',"</tr>","{{/each}}","</table>","</div>"]};return t.register(e)});