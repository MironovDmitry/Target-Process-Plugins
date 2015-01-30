define(["Underscore","tau/core/class","tau/models/board.customize.units/const.entity.types","tau/models/board.customize.units/const.entity.types.names"],function(t,e,a,r){return e.extend({defaultSettings:{entity:"id",general:"name, type:entityType.name, projectId:project.id",user:'fullName as name,type:"user",avatarUri',assigneduser:'fullName as name,type:"user",avatarUri',project:"color",assignable:"entityState.isFinal, teamId:team.id, priority.importance",team:"icon",teamiteration:"it.isInPast() as isInPast",release:"it.isInPast() as isInPast",iteration:"it.isInPast() as isInPast",testcaserun:'name,type:"testcaserun"',time:'type:"time"',impediment:"entityState.isFinal",projectmember:['type:"projectmember"',"name:user.fullName","avatarUri:user.avatarUri","color:project.color","project:{project.abbreviation,project.name}","projectId:project.id"].join(",")},createItemData:function(t,e){var a=e.unit.getModelByTypeAndSize(t),r=a?":{"+a+"}":":null";return e.unit.id+r},build:function(e,a){var r=this.createItemData.bind(this,e),i=t.flatten([this.getCardDataByType(e),t.chain(a).flatten().map(r).compact().value()],!1);return"{"+t.compact(i).join(",")+"}"},init:function(){this.cardsSettings=this.generateCardsData()},generateCardsData:function(){return t.chain(r).map(function(e){var r=a.getParents(e),i=t.reduce(r,function(e,a){var r=this.defaultSettings[a];return r?t.compact([e,r]).join(","):e}.bind(this),"");return i?(i="cardData:{"+i+"}",i=t.extend(i,{type:e})):i='cardData:""',[e,i]}.bind(this)).object().value()},getCardDataByType:function(t){return this.cardsSettings[t.toLowerCase()]||'cardData:""'},parseSelector:function(t){var e,a=0,r=t.indexOf("cardData:"),i="";if(-1!==r){for(var n=r,s=t.length;s>n;n++)if("{"==t[n])a+=1;else if("}"==t[n]&&(a-=1,0===a)){e=n+1;break}i=t.substring(r,e)}return t=t.replace(i,""),t=t.replace("{,","{"),{cardData:i,withoutCardData:t}},buildSelectorWithoutCardData:function(t){return this.parseSelector(t).withoutCardData}})});