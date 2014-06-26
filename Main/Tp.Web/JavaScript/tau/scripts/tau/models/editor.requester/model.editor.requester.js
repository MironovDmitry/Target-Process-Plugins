define(["Underscore","tau/core/model-base","libs/amanda/amanda"],function(e,a,i){var t=a.extend({"bus afterInit":function(){this.fire("dataBind",{}),this.validation=new i({singleError:!1});var a=this.config.store,t=function(e,i,t,s,r){return t&&i?void a.find("requester",{$query:{email:i,deleteDate:null}}).done({success:function(e){1==e[0].data.length?r("uniqueEmail"):r()}}):r()};this.validation.validators.uniqueEmail=t,e.extend(this.validation.messages,{required:function(e){var a={firstName:"First Name",lastName:"Last Name",email:"email"};return"Please enter "+a[e]},uniqueEmail:"Requester with the same email already exists",format:"Please enter valid {{validator}}"})},"bus form.parametersBound":function(e){var a=e.data,i=(this.config.store,{type:"object",properties:{firstName:{required:!0,type:"string"},lastName:{required:!0,type:"string"},email:{required:!0,type:"string",format:"email",uniqueEmail:!0}}}),t=this;this.validation.validate(a.parameters,i,function(e){e?t.fire("form.validationFailed",{errors:e}):t.fire("form.validationPassed",{data:a.parameters})})},"bus form.validationPassed":function(e){var a=e.data.data,i=this.config.store,t=this.config.context.entity;i.save("Requester",{$set:{email:a.email,login:a.email,firstName:a.firstName,lastName:a.lastName},fields:["id"]}).done({success:function(e){var a=e[0].data;i.save(t.entityType.name,{id:t.id,$set:{requesters:[{id:a.id}]},fields:["id"]}).done({success:function(){}})}})}});return t});