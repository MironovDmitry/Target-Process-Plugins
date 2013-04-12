define(["tau/core/templates-factory","tau/ui/templates/list_/grid.entity/ui.template.list.grid.entity.row","tau/ui/templates/list_/grid.entity/testplan/ui.template.list.grid.entity.row.testplanrun","tau/ui/templates/list_/grid.entity/testplanrun/ui.template.list.grid.entity.row.testcaserun"],function(templates){var config={name:"list-grid-entity__group",markup:['<div class="tau-list__group {{if collapsed}} tau-list__group_collapsed_true{{/if}}" role="group">','   <div class="tau-list__group__header tau-list__group__collapse" role="expander">',"       {{if realGroup}}","           {{if realGroup.url}}",'           <a class="tau-list__group__id" href="${realGroup.url}"><em class="ui-type-icon ui-type-icon-${realGroup.__type}">${realGroup.id}</em></a>',"           {{/if}}","       {{/if}}",'       <span class="tau-list__group__title" role="title">${title}</span>','       {{if subtitle}}<span class="tau-list__group__subtitle" >${subtitle}</span>{{/if}}','       <span class="tau-list__group__counter{{if items.length == 0}} tau-list__group__counter__empty{{/if}}" role="counter">${items.length}</span>',"   </div>",'${$item.data.config=$item.parent.data.config,""}','   <ul class="tau-list__list" role="list">',"      {{tmpl(items) $item.parent.data.config.currentView.rowTemplateName }}","   </ul>","</div>"],dependencies:["list-grid-entity__row","list-grid-entity__rowtestplanrun"]};return templates.register(config)})