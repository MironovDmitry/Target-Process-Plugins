define(["jQuery","tests/common/testkit","tau/components/component.customField.entity"],function($,a,b){var c=function(){var c=new a("[component.customField.entity]",b),d={us1:{name:"US1",customFields:[{name:"Related",type:"Entity",value:{id:11,kind:"Task",__type:"Task",name:"Research other universes"}}]}},e=c.loadFixtures({userStories:d});return c.setData(e),c.setEntity(e.userStory.us1),c.selectDefaultProject(),c.appContext.processes[0].customFields=[{name:"Related",type:"Entity",required:!1,listed:!1}],c.addTest({name:"should render valid markup",test:function(){var a=this.$el;equals(a.find(".ui-customfield__label").text().trim(),"Related","Name is valid"),equals(a.find(".ui-customfield__value").text().trim(),"Research other universes","Value is valid")}}),c.run({customField:{type:"Entity",name:"Related"}})};return{run:c}})