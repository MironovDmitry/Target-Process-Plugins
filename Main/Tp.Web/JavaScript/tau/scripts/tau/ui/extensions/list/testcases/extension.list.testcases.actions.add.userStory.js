define(["Underscore","tau/components/extensions/component.extension.base","tau/components/component.container","tau/models/page.entity/model.page.entity.context","tau/core/component-base","tau/ui/templates/title/ui.template.title.clean"],function(t,e,s,n,i,a){return e.extend({"bus testCase.bubble.show":function(){var t=this.config.context,e=this,s=this.config.context.configurator,n=s.getStore();n.save("TestCase",{fields:["id","name",{userStory:["id"]},{project:["id"]}],$set:{name:"My test case",steps:"empty",success:"empty",userStory:{id:t.entity.id}}},{success:function(t){e.fire("testCase.draft.saved",{id:t.data.id})}}).done()},showTestCaseEditor:function(t){var e=this,s=$(t.originalEvent.target).tauBubble({onPositionConfig:function(t){t.offset="-20 0"}});s.bind("show",function(t,n){var i=n.popup.find(".tau-bubble__inner");i.html('<div class="test-case-wait-message">Adding test case. Please wait...</div>'),setTimeout(function(){e.fire("testCase.bubble.show",{$link:s,data:n})},1);var a={handleKeyDown:function(){}};e.config.context.configurator.getKeyBoardManager().pushHandler(a)}),s.bind("close",function(t,n){e.config.context.configurator.getKeyBoardManager().popHandler(),setTimeout(function(){e.fire("testCase.bubble.close",{$link:s,data:n})},1)}),s.tauBubble("show")},getTestCaseConfig:function(){return{layout:"list",cssClass:"test-case-quick-add-container",children:[{type:"title",template:a},{type:"container",layout:"table",cssClass:"test-case-description",cellsCssClass:["steps","success"],children:[{type:"container",children:[{type:"label",text:"Steps"},{type:"steps",richEditorHeight:100}]},{type:"container",children:[{type:"label",text:"Success"},{type:"success",richEditorHeight:100}]}]}]}},"bus testCase.quickAdd.container.ready + testCase.bubble.close":function(t,e){e.fire("destroy");var s=this.config.context,n=s.entity.id;this.fire("testCaseWasAdded",{assignable:{id:n}})},"bus testCase.draft.context.ready + testCase.bubble.show":function(t,e,n){var i=this,a=s.create({name:"quick add test case container",context:e.context});a.on("afterRender",function(t){var e=t.data.element,s=n.data.popup.find(".tau-bubble__inner");s.html('<div class="ui-quick-add-stats">Modify content for added test case</div>'),s.append(e),setTimeout(function(){$(".entity-title.editableText",s).click().html(""),i.fire("testCase.quickAdd.container.ready",a)},0)}),a.fire("initialize",this.getTestCaseConfig())},"bus testCase.draft.saved":function(t){var e=this,s=new i({name:"context retriever","queue.bus":!0,entity:{id:t.data.id,type:"testCase"},context:{configurator:this.config.context.configurator}}).attach(n),a=s.bus;a.on("contextRetrieved",function(t){e.fire("testCase.draft.context.ready",t.data),a.fire("destroy")}),a.fire("beforeInit")},"bus action.add":function(t){this.showTestCaseEditor(t.data)}})});