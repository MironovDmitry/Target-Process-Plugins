define(["tau/core/templates-factory"],function(t){var a={engine:"jqote2",name:"test-step-run-switch",markup:['<div class="test-case-description_switch i-role-switch">',"<% if(this.passed) { %>",'<button class="tau-btn tau-btn-big tau-passed i-role-switch-btn active" data-result="passed">Passed</button>','<button class="tau-btn tau-btn-big tau-failed i-role-switch-btn" data-result="failed">Failed</button>',"<% } %>","<% if(!this.passed) { %>",'<button class="tau-btn tau-btn-big tau-failed i-role-switch-btn active" data-result="failed">Failed</button>','<button class="tau-btn tau-btn-big tau-passed i-role-switch-btn" data-result="passed">Passed</button>',"<% } %>","</div>"].join("")};return t.register(a)});