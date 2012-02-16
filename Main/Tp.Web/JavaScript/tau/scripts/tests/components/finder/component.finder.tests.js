define(["Underscore","libs/jquery/jquery","tests/components/utils/dispatcher","tau/models/finder/model.entity.finder","tau/core/bus","tau/models/finder/model.assignable.search","tau/ui/extensions/finder/ui.extension.finder.list","tau/ui/extensions/finder/ui.extension.finder.simpleSearch"],function(a,b,c,d,e,f,g,h){var i=function(){module("[finder] extensions",{setup:function(){this.bus=new e({name:"my super bus"})},teardown:function(){delete this.bus}}),test("dataBind is fired right after initializing",function(){var a=new d({bus:this.bus}),b=["dataBind","requireSearchConfig"],e=c.createDispatcher(this.bus,b);this.bus.fire("beforeInit"),c.verifyLifeCycle(b,e,"main model of finder"),equals(e.args.dataBind.data.items.length,0,"empty items is sent")}),test("requestingData on searchConfigFormed",function(){var a=new d({bus:this.bus}),b=["partialDataRequest"],e=c.createDispatcher(this.bus,b);this.bus.fire("searchConfigFormed",{type:"assignable",config:{$query:{id:45}},properties:[{name:"id"}]}),c.verifyLifeCycle(b,e,"main model of finder"),equals(e.args.partialDataRequest.type,"assignable","type is passed"),equals(e.args.partialDataRequest.config.$query.id,45,"config is passed"),equals(e.args.partialDataRequest.config.fields.length,4,"config fields is passed")}),test("requestingData on newSearchQuery",function(){var a=new d({bus:this.bus}),b=["partialDataRequest"],e=c.createDispatcher(this.bus,b);this.bus.fire("newSearchQuery",{type:"assignable",config:{$query:{id:45}},properties:[{name:"id"}]}),c.verifyLifeCycle(b,e,"main model of finder"),equals(e.args.partialDataRequest.type,"assignable","type is passed"),equals(e.args.partialDataRequest.config.$query.id,45,"config is passed"),equals(e.args.partialDataRequest.config.fields.length,4,"config fields is passed")}),test("events on loadMore: next pageAvailable",function(){var a=new d({bus:this.bus}),b=["partialDataRequest"],e=c.createDispatcher(this.bus,b);this.bus.fire("nextPageCommandFormed",{type:"sad",config:{}}),this.bus.fire("loadMore",{}),c.verifyLifeCycle(b,e,"main model of finder")}),test("events on commandExecuted: next pageAvailable",function(){var a=new d({bus:this.bus}),b=["dataLoaded","nextPageCommandFormed"],e=c.createDispatcher(this.bus,b),f={data:[1]};f.data.isNextPageAvailable=function(){return!0},f.data.getNextPageCommand=function(){return{id:"cmdNextPage"}},this.bus.fire("dataRequestCompleted",f),c.verifyLifeCycle(b,e,"main model of finder"),equals(e.args.dataLoaded.data.items[0],1),equals(e.args.nextPageCommandFormed.id,"cmdNextPage","config is passed")}),test("events on commandExecuted: next is not pageAvailable",function(){var b=new d({bus:this.bus}),e=["dataLoaded","nextPageIsNotAvailable"],f=c.createDispatcher(this.bus,e),g={data:[1]};g.data.isNextPageAvailable=function(){return!1},g.data.getNextPageCommand=function(){return{id:"cmdNextPage"}},this.bus.fire("dataRequestCompleted",g),c.verifyLifeCycle(e,f,"main model of finder"),equals(f.args.dataLoaded.data.items[0],1),ok(a.isUndefined(f.nextPageCommandFormed))}),test("base search functionality",function(){var b=new f({bus:this.bus}),d=["searchConfigFormed"],e=c.createDispatcher(this.bus,d);this.bus.fire("requireSearchConfig",{project:{id:49,name:"My Project"}}),c.verifyLifeCycle(d,e,"base search"),ok(a(e.args.searchConfigFormed.properties).keys().length>0),equals(e.args.searchConfigFormed.type,"assignable"),equals(e.args.searchConfigFormed.searchQuery,""),included(e.args.searchConfigFormed.config.$query,{})}),test("base search: auto complete request simple property",function(){var b=new f({bus:this.bus}),d=["dataRequest"],e=c.createDispatcher(this.bus,d),g={};this.bus.fire("autoCompleteRequest",{property:"name",term:"asd asd",callback:function(a){g=a}}),ok(a(e.args.dataRequest).isUndefined())}),test("base search: auto complete category",function(){var a=new f({bus:this.bus}),b={},c={property:"iteration",term:"",callback:function(a){b=a}},d=[{id:1,name:"It 1",release:{id:8,name:"r 1"},project:{id:1,name:"p 1"}},{id:2,name:"It 2",release:{id:8,name:"r 1"},project:{id:1,name:"p 1"}},{id:3,name:"It 1",release:{id:8,name:"r 2"},project:{id:1,name:"p 2"}}];this.bus.fire("autoComplete",{data:d,config:c}),equals(b.length,4),equals(b[0].label,"Backlog")}),test("base search: auto complete",function(){var a=new f({bus:this.bus}),b={},c={property:"iteration",term:"",callback:function(a){b=a}},d=[{id:1,name:"It 1",release:{id:8,name:"r 1"},project:{id:1,name:"p 1"}},{id:2,name:"It 2",release:{id:8,name:"r 1"},project:{id:1,name:"p 1"}},{id:3,name:"It 1",release:{id:8,name:"r 1"},project:{id:1,name:"p 1"}}];this.bus.fire("autoComplete",{data:d,config:c}),equals(b[0].label,"Backlog"),equals(b.length,3)}),test("base search: auto complete filtering by term",function(){var a=new f({bus:this.bus}),b={},c={property:"iteration",term:"1",callback:function(a){b=a}},d=[{id:1,name:"It 1",release:{id:8,name:"r 1"},project:{id:1,name:"p 1"}},{id:2,name:"It 2",release:{id:8,name:"r 1"},project:{id:1,name:"p 1"}},{id:3,name:"It 1",release:{id:8,name:"r 1"},project:{id:1,name:"p 2"}}];this.bus.fire("autoComplete",{data:d,config:c}),equals(b.length,2)}),test("base search: process auto complete request",function(){var a=new f({bus:this.bus}),b=["dataRequest"],d=c.createDispatcher(this.bus,b),e={};this.bus.fire("autoCompleteRequest",{property:"iteration",term:"Asd",callback:function(a){e=a}}),c.verifyLifeCycle(b,d,"base search");var g=d.args.dataRequest;equals(g.type,"iteration"),same(g.config.fields,["id","name",{project:["id","abbreviation"]}])}),test("empty: forming query",function(){var a=new f({bus:this.bus}),b=["newSearchQuery"],d=c.createDispatcher(this.bus,b);this.bus.fire("search",{}),c.verifyLifeCycle(b,d,"base search");var e=d.args.newSearchQuery;equals(e.type,"assignable","type is passed"),same(e.config.$query,{},"query is passed")}),test("forming query",function(){var a=new f({bus:this.bus}),b=["newSearchQuery"],d=c.createDispatcher(this.bus,b),e=[{property:"project",value:"Project 1"},{property:"project",value:"Project 2"},{property:"iteration",value:"Super Puper"},{property:"release",value:"Backlog"},{property:"state",value:"All uncompleted"},{property:"id",value:"15"},{property:"id",value:"45"},{property:"id",value:"NaNa"},{property:"name",value:"sdfsdf"},{property:"name",value:"aaaa"},{property:"description",value:"bb"},{property:"tag",value:"fdsf sdjfk"}];this.bus.fire("search",{collection:e}),c.verifyLifeCycle(b,d,"base search");var g=d.args.newSearchQuery;equals(g.type,"assignable","type is passed"),same(g.config.$query.project,{name:{$in:["Project 1","Project 2"]}},"query is passed"),same(g.config.$query.iteration,{name:{$in:["Super Puper"]}},"query is passed"),same(g.config.$query.release,null,"query is passed"),same(g.config.$query.entityState,{isFinal:0},"query is passed"),same(g.config.$query.id,{$in:[0,15,45]},"query is passed"),same(g.config.$query.name,{$contains:"aaaa"},"query is passed"),same(g.config.$query.description,{$contains:"bb"},"query is passed"),same(g.config.$query.tags,{$contains:"fdsf sdjfk"},"query is passed")}),test("forming query text",function(){var a=new f({bus:this.bus}),b=["newSearchQuery"],d=c.createDispatcher(this.bus,b),e=[{property:"text",value:"All uncompleted"}];this.bus.fire("search",{collection:e}),c.verifyLifeCycle(b,d,"base search");var g=d.args.newSearchQuery;equals(g.type,"assignable","type is passed"),same(g.config.$query.name,{$contains:"All uncompleted"},"query is passed")}),test("forming query states",function(){var a=new f({bus:this.bus}),b=["newSearchQuery"],d=c.createDispatcher(this.bus,b),e=[{property:"state",value:"All uncompleted"},{property:"state",value:"Open"}];this.bus.fire("search",{collection:e}),c.verifyLifeCycle(b,d,"base search");var g=d.args.newSearchQuery;equals(g.type,"assignable","type is passed"),same(g.config.$query.entityState,{isFinal:0},"query is passed")}),test("initial data appending",function(){var a=new g({bus:this.bus}),d=c.createDispatcher(this.bus,[]),e=['<div class="ui-resultList">','    <table cellspacing="0" cellpadding="4" class="ui-table">',"        <tbody>","        </tbody>","    </table>","</div>"].join(""),f=b("<div />").append(e);this.bus.fire("afterRender",{element:f});var h={items:[{__type:"userStory",id:1,entityState:{name:"Open"},project:{name:"My Project"}}]};this.bus.fire("dataLoaded",{data:h}),ok(b("table>tbody>tr",f).length===1)}),test("clean list on new search",function(){var a=new g({bus:this.bus}),d=c.createDispatcher(this.bus,[]),e=['<div class="ui-resultList">','    <table cellspacing="0" cellpadding="4" class="ui-table tau-result-list">',"        <tbody>","        </tbody>","    </table>","</div>"].join(""),f=b("<div />").append(e);this.bus.fire("loadMore",{element:f});var h={items:[{__type:"userStory",id:1,entityState:{name:"Open"},project:{name:"My Project"}}]};this.bus.fire("dataLoaded",{data:h}),equals(b("table>tbody>tr",f).length,1),this.bus.fire("search",{element:f}),equals(b("table>tbody>tr",f).length,0)}),test("additional data appending",function(){var a=new g({bus:this.bus}),d=c.createDispatcher(this.bus,[]),e=['<div class="ui-resultList">','    <table cellspacing="0" cellpadding="4" class="ui-table">',"        <tbody>","        </tbody>","    </table>","</div>"].join(""),f=b("<div />").append(e);this.bus.fire("loadMore",{element:f});var h={items:[{__type:"userStory",id:1,entityState:{name:"Open"},project:{name:"My Project"}}]};this.bus.fire("dataLoaded",{data:h}),equals(b("table>tbody>tr",f).length,1)}),test("entity selected and actions",function(){var a={id:"action",name:"action",fn:function(){this.bus.fire("action",{entity:null})}},d=new g({bus:this.bus,actions:[a]}),e=c.createDispatcher(this.bus,["action","entitySelected"]),f=[,'<div class="ui-drop-down drop-down-actions tau-finder-actions">',"<span class='action-link tau-finder-action' id='action'>${name}</span>","</div>",'<div class="ui-resultList">','    <table cellspacing="0" cellpadding="4" class="ui-table">',"        <tbody>","        </tbody>","    </table>","</div>"].join(""),h=b("<div />").append(f);this.bus.fire("afterRender",{element:h}),this.bus.fire("loadMore",{element:h});var i={items:[{__type:"userStory",id:1,entityState:{name:"Open"},project:{name:"My Project"}}]};this.bus.fire("dataLoaded",{data:i}),b("table>tbody>tr>td:first",h).click(),equals(e.args.entitySelected.entity.id,1),b("#action",h).data({tmplItem:{data:a}}).click(),equals(e.args.action.entity,null)})};return{run:i}})