define(["tau/components/extensions/user/extension.user.editable","tau/models/assignment/model.property.owner.editable","tau/models/userList/extension.model.owner.Excluder","tau/models/extensions/team/extension.model.allUserRetriever"],function(e,n,t,o){return e.extend({category:"edit",extendEditorConfig:function(e){e.UserExcluder=t,e.Retriever=o},getExtensions:function(){return[n]}})});