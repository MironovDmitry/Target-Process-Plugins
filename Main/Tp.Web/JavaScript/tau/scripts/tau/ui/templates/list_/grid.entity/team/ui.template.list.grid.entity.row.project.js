define(["tau/core/templates-factory","tau/ui/templates/list_/grid.entity/ui.template.cell.progress","tau/ui/templates/list_/grid.entity/ui.template.cell.assignments","tau/ui/templates/list_/grid.entity/ui.template.cell.name","tau/ui/templates/assignmentsList/ui.template.assignments.mini","tau/ui/templates/property.effort/ui.template.property.effort.content"],function(t){var e={name:"list-grid-entity__rowproject_team",markup:["",'<li class="tau-list__list__item tau-list__list__item-testcaserun tau-list__list__item-testcaserun-testcase" role="item">','<table class="tau-list__table">',"<tbody>",'<tr class="tau-list__table__row">','<td class="tau-list__table__cell tau-list__table__cell-name">',"${project.name}","</td>",'<td class="tau-list__table__cell tau-list__table__cell-entityactions">','<button class="action-detach button small" role="action-detach" type="button" ',"data-confirm-message=\"Detach team from team  '${project.name}' blablabla. Are you sure you want to proceed?\">Remove from team</button>","</td>","</tr>","</tbody>","</table>","</li>"],dependencies:["ui.template.property.effort.content","ui.template.assignments.mini","cell-progress","cell-assignments","cell-name"]};return t.register(e)});