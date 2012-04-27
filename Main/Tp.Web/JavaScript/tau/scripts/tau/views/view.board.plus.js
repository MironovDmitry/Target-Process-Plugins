define(["jQuery","tau/core/event.emitter","tau/ui/extensions/board.plus/ui.board.plus.utils"],function($,a,b){return a.extend({name:"view.board.plus","bus view.build.skeleton":function(a){var b=a.data;this.fire("template.bind",{name:"boardplus.skeleton",data:b})},"bus template.boardplus.skeleton.bound":function(a){var b=this,c=a.data.element;this.fire("view.skeleton.built",{element:c});var d=c.find(".i-role-cell");b.fire("view.cellSlot.built.start",{cells:d}),d.each(function(){b.fire("view.cellSlot.built",{element:this,data:{x:this.getAttribute("data-x")||null,y:this.getAttribute("data-y")||null}})}),b.fire("view.cellSlot.built.end",{cells:d})},"bus view.build.cell.skeleton":function(a){var b=a.data,c=b.hasOwnProperty("x"),d=b.hasOwnProperty("y"),e=c&&d?"boardplus.cell.grid.skeleton":"boardplus.cell.axis.skeleton";this.bindCellTemplate(e,b)},bindCellTemplate:function(a,b){this.fire("template.bind",{name:a,data:b})},appendCellToBoardSkeleton:function(a,c){var d=a.data,e=a.element,f=b.generateId(d),g=c.find("#"+f);g.append(e),this.fireCellSkeletonBuilt({element:g,data:d})},fireCellSkeletonBuilt:function(a){this.fire("view.cell.skeleton.built",a)},"bus view.skeleton.built:last+template.boardplus.cell.grid.skeleton.bound":function(a){var b=a["view.skeleton.built"].data.element,c=a["template.boardplus.cell.grid.skeleton.bound"].data;this.appendCellToBoardSkeleton(c,b)},"bus view.skeleton.built:last+template.boardplus.cell.axis.skeleton.bound":function(a){var b=a["view.skeleton.built"].data.element,c=a["template.boardplus.cell.axis.skeleton.bound"].data;this.appendCellToBoardSkeleton(c,b)},"bus view.cell.skeleton.built":function(a){var b=this,c=a.data,d=c.data,e=d.hasOwnProperty("x"),f=d.hasOwnProperty("y");if(e&&f){var g=c.element;g.find(".i-role-card").each(function(){var a=$(this);b.fire("view.card.skeleton.built",{element:a,data:{id:a.attr("data-id"),type:a.attr("data-type")}})})}}})})