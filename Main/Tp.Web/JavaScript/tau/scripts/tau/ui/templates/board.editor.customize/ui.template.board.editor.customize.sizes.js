define(["tau/core/templates-factory","tau/ui/templates/board.editor.customize/ui.template.board.editor.customize.sizes.item"],function(e){var t={name:"board.editor.customize.sizes",engine:"jqote2",markup:['<div class="tau-board-layout-elements-list">','<ul class="customize">','<%=fn.sub("board.editor.customize.sizes.item", this.items)%>',"</ul>","</div>"],dependencies:[]};return e.register(t)});