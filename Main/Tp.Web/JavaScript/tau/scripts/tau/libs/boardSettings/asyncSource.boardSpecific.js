define(["Underscore","tau/core/async.source.adapter"],function(n,e){var a=function(n,a){var t=n.getBoardApiService();return new e({onGet:function(n){t.getBoardData(a.id).done(function(e){for(var a=e.data,t={},r=0;r<n.fields.length;r++){var o=n.fields[r];a.hasOwnProperty(o)&&(t[o]=a[o])}n.callback(t)})},onSet:function(n){var e=n.set;e.isDraft=!1,t.setBoardData(a.id,e).done(function(){n.callback(e)})},onBind:function(){},onUnbind:function(){}})};return{create:a}});