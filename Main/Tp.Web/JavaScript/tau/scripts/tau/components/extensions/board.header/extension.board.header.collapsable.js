define(["tau/components/extensions/component.extension.base"],function(e){return e.extend({"bus afterRender":function(e){var t=this,n=e.data.element;n.click(function(){t.fire("toggleHeader")})},"bus beforeInit":function(e){var t=this,n=e.data.config.context.configurator.getAppStateStore();n.unbind({listener:t}),n.get({fields:["detailed"],callback:function(e){t.fire("detailedChanged",e.detailed)}}),n.bind({fields:["detailed"],listener:t,callback:function(e){t.fire("detailedChanged",e.detailed)}})},"bus componentsCreated:last+detailedChanged":function(e){for(var t=e.componentsCreated.data,n=e.detailedChanged.data?"enable":"disable",a=0;a<t.length;a++)t[a].component.fire(n)},"bus beforeInit:last+toggleHeader":function(e){var t=e.beforeInit.data.config.context.configurator;t.getAppStateStore().get({fields:["detailed"],callback:function(e){var n=!e.detailed;t.getAppStateStore().set({set:{detailed:n}})}})}})});