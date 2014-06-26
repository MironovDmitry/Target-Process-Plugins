define(["Underscore","tau/core/model-base"],function(t,e){return e.extend({INITIAL_STATE:"b64_X0luaXRpYWw_2_",FINAL_STATE:"b64_X0ZpbmFs_",ENTITY_STATE:"entitystate","bus afterInit":function(t){this.fire("dataBind",{});var e=t.data.config.context.configurator;this.fire("configurator.ready",e)},getSlice:function(e,i){var n=$.Deferred();return this.getDefinition(i).done(t.bind(function(i){e.getAppStateStore().get({fields:["acid"],callback:function(r){var s={};s.global={acid:r.acid},s=t.extend(s,i);var a=e.getSliceFactory().create({definition:s});n.resolve(a)}})},this)),n},getDefinition:function(t){var e=$.Deferred();return t.get({fields:["cells","x","y"],callback:function(t){e.resolve({cells:t.cells,x:t.x,y:t.y})}}),e},getLimitFields:function(e,i){var n=$.Deferred();return this.getSlice(e,i).done(t.bind(function(t){var e,i=t.config.definition;i.y&&i.y.types&&i.y.types[0]==this.ENTITY_STATE&&(e="y"),i.x&&i.x.types&&i.x.types[0]==this.ENTITY_STATE&&(e="x"),e?t[e]({$take:999}).done(function(t){n.resolve(t.data.items)}):n.reject()},this)),n},limitValues:function(e){var i=$.Deferred();return e.get({fields:["limits"],callback:t.bind(function(t){i.resolve(t.limits&&t.limits[this.ENTITY_STATE]||{})},this)}),i},getAccess:function(t,e){var i=$.Deferred(),n=t.getLoggedUser(),r=t.getBoardAccessService();return e.get({fields:["ownerIds"],callback:function(t){return i.resolve({edit:r.isEditable(t,n)})}}),i},getData:function(e,i){return $.when(this.getLimitFields(e,i),this.limitValues(i),this.getAccess(e,i)).then(t.bind(function(e,i,n){return e=t.reduce(e,function(e,n){var r="y";if(n.x&&(r="x"),n[r].toString()!==this.INITIAL_STATE&&n[r].toString()!==this.FINAL_STATE){var s=i[n[r]];(!t.isNumber(s)||t.isNaN(s))&&(s=""),n.dynamic.items[0].value=s,e.push(n.dynamic.items[0])}return e},[],this),{fields:e,access:n,values:i}},this))},loadData:function(e,i){return t.bind(function(){this.getData(e,i).done(t.bind(function(t){this.fire("dataLimits.ready",t)},this)).fail(t.bind(function(){this.fire("dataLimits.ready",{fields:[],access:{edit:!1}})},this))},this)},"bus configurator.ready + boardSettings.ready":function(t,e,i){i=i.boardSettings;var n=this.loadData(e,i);n(),e.getAppStateStore().unbind({listener:this}),e.getAppStateStore().bind({fields:["acid"],listener:this,callback:n}),i.unbind({listener:this}),i.bind({fields:["x","y","cells"],listener:this,callback:n})},"bus configurator.ready + boardSettings.ready + destroy":function(t,e,i){e.getAppStateStore().unbind({listener:this}),i.boardSettings.unbind({listener:this})}})});