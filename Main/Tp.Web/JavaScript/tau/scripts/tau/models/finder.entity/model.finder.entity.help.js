define(["Underscore","tau/core/model-base","tau/models/board.editor/board.filter.help"],function(e,r,t){return r.extend({"bus types.ready":function(e,r){var n=this;(new t).get({user_dsl:{types:r}}).done(function(e){n.fire("refresh.help.content",e)})}})});