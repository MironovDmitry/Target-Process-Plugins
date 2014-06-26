define(["libs/jquery/jquery","libs/jquery/jquery.ui"],function(t){return function(t){t.widget("ui.sortable",t.ui.mouse,{widgetEventPrefix:"sort",options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3},_create:function(){var t=this.options;this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.floating=this.items.length?"x"===t.axis||/left|right/.test(this.items[0].item.css("float"))||/inline|table-cell/.test(this.items[0].item.css("display")):!1,this.offset=this.element.offset(),this._mouseInit()},destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled").removeData("sortable").unbind(".sortable"),this._mouseDestroy();for(var t=this.items.length-1;t>=0;t--)this.items[t].item.removeData("sortable-item");return this},_setOption:function(e,i){"disabled"===e?(this.options[e]=i,this.widget()[i?"addClass":"removeClass"]("ui-sortable-disabled")):t.Widget.prototype._setOption.apply(this,arguments)},_mouseCapture:function(e,i){if(this.reverting)return!1;if(this.options.disabled||"static"==this.options.type)return!1;this._refreshItems(e);var s=null,o=this;if(t(e.target).parents().each(function(){return t.data(this,"sortable-item")==o?(s=t(this),!1):void 0}),t.data(e.target,"sortable-item")==o&&(s=t(e.target)),!s)return!1;if(this.options.handle&&!i){var r=!1;if(t(this.options.handle,s).find("*").andSelf().each(function(){this==e.target&&(r=!0)}),!r)return!1}return this.currentItem=s,this._removeCurrentsFromItems(),!0},_mouseStart:function(e,i,s){i=this.options;var o=this;if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(e),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),t.extend(this.offset,{click:{left:e.pageX-this.offset.left,top:e.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this._generatePosition(e),this.originalPageX=e.pageX,this.originalPageY=e.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!=this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),i.containment&&this._setContainment(),i.cursor&&(t("body").css("cursor")&&(this._storedCursor=t("body").css("cursor")),t("body").css("cursor",i.cursor)),i.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",i.opacity)),i.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",i.zIndex)),this.scrollParent[0]!=document&&"HTML"!=this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",e,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!s)for(s=this.containers.length-1;s>=0;s--)this.containers[s]._trigger("activate",e,o._uiHash(this));return t.ui.ddmanager&&(t.ui.ddmanager.current=this),t.ui.ddmanager&&!i.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(e),!0},_mouseDrag:function(e){if(this.position=this._generatePosition(e),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll){var i=this.options,s=!1;this.scrollParent[0]!=document&&"HTML"!=this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-e.pageY<i.scrollSensitivity?this.scrollParent[0].scrollTop=s=this.scrollParent[0].scrollTop+i.scrollSpeed:e.pageY-this.overflowOffset.top<i.scrollSensitivity&&(this.scrollParent[0].scrollTop=s=this.scrollParent[0].scrollTop-i.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-e.pageX<i.scrollSensitivity?this.scrollParent[0].scrollLeft=s=this.scrollParent[0].scrollLeft+i.scrollSpeed:e.pageX-this.overflowOffset.left<i.scrollSensitivity&&(this.scrollParent[0].scrollLeft=s=this.scrollParent[0].scrollLeft-i.scrollSpeed)):(e.pageY-t(document).scrollTop()<i.scrollSensitivity?s=t(document).scrollTop(t(document).scrollTop()-i.scrollSpeed):t(window).height()-(e.pageY-t(document).scrollTop())<i.scrollSensitivity&&(s=t(document).scrollTop(t(document).scrollTop()+i.scrollSpeed)),e.pageX-t(document).scrollLeft()<i.scrollSensitivity?s=t(document).scrollLeft(t(document).scrollLeft()-i.scrollSpeed):t(window).width()-(e.pageX-t(document).scrollLeft())<i.scrollSensitivity&&(s=t(document).scrollLeft(t(document).scrollLeft()+i.scrollSpeed))),s!==!1&&t.ui.ddmanager&&!i.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e)}for(this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"==this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"==this.options.axis||(this.helper[0].style.top=this.position.top+"px"),i=this.items.length-1;i>=0;i--){s=this.items[i];var o=s.item[0],r=this._intersectsWithPointer(s);if(r&&o!=this.currentItem[0]&&this.placeholder[1==r?"next":"prev"]()[0]!=o&&!t.ui.contains(this.placeholder[0],o)&&("semi-dynamic"==this.options.type?!t.ui.contains(this.element[0],o):!0)){if(this.direction=1==r?"down":"up","pointer"!=this.options.tolerance&&!this._intersectsWithSides(s))break;this._rearrange(e,s),this._trigger("change",e,this._uiHash());break}}return this._contactContainers(e),t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),this._trigger("sort",e,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(e,i){if(e){if(t.ui.ddmanager&&!this.options.dropBehaviour&&t.ui.ddmanager.drop(this,e),this.options.revert){var s=this;i=s.placeholder.offset(),s.reverting=!0,t(this.helper).animate({left:i.left-this.offset.parent.left-s.margins.left+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollLeft),top:i.top-this.offset.parent.top-s.margins.top+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,function(){s._clear(e)})}else this._clear(e,i);return!1}},cancel:function(){var e=this;if(this.dragging){this._mouseUp({target:null}),"original"==this.options.helper?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();for(var i=this.containers.length-1;i>=0;i--)this.containers[i]._trigger("deactivate",null,e._uiHash(this)),this.containers[i].containerCache.over&&(this.containers[i]._trigger("out",null,e._uiHash(this)),this.containers[i].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!=this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),t.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?t(this.domPosition.prev).after(this.currentItem):t(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(e){var i=this._getItemsAsjQuery(e&&e.connected),s=[];return e=e||{},t(i).each(function(){var i=(t(e.item||this).attr(e.attribute||"id")||"").match(e.expression||/(.+)[-=_](.+)/);i&&s.push((e.key||i[1]+"[]")+"="+(e.key&&e.expression?i[1]:i[2]))}),!s.length&&e.key&&s.push(e.key+"="),s.join("&")},toArray:function(e){var i=this._getItemsAsjQuery(e&&e.connected),s=[];return e=e||{},i.each(function(){s.push(t(e.item||this).attr(e.attribute||"id")||"")}),s},_intersectsWith:function(t){var e=this.positionAbs.left,i=e+this.helperProportions.width,s=this.positionAbs.top,o=s+this.helperProportions.height,r=t.left,n=r+t.width,h=t.top,a=h+t.height,l=this.offset.click.top,c=this.offset.click.left;return l=s+l>h&&a>s+l&&e+c>r&&n>e+c,"pointer"==this.options.tolerance||this.options.forcePointerForContainers||"pointer"!=this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>t[this.floating?"width":"height"]?l:r<e+this.helperProportions.width/2&&i-this.helperProportions.width/2<n&&h<s+this.helperProportions.height/2&&o-this.helperProportions.height/2<a},_intersectsWithPointer:function(e){var i=t.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,e.top,e.height);e=t.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,e.left,e.width),i=i&&e,e=this._getDragVerticalDirection();var s=this._getDragHorizontalDirection();return i?this.floating?s&&"right"==s||"down"==e?2:1:e&&("down"==e?2:1):!1},_intersectsWithSides:function(e){var i=t.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,e.top+e.height/2,e.height);e=t.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,e.left+e.width/2,e.width);var s=this._getDragVerticalDirection(),o=this._getDragHorizontalDirection();return this.floating&&o?"right"==o&&e||"left"==o&&!e:s&&("down"==s&&i||"up"==s&&!i)},_getDragVerticalDirection:function(){var t=this.positionAbs.top-this.lastPositionAbs.top;return 0!=t&&(t>0?"down":"up")},_getDragHorizontalDirection:function(){var t=this.positionAbs.left-this.lastPositionAbs.left;return 0!=t&&(t>0?"right":"left")},refresh:function(t){return this._refreshItems(t),this.refreshPositions(!0),this},_connectWith:function(){var t=this.options;return t.connectWith.constructor==String?[t.connectWith]:t.connectWith},_getItemsAsjQuery:function(e){var i=[],s=[],o=this._connectWith();if(o&&e)for(e=o.length-1;e>=0;e--)for(var r=t(o[e]),n=r.length-1;n>=0;n--){var h=t.data(r[n],"sortable");h&&h!=this&&!h.options.disabled&&s.push([t.isFunction(h.options.items)?h.options.items.call(h.element):t(h.options.items,h.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),h])}for(s.push([t.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):t(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),e=s.length-1;e>=0;e--)s[e][0].each(function(){i.push(this)});return t(i)},_removeCurrentsFromItems:function(){for(var t=this.currentItem.find(":data(sortable-item)"),e=0;e<this.items.length;e++)for(var i=0;i<t.length;i++)t[i]==this.items[e].item[0]&&this.items.splice(e,1)},_refreshItems:function(e){this.items=[],this.containers=[this];var i=this.items,s=[[t.isFunction(this.options.items)?this.options.items.call(this.element[0],e,{item:this.currentItem}):t(this.options.items,this.element),this]],o=this._connectWith();if(o)for(var r=o.length-1;r>=0;r--)for(var n=t(o[r]),h=n.length-1;h>=0;h--){var a=t.data(n[h],"sortable");a&&a!=this&&!a.options.disabled&&(s.push([t.isFunction(a.options.items)?a.options.items.call(a.element[0],e,{item:this.currentItem}):t(a.options.items,a.element),a]),this.containers.push(a))}for(r=s.length-1;r>=0;r--)for(e=s[r][1],o=s[r][0],h=0,n=o.length;n>h;h++)a=t(o[h]),a.data("sortable-item",e),i.push({item:a,instance:e,width:0,height:0,left:0,top:0})},refreshPositions:function(e){this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());for(var i=this.items.length-1;i>=0;i--){var s=this.items[i];if(s.instance==this.currentContainer||!this.currentContainer||s.item[0]==this.currentItem[0]){var o=this.options.toleranceElement?t(this.options.toleranceElement,s.item):s.item;e||(s.width=o.outerWidth(),s.height=o.outerHeight()),o=o.offset(),s.left=o.left,s.top=o.top}}if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(i=this.containers.length-1;i>=0;i--)o=this.containers[i].element.offset(),this.containers[i].containerCache.left=o.left,this.containers[i].containerCache.top=o.top,this.containers[i].containerCache.width=this.containers[i].element.outerWidth(),this.containers[i].containerCache.height=this.containers[i].element.outerHeight();return this},_createPlaceholder:function(e){var i=e||this,s=i.options;if(!s.placeholder||s.placeholder.constructor==String){var o=s.placeholder;s.placeholder={element:function(){var e=t(document.createElement(i.currentItem[0].nodeName)).addClass(o||i.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];return o||(e.style.visibility="hidden"),e},update:function(t,e){(!o||s.forcePlaceholderSize)&&(e.height()||e.height(i.currentItem.innerHeight()-parseInt(i.currentItem.css("paddingTop")||0,10)-parseInt(i.currentItem.css("paddingBottom")||0,10)),e.width()||e.width(i.currentItem.innerWidth()-parseInt(i.currentItem.css("paddingLeft")||0,10)-parseInt(i.currentItem.css("paddingRight")||0,10)))}}}i.placeholder=t(s.placeholder.element.call(i.element,i.currentItem)),i.currentItem.after(i.placeholder),s.placeholder.update(i,i.placeholder)},_contactContainers:function(e){for(var i=null,s=null,o=this.containers.length-1;o>=0;o--)t.ui.contains(this.currentItem[0],this.containers[o].element[0])||(this._intersectsWith(this.containers[o].containerCache)?i&&t.ui.contains(this.containers[o].element[0],i.element[0])||(i=this.containers[o],s=o):this.containers[o].containerCache.over&&(this.containers[o]._trigger("out",e,this._uiHash(this)),this.containers[o].containerCache.over=0));if(i)if(1===this.containers.length)this.containers[s]._trigger("over",e,this._uiHash(this)),this.containers[s].containerCache.over=1;else if(this.currentContainer!=this.containers[s]){i=1e4,o=null;for(var r=this.positionAbs[this.containers[s].floating?"left":"top"],n=this.items.length-1;n>=0;n--)if(t.ui.contains(this.containers[s].element[0],this.items[n].item[0])){var h=this.items[n][this.containers[s].floating?"left":"top"];Math.abs(h-r)<i&&(i=Math.abs(h-r),o=this.items[n])}(o||this.options.dropOnEmpty)&&(this.currentContainer=this.containers[s],o?this._rearrange(e,o,null,!0):this._rearrange(e,null,this.containers[s].element,!0),this._trigger("change",e,this._uiHash()),this.containers[s]._trigger("change",e,this._uiHash(this)),this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[s]._trigger("over",e,this._uiHash(this)),this.containers[s].containerCache.over=1)}},_createHelper:function(e){var i=this.options;return e=t.isFunction(i.helper)?t(i.helper.apply(this.element[0],[e,this.currentItem])):"clone"==i.helper?this.currentItem.clone():this.currentItem,e.parents("body").length||t("parent"!=i.appendTo?i.appendTo:this.currentItem[0].parentNode)[0].appendChild(e[0]),e[0]==this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(""==e[0].style.width||i.forceHelperSize)&&e.width(this.currentItem.width()),(""==e[0].style.height||i.forceHelperSize)&&e.height(this.currentItem.height()),e},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var e=this.offsetParent.offset();return"absolute"==this.cssPosition&&this.scrollParent[0]!=document&&t.ui.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&"html"==this.offsetParent[0].tagName.toLowerCase()&&t.browser.msie)&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"==this.cssPosition){var t=this.currentItem.position();return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:t.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e=this.options;if("parent"==e.containment&&(e.containment=this.helper[0].parentNode),("document"==e.containment||"window"==e.containment)&&(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,t("document"==e.containment?document:window).width()-this.helperProportions.width-this.margins.left,(t("document"==e.containment?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),!/^(document|window|parent)$/.test(e.containment)){var i=t(e.containment)[0];e=t(e.containment).offset();var s="hidden"!=t(i).css("overflow");this.containment=[e.left+(parseInt(t(i).css("borderLeftWidth"),10)||0)+(parseInt(t(i).css("paddingLeft"),10)||0)-this.margins.left,e.top+(parseInt(t(i).css("borderTopWidth"),10)||0)+(parseInt(t(i).css("paddingTop"),10)||0)-this.margins.top,e.left+(s?Math.max(i.scrollWidth,i.offsetWidth):i.offsetWidth)-(parseInt(t(i).css("borderLeftWidth"),10)||0)-(parseInt(t(i).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,e.top+(s?Math.max(i.scrollHeight,i.offsetHeight):i.offsetHeight)-(parseInt(t(i).css("borderTopWidth"),10)||0)-(parseInt(t(i).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]}},_convertPositionTo:function(e,i){i||(i=this.position),e="absolute"==e?1:-1;var s="absolute"!=this.cssPosition||this.scrollParent[0]!=document&&t.ui.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,o=/(html|body)/i.test(s[0].tagName);return{top:i.top+this.offset.relative.top*e+this.offset.parent.top*e-(t.browser.safari&&"fixed"==this.cssPosition?0:("fixed"==this.cssPosition?-this.scrollParent.scrollTop():o?0:s.scrollTop())*e),left:i.left+this.offset.relative.left*e+this.offset.parent.left*e-(t.browser.safari&&"fixed"==this.cssPosition?0:("fixed"==this.cssPosition?-this.scrollParent.scrollLeft():o?0:s.scrollLeft())*e)}},_generatePosition:function(e){var i=this.options,s="absolute"!=this.cssPosition||this.scrollParent[0]!=document&&t.ui.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,o=/(html|body)/i.test(s[0].tagName);"relative"!=this.cssPosition||this.scrollParent[0]!=document&&this.scrollParent[0]!=this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset());var r=e.pageX,n=e.pageY;return this.originalPosition&&(this.containment&&(e.pageX-this.offset.click.left<this.containment[0]&&(r=this.containment[0]+this.offset.click.left),e.pageY-this.offset.click.top<this.containment[1]&&(n=this.containment[1]+this.offset.click.top),e.pageX-this.offset.click.left>this.containment[2]&&(r=this.containment[2]+this.offset.click.left),e.pageY-this.offset.click.top>this.containment[3]&&(n=this.containment[3]+this.offset.click.top)),i.grid&&(n=this.originalPageY+Math.round((n-this.originalPageY)/i.grid[1])*i.grid[1],n=this.containment?n-this.offset.click.top<this.containment[1]||n-this.offset.click.top>this.containment[3]?n-this.offset.click.top<this.containment[1]?n+i.grid[1]:n-i.grid[1]:n:n,r=this.originalPageX+Math.round((r-this.originalPageX)/i.grid[0])*i.grid[0],r=this.containment?r-this.offset.click.left<this.containment[0]||r-this.offset.click.left>this.containment[2]?r-this.offset.click.left<this.containment[0]?r+i.grid[0]:r-i.grid[0]:r:r)),{top:n-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(t.browser.safari&&"fixed"==this.cssPosition?0:"fixed"==this.cssPosition?-this.scrollParent.scrollTop():o?0:s.scrollTop()),left:r-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(t.browser.safari&&"fixed"==this.cssPosition?0:"fixed"==this.cssPosition?-this.scrollParent.scrollLeft():o?0:s.scrollLeft())}},_rearrange:function(t,e,i,s){i?i[0].appendChild(this.placeholder[0]):e.item[0].parentNode.insertBefore(this.placeholder[0],"down"==this.direction?e.item[0]:e.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var o=this,r=this.counter;window.setTimeout(function(){r==o.counter&&o.refreshPositions(!s)},0)},_clear:function(e,i){this.reverting=!1;var s=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]==this.currentItem[0]){for(var o in this._storedCSS)("auto"==this._storedCSS[o]||"static"==this._storedCSS[o])&&(this._storedCSS[o]="");this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();if(this.fromOutside&&!i&&s.push(function(t){this._trigger("receive",t,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev==this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent==this.currentItem.parent()[0]||i||s.push(function(t){this._trigger("update",t,this._uiHash())}),!t.ui.contains(this.element[0],this.currentItem[0]))for(i||s.push(function(t){this._trigger("remove",t,this._uiHash())}),o=this.containers.length-1;o>=0;o--)t.ui.contains(this.containers[o].element[0],this.currentItem[0])&&!i&&(s.push(function(t){return function(e){t._trigger("receive",e,this._uiHash(this))}}.call(this,this.containers[o])),s.push(function(t){return function(e){t._trigger("update",e,this._uiHash(this))}}.call(this,this.containers[o])));for(o=this.containers.length-1;o>=0;o--)i||s.push(function(t){return function(e){t._trigger("deactivate",e,this._uiHash(this))}}.call(this,this.containers[o])),this.containers[o].containerCache.over&&(s.push(function(t){return function(e){t._trigger("out",e,this._uiHash(this))}}.call(this,this.containers[o])),this.containers[o].containerCache.over=0);if(this._storedCursor&&t("body").css("cursor",this._storedCursor),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"==this._storedZIndex?"":this._storedZIndex),this.dragging=!1,this.cancelHelperRemoval){if(!i){for(this._trigger("beforeStop",e,this._uiHash()),o=0;o<s.length;o++)s[o].call(this,e);this._trigger("stop",e,this._uiHash())}return!1}if(i||this._trigger("beforeStop",e,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.helper[0]!=this.currentItem[0]&&this.helper.remove(),this.helper=null,!i){for(o=0;o<s.length;o++)s[o].call(this,e);this._trigger("stop",e,this._uiHash())}return this.fromOutside=!1,!0},_trigger:function(){t.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(e){var i=e||this;return{helper:i.helper,placeholder:i.placeholder||t([]),position:i.position,originalPosition:i.originalPosition,offset:i.positionAbs,item:i.currentItem,sender:e?e.element:null}}}),t.extend(t.ui.sortable,{version:"1.8.16"})}(t),t});