define(["tau/core/templates-factory","tau/ui/templates/list_/grid.entity/ui.template.list.grid.entity.group","tau/ui/templates/list_/grid.entity/ui.template.list.grid.entity.row","tau/ui/templates/list_/grid.entity/testplan/ui.template.list.grid.entity.row.testplanrun","tau/ui/templates/list_/grid.entity/testplanrun/ui.template.list.grid.entity.row.testcaserun","tau/ui/templates/list_/grid.entity/userstory/ui.template.list.grid.entity.row.testcase","tau/ui/templates/list_/grid.entity/relation/ui.template.list.grid.entity.row.relation","tau/ui/templates/list_/grid.entity/request/ui.template.list.grid.entity.row.requester","tau/ui/templates/list_/grid.entity/testcase/ui.template.list.grid.entity.row.testcaserun","tau/ui/templates/list_/ui.template.list.comment"],function(t){var e={name:"list-grid-entity-requesters",markup:['<div class="tau-list tau-list-requesters">','<table class="tau-list__table tau-list__table-header">',"<tbody>",'<tr class="tau-list__table__row">','<td class="tau-list__table__cell tau-list__table__cell-dragdrop"></td>','<td class="tau-list__table__cell tau-list__table__cell-header">','<button type="button" role="action-add" class="tau-button-add">Attach</button>',"</td>","</tr>","</tbody>","</table>","   {{if isEmpty === true}}",'      <div class="tau-list__empty-message">${config.currentView.emptyMessage}</div>',"   {{else}}",'     <div class="tau-list__content">',"       {{if groups && groups.length}}",'          {{tmpl(groups) "list-grid-entity__group"}}',"       {{/if}}","       {{if items && items.length}}",'           <div class="tau-list__group tau-list__group_flat_true"  role="group">','               <ul class="tau-list__list"  role="list">',"                   {{tmpl(items) $item.data.config.currentView.rowTemplateName }}","               </ul>","           </div>","       {{/if}}","     </div>","   {{/if}}",'   <div class="tau-list__comment-holder">','          {{tmpl({}) "list-grid__comment"}}',"   </div>","</div>"],dependencies:["list-grid-entity__group","list-grid-entity__row","list-grid-entity__rowtestplanrun","list-grid-entity__rowtestcaserun","list-grid-entity__rowtestcase","list.grid.entity.row.relation","list-grid-entity__row_requester","list-grid-entity__rowtestcaserun_testcase","list-grid__comment"]};return t.register(e)});