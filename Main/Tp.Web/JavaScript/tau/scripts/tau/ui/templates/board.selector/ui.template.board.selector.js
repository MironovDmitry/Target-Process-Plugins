define(["tau/core/templates-factory"],function(a){var b={name:"board.selector",engine:"jqote2",markup:['<ul class="tau-board-list">',"<% _.forEach(this.boards, function(board){ %>","<li>",'<a href="#board/<%= board.slug %>"><%= board.name %></a>',"</li>","<% }); %>","</ul>"],dependencies:[]};return a.register(b)})