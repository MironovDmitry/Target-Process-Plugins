define(["tau/core/templates-factory","tau/ui/templates/board.context.filter/ui.template.board.context.filter.lists"],function(e){var a={name:"board.editor.access",engine:"jqote2",markup:['<div class="tau-access-settings">','<div class="tau-board-settings-group__help">','<span class="tau-help i-role-tooltipArticle" data-article-id="board.editor.access">',"About Access","</span>","</div>",'<div class="tau-access-type">',"<%if (this.access.isEditable) {%>",'<label class="tau-line">','<div class="tau-field">','<input role="action-share" value="private" type="radio" name="share"<% if (!this.access.isShared) { %> checked<% } %>>',"</div>",'<div class="tau-txt">',"<h3>Private</h3>","<p>Only you as the View owner can see this View. That's the default option for new Views.</p>","</div>","</label>","<% if(this.access.isAdmin) {%>",'<label class="tau-line">','<div class="tau-field">','<input role="action-share" value="public" type="radio" name="share"<% if (this.access.isShared && !this.access.customSharedData.isActive) { %> checked<% } %>>',"</div>",'<div class="tau-txt">',"<h3>Public</h3>","<p>Everyone can see this View. It will be shown in the left menu.</p>","</div>","</label>","<%}%>",'<label class="tau-line">','<div class="tau-field">','<input role="action-share" value="custom" type="radio" name="share"<% if (this.access.isShared && this.access.customSharedData.isActive) { %> checked<% } %>>',"</div>",'<div class="tau-txt">',"<h3>Custom sharing</h3>","<p>You as the View owner or admin decide which team can see and change this View.</p>","</div>","</label>","<%}%>","</div>",'<div class="tau-notification-block">','<%= fn.sub("board.context.filter.lists", this) %>',"</div>","</div>"],dependencies:[]};return e.register(a)});