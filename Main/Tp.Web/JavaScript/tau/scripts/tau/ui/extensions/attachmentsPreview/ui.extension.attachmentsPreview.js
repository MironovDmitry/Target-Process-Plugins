define(["Underscore","jQuery","tau/components/extensions/component.extension.base","tau/configurator","tau/extensions/extension.javascript"],function(_,$,a,b){return a.extend({"bus afterRender":function(a){var c=this;c.element=a.data.element,c.element.find(".thumbnail-nav").click(c._onAttachmentThumbnailsContainerClick.tauCreateDelegate(c)),c.element.find(".toolbar .prev, .toolbar .next").click($.proxy(c,"_onAttachmentsNavigationClick")),c.element.click($.proxy(c,"_onClose")),b.getKeyBoardManager().pushHandler({handleKeyDown:function(){c._onKeyDown.apply(c,arguments)}})},"bus destroy":function(){this.destroy()},"bus changeSelected":function(a){var b=a.data.attachment;this._changeSelectedAttachment(b)},_getSelectedAttachmentSelector:function(){return".thumbnail-nav > li > img.selected"},_getAttachmentsCount:function(){return this.element.find(".thumbnail-nav > li").length},_getCurrentSelectedAttachment:function(){return this.element.find(this._getSelectedAttachmentSelector()).parent().data().tmplItem.data},_getAttachmentData:function(a){return this.element.find(".thumbnail-nav > li").eq(a).data().tmplItem.data},_getCurrentSelectedAttachmentIndex:function(){return this.element.find(this._getSelectedAttachmentSelector()).parent().index()},_changeSelectedAttachment:function(a){if(this._getCurrentSelectedAttachment().id==a.id)return;var b=this.element;b.find(".thumbnail-nav > li > img.selected").removeClass("selected");var c=b.find(".thumbnail-nav > li > img"),d=this;c.each(function(){if($(this).parent("li").data().tmplItem.data.id==a.id){$(this).addClass("selected");var c=b.find(".ui-attachment-view-image");return d.bus.fire("beforeChangeImage",a.uri)&&(c.attr("src",a.uri),d.bus.fire("afterChangeImage")),!1}})},_onKeyDown:function(a){a.keyCode==$.ui.keyCode.ESCAPE&&this._close()},_close:function(){this.element.remove(),this.bus.fire("closed"),this.fire("destroy")},_next:function(){var a=this._getCurrentSelectedAttachmentIndex()+1;a>=this._getAttachmentsCount()&&(a=0),this._setSelectedAttachmentIndex(a)},_prev:function(){var a=this._getCurrentSelectedAttachmentIndex()-1;a<0&&(a=this._getAttachmentsCount()-1),this._setSelectedAttachmentIndex(a)},_setSelectedAttachmentIndex:function(a){this._changeSelectedAttachment(this._getAttachmentData(a))},_closeButtonClick:function(a){a.stopPropagation(),this._close()},_onAttachmentsNavigationClick:function(a){a.stopPropagation();var b=$(a.target);b.hasClass("prev")?this._prev():b.hasClass("next")&&this._next()},_onAttachmentThumbnailsContainerClick:function(a){a.stopPropagation();var b=$(a.target);if(b.is(".ui-attach-thumbnail")){var c=b.parent("li").data(),d=c.tmplItem.data;this._changeSelectedAttachment(d)}},_onClose:function(a){/^img$/i.test(a.target.tagName)||this._close()},destroy:function(){b.getKeyBoardManager().popHandler(),this.element.find(".ui-attachments-control > .display-table").unbind("click")}})})