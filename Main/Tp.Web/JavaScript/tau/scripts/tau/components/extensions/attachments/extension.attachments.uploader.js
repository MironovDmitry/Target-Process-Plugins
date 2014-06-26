define(["Underscore","jQuery","tau/components/extensions/component.extension.base","tau/utils/utils.date","libs/jquery/jquery.fileupload","libs/jquery/jquery.iframe-transport","tau/ui/templates/attachments/ui.template.attachments.fileupload","tau/ui/templates/attachments/ui.template.attachments.attachment"],function(e,t,n,a,r,i,o,l){var d=/<title\b[^>]*>(.*?)<\/title>/,s=!!window.FileReader;return n.extend({"bus permissionsReady+afterRender":function(e,t,n){this._initialized||(this._initialized=!0,this.element=n.element,t.editable&&t.deletable&&this._initUploader())},"bus afterRender":function(t,n){var a=n.element,r=e.bind(function(){a.parents("body").length?this.fire("view.dom.ready"):e.delay(r,100)},this);r()},"bus view.dom.ready + afterRender":function(e,n,a){if(s){var r=a.element.find(".uploader-toolbar"),i=t("body");r.on("dragover.uploader",function(e){var t=e.originalEvent;return t.dataTransfer.dropEffect="copy",!1}),r.on("dragenter.uploader",function(){r.addClass("hover")}),i.on("dragleave.uploader",function(e){var t=e.originalEvent.clientX,n=e.originalEvent.clientY,a=this.getBoundingClientRect(),i=0>=t||0>=n||t>=a.width||n>=a.height;i&&r.removeClass("dragged-over hover")}),i.on("dragenter.uploader",function(){r.addClass("dragged-over")}),i.on("drop.uploader",function(){r.removeClass("dragged-over hover")}),i.on("dragover.uploader",".cke",function(){return!1}),i.on("dragover.uploader",function(e){var t=e.originalEvent;t.dataTransfer.dropEffect="none",r.removeClass("hover"),e.preventDefault()}),this.on("destroy",function(){i.off(".uploader")})}},_initUploader:function(){var t={uploaderText:s?"Drag and drop files here or click to select files":"Click here to select files",uploaderTextActive:s?"Drop here...":"",multiple:/\bapple\b/i.test(navigator.vendor)?"":"multiple"},n=o.render(t);n.find(".i-role-fileinput").fileupload({url:this._getUploadUrl(),formData:this._getFormData(),add:e.bind(this._onFileAdd,this),dropZone:this.element,pasteZone:this.element}),n.appendTo(this.element)},_getUploadUrl:function(){return this.config.context.configurator.getApplicationPath()+"/UploadFile.ashx"},_getFormData:function(){return[{name:"generalId",value:this._getGeneralId()}]},_getGeneralId:function(){return this.config.context.entity.id},_onFileAdd:function(e,t){var n=this;if(this.element.find(".uploader-toolbar").removeClass("dragged-over"),t.files&&0!==t.files.length){var a=this._createAttachmentDummy(t.files[0].name);a.appendTo(this._getAttachmentsPlaceholder()),t.submit().success(function(e){var t,r=n._getResponseText(e);try{t=n._parseResponse(r)}catch(i){return void n._onAttachmentUploadFail(a)}n.bus.fire("attachmentUploaded",{element:n._updateAttachmentElement(a,t),data:t})}).error(function(e){var t,r=e.responseText.match(d);t=r&&r.length>0?r[1]:"Looks like application is not available. Please check your connection or server availability",n._onAttachmentUploadFail(a,t)})}},_updateAttachmentElement:function(e,t){var n=this._createAttachmentElement(t);return e.replaceWith(n),n},_onAttachmentUploadFail:function(e,t){this._deleteFailedAttachmentElement(e,t)},_getResponseText:function(e){var t="";return"string"==typeof e?t=e:e.jquery&&(t=e.text()),t},_createAttachmentDummy:function(e){var t=this._createAttachmentElement({name:e});return t.addClass("uploading").find(".toolbar").remove(),t},_deleteFailedAttachmentElement:function(e,n){n=n||"Upload failed",this.fire("error",{message:n}),e.addClass("failed"),t('<p class="error">Upload failed</p>').insertAfter(e.find(".name")),e.fadeOut(1500,function(){e.remove()})},_getAttachmentsPlaceholder:function(){return this.element.find(".ui-attachments-content")},_createAttachmentElement:function(e){return l.render(e)},_parseResponse:function(e){var t;try{t=JSON.parse(e),t=t.items||t,t=t.pop()}catch(n){}var r=a.parse(a.convertToTimezone(t[1]));return{id:t[0],uri:t[4],thumbnailUri:t[5],mimeType:t[3],name:t[2],ownerName:t[6][1]+" "+t[6][2],date:a.format.date.short(r)}}})});