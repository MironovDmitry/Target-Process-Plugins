define(["Underscore","tau/configurator","tests/common/testData.Generator","tests/common/service.mock"],function(_,a,b,c){var d=new b;module("[store] rules ",{setup:function(){a.clear(),this.serviceMock=new c,a.setService(this.serviceMock),d.clear(),this.store=a.getStore(),a.clear(),d.initDefaultData();var b=d.getBugs(),e=d.getUserStories(),f=b[0];delete f.feature,delete f.iteration,delete f.project,delete f.release;var g=this.data=[f,e[0]];a.setInitialData(g),a.setService(this.serviceMock),this.store=a.getStore()},teardown:function(){this.serviceMock.verify(),a.clear()}}),test("should include endDate if state was changed",function(){var a=this.data[0];this.store.get(a.__type,{id:a.id,fields:["endDate"]}),this.serviceMock.registerSaveCommand({config:{id:a.id,$set:{entityState:{id:1}},fields:["id","endDate",{roleEfforts:["id","effort","effortToDo"],list:!0}]},returnedData:{id:a.id,__type:a.__type,endDate:5,roleEfforts:[{id:350,effort:10,effortToDo:10},{id:15,effort:7,effortToDo:100}]}}),this.store.save(a.__type,{id:a.id,$set:{entityState:{id:1}}}).done();var b=this.data[1];this.store.get(a.__type,{id:b.id,fields:["endDate"]}),this.serviceMock.registerSaveCommand({config:{id:b.id,$set:{entityState:{id:1}},fields:["id","endDate",{roleEfforts:["id","effort","effortToDo"],list:!0}]},returnedData:{id:b.id,__type:b.__type,endDate:5}}),this.store.save(b.__type,{id:b.id,$set:{entityState:{id:1}}}).done()})})