define(["Underscore","tau/core/model-base","tau/utils/utils.htmlConverter","tau/utils/utils.date"],function(_,ModelBase,htmlConverter,dateUtils){var customFieldsModel=ModelBase.extend({_process:function(conf,config){var urlBuilder=this.config.context.configurator.getUrlBuilder(),processor={RichText:function(conf){return conf.value=htmlConverter.fromSourceToHtml(conf.value),conf},Date:function(conf){return conf.value=dateUtils.format.date.short(dateUtils.convertToTimezone(conf.value)),conf.output=conf.value,conf},DropDown:function(conf){return conf.options=this._getOptions(conf),conf.value=_.asString(conf.value),conf.output=_.asString(conf.value),conf},Entity:function(conf){return conf.value=conf.value||{},conf.options=this._getOptions(conf),conf.value=_.defaults(conf.value,{id:null,name:"",kind:null}),conf.value.__type=conf.value.kind,conf.value.url=conf.value.__type?urlBuilder.getNewViewUrl(conf.value.id,conf.value.__type,!0):null,conf.output=conf.value.name+"",conf},MultipleSelectionList:function(conf){return conf.options=this._getOptions(conf),conf.value?(conf.value=_.asString(conf.value).split(","),conf.output=conf.value.join(", ")):(conf.value=null,conf.output=""),conf},Number:function(conf,context){return conf.value=(conf.value||_.isNumber(conf.value)?parseFloat(conf.value)+"":"").replace(".",context.applicationContext.culture.decimalSeparator),conf.output=conf.value,conf},URL:function(conf){return conf.value=conf.value||{},_.defaults(conf.value,{url:"",title:""}),conf.options=null,conf},TemplatedURL:function(conf){conf.value=conf.value||"",conf.isEmpty=conf.value==="";var choices=_.compact(conf.value.split(/\s*,\s*/g)),template=conf.options||"";return choices=_.map(choices,function(choice){return{title:choice,url:template.replace("{0}",choice)}}),conf.output=choices,conf},_getOptions:function(conf){return conf.options?_.asString(conf.options).split("\r\n"):[]}};return conf.type in processor&&(conf=processor[conf.type](conf,config.context)),conf.type!="url",conf},createConfiguration:function(sourceField,entity,processFields,entityFields,config){var fieldFromProcess=_.find(processFields,function(field){return field.type.toLowerCase()==sourceField.type.toLowerCase()&&field.name==sourceField.name}),fieldFromEntity=_.find(entityFields,function(field){return field.type.toLowerCase()==sourceField.type.toLowerCase()&&field.name==sourceField.name}),targetConfiguration={};if(fieldFromProcess&&fieldFromEntity)targetConfiguration={name:fieldFromEntity.name,type:fieldFromEntity.type,required:fieldFromProcess.required,listed:fieldFromProcess.listed,value:fieldFromEntity.value,options:fieldFromProcess.value,output:fieldFromEntity.value},targetConfiguration=this._process(targetConfiguration,config);else{if(!fieldFromProcess||!!fieldFromEntity)throw new Error("No valid configuration for field "+sourceField.name);targetConfiguration={name:fieldFromProcess.name,type:fieldFromProcess.type,required:fieldFromProcess.required,listed:fieldFromProcess.listed,value:null,options:fieldFromProcess.value,output:null},targetConfiguration=this._process(targetConfiguration,config)}return targetConfiguration},"bus configurationProvided":function(evt){var configuration=evt.data;_.isEmpty(configuration)==0&&this.fire("dataBind",configuration),this.configuration=configuration},"bus beforeInit":function(evt){var config=evt.data.config;this.store=config.store?config.store:this.store;var entity=config.context.entity,processFields=config.context.getCustomFields(),customField=config.customField||config.data,self=this,sourceField={name:customField.name,type:customField.type};this.store.get(entity.entityType.name,{id:entity.id,fields:["id","customFields"]}).done({success:function(result){var entityFields=result[0].data.customFields,configuraton=self.createConfiguration(sourceField,entity,processFields,entityFields,config);self.fire("configurationProvided",configuraton)}})}});return customFieldsModel})