define(["tau/core/templates-factory","tau/ui/templates/board.editor.customize/ui.template.board.editor.customize.editor.list.unit-name","tau/ui/templates/board.editor.customize/ui.template.board.editor.customize.editor.list.unit"],function(t){var i={name:"board.editor.customize.editor.list",engine:"jqote2",markup:["<div>","<%if (this.size && this.types.length > 0) {%>",'<div class="tau-list-canvas">',"<% this.cardLayout.forEach(_.bind(function(item, index) { %>","<%if(index === 0){%>",'<%= fn.sub("board.editor.customize.editor.list.unit-name", [{unit:item.unit,configurator:this.configurator}])%>',"<%} else {%>",'<%= fn.sub("board.editor.customize.editor.list.unit", [{unit:item.unit,configurator:this.configurator}])%>',"<%}%>","<% }, this)); %>",'<div class="tau-board-layout-close"></div>',"</div>","<%};%>","</div>"],dependencies:[]};return t.register(i)});