define(["jQuery","Underscore","tau/components/extensions/component.extension.base"],function(e,t,n){return n.extend({"bus configurator.ready:last + domWrapper.ready":function(t,n,i){i.board.on("click",".tau-label__finish",function(t){t.stopPropagation(),t.stopImmediatePropagation();var i=e(t.currentTarget).data();n.getEntityViewService().showEntityView({entityId:i.entityId,entityType:"finish-"+i.entityType})})}})});