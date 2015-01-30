define(["require","jQuery","Underscore","libs/parseUri","tau/service.container","tau/configurator","tau/services/service.navigator","tau/components/component.application.generic","tau/ui/extensions/application.generic/ui.extension.application.generic.boardSpecific","tau/components/extensions/extension.tracking.performance","tau/components/extensions/extension.views.menu.comet.listener","tau/components/extensions/dashboard/extension.dashboard.widget.registry.builder","main.boardplus.login","main.boardplus.routes","tp/mashups.loader","Modernizr","tracking/tauspy"],function(e){function n(e){var n=new a;n._id=i.uniqueId("board_"),n.isBoardEdition=!0,n.setWindow(window),n.setFeaturesService(n.getWindow().tauFeatures),n.setLoggedUser(n.getWindow().loggedUser);var t=new s(n,{parameterName:e});return n.registerService("navigator",t),n}var t=e("jQuery"),i=e("Underscore"),o=e("libs/parseUri"),a=e("tau/service.container"),r=e("tau/configurator"),s=e("tau/services/service.navigator"),u=e("tau/components/component.application.generic"),c=e("tau/ui/extensions/application.generic/ui.extension.application.generic.boardSpecific"),p=e("tau/components/extensions/extension.tracking.performance"),d=e("tau/components/extensions/extension.views.menu.comet.listener"),g=e("tau/components/extensions/dashboard/extension.dashboard.widget.registry.builder"),l=e("main.boardplus.login"),m=e("main.boardplus.routes"),v=e("tp/mashups.loader");e("Modernizr"),e("tracking/tauspy"),r.isBoardEdition=!0,t(function(){var t="page",i=n(t),a=r.getGlobalBus();if(tauFeatures["load.progress"]){var s={},f=function(){a.removeAllListeners(s),setTimeout(function(){tauLoadProgress.activityEnd("app.init").remove()},4)};a.addEventListener("error",f,s),a.addEventListener("contentRendered",f,s)}new l(i,t).process().then(function(){var n={name:"application board",options:{applicationId:t},routes:m.createApplicationRoutes(),context:{configurator:i},extensions:[c,p,d,g]},a=u.create(n),r=function(){tauFeatures["load.progress"]&&tauLoadProgress.activityEnd("user.mashups").activity("app.init"),a.initialize(n)
};o(location.href).hasQueryKey("nomashups")?r():i.getFeaturesService().isEnabled("mashups.loader")?v.initDeferred.done(function(){v.loadState.beforeAppInit.status.done(function(){r()})}):e(["user/mashups"],function(){r()})})})});