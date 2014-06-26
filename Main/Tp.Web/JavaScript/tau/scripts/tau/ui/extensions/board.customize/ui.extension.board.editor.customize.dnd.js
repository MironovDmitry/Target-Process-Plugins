define(["Underscore","jQuery","tau/components/extensions/component.extension.base","tau/ui/extensions/board.customize/ui.board.editor.customize.editor.helper"],function(e,t,n,r){return n.extend({init:function(e){this._super(e),this.helper=r},"bus afterRender:last  + child.customize.editor.ready:last + child.customize.library.ready:last":function(e,n){var r=this,i=n.element,o=this.helper,s=o.CLASS_MAP,a=function(e){var t=e.offset(),n=t.left,r=t.left+e.outerWidth(!0),i=function(e){return"."+e+":not(."+s.BOARD_UNIT_DND_PROXY+"):visible:not(."+s.BOARD_UNIT_DND_HELPER+"):last"},o=e.children().filter(i(s.BOARD_UNIT_ALIGNMENT_BASE));o.offset()&&(n=o.offset().left+o.outerWidth(!0));var a=e.children().filter(i(s.BOARD_UNIT_ALIGNMENT_ALT));return a.offset()&&(r=a.offset().left),n+(r-n)/2},l=function(e){var t=e.offset(),n=t.left,r=t.left+e.outerWidth(!0);return n+(r-n)/2},c=i.find("."+s.LAYOUT_COMPONENTS_SET),d=null,u=10,f=function(e){return e.clone().addClass(s.BOARD_UNIT_DND_HELPER).removeClass(s.BOARD_UNIT_DND_SOURCE).css({zIndex:"99999",cursor:"move",outline:"none",width:e.outerWidth(!0)}).removeAttr("title")},_=function(e,t,n){var r=e.style.display||"";document.body.style.cursor=e.style.cursor,e.style.display="none";var i=document.elementFromPoint(t,n);return e.style.display=r,i&&i!=document||(i=document.body),i},O=function(e,t,n){return setTimeout(function(){var r=e.parent(),l=o.isDoubleLineUnit(e),c=t.index()!=r.index();if(l&&c){var d;t.index()>r.index()?(d=t.prev(),d.hasClass(s.NOT_DROP)&&(d=t)):(d=t,d.next().length&&d.next().hasClass(s.NOT_DROP)&&(d=d.prev())),t=d,o.setSectionStyles(t,e)}o.appendToSection(e,t),o.handleDragOverStretchableUnit(e,t),l&&c&&o.resetSectionStyles(r,e);var u=a(t)>n;o.setAlignment(o.getPlaceholder(i),u)},u)},h=function(e,t,n){return setTimeout(function(){var r=l(o.getUnitHolder(t));t.hasClass(s.BOARD_UNIT_ALIGNMENT_BASE)?(o.setAlignment(e,!0),r>n?o.insertBeforeUnit(t,e):o.insertAfterUnit(t,e)):(o.setAlignment(e,!1),r>n?o.insertAfterUnit(t,e):o.insertBeforeUnit(t,e)),o.handleDragOverStretchableUnit(e,t.parent().eq(0))},u)},v=function(e){var t=o.activateUnitInLibrary(e,c),n=t.outerHeight();if(t.position()){var r=t.position().top,a=i.find("."+s.LAYOUT_COMPONENTS_SET_ITEM_LIST),l=a.height(),d=r+n-a.position().top<0,u=r-n>l;(d||u)&&a.scrollTo(t)}},T=function(e,n){clearTimeout(d);var r=t(_(n.helper[0],e.clientX,e.clientY)),a=o.getPlaceholder(i),l=!r.closest("."+s.NOT_DROP).length,c=t("."+s.BOARD_UNIT_DND_HELPER);c.toggleClass(s.BOARD_UNIT_DND_NOT_DROP,!l),l?c.css("cursor","move"):c.css("cursor","not-allowed");var u=r.closest("."+s.LAYOUT_COMPONENTS_SET).length;u?(v(n.helper),o.resetSectionStyles(a.parent(),a),o.hidePlaceholder(a)):(o.setSectionStyles(a.parent(),a),o.showPlaceholderOutLibrary(a));var f=o.allowToDrop(r),T=f&&o.isSectionCardElement(r);T&&(d=O(a,r,e.pageX));var D=o.getUnitHolder(r);D.length&&(r=D);var N=o.isOverUnit(r);N&&(o.showPlaceholder(a),o.setOptionScroll(i,{point:{x:e.clientX,y:e.clientY}}),d=h(a,o.getUnit(r),e.pageX))},D=function(e,t){i.removeClass(s.DND_IN_PROGRESS);var n=o.getPlaceholder(i);o.destroyScroll(i),o.getSections(i).removeClass(s.NOT_DROP),i.removeClass(s.NOT_DROP);var a=n.is(":visible");a?(o.enableUnitInCard(n),o.disableUnitInLibrary(t.helper,c)):(o.removeFromSection(n),o.enableUnitInLibrary(t.helper,c)),o.unfreezeStretchableUnits(i),r.fire("public.card.changed",o.getCard(i))},N=function(e){o.initializeScroll(i),o.freezeStretchableUnits(i),i.addClass(s.DND_IN_PROGRESS);var n=t(e.currentTarget);i.removeClass(s.NOT_DROP);var r=o.getSections(i);n.closest("."+s.CARD).length?(n.parent().removeClass(s.NOT_DROP),o.addDraggableClasses(n)):(o.checkAvailableSpaceOnCard(r,n,c)||i.addClass(s.NOT_DROP),o.preInsertUnitOnCard(n,r,c)),r.each(function(e,r){var i=t(r);i.toggleClass(s.NOT_DROP,!o.isAvailableSpaceOnSection(i,n,c))})};o.fixLayoutNearStretchable(i),i.off("mouseover.dnd"),i.on("mouseover.dnd","."+s.BOARD_UNIT_DND_SOURCE,function(e){var n=t(e.currentTarget);n.draggable({appendTo:i,addClasses:!1,containment:'[role="customize"]',helper:function(e){var n=t(e.currentTarget);return f(n)},drag:T,stop:D,start:N})})}})});