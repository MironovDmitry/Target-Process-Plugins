define(["tau/core/class"],function(t){var i=t.extend({init:function(t){this.items=t.data;var i=t.command,a=this.items.length;this.paging={start:i.config.$skip,end:i.config.$skip+a,count:a,hasNext:t.data.isNextPageAvailable()}}});return i});