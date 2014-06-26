define(["libs/jquery/jquery"],function(t){Object.create&&!function(t,n){if(n in t)throw new Error('The "'+n+'" module is already defined.');var e={mouse:"onmousedown"in document,touch:"ontouchstart"in document},i=function(t){this.__setOptions(t)};if(i.prototype={constructor:i,__setOptions:function(n){var e=t.isPlainObject(n)?n:{};this.__options={dragStart:t.isFunction(e.dragStart)?e.dragStart:t.noop,drag:t.isFunction(e.drag)?e.drag:t.noop,dragEnd:t.isFunction(e.dragEnd)?e.dragEnd:t.noop}},_getOptions:function(){return this.__options},_isPointerInClientArea:function(t,n){var e=n.getBoundingClientRect(),i=e.left+n.clientLeft,o=e.top+n.clientTop,r=i+n.clientWidth,a=o+n.clientHeight,s=t.x>=i&&t.x<=r,_=t.y>=o&&t.y<=a;return s&&_},_bind:function(t,n){this.__$elements.on(t,this.__delegateSelector,n)},_unbind:function(t,n){this.__$elements.off(t,this.__delegateSelector,n)},_isValidEvent:function(n){var e=n.target,i=t(e).attr("contentEditable");return!i&&(this.__isDirect?n.currentTarget==e:!0)},_bindDragEventHandler:function(){},_unbindDragEventHandler:function(){},__bindEventHandlers:function(){this._bindDragEventHandler()},__unbindEventHandlers:function(){this._unbindDragEventHandler()},on:function(t,n,e){return this.__enabled||(this.__enabled=!0,this.__delegateSelector=n,this.__isDirect=e,this.__$elements=t,this.__bindEventHandlers()),this},off:function(){return this.__enabled&&(this.__enabled=!1,this.__unbindEventHandlers(),this.__$elements=null),this}},e.mouse){var o=function(t){i.call(this,t)};o.prototype=t.extend(Object.create(i.prototype),{constructor:o,__onDragStart:function(n){if(this._isValidEvent(n)){var e={x:n.clientX,y:n.clientY};this._isPointerInClientArea(e,n.target)&&(t("body").addClass("textSelectionDisabled"),t.browser.msie&&(t("input:focus").blur(),n.preventDefault()),this._getOptions().dragStart(n,e),t(window).on({mousemove:t.proxy(this,"__onDrag"),mouseup:t.proxy(this,"__onDragEnd")}))}},__onDrag:function(t){t.preventDefault(),this._getOptions().drag(t,{x:t.clientX,y:t.clientY})},__onDragEnd:function(n){n.preventDefault(),t("body").removeClass("textSelectionDisabled"),this._getOptions().dragEnd(n,{x:n.clientX,y:n.clientY}),t(window).off({mousemove:this.__onDrag,mouseup:this.__onDragEnd})},_bindDragEventHandler:function(){this._bind("mousedown",t.proxy(this,"__onDragStart"))},_unbindDragEventHandler:function(){this._unbind("mousedown",this.__onDragStart)}})}if(e.touch){var r=function(t){i.call(this,t)};r.prototype=t.extend(Object.create(i.prototype),{constructor:r,__onDragStart:function(n){if(this._isValidEvent(n)){var e=n.originalEvent.touches;if(1==e.length){var i=e[0],o={x:i.clientX,y:i.clientY};this._isPointerInClientArea(o,n.target)&&(n.preventDefault(),this.__touchId=i.identifier,this._getOptions().dragStart(n,o),t(window).on({touchmove:t.proxy(this,"__onDrag"),touchend:t.proxy(this,"__onDragEnd")}))}}},__onDrag:function(t){var n=t.originalEvent.changedTouches[0];n.identifier==this.__touchId&&(t.preventDefault(),this._getOptions().drag(t,{x:n.clientX,y:n.clientY}))},__onDragEnd:function(n){var e=n.originalEvent.changedTouches[0];e.identifier==this.__touchId&&(n.preventDefault(),this._getOptions().dragEnd(n,{x:e.clientX,y:e.clientY}),t(window).off({touchmove:this.__onDrag,touchend:this.__onDragEnd}))},_bindDragEventHandler:function(){this._bind("touchstart",t.proxy(this,"__onDragStart"))},_unbindDragEventHandler:function(){this._unbind("touchstart",this.__onDragStart)}})}var a={create:function(t){var n=null;return e.mouse?n=new o(t):e.touch&&(n=new r(t)),n}};t[n]=function(t){return a.create(t)}}(t,"gid")});