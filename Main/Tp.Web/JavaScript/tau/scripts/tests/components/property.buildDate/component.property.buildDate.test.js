define(["jQuery","tau/configurator","tests/common/testCase","tests/common/componentConfigCreator","tau/components/component.property.buildDate","tests/common/testData.Generator"],function($,a,b,c,d,e){var f=function(){var a=new e;a.initDefaultData();var f=a.getData(),g=a.getProjects(),h=a.getBuilds()[0],i=new c;i.setEntityIDAndType(h.id,h.__type),i.setSelectedProjects([f.selectByType("project")[0]]),i.setProcesses(f.selectByType("process"));var j=i.getConfig(),k=new b("[component.property.buildDate]");j.editable=!0,k.initModule({componentConfig:j,data:f},d),k.test("should render valid markup",function(){var a=this.element}),k.test("should should change completionDate",function(){})};return{run:f}})