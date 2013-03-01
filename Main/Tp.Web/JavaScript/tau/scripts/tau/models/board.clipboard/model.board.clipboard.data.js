define(["Underscore","tau/core/extension.base"],function(_,ExtensionBase){var Model=ExtensionBase.extend({"bus configurator.ready:last+options.ready:last+afterInit":function(ev,configurator,o){var self=this,clipboardManager=configurator.getClipboardManager();clipboardManager.getAll(_.bind(function(err,cards){this.fire("cards.get",cards)},this)),clipboardManager.unbind(this);var handler=_.bind(function(err,cards){this.fire("cards.ready",cards)},this);o.refreshTimeout&&(handler=_.debounce(handler,o.refreshTimeout)),clipboardManager.bind(this,handler)},"bus configurator.ready:last+cards.get":function(ev,configurator,clipboardCards){var self=this,store=configurator.getStore(),realCardsCount=clipboardCards.length;self._loadCardsData(clipboardCards,store,function(err,cards){self._buildUrl(configurator,cards,function(err,cards){realCardsCount!=cards.length&&configurator.getClipboardManager().set(cards),self.fire("cards.ready",cards),self.fire("dataBind",{cards:cards})})})},"bus configurator.ready:last+cards.readyToClear":function(ev,configurator,cardsToRemove){var clipboardManager=configurator.getClipboardManager(),self=this,cardsData=[];_.forEach(cardsToRemove,function(item){cardsData.push({id:item.id,data:{id:item.entityId,type:item.entityType}})}),clipboardManager.remove(cardsData,function(){})},"bus configurator.ready:last+cards.readyToRemove":function(ev,configurator,cardsToRemove){var clipboardManager=configurator.getClipboardManager(),store=configurator.getStore(),self=this,cardsData=[],f=[];_.forEach(cardsToRemove,function(item){f.push(_.bind(function(item,next){var self=this;store.remove(item.entityType,{id:item.entityId}).done({success:function(){next(!1,{item:item,error:!1})},failure:function(res){var r=res[0].data,error=r.status===404?!1:r.response?r.response.Message:"error";next(!1,{item:item,error:error})}})},self,item))}),_.parallel(f,function(err,results){var success=[],failure=[],toRemove=[];_.forEach(results,function(res){if(!res.error){var item=res.item;success.push(res.item),toRemove.push({id:item.id,data:{id:item.entityId,type:item.entityType}})}else failure.push(res.item),self.fire("error",{message:res.error})}),clipboardManager.remove(toRemove,function(){}),self.fire("cards.readyToRemove.after",{success:success,failure:failure})})},_loadCardsData:function(cards,store,next){var self=this;_.forEach(cards,function(card){card.data.name=null});var groups=_.chain(cards).groupByComplex(function(item){return item.data.type.toLowerCase()}).value(),indexedCards={};_.forEach(cards,function(card){indexedCards[card._id]=card});var funcs=[];_.forEach(groups,function(group){funcs.push(function(next){group.key=="user"?self._loadUserData(group,store,next):group.key=="team"?self._loadTeamData(group,store,next):group.key=="project"?self._loadProjectData(group,store,next):self._loadAssignableData(group,store,next)})}),_.parallel(funcs,function(err,groups){_.forEach(groups,function(group){_.forEach(group.items,function(item){item.data.name===null&&delete indexedCards[item._id]})}),next(null,_.values(indexedCards))})},_loadAssignableData:function(group,store,next){var ids=_.pluck(_.pluck(group.items,"data"),"id");store.find(group.key,{fields:["id","name"],$query:{id:{$in:ids}}},{success:function(res){var items=res.data,result={};_.forEach(items,function(item){result[item.id]=item.name}),_.forEach(group.items,function(card){card.data.name=result[card.data.id]||null}),next(null,group)},failure:function(res){next(null,group)}}).done()},_loadUserData:function(group,store,next){var ids=_.pluck(_.pluck(group.items,"data"),"id");store.find(group.key,{fields:["id","avatarUri","firstName","lastName","email","login"],$query:{id:{$in:ids}}},{success:function(res){var items=res.data,result={};_.forEach(items,function(item){result[item.id]={name:_.trim(_.asString(item.firstName)+" "+_.asString(item.lastName))||item.login,avatarUri:item.avatarUri}}),_.forEach(group.items,function(card){card.data.name=null,result[card.data.id]&&(card.data.name=result[card.data.id].name||null,card.data.avatarUri=result[card.data.id].avatarUri||null)}),next(null,group)},failure:function(res){next(null,group)}}).done()},_loadTeamData:function(group,store,next){var ids=_.pluck(_.pluck(group.items,"data"),"id");store.find(group.key,{fields:["id","name","icon"],$query:{id:{$in:ids}}},{success:function(res){var items=res.data,result={};_.forEach(items,function(item){result[item.id]=item}),_.forEach(group.items,function(card){card.data.name=null,result[card.data.id]&&(card.data.name=result[card.data.id].name||null,card.data.icon=result[card.data.id].icon||null)}),next(null,group)},failure:function(res){next(null,group)}}).done()},_loadProjectData:function(group,store,next){var ids=_.pluck(_.pluck(group.items,"data"),"id");store.find(group.key,{fields:["id","name","color"],$query:{id:{$in:ids}}},{success:function(res){var items=res.data,result={};_.forEach(items,function(item){result[item.id]=item}),_.forEach(group.items,function(card){card.data.name=null,result[card.data.id]&&(card.data.name=result[card.data.id].name||null,card.data.color=result[card.data.id].color||null)}),next(null,group)},failure:function(res){next(null,group)}}).done()},_buildUrl:function(configurator,cards,next){var self=this,builder=configurator.getUrlBuilder();configurator.getAppStateStore().get({fields:["acid"],callback:function(result){self._buildUrlForCards(builder,result.acid,cards),next(null,cards)}})},_buildUrlForCards:function(builder,acid,cards){_.forEach(cards,function(card){var data=card.data;card.data.entityRef=builder.getNewViewUrl(_.asString(data.id),_.asString(data.type),acid)})}});return Model})