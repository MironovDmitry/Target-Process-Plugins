define([],function(){return{name:"property.color",engine:"jqote2",markup:["<div>",'<span class="property tau-property tau-property-<%! this.name %> <% if (!this.value) { %> tau-property_empty_true<% } %>">','<span class="property-text tau-property__value i-role-output" data-placeholder="<%! this.placeholderText || "click to edit" %>">',"<% if (this.value) { %>",'<i class="tau-icon tau-icon_type_color" style="background-color: <%= this.value %>;"></i>',"<% } %>","</span>","</span>","</div>"]}});