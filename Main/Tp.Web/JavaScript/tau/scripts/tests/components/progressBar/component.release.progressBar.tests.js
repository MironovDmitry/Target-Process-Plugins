define(["jQuery","tau/components/component.release.progressBar","tests/common/testData.Generator","tests/common/componentConfigCreator","tests/common/testCase"],function($,a,b,c,d){var e=function(){var e=new b;e.initDefaultData();var f=e.getData(),g=e.getReleases()[3],h=new c;h.setEntityIDAndType(g.id,g.__type),h.setSelectedProjects([f.selectByType("project")[0]]),h.setProcesses(f.selectByType("process"));var i=h.getConfig(),j=new d("[component.release.progressBar]");j.initModule({componentConfig:i,data:f},a),j.test("should render valid markup",function(){var a=this.element;equal(a.find(".ui-label-completed .value").text(),"100h","Time spend is valid"),equal(a.find(".ui-label-todo .value").text(),"90h","Time ToDo is valid"),equal(a.find(".ui-progressbar__progress__indicator").prop("style").width,"53%","Width of progress bar"),equal(a.find(".ui-progressbar__progress__label .value").text(),"53%","value of progress bar")})};return{run:e}})