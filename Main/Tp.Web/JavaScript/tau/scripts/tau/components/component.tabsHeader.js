define(["tau/components/component.creator","tau/views/view.container","tau/components/extensions/component.creator.extension","tau/ui/extensions/tabsHeader/ui.extension.tabsHeader.layout","tau/ui/extensions/tabsHeader/ui.extension.tabsHeader.more","tau/ui/templates/tabsHeader/ui.template.tabsHeader"],function(e,t,n,a,o,s){return{create:function(i){var r=_.defaults(i.options||{},{more:!1}),u={extensions:_.compact([n,a,r.more?o:null].concat(i.extensions||[])),ViewType:t,template:i.template||s};return e.create(u,i)}}});