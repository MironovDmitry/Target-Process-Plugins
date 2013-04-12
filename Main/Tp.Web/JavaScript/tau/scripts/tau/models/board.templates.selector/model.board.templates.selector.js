define(["Underscore","tau/core/extension.base"],function(_,ExtensionBase){return ExtensionBase.extend({"bus beforeInit":function(evt,initData){var configurator=initData.config.context.configurator,options=_.defaults(initData.config.options||{},{groupName:"boardTemplates",sliceTagsAt:!1});this.fire("configurator.ready",configurator),this.fire("options.ready",options),this.fire("itemsDefault.ready",[])},"bus options.ready + configurator.ready":function(evt,options,configurator){var storage=configurator.getRestStorage();storage.removeAllListeners(this),storage.on("afterInsert",function(data){data.data.$group==options.groupName&&this.fire("refresh")},this),storage.on("afterRemove",function(data){data.data.$group==options.groupName&&this.fire("item.remove.completed",data.data.id)},this),storage.select(options.groupName,{$fields:["key","publicData.name","publicData.description","publicData.tags","publicData.definition","publicData.numericPriority"],$limit:{start:0,max:10}}).done(_.bind(function(r){this.fire("itemsCustom.ready",r.data)},this))},"bus itemsDefault.ready + itemsCustom.ready":function(evt,itemsDefault,itemsCustom){var items=itemsDefault.concat(itemsCustom);_.each(items,function(item,index){item.id=index}),this.fire("items.ready",items)},"bus configurator.ready + options.ready + items.ready":function(evt,configurator,options,items){var tags=[{name:"All",count:99999,isSelected:!0},{name:"Scrum",count:99998},{name:"Kanban",count:99997},{name:"Custom",count:99996}],nTags=_.reduce(items,function(tags,item){return tags.concat(item.tags||[])},[]);nTags=_.groupBy(nTags,function(v){return v.toLowerCase()}),nTags=_.map(nTags,function(v,tag){return{name:v[0],count:v.length}}),tags=tags.concat(nTags),tags=_.uniq(tags,!1,function(v){return v.name.toLowerCase()}),tags=_.sortBy(tags,function(v){return-v.count});var limits=_.reduce(tags,function(limits,tag,i){return limits[i+1]=(limits.length?limits[i]:0)+tag.name.length+5,limits},[0]),lsInBody=($("body").width()-600)/10,pos=limits.indexOf(_.find(limits,function(v){return v>lsInBody})),sliceAt=options.sliceTagsAt||(pos<0?limits.length:pos),appPath=configurator.getApplicationPath(),user=configurator.getLoggedUser();items=_.sortBy(items,"numericPriority"),items=_.map(items,function(v,k){return{id:v.id,name:v.name,description:v.description||"",previewSrc:appPath+"/JavaScript/tau/css/images/board_templates/"+(v.numericPriority<100?v.numericPriority:"default")+".png",access:{remove:k>0&&user.isAdministrator?!0:!1}}});var moreTags=tags.slice(sliceAt);moreTags=_.sortBy(moreTags,function(v){return v.name.toLowerCase()}),this.fire("dataBind",{items:items,tags:tags.slice(0,sliceAt),moreTags:moreTags})},"bus boardSettings.ready:last + items.ready:last + item.selected":function(evt,bs,items,id){var boardSettings=bs.boardSettings,item=items[id];if(!item)return;var definition=item.definition;definition.name=item.name,definition.viewMode=definition.viewMode||"board",_.forEach(["cells","x","y"],function(axis){definition[axis]=definition[axis]||{types:[]},definition[axis]&&(definition[axis]=_.defaults(definition[axis],{types:[],ordering:{name:null,isDescending:!1},filter:""}))}),definition&&boardSettings.setDef({set:definition}).done(_.bind(function(){this.fire("board.template.selected",definition),this.fire("item.selected.completed",id)},this))},"bus configurator.ready:last + options.ready:last + items.ready:last + item.remove":function(evt,configurator,options,items,id){var item=_.find(items,function(v){return v.id==id});if(!item)return;var storage=configurator.getRestStorage();storage.remove(options.groupName,{id:item.id,$key:item.key}).done()},"bus configurator.ready > destroy":function(evt,configurator){var storage=configurator.getRestStorage();storage.removeAllListeners(this)}})})