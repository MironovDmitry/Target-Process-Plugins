define(["Underscore","jQuery","tau/core/extension.base"],function(e,t,a){var i="Saving...";return a.extend({category:"edit",resetLifecycle:!0,autoSaveDelay:5e3,"bus beforeInit":function(e,t){this.fire("options.ready",this._extractOptions(t.config.options,{richeditor:"richeditor"}))},"bus options.ready:last + $editor.ready":function(t,a,o){var s=a.richeditor;o[s]("setStatus",""),o[s]("enableSaveButton"),o.on(s.toLowerCase()+"change.autosave",function(){o[s]("getStatus")!=i&&o[s]("setStatus","")}),o.on(s.toLowerCase()+"change.autosave",e.debounce(e.bind(function(){if(o.data("ui-"+s)){var e=o[s]("getText");"string"==typeof e&&(o[s]("setStatus",i),o[s]("disableSaveButton"),this.fire("submitted.auto",e))}},this),this.autoSaveDelay))},"bus beforeInit:last + submitted.auto":function(e,t,a){var i={};if(t.config.fieldName)i[t.config.fieldName]=a;else{var o=t.config.customField;i={customFields:[{name:o.name,type:o.type,value:a}]}}this.fire("save",i)},"bus submitted.auto > afterSave":function(){this.fire("autosave.completed")},"bus submitted.auto > validationFailed":function(e,t,a){this.fire("autosave.failed",a.validation.errors[0].description)},"bus options.ready:last + $editor.ready:last + autosave.completed":function(e,t,a){var i=t.richeditor;a[i]("setStatus","All changes saved"),a[i]("enableSaveButton")},"bus options.ready:last + $editor.ready:last + autosave.failed":function(e,t,a,i){var o=t.richeditor;a[o]("setStatus",i),a[o]("disableSaveButton")}})});