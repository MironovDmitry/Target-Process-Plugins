define(["Underscore","tau/core/async.source.adapter"],function(n,e){return{create:function(n){return new e({onGet:function(n){n.callback({})},onSet:function(e){e.set.acid&&n.getApplicationContextService().setCurrentAcid(e.set.acid)},onBind:function(){},onUnbind:function(){}})}}});