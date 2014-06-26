define(["Underscore","./extension.tracking.base","tau/configurator"],function(e,a,t){return a.extend({"global store.command.executed":function(a,r){if(r&&r.command&&r.command.config&&("save"==r.command.name||"remove"==r.command.name)){var n=r.command.config.id,i=n?" #"+n:"",o=r.command.type.toLowerCase();if("remove"==r.command.name)return void this.fire("track.action",{action:"delete entity",name:"delete "+o+i,area:"entity",tags:["delete "+o,"delete entity","entity"],type:o,id:n});var d=r.command.config.$set;if("save"==r.command.name&&d){var s=n||d.id?"update ":"add ",c=e.keys(d);if(0===c.length)return;var m=c.join(","),g=window.loggedUser||t.getLoggedUser()||{id:0,role:"N/A"};this.fire("track.action.id.sid",{action:s+"entity",_id:this.getHost()+"/"+a.caller.id+"/"+g.id+"/"+c.join("_"),name:s+o+i+" ["+m.toLowerCase()+"]",area:"entity",tags:[s+o,s+"entity","entity","add|update"],type:o,changes:c,params:d,id:n})}}},"global store.command.failed":function(a){var t="something is wrong";try{if(a.data&&a.data.data){a.data.data.Message&&(t=a.data.data.Message);var r=a.data.data.response;if(r){if(r.Message&&(t=r.Message),e.isArray(r)){var n=[r[1]];e.isArray(r[4])&&r[4].length>0&&r[4][0]!=n[0]&&n.push(r[4][0]),t=n.join(":&nbsp;")}r.Error&&r.Error.Message&&(t=r.Error.Message)}}}catch(i){}var o={name:t,tags:["error","rest"]};this.fire("track.error",o),this.fire("track.action",o)}})});