define(["tau/service.container","tau/services/service.hash"],function(ServiceContainer,ServiceHash){var testcase={name:"service.hash","replace for":function(test){var sc=new ServiceContainer,service=new ServiceHash(sc);service.setFakeWindow(),service.setHash("preved=medved"),test.equals(service.getHashParam("preved"),"medved"),test.equals(service.getHash(),"preved=medved"),service.setEncoder(service.encoderDefault()),service.setHash('board/5&route={"collapsed":true,"hide":true}&key2={"innerKey":1}');var obj=service.hashParams(),expected={route:{collapsed:!0,hide:!0},key2:{innerKey:1}};test.same(obj,expected,"valid"),test.done()},events:function(test){var sc=new ServiceContainer,service=new ServiceHash(sc);service.setFakeWindow(),service.setEncoder(service.encoderDefault()),service.setHash("preved=medved"),service.on("changed",function(evt,data){test.equals(service.getHashParam("preved"),"bubble"),test.equals(data.hash,"preved=bubble"),test.done()},this),service.setHashParam("preved","bubble")},"api for bc of external.js":function(test){var sc=new ServiceContainer,service=new ServiceHash(sc);service.setFakeWindow(),service.setEncoder(service.encoderDefault()),service.setHash("preved=medved");var d,h=function(evt,data){test.equals(service.getHashParam("preved"),"bubble"),test.equals(data.hash,"preved=bubble"),d=data};service.onHashChange(h),service.setHashParam("preved","bubble"),service.unbindHashChange(h),service.setHashParam("preved","doh"),setTimeout(function(){test.equals(service.getHashParam("preved"),"doh"),test.equals(d.hash,"preved=bubble"),test.done()},1)}};return testcase})