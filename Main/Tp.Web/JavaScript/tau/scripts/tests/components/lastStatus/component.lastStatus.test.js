define(["Underscore","jQuery","tau/configurator","tests/common/testCase","tests/common/componentConfigCreator","tau/components/component.property.lastStatus","tests/common/testData.Generator"],function(_,$,a,b,c,d,e){var f=function(){var a=new e;a.initDefaultData();var f=a.getData(),g=a.getTestCases()[0],h=a.getTestCases()[1],i=a.getTestCases()[2],j=new c;j.setEntityIDAndType(g.id,g.__type);var k=[f.selectByType("project")[0]];j.setSelectedProjects(k);var l=f.selectByType("process");j.setProcesses(l);var m=j.getConfig();j=new c,j.setEntityIDAndType(h.id,h.__type),j.setSelectedProjects(k),j.setProcesses(l);var n=j.getConfig();j=new c,j.setEntityIDAndType(i.id,i.__type),j.setSelectedProjects(k),j.setProcesses(l);var o=j.getConfig(),p=new b("[component.lastStatus]");p.initModule({componentConfig:n,data:f},d),p.test("should render valid markup for success test case",function(){var a=this.element;ok(a.find(".ui-status").hasClass("red"),"Has red class"),equal(a.find(".ui-status").text().trim(),"Failed","Passed")}),p.initModule({componentConfig:m,data:f},d),p.test("should render valid markup for failed test case",function(){var a=this.element;ok(a.find(".ui-status").hasClass("green"),"Has green class"),equal(a.find(".ui-status").text().trim(),"Passed","Passed")}),p.initModule({componentConfig:o,data:f},d),p.test("should render valid markup for not run test case",function(){var a=this.element;ok(!a.find(".ui-status").hasClass("green"),"Has not green class"),ok(!a.find(".ui-status").hasClass("red"),"Has not red class"),equal(a.find(".ui-status").text().trim(),"","Not text")});var q=_.clone(m)};return{run:f}})