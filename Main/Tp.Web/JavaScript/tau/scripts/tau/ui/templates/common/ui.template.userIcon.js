define(["tau/core/templates-factory"],function(e){return e.register({name:"ui.template.userIcon",markup:["{{if $item.showUser}}",'<span class="ui-assignment__user user tau-avatar_${id}"  userId="${id}">','   <img src="${avatar}" style="width:24px; height:24px;" alt="${name}" title="${name}" class="user-name" />',"</span>","{{/if}}","{{if $item.showEllipsis}}",'   <span class="ui-assignment__user ui-assignment__user_count">+${$item.count}</span>',"{{/if}}"].join(""),dependencies:[]})});