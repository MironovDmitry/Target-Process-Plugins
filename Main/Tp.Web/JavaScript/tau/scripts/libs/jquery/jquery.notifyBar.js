define(["libs/jquery/jquery"],function($){return $.notifyBar=function(a){(function($){var b=notifyBarNS={};notifyBarNS.shown=!1,a||(a={}),notifyBarNS.html=a.html||"Your message here",notifyBarNS.delay=a.delay||2e3,notifyBarNS.animationSpeed=a.animationSpeed||200,notifyBarNS.jqObject=a.jqObject,notifyBarNS.cls=a.cls||"",notifyBarNS.close=a.close||!1,notifyBarNS.jqObject?(b=notifyBarNS.jqObject,notifyBarNS.html=b.html()):b=jQuery("<div></div>").addClass("jquery-notify-bar").addClass(notifyBarNS.cls).attr("id","__notifyBar"),b.html(notifyBarNS.html).hide();var c=b.attr("id");switch(notifyBarNS.animationSpeed){case"slow":asTime=600;break;case"normal":asTime=400;break;case"fast":asTime=200;break;default:asTime=notifyBarNS.animationSpeed}b=="object",$("body").prepend(b),notifyBarNS.close&&(b.append($("<a href='#' class='notify-bar-close'>Close [X]</a>")),$(".notify-bar-close").click(function(){return b.attr("id")=="__notifyBar"?$("#"+c).slideUp(asTime,function(){$("#"+c).remove()}):$("#"+c).slideUp(asTime),!1})),$(".jquery-notify-bar:visible").length>0?$(".jquery-notify-bar:visible").stop().slideUp(asTime,function(){b.stop().slideDown(asTime)}):b.slideDown(asTime),b.click(function(){$(this).slideUp(asTime)}),b.attr("id")=="__notifyBar"?setTimeout("jQuery('#"+c+"').stop().slideUp("+asTime+", function() {jQuery('#"+c+"').remove()});",notifyBarNS.delay+asTime):setTimeout("jQuery('#"+c+"').stop().slideUp("+asTime+", function() {jQuery('#"+c+"')});",notifyBarNS.delay+asTime)})($)},$.notifyBar})