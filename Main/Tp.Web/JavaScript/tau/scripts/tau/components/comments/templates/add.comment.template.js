define(["require","tau/core/templates-factory"],function(e){var t=e("tau/core/templates-factory"),i={name:"comment.add",engine:"jqote2",markup:['<div class="ui-comment-new">','<div class="ui-comment-heading">','<img class="ui-comment-avatar" src="<%= this.avatar %>" title="<%! this.fullName %>" />',"</div>",'<div class="ui-comment-editor-placeholder">','<div class="ui-comment-text tau-clientinput"></div>',"</div>","</div>"]};return t.register(i)});