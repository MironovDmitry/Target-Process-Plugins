define(["tau/components/extensions/component.extension.base","tp/reports/contextProvider"],function(t,e){return t.extend({"bus afterInit":function(t,n){var o=this,i=n.config.context.configurator,c=i.getAppStateStore(),r=i.getApplicationContextService();c.get({fields:["acid"],callback:function(t){r.getApplicationContext({acid:t.acid},{success:function(t){o.fire("contextProvider.ready",new e(t))}})}})}})});