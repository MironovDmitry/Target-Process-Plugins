define(["tau/core/templates-factory","tau/ui/templates/list_/grid.entity/ui.template.cell.progress","tau/ui/templates/list_/grid.entity/ui.template.cell.assignments","tau/ui/templates/list_/grid.entity/ui.template.cell.name","tau/ui/templates/assignmentsList/ui.template.assignments.mini","tau/ui/templates/property.effort/ui.template.property.effort.content"],function(templates){var config={name:"list-grid-entity__rowtestcaserun_testcase",markup:["",'<li class="tau-list__list__item tau-list__list__item-testcaserun tau-list__list__item-testcaserun-testcase" role="item">','<table class="tau-list__table">',"<tbody>",'<tr class="tau-list__table__row">','<td class="tau-list__table__cell tau-list__table__cell-dragdrop"  role="sortable-handler" ><div class="dragdrop_indicator"></div></td>','<td class="tau-list__table__cell tau-list__table__cell-id">','<a class="tau-entitylink" href="${testplanrun.url}" title="${testplanrun.name}">','<em class="ui-type-icon ui-type-icon-testplanrun">${testplanrun.id}</em>',"</a>","</td>",'<td class="tau-list__table__cell tau-list__table__cell-name">',"${testplanrun.name}","</td>",'<td class="tau-list__table__cell tau-list__table__cell-date">','<span class="tau-extension-tooltip" title="Run Date: ${runDate}">',"${runDate}","</span>","</td>",'<td class="tau-list__table__cell tau-list__table__cell-release">',"{{if release}}",'<span class="tau-extension-tooltip" title="Release: ${release.name}">',"${release.name}","</span>","{{/if}}","</td>",'<td class="tau-list__table__cell tau-list__table__cell-iteration">',"{{if iteration}}",'<span class="tau-extension-tooltip" title="Iteration: ${iteration.name}">',"${iteration.name}","</span>","{{/if}}","</td>",'<td class="tau-list__table__cell tau-list__table__cell-build">',"{{if build}}",'<span class="tau-extension-tooltip" title="Build: ${build.name}">',"${build.name}","</span>","{{/if}}","</td>",'<td class="tau-list__table__cell tau-list__table__cell-laststatus">','<div class="ui-status ',"{{if passed === true}}","ui-status_type_passed green ","{{/if}}","{{if passed === false}}","ui-status_type_failed red ","{{if comment}}tau-extension-tooltip{{/if}}  ","{{/if}}",'{{if passed === null}}ui-status_type_na grey{{/if}}" ',"{{if comment}}",'title="Comment: \n ${comment}"',"{{/if}}",">","{{if runDate !== null}}","{{if passed === true}}","Passed","{{/if}}","{{if passed === false}}","Failed","{{/if}}","{{if passed === null}}","Skipped","{{/if}}","{{/if}}","</div>","</td>","</tr>","</tbody>","</table>","</li>"],dependencies:["ui.template.property.effort.content","ui.template.assignments.mini","cell-progress","cell-assignments","cell-name"]};return templates.register(config)})