define(["Underscore","jQuery","tau/components/extensions/component.extension.base"],function(_,$,a){return a.extend({"bus afterRender":function(a){var b=a.data.element,c=this;$(".draggable",b).draggable({revert:"invalid",helper:"clone",cursor:"move",stop:function(a,b){$(a.target).removeClass("moved-slice-card")},start:function(a,b){$(a.target).addClass("moved-slice-card")}}),$(".droppable",b).droppable({activeClass:"ui-state-hover",hoverClass:"ui-state-active",drop:function(a,b){var d=$(b.draggable),e=d.parents(".slice-cell");$(this).append(d);var f={x:$(this).data("x"),y:$(this).data("y"),id:d.data("itemid"),card:d,prevCell:e};c.bus.fire("move",f)}})},"bus moveCompleted":function(a){var b=a.data.saga,c=b.card.css("backgroundColor");b.card.css({backgroundColor:"#dbf383"}),b.card.animate({backgroundColor:c},"slow")},"bus moveFailed":function(a){var b=a.data.saga;$(b.prevCell).append(b.card);var c=b.card.css("backgroundColor");b.card.css({backgroundColor:"red"}),b.card.animate({backgroundColor:c},"slow")}})})