define(["tau/components/component.creator","tau/models/model.user.settings","tau/ui/extensions/user.settings/ui.extension.user.settings","tau/ui/templates/user.settings/ui.template.user.settings"],function(e,t,s,n){return{create:function(u){var a={name:"avatar",extensions:[t,s],template:n};return u["queue.bus"]=!0,e.create(a,u)}}});