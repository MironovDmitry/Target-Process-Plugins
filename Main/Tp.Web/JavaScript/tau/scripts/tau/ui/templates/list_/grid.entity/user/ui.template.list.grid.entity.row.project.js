define(["tau/core/templates-factory"],function(t){var e={name:"list-grid-entity__rowproject_user",markup:["",'<li class="tau-list__list__item tau-list__list__item-testcaserun tau-list__list__item-testcaserun-testcase" role="item">','<table class="tau-list__table">',"<tbody>",'<tr class="tau-list__table__row">','<td class="tau-list__table__cell tau-list__table__cell-name" style="white-space: nowrap;">',"${project.name}","</td>",'<td class="tau-list__table__cell tau-list__table__cell-role">','<div runas="property.role" data-context:general:id="${id}" data-context:general:entity-type:name="${__type}">',"${role.name}","</div>","</td>",'<td class="tau-list__table__cell tau-list__table__cell-entityactions">','<button class="action-detach button small" role="action-detach" type="button" data-confirm-message="Removing person from project  \'${project.name}\' will unassign that person from ALL tasks, stories, bugs, etc. (except for completed). Are you sure you want to proceed?">Remove from project</button>',"</td>","</tr>","</tbody>","</table>","</li>"]};return t.register(e)});