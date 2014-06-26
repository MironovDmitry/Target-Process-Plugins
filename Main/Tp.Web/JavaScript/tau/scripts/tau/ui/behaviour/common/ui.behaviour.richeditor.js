define(["Underscore","jQuery"],function(t,e){var i={};e.widget("ui.richeditor",{$target:null,$editor:null,$input:null,editor:null,ckConfig:{toolbar:"Basic",toolbarStartupExpanded:!0,toolbarCanCollapse:!1,autoGrow_maxHeight:8e3,startupFocus:!0},options:{executionGroupName:null,settings:{},saveAction:{checkChanges:!0,disableIfEmpty:!1,available:!0,text:"Done"},cancelAction:{available:!1,text:"Cancel"},onCreate:function(){},onSave:function(){},onCancel:function(){},onHide:function(){}},EXCLUDED_ELEMENTS:["head","base","basefont","meta","link","title","style","script","input","isindex","textarea","button","option","select","frameset","frame","iframe","object","embed","applet","bgsound","marque","blink"],hasText:function(){return this.editor?this.editor.getData().length>0:!1},getText:function(){return this.editor?this.editor.getData():null},setText:function(t){this.editor&&this.editor.setData(t)},setStatus:function(t){this.$status.text(t)},getStatus:function(){return this.$status.text()},getTools:function(){return this.$tools},toggleSaveButton:function(t){this._getSaveButton().prop("disabled",!t)},disableSaveButton:function(){this.toggleSaveButton(!1)},enableSaveButton:function(){this.toggleSaveButton(!0)},setValidationErrors:function(e){this.element.addClass("ui-validationerror"),t.isString(e)&&this.element.attr("title",e)},resetValidationErrors:function(){this.element.removeClass("ui-validationerror"),this.element.removeAttr("title")},setValue:function(t){this.setText(t)},_getSaveButton:function(){return this.$tools.find(".i-role-actionsave")},_create:function(){var i=e(this.element);i.addClass("editable"),this.$target=i,i.attr("id",t.uniqueId("richeditor_")),this.ckConfig.contentsCss=this.options.ckPath+"/new/custom/content.css";var n={};e.extend(!0,n,this.ckConfig,this.options.settings),this.options.settings=n,this.options.ckConfig=n,i.on("dblclick",t.bind(function(t){e.clearSelection(),"a"!=t.target.tagName.toLowerCase()&&this.show()},this)),i.one("mouseenter",t.bind(this.loadScripts,this))},show:function(){if(!this._visible){this._visible=!0;var n=this.$target,o=this.options,s=o.saveAction,a=o.cancelAction;this.$tools=e(['<div class="ui-richeditor__controls button-group">',s.available?'<button class="i-role-actionsave tau-btn" type="button">'+s.text+"</button>":"",a.available?'<button class="i-role-actioncancel tau-btn" type="button">'+a.text+"</button>":"",'<div class="i-role-statusmessage ui-richeditor__controls__status_message"></div>',"</div>"].join(""));var r=this.$tools;this.$status=r.find(".i-role-statusmessage"),e.when(this.loadScripts()).then(function(){var t=e.Deferred();if(n.parents("body").length)t.resolve();else var i=window.setInterval(function(){n.parents("body").length&&(t.resolve(),window.clearInterval(i))},10);return t}).then(t.bind(function(){var t,i=e.Deferred();try{t=CKEDITOR.replace(n.attr("id"),o.ckConfig),CKFinder.SetupCKEditor(t,o.ckPath+"/new/ckfinder/")}catch(s){i.reject(s)}return this.editor=t,t.on("instanceReady",function(e){e.editor.dataProcessor.writer.lineBreakChars="\r\n",o.text&&t.setData(o.text),i.resolve(t)}),i},this)).then(t.bind(function(n){this._configureHtmlOutput(n);var a=o.executionGroupName;a&&i[a]&&(i[a].options.onCancel(),i[a]=null),i[a]=this;var c=["change"];if(t.forEach(c,function(e){n.on(e,t.bind(function(){this._trigger("change")},this))},this),e(n.container.$).after(r),r.on("click.richeditor",".i-role-actionsave",t.bind(function(){o.onSave(this.getText())},this)),r.on("click.richeditor",".i-role-actioncancel",t.bind(function(){o.onCancel(this.getText())},this)),s.available&&s.disableIfEmpty){var l=r.find(".i-role-actionsave");l.prop("disabled",!this.hasText()),this.element.on("richeditorchange",t.debounce(t.bind(function(){l.prop("disabled",!this.hasText())},this),500))}o.onCreate(this),this._trigger("create")},this)).done()}},hide:function(t){if(this._visible=!1,this.editor)try{this.editor.focusManager.blur(),this.editor.destroy(!t),this.editor=null}catch(e){}this.$tools&&this.$tools.remove();var n=this.options.executionGroupName;n&&i[n]&&i[n]===this&&(i[n]=null),this.options.onHide()},destroy:function(){this._super(),this.hide()},loadScripts:function(){var t=e.Deferred(),i=this.options.ckPath,n=i+"/new/ckeditor/ckeditor.js",o=i+"/new/ckfinder/ckfinder.js";return require([n],function(){CKEDITOR.disableAutoInline=!0,require([o],t.resolve)}),t},_configureHtmlOutput:function(e){var i=this.EXCLUDED_ELEMENTS,n={elements:{$:function(e){return t.indexOf(i,e.name)>0?!1:(t.each(["class","id","role"],function(t){e.attributes[t]&&delete e.attributes[t]}),e)},a:function(e){return t.trim(e.attributes.href).match(/^javascript:/gi)&&(delete e.attributes.href,delete e.attributes["data-cke-saved-href"]),e},style:function(){return!1},script:function(){return!1}},attributeNames:[[/^on/,"no"]]},o=e.dataProcessor;o.htmlFilter.addRules(n),o.dataFilter.addRules(n)}})});