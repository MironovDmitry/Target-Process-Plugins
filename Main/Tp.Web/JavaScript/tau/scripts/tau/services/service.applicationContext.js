define(["tau/core/class","tau/configurator"],function(a,b){var c=a.extend({init:function(a){this.store=a||b.getStore()},getApplicationContext:function(a,b){this.store.get("context",{id:a.id,fields:["id","acid","culture","edition",{loggedUser:["id","email","isAdministrator"]},{processes:["id","name","terms","practices","customFields"]},{selectedProjects:["id","name",{process:["id","name"]}]}]}).done({success:function(a){b.success.apply(null,[a[0].data])}})}});return c})