define(["tp/reports/burndown/filterStorage","tau/storage/api"],function(t,e){return t.extend({init:function(t){this.api=new e,this.groupName=t.groupName,this.key=t.key},scopeData:"publicData"})});