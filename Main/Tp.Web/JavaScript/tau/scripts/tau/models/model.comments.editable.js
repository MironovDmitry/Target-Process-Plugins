define(["Underscore","tau/core/model.editable.base"],function(e,t){var n=t.extend({name:"Editable Comments",_signUpEventsIfRequired:function(){var e=this;if(!e._signedUp){e._signedUp=!0;var t=function(t){t.data.cmd.guid=+new Date,e.fire("prepareUpdate",t.data)},n=function(t){e.fire("applyUpdate",t.data)},a=function(t){t.data.cmd.guid=+new Date,e.fire("prepareRemove",t.data)},i=function(t){var n=t.data.obj.parentId,a=e.getComment(n);a&&a.deleted&&1===a.comments.length?e.store.remove("comment",{id:n}).done():e.fire("applyRemove",t.data)};e.store.unbind(e),e.store.on({eventName:"beforeSave",type:"comment",listener:e},t).on({eventName:"afterSave",type:"comment",listener:e},n).on({eventName:"beforeRemove",type:"comment",listener:e},a).on({eventName:"afterRemove",type:"comment",listener:e},i)}},"bus dataBind":function(t){var n=t.data.items;this.commentsList=this.getPlainList(n);var a=e(this.commentsList).pluck("id"),i={editable:!0,editableItems:a,deletable:!0,deletableItems:a},r=this;r._signUpEventsIfRequired(),r.fire("permissionsReady",i)},getComment:function(t){var n=t?e(this.commentsList).detect(function(e){return e.id===t}):null;return n},getPlainList:function(e){for(var t=[],n=0,a=e.length;a>n;n++){var i=e[n];t.push(i);var r=arguments.callee.call(this,e[n].comments);t=t.concat(r)}return t}});return n});