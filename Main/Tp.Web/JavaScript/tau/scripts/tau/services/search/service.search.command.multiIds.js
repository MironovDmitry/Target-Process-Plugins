define(["jQuery","Underscore","tau/core/class","tau/services/search/service.search.command"],function(e,t,r,n){var s=n.extend({init:function(e,t,r){this._super(e,t,r),this.currentPageFromIndex=t.pageNo*t.pageSize,this.currentPageToIndex=this.currentPageFromIndex+t.pageSize,this.searchParameters=this._parseSearchString()},execute:function(){this._searchItemsPromise().done(t.bind(this._done,this))},_parseSearchString:function(){var e=this.params.searchString.split(","),r=[];return t.forEach(e,function(e){var n=t.trim(e),s=/^\d+$/.test(n);s&&r.push(parseInt(n))}),{Ids:r}},_searchItemsPromise:function(){var t=this.configurator.getStore(),r=e.Deferred();return t.get("general",{fields:["id",{entityType:["name"]}],$query:{id:{$in:this.searchParameters.Ids}},$orderBy:"id"}).done(function(e){r.resolve(e[0].data)}),r.promise()},_done:function(e){var r=this._createResultAdapter(e,t.bind(this._resultFilter,this));this._super(t.bind(this._fetchDetailsByIDs,this)(r))},_createResultAdapter:function(e,r){var n=this.configurator.getStore(),s=t(e).chain().filter(r).reduce(t.bind(function(e,r){var s=r.entityType.name,i=s+"Ids";if(!e.hasOwnProperty(i)){var a=n.typeMetaInfo(s);i=t.titleize(a.parent)+"Ids"}return e.hasOwnProperty(i)&&(this._shouldBeShownInCurrentPage(e.Total)&&e[i].push(r.id),++e.Total),e},this),{AssignableIds:[],CommentIds:[],GeneralIds:[],TestCaseIds:[],ImpedimentIds:[],Total:0}).value();return s},_shouldBeShownInCurrentPage:function(e){return e>=this.currentPageFromIndex&&e<this.currentPageToIndex},_resultFilter:function(e){return t.contains(this.searchParameters.Ids,e.id)&&e.hasOwnProperty("entityType")}});return s.isSuitableCommand=function(e){var r=e.split(",");return r.length>1?t.every(r,function(e){var r=t.trim(e),n=/^\d+$/.test(r);return n}):!1},s});