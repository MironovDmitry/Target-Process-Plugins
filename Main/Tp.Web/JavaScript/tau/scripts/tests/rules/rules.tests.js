define(["Underscore","tau/store/store","tau/store/repository","tau/store/services/service.rest","tau/rules/core"],function(_,a,b,c,d){var e=function(){module("[rules]",{setup:function(){var e=this;e.mockControl=new MockControl,e.service=e.mockControl.createMock(c);var f={service:e.service,types:{card:{name:"card",fields:["n"],refs:{c:{name:"contact"}}},entity:{name:"entity",fields:["dsc"],isParentType:!0,discriminator:"childType",detectType:function(a){return a.childType}},person:{parent:"entity",name:"person",fields:["name"],refs:{contacts:{list:!0,name:"contact",fields:["email"]},cards:{list:!0,name:"card",fields:["id"]}}},contact:{name:"contact",fields:["email"],refs:{owner:{name:"person"},card:{name:"card"}}}}};e.repository=new b(f),e.store=new a({proxy:e.repository}),e.rules=new d({store:e.store})},teardown:function(){delete this.store,delete this.proxy,delete this.mockControl,this.rules.destroy(),delete this.rules}}),test("auto include when property initialized",function(){var a={__type:"person",id:5,name:"Vasya Pupkin",email:"pip@pup.com",role:"master"};this.repository.registerData(a);var b=null;this.service.expects().save(TypeOf.isA(Object)).andStub(function(a){return b=a,{id:5,name:"Lilu",role:"slave"}}),this.rules.register({type:"person",changes:["name","email"],fields:["role"]}),this.store.save("person",{id:5,$set:{name:"Lilu"},fields:["name"]}).done(),this.mockControl.verify(),included(b.config,{fields:["id","name","role"]},"fields are attached")}),test("no auto include when property is not initialized",function(){var a={__type:"person",id:5,name:"Vasya Pupkin",email:"pip@pup.com",role:"master"};this.repository.registerData(a);var b=null;this.service.expects().save(TypeOf.isA(Object)).andStub(function(a){return b=a,{id:5,name:"Lilu",role:"slave"}}),this.rules.register({type:"person",changes:["name","email"],fields:["role"]}),this.store.save("person",{id:5,$set:{name:"Lilu"},fields:["name"]}).done(),this.mockControl.verify(),included(b.config,{fields:["id","name","role"]},"fields are attached")}),test("double rule",function(){var a={__type:"person",id:5,name:"Vasya Pupkin",email:"pip@pup.com",role:"master"};this.repository.registerData(a);var b=null;this.service.expects().save(TypeOf.isA(Object)).andStub(function(a){return b=a,{id:5,name:"Lilu",role:"slave"}}),this.rules.register({type:"person",changes:["name","email"],fields:["role"]}),this.rules.register({type:"person",changes:["name","email"],fields:["role"]}),this.store.save("person",{id:5,$set:{name:"Lilu"},fields:["name"]}).done(),this.mockControl.verify(),included(b.config,{fields:["id","name","role"]},"fields are attached"),ok(b.config.fields.length,3,"fields are attached")}),test("several auto includes",function(){var a={__type:"person",id:5,name:"Vasya Pupkin",email:"pip@pup.com",role:"master",avatar:"yes"};this.repository.registerData(a);var b=null;this.service.expects().save(TypeOf.isA(Object)).andStub(function(a){return b=a,{id:5,name:"Lilu",role:"slave"}}),this.rules.register({type:"person",changes:["name"],fields:["role"]}),this.rules.register({type:"person",changes:["name"],fields:["avatar"]}),this.store.save("person",{id:5,$set:{name:"Lilu"},fields:["name"]}).done(),this.mockControl.verify(),included(b.config,{fields:["id","name","role","avatar"]},"fields are attached"),ok(b.config.fields.length,4,"fields are attached")})};return{run:e}})