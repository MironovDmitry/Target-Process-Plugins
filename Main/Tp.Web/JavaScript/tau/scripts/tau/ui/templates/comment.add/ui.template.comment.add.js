define(["tau/core/templates-factory"],function(e){var t={name:"comment.add",engine:"jqote2",markup:['<div class="ui-comment-new">','<div class="ui-comment-heading">','<img class="ui-comment-avatar" src="<%= this.avatar %>" title="<%! this.fullName %>" />',"</div>",'<div class="ui-comment-editor-placeholder tau-clientinput">','<div class="ui-comment-text"></div>',"</div>","</div>"]};return e.register(t)});