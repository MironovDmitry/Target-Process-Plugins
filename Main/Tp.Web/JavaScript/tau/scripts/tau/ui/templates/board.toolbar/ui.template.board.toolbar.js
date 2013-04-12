define(["tau/nls/translator","tau/core/templates-factory","tau/ui/templates/board.editor/ui.template.board.editor.filter"],function(T,templates){var config={name:"board.toolbar",engine:"jqote2",markup:['<div class="tau-board-header">','<% var authPrefix = (this.isAdmin || this.isOwner) ? "" : "disabled_"; %>','<div role="name_output" class="i-role-name_output tau-board-name"><%! this.name %></div>','<div role="name"  class="<% if (!(this.isAdmin || this.isOwner)){ %>disabled<% } %>i-role-name tau-board-name-editor"><%! this.name %></div>',"<% if (this.isAdmin || this.isOwner) { %>",'<button type="button" role="action-remove" class="tau-btn tau-attention tau-board-terminator" data-confirm-message="Do you really want to delete this board?">'+T("Remove board")+"</button>","<% } %>",'<%= fn.sub("board.editor.filter", this.cells) %>','<button role="action-toggle-editor" class="tau-btn tau-options tau-board-settings-toggle tau-extension-board-tooltip" data-collapsed-selector=".tau-checked" data-title="'+T("Show&nbsp;board&nbsp;setup")+'" data-title-collapsed="'+T("Hide&nbsp;board&nbsp;setup")+'" type="button"></button>','<span class="tau-inline-group tau-board-view-switch">','<button type="button"  role="action-toggle-viewMode" value="board" class="tau-btn <% if (this.viewMode == "board"){%>tau-checked <% } %>">'+T("board")+"</button>",'<button type="button" role="action-toggle-viewMode" value="list"  class="tau-btn <% if (this.viewMode == "list"){%>tau-checked <% } %>">'+T("view")+"</button>",'<button type="button"  role="action-toggle-viewMode" value="newlist"  class="tau-btn <% if (this.viewMode == "newlist"){%>tau-checked <% } %>">'+T("list")+"</button>",'<button type="button"  role="action-toggle-viewMode" value="timeline"  class="tau-btn <% if (this.viewMode == "timeline"){%>tau-checked <% } %>">'+T("timeline")+"</button>","</span>",'<% if (this.viewMode == "board") { %>','<span class="tau-inline-group tau-focuser">','<button type="button" role="action-focus" data-title="'+T("Show&nbsp;only&nbsp;highlighted&nbsp;cards")+'" disabled=""    class="tau-extension-board-tooltip tau-btn tau-focus-in">focus</button>','<button type="button" role="action-unfocus" data-title="'+T("See&nbsp;all&nbsp;cards")+'" disabled=""  class="tau-extension-board-tooltip tau-btn tau-close tau-focus-out"></button>',"</span>","<% } %>",'<span role="zoomer" class="tau-zoomer ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"',' data-zoom-value="<%= this.zoom.value %>" ',' data-zoom-min="<%= this.zoom.min || 1 %>" ',' data-zoom-max="<%= this.zoom.max || 6 %>" ',">",'<a href="#" class="ui-slider-handle ui-state-default ui-corner-all tau-extension-board-tooltip" data-title="'+T("Zoom&nbsp;in/out&nbsp;on&nbsp;cards")+'" style="left: 100%;"></a>',"</span>","</div>"],dependencies:[]};return templates.register(config)})