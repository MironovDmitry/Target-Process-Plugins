define(["jQuery","tau/components/extensions/component.extension.base"],function($,a){return a.extend({"bus afterRender":function(a){var b=this,c=a.data.element;b.counter=0,b.subscribeCards(c)},"bus view.card.selected":function(a){var b=a.data,c=b.element,d=b.selected;d?c.addClass("tau-selected"):c.removeClass("tau-selected"),d?++this.counter:--this.counter,this.counter=this.counter<0?0:this.counter},subscribeCards:function(a){var b=this;a.find(".i-role-grid").delegate(".i-role-card","mousedown",function(){var a=$(this),c=a.hasClass("tau-selected");b.fireCardSelected(a,!c)})},fireCardSelected:function(a,b){this.fire("view.card.selected",{element:a,selected:b})}})})