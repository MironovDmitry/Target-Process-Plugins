define(["Underscore","jQuery","tau/components/extensions/component.extension.base"],function(_,$,a){return a.extend({"bus afterRender":function(a){var b=this;b.element=a.data.element,$(window).bind("resize",function(){b._resizeImage()});var c=b.element.find(".ui-attachment-wait"),d=b.element.find(".ui-attachment-view-image");d.hide(),c.show(),this.element.find(".ui-attachment-view-image").bind("load",function(){b._onImageLoad()});var e=function(){$(this).parent().removeClass("ui-thumbnail-loading"),$(this).unbind("load",e),$(this).fadeIn("slow")};this.element.find(".thumbnail-nav li").addClass("ui-thumbnail-loading"),this.element.find(".thumbnail-nav li > img").each(function(){this.complete?e.call(this):$(this).bind("load",e).hide()})},_onImageLoad:function(){var a=this,b=a.element.find(".ui-attachment-wait"),c=a.element.find(".ui-attachment-view-image");a._resizeImage(),c.fadeIn("slow",function(){b.hide()})},_resizeImage:function(){var a=this,b=a.element;if(!b)return;var c=a.element.find(".ui-attachment-wait"),d=a.element.find(".ui-attachment-view-image"),e=b.find(".image-view");d.width(""),d.height("");var f=e.width(),g=e.height(),h=d.width(),i=d.height();if(h>f||i>g){var j=g/i*h,k=f/h*i;j<f?(d.width(j),d.height(g)):(d.width(f),d.height(k))}return{$wait:c,$image:d}},"bus beforeChangeImage":function(a){var b=this,c=b.element.find(".ui-attachment-wait"),d=b.element.find(".ui-attachment-view-image");c.show();var e=a.data;d.fadeOut("slow",function(){d.attr("src",e)}),a.data=!1}})})