define(["tau/models/model.property.text.validation","tau/utils/utils.jsonSchema"],function(a,e){var t=a.extend({category:"edit",schema:e.Schema.create({type:"string",optional:!0,empty:!0,pre:["trim"],post:[function(a){var e=/^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;return a.match(e)||new this.Error("Email","Provide a valid email address"),a}]})});return t});