define(["Underscore","jQuery","tau/components/extensions/component.extension.base"],function(e,i,t){return t.extend({"bus afterRender":function(e){var t=this;t.element=e.data.element,i(window).bind("resize",function(){t._resizeImage()});var n=t.element.find(".ui-attachment-wait"),a=t.element.find(".ui-attachment-view-image");a.hide(),n.show(),this.element.find(".ui-attachment-view-image").bind("load",function(){t._onImageLoad()});var h=function(){i(this).parent().removeClass("ui-thumbnail-loading"),i(this).unbind("load",h),i(this).fadeIn("slow")};this.element.find(".thumbnail-nav li").addClass("ui-thumbnail-loading"),this.element.find(".thumbnail-nav li > img").each(function(){this.complete?h.call(this):i(this).bind("load",h).hide()})},_onImageLoad:function(){var e=this,i=e.element.find(".ui-attachment-wait"),t=e.element.find(".ui-attachment-view-image");e._resizeImage(),t.fadeIn("slow",function(){i.hide()})},_resizeImage:function(){var e=this,i=e.element;if(i){var t=e.element.find(".ui-attachment-wait"),n=e.element.find(".ui-attachment-view-image"),a=i.find(".image-view");n.width(""),n.height("");var h=a.width(),m=a.height(),d=n.width(),o=n.height();if(d>h||o>m){var s=m/o*d,u=h/d*o;h>s?(n.width(s),n.height(m)):(n.width(h),n.height(u))}return{$wait:t,$image:n}}},"bus beforeChangeImage":function(e){var i=this,t=i.element.find(".ui-attachment-wait"),n=i.element.find(".ui-attachment-view-image");t.show();var a=e.data;n.fadeOut("slow",function(){n.attr("src",a)}),e.data=!1}})});