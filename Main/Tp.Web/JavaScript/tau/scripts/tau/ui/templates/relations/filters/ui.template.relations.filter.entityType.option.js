define(["tau/core/templates-factory"],function(t){return t.register({name:"relations.filter.entityType.output",engine:"jqote2",markup:['<div class="drop-down-option i-role-option" data-option-id="<%! this.value.id %>">','<i class="tau-entity-icon tau-<%! this.value.name.toLowerCase() %>">','<%! fn.term(this.value.name, "iconSmall") %>',"</i>",'<span class="<% if (this.context.isOption) { %>tau-bubble-txt<% } else { %>property-text<% } %>">','<%! fn.term(this.value.name, "name") %>',"</span>","</div>"]})});