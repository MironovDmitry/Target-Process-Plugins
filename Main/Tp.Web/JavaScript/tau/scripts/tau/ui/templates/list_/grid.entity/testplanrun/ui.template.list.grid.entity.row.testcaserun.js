define(["tau/core/templates-factory","tau/ui/templates/list_/grid.entity/ui.template.cell.progress","tau/ui/templates/list_/grid.entity/ui.template.cell.assignments","tau/ui/templates/list_/grid.entity/ui.template.cell.name","tau/ui/templates/assignmentsList/ui.template.assignments.mini","tau/ui/templates/property.effort/ui.template.property.effort.content"],function(t){var e={name:"list-grid-entity__rowtestcaserun",markup:["",'<li class="tau-list__list__item tau-list__list__item-testcaserun" role="item">','<table class="tau-list__table">',"<tbody>",'<tr class="i-item-${testcase.id} tau-list__table__row">','<td class="tau-list__table__cell tau-list__table__cell-dragdrop"  role="sortable-handler" ><div class="dragdrop_indicator"></div></td>','<td class="tau-list__table__cell tau-list__table__cell-id">','   <a class="tau-entitylink" href="${testcase.url}" title="${testcase.name}"><em class="ui-type-icon ui-type-icon-testcase">${testcase.id}</em></a>',"</td>",'<td class="tau-list__table__cell tau-list__table__cell-name">','{{tmpl($item.data.testcase) "cell-name"}}',"</td>",'<td class="tau-list__table__cell tau-list__table__cell-priority">','<span class="tau-list-priority-${testcase.priority.kind}" runas="property.priority" data-context:general:id="${testcase.id}" data-context:general:entity-type:name="${testcase.__type}">',"${testcase.priority.name}","</span>","</td>",'<td class="tau-list__table__cell tau-list__table__cell-laststatus">',"<div>",'<div class="ui-status {{if passed === true}}ui-status_type_passed green{{/if}}{{if passed === false}}ui-status_type_failed red{{/if}}{{if passed === null}}ui-status_type_na grey{{/if}}">',"{{if runDate !== null}}","{{if passed === true}}","Passed","{{/if}}","{{if passed === false}}","Failed","{{/if}}","{{if passed === null}}","Skipped","{{/if}}","{{/if}}","</div>","</div>","</td>",'<td class="tau-list__table__cell tau-list__table__cell-actions" >','<div class="tau-list-field-slot" ','runas="entity.menuTrigger" ','data-context:general:id="${id}" ','data-context:general:entity-type:name="${__type}" ','data-options:external="true"',">","</div>","</td>",'<td class="tau-list__table__cell tau-list__table__cell-quickadd" >','<div class="tau-list-field-slot" ','runas="entity.quickAddTrigger" ','data-context:general:id="${id}" ','data-context:general:entity-type:name="${__type}" ','data-options:external="true"',">","</div>","</td>","</tr>","</tbody>","</table>","</li>"],dependencies:["ui.template.property.effort.content","ui.template.assignments.mini","cell-progress","cell-assignments","cell-name"]};return t.register(e)});