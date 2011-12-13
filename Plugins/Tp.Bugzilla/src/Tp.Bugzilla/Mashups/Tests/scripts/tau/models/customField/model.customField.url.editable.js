define(["tau/models/model.customField.editable","tau/utils/utils.jsonSchema"],function(a,b){var c=a.extend({category:"edit",name:"Editable custom field",schema:b.Schema.create({type:"object",properties:{value:{type:"object",optional:!1,properties:{label:{type:"string",optional:!1,maxLength:30,pre:["trim"]},url:{type:"string",optional:!1,pattern:b.PATTERN_URL,pre:["trim",function(a){a.length==0&&this.schema.optional&&(this._wasError=1);return a}]}},post:function(a){if(a.label==!1||a.url==!1)a={label:null,url:null};return a}}}}),"bus validate":function(a){var b=a.data,c=b.cmd.$set.customFields[0],d=this.config.customField||this.config.data;this.schema.properties.value.properties.label.optional=!d.required,this.schema.properties.value.properties.label.empty=!d.required,this.schema.properties.value.properties.url.optional=!d.required,this.schema.properties.value.properties.url.empty=!d.required,b.validation=this.schema.validate(c)}});return c})