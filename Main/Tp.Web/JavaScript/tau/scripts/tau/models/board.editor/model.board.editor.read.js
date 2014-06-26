define(["Underscore","tau/core/extension.base","tau/models/board.editor/board.filter.help","tau/ui/templates/board.editor/ui.template.board.editor","tau/ui/templates/board.editor/ui.template.board.editor.newlist"],function(e,t,i,n,r){var s=t.extend({"bus beforeInit":function(e,t){var i=t.config.context.configurator;this.fire("configurator.ready",i)},"bus configurator.ready":function(e,t){var i=this;t.getAppStateStore().get({fields:["acid"],callback:function(e){i.fire("acid.ready",e.acid)}}),t.getAppStateStore().unbind({listener:this}),t.getAppStateStore().bind({fields:["acid"],listener:this,callback:function(){i.fire("refresh")}});var n=t.service("boardSettings");n.get({fields:["ownerIds"],callback:function(e){var n=t.getLoggedUser(),r={edit:t.getBoardAccessService().isEditable(e,n)};i.fire("accessData.ready",r)}})},"bus configurator.ready:last + acid.ready:last + accessData.ready:last + form.readyToUpdate":function(e,t,i,n){var r=t.service("boardSettings"),s=this;this.getSpaceTotal(t.getSliceFactory(),r,i,function(e){s.fire("updateData.ready",{space:e,access:n})})},"bus configurator.ready + acid.ready":function(e,t,i){var n=this,r=t.service("boardSettings");r.unbind({listener:this}),r.bind({listener:this,fields:["viewMode"],callback:function(e){this.setTemplate(e.viewMode),this.fire("refresh")}}),$.when(this.getSpaceTotal(t.getSliceFactory(),r,i),this.getViewMode(r)).done(function(e,i){n.setTemplate(i),n.fire("dataBind",{user:t.getLoggedUser(),space:e})})},getViewMode:function(e){return e.get({fields:["viewMode"]}).then(function(e){return e.viewMode})},setTemplate:function(e){var t="newlist"===e?r:n;this.fire("board.editor.setTemplate",t)},"bus configurator.ready + destroy":function(e,t){var i=t.service("boardSettings");i.unbind({listener:this})},getSpaceTotal:function(t,i,n,r){var s=this,a=$.Deferred(),c=[];return c.push(function(e){s.spaceAvailable(t,i,n,e)}),c.push(function(e){s.spaceCells(t,i,n,e)}),c.push(function(e){s.spaceAxisX(t,i,n,e)}),c.push(function(e){s.spaceAxisY(t,i,n,e)}),c.push(function(e){s.getPredefinedFilters(i,e)}),e.parallel(c,function(e,t){var i=s.processSpaces(t);r&&r(i),a.resolve(i)}),a},spaceAvailable:function(e,t,i,n){var r={global:{acid:i}},s=e.create({definition:r});s.space().done(function(e){n(!1,{space:e.data})})},spaceCells:function(e,t,i,n){t.get({fields:["name","x","y","cells","zoomLevel","hierarchyMode","viewMode","acid"],callback:function(t){var r={definition:{global:{acid:i},x:t.x,y:t.y,cells:t.cells}},s=e.create(r);s.on("error",function(){n(!1,{space:{},settings:t})}),s.space().done(function(e){n(!1,{space:e.data,settings:t})})}})},spaceAxisX:function(e,t,i,n){t.get({fields:["name","x","y","cells","zoomLevel"],callback:function(t){var r={definition:{global:{acid:i},y:t.y,cells:t.cells}},s=e.create(r);s.on("error",function(){n(!1,{space:{}})}),s.space().done(function(e){n(!1,{space:e.data})})}})},spaceAxisY:function(e,t,i,n){t.get({fields:["name","x","y","cells","zoomLevel"],callback:function(t){var r={definition:{global:{acid:i},x:t.x,cells:t.cells}},s=e.create(r);s.on("error",function(){n(!1,{space:{}})}),s.space().done(function(e){n(!1,{space:e.data})})}})},processSpaces:function(t){var i={spaceDefault:t[0].space,spaceAvailable:{cells:t[1].space.cells||[],x:t[2].space.axes||[],y:t[3].space.axes||[],hierarchyMode:"inside",viewMode:""},settingsCurrent:t[1].settings},n=t[4],r={x:{name:"x",types:[],filter:"",useFilter:!0,predefinedFilters:n.x||[],orderingName:"",orderingDirection:"Asc"},y:{name:"y",types:[],filter:"",useFilter:!0,predefinedFilters:n.y||[],orderingName:"",orderingDirection:"Asc"},cells:{name:"cells",types:[],filter:"",useFilter:!0,predefinedFilters:n.cells||[],orderingName:"",orderingDirection:"Asc"},hierarchyMode:null,viewMode:null},s=function(e){return e.toLowerCase()};r.hierarchyMode=i.settingsCurrent.hierarchyMode,r.viewMode=i.settingsCurrent.viewMode;var a=e.bind(function(t){r[t].types=e.map(i.spaceDefault.axes.items,function(n){var r={id:n.id,name:n.name,isAvailable:e.any(i.spaceAvailable[t].items,function(e){return s(e.id)===s(n.id)}),isSelected:i.settingsCurrent[t]&&e.any(i.settingsCurrent[t].types,function(e){return s(e)===s(n.id)})};return r.isAvailable=r.isSelected?!0:r.isAvailable,r.groupName=n.groupName,r}),r[t].filter=i.settingsCurrent[t]?i.settingsCurrent[t].filter||"":"",r[t].useFilter=this._isFilterEnabled(i.settingsCurrent[t]||{},r[t]);var n=e.filter(r[t].types,function(e){return e.isAvailable});r[t].grouped=e.groupBy(n,function(e){return e.groupName||"default"}),r[t].grouped=e.map(r[t].grouped,function(e,t){return{name:t,items:e}}),r[t].grouped=e.sortBy(r[t].grouped,function(e){return"default"==e.name?"AAAA":e.name});var a=i.settingsCurrent[t]?i.settingsCurrent[t].types[0]||"":"",c=e.find(i.spaceAvailable[t].items,function(e){return s(e.id)===s(a)});c||(c={});var l=i.settingsCurrent&&i.settingsCurrent[t]?i.settingsCurrent[t].ordering:{},o=l&&l.name;r[t].orderingNames=e.map(c.orderings||[],function(e){return{id:e.name,name:e.name,isSelected:e.name==o,direction:e.direction}}),r[t].orderingDirection=this.getOrderingDirection(l,c.orderings)},this);a("x"),a("y"),r.cells.types=e.map(i.spaceDefault.cells.items,function(t){var n={id:t.id,name:t.name,isAvailable:e.any(i.spaceAvailable.cells.items,function(e){return s(e.id)===s(t.id)}),isSelected:e.any(i.settingsCurrent.cells.types,function(e){return s(e)===s(t.id)})};return n.isAvailable=n.isSelected?!0:n.isAvailable,n}),r.cells.filter=i.settingsCurrent.cells.filter||"",r.cells.useFilter=this._isFilterEnabled(i.settingsCurrent.cells||{},r.cells);var c=i.settingsCurrent&&i.settingsCurrent.cells.ordering,l=c&&c.name;return r.cells.orderingDirection=this.getOrderingDirection(c,t[1].space.cells.orderings.items),r.cells.orderingNames=e.map(t[1].space.cells.orderings.items,function(e){return{id:e.name,name:e.name,isSelected:e.name==l,direction:e.direction}}),r.acid=t[1].settings.acid||"",r},_isFilterEnabled:function(e,t){var i=e.useFilter,n=null!==i&&void 0!==i;return n?e.useFilter:!!t.filter},getOrderingDirection:function(t,i){var n=i&&i[0]&&i[0].direction;if(t){if(t.direction)n=t.direction;else var r=e.find(i,function(e){return e.name==t.name});r&&(n=r.direction)}return n},getPredefinedFilters:function(e,t){e.get({fields:["x","y","cells"],callback:function(e){(new i).get({x:e.x,y:e.y,cells:e.cells}).done(function(e){t(!1,e)})}})},getSpaceEmpty:function(){var e={x:{name:"x",types:[],filter:""},y:{name:"y",types:[],filter:""},cells:{name:"cells",types:[],filter:""},hierarchyMode:null,viewMode:null};return e}});return s});