define(["Underscore","tau/core/templates-factory","tau/ui/extensions/board.plus/ui.board.plus.utils"],function(e,l,i){var a={name:"boardplus.skeleton.timeline",engine:"jqote2",customFunctions:{generateId:i.generateId,generateCellData:function(e,l){var a=i.generateElementData(e);return l&&(a+=' data-istimeline="true"'),a},hasAdditionalInfo:function(l,i,a){return e.any(l,function(l){return a&&(l=l[a]),e.contains(i,l)})},getBacklogCol:function(l){return e.find(l.data,function(l){return null!=e.find(l.dynamic.items,function(e){return e.data.isBacklog})}).x},getTimelineCol:function(l){var i=this.getBacklogCol(l),a=e.find(l.data,function(e){return e.x!=i});return a.x}},markup:["<% var hasX = !this.x.isNull; %>","<% var hasY = !this.y.isNull; %>","<% var hasAxis = this.x.data.length > 0; %>",'<% var yrows = hasY ? this.y.data : [{y:"null"}]; %>','<% var yRowsAdditionalInfo = fn.hasAdditionalInfo(this.definition.y&&this.definition.y.types,["release","iteration","teamiteration"]); %>','<% var yRowsUserAvatar = fn.hasAdditionalInfo(this.definition.y&&this.definition.y.types,["team"])&&!fn.hasAdditionalInfo(this.definition.cells&&this.definition.cells.types,["user"],"type"); %>',"<% var additionalClasses = []; %>",'<% this.cardSize && additionalClasses.push(" tau-ui-size-" + this.cardSize); %>','<% !hasX && additionalClasses.push(" tau-no-cols"); %>','<% !hasY && additionalClasses.push(" tau-no-rows"); %>','<div id="<%=_.uniqueId(\'boardBody\')%>" class="tau-board-body <%=yRowsUserAvatar?"additional-info_avatar":""%> <%=yRowsAdditionalInfo?"additional-info_y":""%> ">',"<div class=\"i-role-board-body-holder tau-board-view tau-board-timeline-view tau-board-grid-view<%= additionalClasses.join('') %>\" ",'data-zoom-level="<%=this.zoomLevel%>" data-zoom-size="<%=this.cardSize%>"',">",'<div role="board-body" class="i-role-board-body i-role-bubble-holder">',"<% if (hasAxis) { %>","<% if (hasX && hasY) { %>",'<div class="tau-x-header">','<div class="tau-cell">','<div class="tau-collapser">','<button class="tau-h-collapser i-role-collapser"></button>',"</div>",'<div class="tau-label">',"<%= this.y.title %>"," / ","Timeline","</div>","</div>","</div>","<% } %>","<% if (hasY) { %>",'<div role="header" data-dimension="y" class="i-role-header tau-rows-header tau-header-<%= this.definition.y.types[0].toLowerCase() %>">',"<ul>","<% for (var i = 0; i < this.y.data.length; i++) { %>","<% var m = this.y.data[i]; %>",'<li role="cellholder" class="i-role-cellholder tau-cellholder" id="ch_<%= fn.generateId(m) %>" <%= fn.generateCellData({y:m.y}) %>>','<div role="cell" class="i-role-cell tau-cell" id="<%= fn.generateId(m) %>" <%= fn.generateCellData({y:m.y}) %>>',"</div>","<% if (i === this.y.data.length - 1) { %>",'<div class="footer-pillow"></div>',"<% } %>","</li>","<% } %>","</ul>","</div>","<% } %>","<% if (hasX) { %>",'<div role="header" data-dimension="x" class="i-role-header tau-cols-header tau-header">',"<ul>",'<li role="cellholder" class="i-role-cellholder tau-cellholder i-role-timeline-header-cellholder" <%= fn.generateCellData({ x: fn.getBacklogCol(this.x), isBacklog: true }) %>>','<div  class="i-role-cell tau-cell i-role-timeline-header-cell" <%= fn.generateCellData({ x: fn.getBacklogCol(this.x), isBacklog: true }) %>>','<div class="tau-collapser">','<button class="tau-v-collapser i-role-collapser"></button>',"</div>",'<div class="tau-label">Backlog</div>',"</div>","</li>",'<li style="position:absolute" role="cellholder" class="i-role-cellholder tau-cellholder i-role-timeline-header-cellholder" <%= fn.generateCellData({ x: fn.getTimelineCol(this.x), isBacklog: false }) %>>','<div class="tau-timeline-scale i-role-timeline-header-cell i-role-cell" <%= fn.generateCellData({ x:fn.getTimelineCol(this.x), isBacklog:false }) %>>','<div class="tau-scale-ruler">',"</div>","</div>","</li>","</ul>","</div>","<% } %>",'<div role="grid" class="i-role-grid tau-timeline-grid <% if (!hasX){ %>tau-grid_x_false<% } %> <% if (!hasY){ %>tau-grid_y_false<% } %>" id="grid_<%= _.uniqueId() %>">','<div class="tau-backlog i-role-timeline-column i-role-timeline-column-dynamic-width">','<div class="tau-backlog-body">',"<ul>","<% for (var y = 0; y < yrows.length; y++) { %>","<% var coords = { x: fn.getBacklogCol(this.x), y: yrows[y].y }; %>",'<li role="cellholder" class="i-role-cellholder tau-cellholder" id="ch_<%= fn.generateId(coords) %>" <%= fn.generateCellData(coords, false) %> >','<div role="cell" class="i-role-cell tau-cell" id="<%= fn.generateId(coords) %>" <%= fn.generateCellData(coords, false) %> >',"</div>","<% if (y ===  yrows.length - 1) { %>",'<div class="footer-pillow"></div>',"<% } %>","</li>","<% } %>","</ul>","</div>","</div>",'<div class="tau-timeline i-role-timeline-column">','<div class="tau-timeline-canvas">','<div class="tau-timeline-flow">',"<% for (var y = 0; y < yrows.length; y++) { %>","<% var coords = { x: fn.getTimelineCol(this.x), y: yrows[y].y }; %>",'<div role="cellholder" class="i-role-cellholder tau-cellholder" id="ch_<%= fn.generateId(coords) %>" <%= fn.generateCellData(coords, true) %> >','<div role="cell" class="i-role-cell tau-cell" id="<%= fn.generateId(coords) %>" <%= fn.generateCellData(coords, true) %> >',"</div>","<% if (y === yrows.length - 1) { %>",'<div class="footer-pillow"></div>',"<% } %>","</div>","<% } %>","</div>","</div>","</div>","</div>",'<div class="_tc-timeline-navigator"></div>',"<% } %>","</div>","</div>","</div>"],dependencies:[]};return l.register(a)});