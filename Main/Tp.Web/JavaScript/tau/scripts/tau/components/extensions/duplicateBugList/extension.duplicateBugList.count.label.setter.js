define(["jQuery","tau/components/extensions/component.extension.base"],function(e,t){return t.extend({"bus afterRender+duplicateBugCountRetrieved":function(e){var t=e.duplicateBugCountRetrieved.data.count;t>0&&this.fire("setBadgeData",t.toString())}})});