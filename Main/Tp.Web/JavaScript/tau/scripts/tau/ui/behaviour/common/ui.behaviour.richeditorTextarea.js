define(["Underscore","jQuery"],function(t,i){i.widget("ui.richeditorTextarea",i.ui.richeditor,{getText:function(){return this.$textarea.val()},setText:function(t){this.$textarea.val(t)},show:function(){if(!this._visible){this._visible=!0;var e=(this.$target,this.options),s=e.saveAction,a=e.cancelAction;this.$tools=i(['<div class="ui-richeditor__controls button-group">',s.available?'<button class="i-role-actionsave tau-btn" type="button">'+s.text+"</button>":"",a.available?'<button class="i-role-actioncancel tau-btn" type="button">'+a.text+"</button>":"",'<div class="i-role-statusmessage ui-richeditor__controls__status_message"></div>',"</div>"].join(""));var o=this.$tools;if(this.$status=o.find(".i-role-statusmessage"),this.$textarea=i("<textarea />"),this.$textarea.val(e.text),this.$editor=i('<div class="ui-richeditor" />').append(this.$textarea).append(this.$tools),this.$target.hide().after(this.$editor),this.$textarea.on("input",t.bind(function(){this._trigger("change")},this)),o.on("click.richeditor",".i-role-actionsave",t.bind(function(){e.onSave(this.getText())},this)),o.on("click.richeditor",".i-role-actioncancel",t.bind(function(){e.onCancel(this.getText())},this)),s.available&&s.disableIfEmpty){var n=o.find(".i-role-actionsave");n.prop("disabled",!this.getText().length),this.element.on("richeditorchange",t.debounce(t.bind(function(){n.prop("disabled",!this.getText().length)},this),500))}e.onCreate(this),this._trigger("create")}},hide:function(){this.$editor.remove()},loadScripts:function(){}})});