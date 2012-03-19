define(["jQuery","tau/configurator","tests/common/testCase","tests/common/componentConfigCreator","tau/components/component.property.initialEstimate","tests/common/testData.Generator"],function($,a,b,c,d,e){var f=function(){var a=new e;a.initDefaultData();var f=a.getData(),g=a.getFeatures()[0],h=new c;h.setEntityIDAndType(g.id,g.__type),h.setSelectedProjects([f.selectByType("project")[0]]);var i=f.selectByType("process");h.setProcesses(i);var j=h.getConfig(),k=new b("[component.initialEstimate]");k.initModule({componentConfig:j,data:f},d),k.test("should render valid markup",function(){var a=this.element;equal($.trim(a.find(".property-text").text()),"5.61h","Initial date is valid"),equal(a.find(".property-text .point").text(),"h","Point is valid")}),k.test("should change initial estimate",function(){this.serviceMock.registerSaveCommand({config:{$set:{initialEstimate:99},fields:["id"],id:g.id},returnedData:{id:g.id,effortToDo:99}});var a=this.element,b=a.find(".property-text").eq(0);b.click(),b.text(99),b.blur(),equal(this.element.find(".property-text").eq(0).text(),"99h")})};return{run:f}})