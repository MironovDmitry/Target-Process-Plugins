define(["Underscore","jQuery","tau/core/class","tau/core/termProcessor","tau/store/types"],function(t,e,i,n,a){return i.extend({init:function(t,e){this.config=this._createConfig(t,e)},fetchRelatedEntities:function(){var t=e.Deferred();return this.config.store.get(this.config.entityTypeName,this._buildRelationsCommand(!0)).done({success:function(e){this._fetchRelatedEntitiesInfo(e[0].data[this.config.relationsFieldName],function(e){t.resolve(e)}.bind(this))},scope:this}),t.promise()},fetchRelations:function(){return this._fetchData(this._buildRelationsCommand())},fetchRelationCounts:function(){return this._fetchData(this._buildRelationCountCommand())},_fetchData:function(t){this._evictRelationCounts();var i=e.Deferred();return this.config.store.get(this.config.entityTypeName,t).done({success:function(t){i.resolve(t)},scope:this}),i.promise()},_evictRelationCounts:function(){this.config.store.evictProperties(this.config.entityId,this.config.entityTypeName,["masterRelations","slaveRelations"])},_createConfig:function(t,e){var i={configurator:t.context.configurator,getTerms:t.context.getTerms,entityId:t.context.entity.id,entityTypeName:t.context.entity.entityType.name,store:t.store,relatedEntityFieldName:e,relationsFieldName:e+"Relations"};return i},_buildRelationsCommand:function(t){return{id:this.config.entityId,fields:[this._buildRelationsField(t)]}},_buildRelationCountCommand:function(){return{id:this.config.entityId,fields:["slaveRelations-count","masterRelations-count"]}},_buildRelationsField:function(t){var e={};if(e[this.config.relationsFieldName]=[{relationType:["name"]}],t){var i={};i[this.config.relatedEntityFieldName]=["id",{entityType:["name"]}],e[this.config.relationsFieldName].push(i)}return e},_fetchRelatedEntitiesInfo:function(e,i){var n=t.groupBy(e,t.bind(function(t){return t[this.config.relatedEntityFieldName].entityType.name},this)),a=this._buildRelatedEntitiesInfoRequests(n);t.parallel(a,t.bind(function(t,e){n=this._fillRelatedEntitiesInfo(n,e),i(this.transform(n))},this))},_buildRelatedEntitiesInfoRequests:function(e){return t.map(t.keys(e),function(i){return t.bind(function(n){this.config.store.find(i,{fields:this._getFieldsForRelatedEntityInfo(i),$query:{id:{$in:t.map(e[i],function(t){return t[this.config.relatedEntityFieldName].id},this)}}}).done({success:function(t){n(!1,t[0].data)}})},this)},this)},_fillRelatedEntitiesInfo:function(e,i){return e=t.reduce(i,function(e,i){return i.length>0&&(e[i[0].entityType.name]=t.reduce(i,function(e,i){var n=t.find(e,t.bind(function(t){return t[this.config.relatedEntityFieldName].id==i.id},this)),a=n[this.config.relatedEntityFieldName];return t.extend(a,i,{relatedEntityInfoIsFilled:!0}),e},e[i[0].entityType.name],this)),e},e,this)},_getFieldsForRelatedEntityInfo:function(e){e=e.toLowerCase();var i=a.findByKeyword(e),n=["id","name",{entityType:["name"]},{project:["abbreviation","color","name"]}];t.contains(i.simpleFields,"lastStatus")&&n.push("lastStatus");var o=function(t,e){if(i.refs.hasOwnProperty(t)){var a={};a[t]=e,n.push(a)}};return o("entityState",["name","isFinal"]),o("release",["name"]),o("iteration",["name"]),o("team",["name","icon"]),n},transform:function(e){var i=[],a=0,o=this.config.configurator.getUrlBuilder(),s=new n(this.config.getTerms());return t.reduce(t.values(e),function(e,i){return t.forEach(i,function(i){var n=i[this.config.relatedEntityFieldName];if(n.relatedEntityInfoIsFilled){var r=t.extend(n.entityType,{term:s.getTerms(n.entityType.name).iconSmall});e.push({id:n.id,__type:n.__type,entityType:r,name:n.name,project:n.project,team:n.team,entityState:n.entityState,hasLastStatus:n.hasOwnProperty("lastStatus"),lastStatus:n.lastStatus,release:n.release?n.release.name:null,iteration:n.iteration?n.iteration.name:null,url:o.getNewViewUrl(n.id,n.entityType.name,!0),relation:{id:i.id,__type:i.__type,relationType:i.relationType}}),n.entityType.id>a&&(a=n.entityType.id)}},this),e},i,this),t.sortBy(i,function(t){return t.entityState&&t.entityState.isFinal?a+t.entityType.id:t.entityType.id})}})});