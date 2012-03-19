define(["tau/core/templates-factory","tau/ui/templates/timeList/ui.template.timeList.time"],function(a){var b={name:"time-list",options:{contentSelector:".time-list"},markup:['<div class="ui-timeList-content">','<table class="ui-table box time-list"{{if items.length === 0}} style="display:none"{{/if}}>',"<thead>",'   <tr class="head-row">','       <th class="header-cell">Date</th>','       <th class="header-cell">Time Spent</th>','       <th class="header-cell">Time Remain</th>','       <th class="header-cell">Description</th>','       <th class="header-cell">Work On</th>','       <th class="header-cell">Person</th>','       <th class="header-cell edit-time hidden"></th>','       <th class="header-cell delete-time hidden"></th>',"   </tr>","</thead>","<tbody>",'    {{tmpl(items) "time-list-time"}}',"</tbody>","</table>","</div>"].join(""),dependencies:["time-list-time"]};return a.register(b)})