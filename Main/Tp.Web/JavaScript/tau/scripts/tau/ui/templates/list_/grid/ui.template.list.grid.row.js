define(["tau/core/templates-factory"],function(e){var t={name:"list-grid-row",markup:['<tr class="tau-list__table__row">',"   {{each(i, field) $item.parent.parent.data.config.views[0].fields}}",'       <td class="tau-list__table__cell{{if field.cssClass}} ${field.cssClass}{{/if}}">{{tauKey($item) field.dataIndex}}</td>',"   {{/each}}","</tr>"]};return e.register(t)});