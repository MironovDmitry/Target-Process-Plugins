define(["Underscore","tau/service.container","tau/core/component-base","tau/models/application/model.application.main","tau/core/view-base","tau/ui/extensions/application.generic/ui.extension.application.generic.routing","tau/ui/extensions/application.generic/ui.extension.application.generic.controller","tau/ui/extensions/application.generic/ui.extension.application.generic.navigation","tau/ui/extensions/application.generic/ui.extension.application.generic.history","tau/ui/extensions/application.generic/ui.extension.application.generic.integration","tau/ui/extensions/application.generic/ui.extension.application.generic.errorBar","tau/ui/extensions/application.generic/ui.extension.application.generic.popup","tau/ui/extensions/application.generic/ui.extension.application.generic.coverView","tau/ui/templates/application/ui.template.application.generic"],function(e,i,n,t,o,a,c,r,p,u,s,g,l,x){return{create:function(m){m=m||{onCreate:function(){}};var f=m.context.configurator||new i,h=new n({name:m.name,queuedBus:!0,context:{configurator:f},template:x}),v=[t,o,a,c,r,p,u,s],w=m.integration||m.options&&m.options.integration||{};w.showInPopup===!0?v.push(g):w.showInCoverView===!0&&v.push(l),v=v.concat(m.extensions||[]),e.forEach(v,function(e){h.attach(e,m)});var d=h.bus;return f.getComponentBusRegistry().register(d),d.on("destroy",function(){f.getComponentBusRegistry().unregister(this)}),d}}});