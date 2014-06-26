define(["tau/core/templates-factory"],function(t){return t.register({name:"board.plus.emptyMessage",engine:"jqote2",markup:['<% var isEmpty = this.type == "isEmpty"; %>','<div class="tau-no-data-in-slice <% if (!isEmpty) { %>tau-notconfigured<% } %> i-role-empty-message">','<div class="tau-empty-message">','<h2 class="<% if (isEmpty) { %>tau-no-data_empty<% } %> i-role-empty-message-text">',"<%! this.message %>","</h2>","<% if (!isEmpty) { %>",'<div class="tau-col">','<div class="tau-txt">Select the cards you want<br />to see in the View</div>','<div class="tau-step-pic tau-step1-pic"></div>',"</div>",'<div class="tau-col">','<div class="tau-txt">Set horizontal<br />and vertical lanes</div>','<div class="tau-step-pic tau-step2-pic"></div>',"</div>",'<div class="tau-col">','<div class="tau-txt">Use filters</div>','<div class="tau-step-pic tau-step3-pic"></div>',"</div>","<% } %>","</div>","</div>"]})});