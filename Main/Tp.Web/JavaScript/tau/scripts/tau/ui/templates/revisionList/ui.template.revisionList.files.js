define(["tau/core/templates-factory","tau/ui/templates/common/ui.template.entityLink"],function(a){var b={name:"revision-list-files",markup:["<tr>",'   <td class="actions"><span>${fileAction}</span></td>','   <td class="diff"></td>','   <td class="files"><a target="_blank" class="vcsViewDisabled" disabled="disabled">${fileName}</a></td>',"</tr>"].join(""),dependencies:["entity-link"]};return a.register(b)})