define(["Underscore","jQuery","tau/core/class","tau/core/event","tau/utils/utils.translation"],function(e,t,i,n,s){return n.extend(i.extend({init:function(e,t,i,n,s){this.store=e,this.store2=t,this.contextService=i,this.groups=[],this.entity=n,s&&this.listenServer()},load:function(){return t.when(this.loadGroups()).then(e.bind(this.loadAssignments,this))},loadGroups:function(){return t.when(this.loadRoles()).then(e.bind(this.createGroupsFromRoles,this))},loadRoles:function(){return"feature"===this.entity.entityType.name.toLowerCase()?this.loadFeatureRoles():this.loadEntityRoles()},loadEntityRoles:function(){var e=t.Deferred();return this.store.get(this.entity.entityType.name,{id:this.entity.id,fields:[{roleEfforts:[{role:["id","name"]}]}]}).done(function(t){e.resolve(t[0].data.roleEfforts)}.bind(this)),e},loadFeatureRoles:function(){var i=t.Deferred();return t.when(this.loadProcessId()).then(function(){this.store.get("process",{id:this.processId,nested:!0,fields:[{entityStates:["id",{role:["id","name","hasEffort","isPair"]},{entityType:["id","name"]}],list:!0}]}).done(function(t){var n=e.filter(t[0].data.entityStates,function(e){return e.role&&"feature"===e.entityType.name.toLowerCase()});i.resolve(n)}.bind(this))}.bind(this)),i},loadProcessId:function(){return t.when(this.contextService.findByEntity(this.entity)).then(e.bind(function(e){return this.processId=e.processes[0].id,this.processId},this))},ASSIGNMENT_FIELDS:["id",{role:["id","name"]},{generalUser:["id","firstName","lastName","avatarUri","email"]}],loadAssignments:function(){var i=t.Deferred();return this.store.get(this.entity.entityType.name,{id:this.entity.id,fields:[{assignments:this.ASSIGNMENT_FIELDS}]}).done(e.bind(function(e){this.assignments=e[0].data.assignments,this.groups=this.processAssignments(this.assignments),i.resolve(this.groups)},this)),i},createGroupsFromRoles:function(t){this.groups=e.chain(t).pluck("role").compact().uniq(function(e){return e.id}).map(this.createGroupFromRole).value()},createGroupFromRole:function(e){return{id:e.id,name:s.shorten(e.name),role:e,users:[]}},processAssignments:function(t){return e.forEach(t,function(t){var i=e.find(this.groups,function(e){return e.role.id==t.role.id});if(!i){var n=this.createGroupFromRole(t.role);this.groups.push(n),i=n}this.addToGroup(i,this.processUser(t.generalUser))},this),this.groups},processUser:function(t){var i=e.asString(t.firstName)+" "+e.asString(t.lastName);return e.trim(i)||(i=t.email),t=e.extend(e.pick(t,"id","firstName","lastName","email","avatarUri"),{name:i,_avatarUri:t._avatarUri||t.avatarUri}),t.avatarUri=t._avatarUri+"20",t},findGroupById:function(t){return e.findWhere(this.groups,{id:t})},processFormData:function(i){var n,s=this.findGroupById(parseInt(i.groupId,10)),r=s.users,o=i.users,a=this.store,d=[],u=Math.max(r.length,o.length);for(n=0;u>n;n++){var h=r[n],f=o[n];if(h&&f&&h.id!=f.id||!h||!f)break}var c=r.slice(n),l=o.slice(n);e.forEach(c,e.bind(function(t){this.removeFromGroup(s,t),d.push(e.bind(function(t,i){this.store2.findAll(e.sprintf("Assignment?where=(GeneralUser.id=%d and Assignable.id=%d and Role.id=%d)",t.id,this.entity.id,s.id)).then(function(t){e.forEach(t,function(e){a.remove("assignments",{id:e.id}).done({success:function(){},failure:function(){}})}),i()})},this,t))},this)),e.forEach(l,e.bind(function(t){this.addToGroup(s,this.processUser(t)),d.push(e.bind(function(t,i){var n={role:{id:s.role.id},generalUser:{id:t.id},assignable:{id:this.entity.id}};a.save("assignments",{$set:n}).done({success:function(){i()},failure:e.bind(function(){this.removeFromGroup(s,t),i()},this)})},this,t))},this));var m=t.Deferred();return e.series(d,function(){m.resolve()}),m},listenServer:function(){this.store.unbind(this),this.store.on({eventName:"afterSave",type:"assignment",listener:this},e.bind(function(i){var n=i.data.obj.id;t.when(this.findOwnAssignmentById(n)).then(e.bind(function(e){e&&this.addChangedAssignment(e)},this))},this)),this.store.on({eventName:"afterRemove",type:"assignment",listener:this},e.bind(function(i){var n=i.data.obj.id;t.when(this.findOwnAssignmentById(n)).then(e.bind(function(e){e&&this.removeChangedAssignment(e)},this))},this))},findOwnAssignmentById:function(i){var n=e.findWhere(this.assignments,{id:i});if(n)return n;var s=t.Deferred();return this.store.get("assignment",{id:i,fields:this.ASSIGNMENT_FIELDS,errorHandler:function(){return!1}}).done({success:e.bind(function(e){this.assignments.push(e[0].data),s.resolve(e[0].data)},this),failure:e.bind(function(){s.resolve(null)},this)}),s},addChangedAssignment:function(t){var i=e.find(this.groups,function(e){return e.role.id==t.role.id});if(i){var n=e.find(i.users,function(e){return e.id==t.generalUser.id});n||this.addToGroup(i,this.processUser(t.generalUser))}},removeChangedAssignment:function(t){var i=e.find(this.groups,function(e){return e.role.id==t.role.id});if(i){var n=e.find(i.users,function(e){return e.id==t.generalUser.id});n&&this.removeFromGroup(i,n)}},addToGroup:function(e,t){e.users.push(t)},removeFromGroup:function(t,i){var n=e.findWhere(t.users,{id:i.id});n&&(t.users=e.without(t.users,n))}}))});