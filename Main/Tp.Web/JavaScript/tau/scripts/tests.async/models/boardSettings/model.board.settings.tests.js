define(["Underscore","jQuery","tests.async/testkit/testkit","tau/libs/boardSettings/model.board.settings","tau/core/async.source.adapter","tau/service.container"],function(_,$,TestKit,BoardSettings,Adapter,ServiceContainer){var testcase={name:"model.board.settings tests"},testKit=new TestKit;return testKit.registerSetup("configurator",function(test,next){var configurator=new ServiceContainer;configurator.getHashService().setFakeWindow(),configurator.getHashService().setDefaultEncoder(),configurator.setRestStorageService(function(ajaxConfig){var $scope=ajaxConfig.$scope;if($scope.$group==="boards"){var resp={group:{name:"boards",id:2},key:$scope.$key,ownerId:1,scope:"Public",publicData:{},userData:{},id:1},deferred=$.Deferred();return deferred.resolve(resp),deferred}}),test.set("configurator",configurator),next()}),testKit.registerTeardown("configurator.clear",function(test,next){test.get("configurator").clear(),next()}),testcase["should avoid unnecessary requests to own data sources"]=testKit.test(function(test){var sources=[],countGet=0,countSet=0;sources.push(new Adapter({onGet:function(cmd){++countGet,_.include(cmd.fields,"zoomLevel")&&cmd.callback({zoomLevel:7})},onSet:function(cmd){++countSet,cmd.callback(cmd.set)},onBind:function(cmd){},onUnbind:function(cmd){}}));var definition={zoomLevel:1},bs=new BoardSettings(definition,sources),r1=null;bs.get({fields:["zoomLevel"],callback:function(r){r1=r}}),test.equals(r1.zoomLevel,7,"Zoom level is overridden"),test.equals(countGet,1,"First request");var r2=null;bs.get({fields:["zoomLevel"],callback:function(r){r2=r}}),test.equals(r2.zoomLevel,7,"Got second response"),test.equals(countGet,1,"Avoid subsequent requests"),bs.set({set:{zoomLevel:2}}),test.equals(countSet,1,"Set operation is called");var r3=null;bs.get({fields:["zoomLevel"],callback:function(r){r3=r}}),test.equals(r3.zoomLevel,2,"Got 3th response"),test.equals(countGet,1,"No more unnecessary get request"),test.done()}),testcase["should allow to get settings"]=testKit.test(function(test){var configurator=test.get("configurator");configurator.getHashService().setHash('board/5&boardSettings1={"zoomLevel":7}');var definition={id:"boardSettings1",groupName:"boards",zoomLevel:1},boardSettings=configurator.getBoardSettingsFactory().create(definition),expectedResult={id:"boardSettings1",zoomLevel:7};boardSettings.get({fields:["zoomLevel"],callback:function(result){test.equals(result.id,expectedResult.id,"Id"),test.equals(result.zoomLevel,expectedResult.zoomLevel,"ZoomLevel"),test.done()}})}),testcase["should allow to set settings"]=testKit.test(function(test){var configurator=test.get("configurator"),definition={id:"boardSettings1",groupName:"boards",zoomLevel:1},boardSettings=configurator.getBoardSettingsFactory().create(definition),expectedResult={zoomLevel:10};boardSettings.set({set:{zoomLevel:10},callback:function(r){var wnd=configurator.getExternal(),actualResult=wnd.getHashParam("boardSettings1");test.same(actualResult,expectedResult,"parameter value"),test.done()}})}),testcase["should allow to bind on settings changes"]=testKit.test(function(test){var configurator=test.get("configurator"),definition={id:"boardSettings1",groupName:"boards",zoomLevel:1},boardSettings=configurator.getBoardSettingsFactory().create(definition),actualResult=null;boardSettings.bind({fields:["zoomLevel"],listener:{},callback:function(r){actualResult=r}});var wnd=configurator.getExternal();wnd.setHashParam("boardSettings1",{zoomLevel:1}),wnd.triggerHashChange(),test.same(actualResult,null,"nothing happens since there is no changes in comparison to inner settings"),wnd.setHashParam("boardSettings1",{zoomLevel:3}),wnd.triggerHashChange();var expectedResult={zoomLevel:3};test.same(actualResult,expectedResult,"zoomLevel is changed to 3"),boardSettings.dispose(),wnd.setHashParam("boardSettings1",{zoomLevel:2}),wnd.triggerHashChange(),test.same(actualResult,expectedResult,"nothing happens after unbind"),test.done()}),testcase["should allow to bind hard"]=testKit.test(function(test){var configurator=test.get("configurator"),definition={id:"boardSettings1",groupName:"boards",x:{types:["preved","medved"]},zoomLevel:1},boardSettings=configurator.getBoardSettingsFactory().create(definition),scope={name:"xz"},actualResult=null;boardSettings.bind({fields:["x"],listener:scope,callback:function(r){actualResult=r}});var set=function(data){boardSettings.set({set:data,callback:function(){}})};set({x:{types:["preved","medved","xz"]}}),test.same(actualResult,{x:{types:["preved","medved","xz"]}},"changes in obj"),set({x:{types:null}}),test.same(actualResult,{x:{types:null}},"changes in obj"),set({x:!1}),test.same(actualResult,{x:!1},"changes in obj"),set({x:null}),test.same(actualResult,{x:null},"changes in obj"),boardSettings.unbind({listener:scope}),set({x:"fuck"}),test.same(actualResult,{x:null},"no changes unbinded"),test.done()}),testcase["should allow to set an object as value"]=testKit.test(function(test){var configurator=test.get("configurator"),definition={id:"boardSettings1",groupName:"boards",zoomLevel:1},boardSettings=configurator.getBoardSettingsFactory().create(definition),actualResult=null,scope={},bindCallsCount=0;boardSettings.bind({fields:["state"],listener:scope,callback:function(r){actualResult=r,++bindCallsCount}});var wnd=configurator.getExternal();wnd.setHashParam("boardSettings1",{state:{a:1,b:2}}),wnd.triggerHashChange(),test.equals(bindCallsCount,1,"Callback is fired once only"),test.same(actualResult,{state:{a:1,b:2}},"nothing happens since there is no changes in comparison to inner settings");var actualSetResult=null,setCallbackCount=0;boardSettings.set({set:{state:{x:10,y:"i-greek"}},callback:function(r){actualSetResult=r.state,++setCallbackCount}}),test.equals(bindCallsCount,2,"Bind Callback is fired second time"),test.equals(setCallbackCount,1,"Bind Callback is fired once only"),test.same(actualSetResult,{x:10,y:"i-greek"},"Save callback is correct"),test.same(actualResult,{state:{x:10,y:"i-greek"}},"Bind callback is correct"),boardSettings.dispose(),boardSettings.set({set:{state:{z:"zed"}}}),test.equals(bindCallsCount,2,"Bind Callback is not fired anymore"),test.done()}),testcase})