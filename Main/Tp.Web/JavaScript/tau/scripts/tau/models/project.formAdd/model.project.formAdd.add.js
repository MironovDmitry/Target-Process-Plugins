define(["Underscore","tau/core/extension.base","tau/libs/inviter/inviter"],function(e,r,t){return r.extend({"bus configurator.ready:last + form.submitted":function(r,a,s){var i=this,n=a.getStore(),o={name:e.trim(s.name),color:e.trim(e.asString(s.color))||null,process:{id:s.process},teamProjects:s.teamProjects};s.program&&"-1"!=s.program&&(o.program={id:s.program}),n.save("project",{failureGlobal:!1,fields:["id","name","color","teamProjects"],$set:o},{success:function(e){i.fire("entity.saved",e.data)},failure:function(e){i.fire("entity.add.failure",e.data.response.Message)}}).done();var c=new t(a);c.invite(s.members).done(function(e){i.fire("members.saved",e)})},"bus configurator.ready:last + entity.saved + members.saved":function(r,t,a,s){var i=this,n=t.getStore(),o=e.compact(e.pluck(s,"success")),c=e.compact(e.pluck(s,"failure"));if(c.length){var d="Can't assign users.";this.fire("entity.add.nonFatalFailure",d)}o=e.filter(o,function(e){return e!=t.getLoggedUser().id});var m={projectMembers:e.map(o,function(e){return{user:{id:e}}})};n.save("project",{id:a.id,$set:m,fields:["id","name","color",{projectMembers:[{user:["id","firstName","lastName","avatarUri"]},{role:["id","name"]}]}]}).done(function(e){i.fire("members.connected",e[0].data)})},"bus entity.saved + members.saved + members.connected":function(e,r,t,a){this.fire("entity.add.success",a)}})});