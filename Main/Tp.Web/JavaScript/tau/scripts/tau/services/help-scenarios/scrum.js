define(["jQuery","Underscore","tau/services/help-scenarios/base"],function(e,t,o){var a=o.liveSelect,r=o.markDropTarget,n=o.unMarkDropTarget,i=o.selectorOnVisibleBubble,l=[o.flowIntroVideo,{name:"Select/add project(s) and/or team(s)",steps:[o.stepContextPromptToSeeExistingProjectsAndTeams(),o.stepContextExplainProjects(),o.stepContextApplyExistingProject("Tau Product Web Site - Scrum #1")]},{name:"Create a backlog/add stories to backlog",steps:[o.stepOpenBoard({boardName:"Story Mapping",message:"<p>Let's create a backlog. You can add Features and User Stories, and break Features into Stories here.</p>"}),o.stepClickForQuickAdd({message:"<p>Click to add a new user story.</p>",direction:"none",isScrollTo:!1,todoCellSelector:".tau-grid tr:first-child .tau-cellholder:first-child"}),{message:"<p>Enter a user story name.</p>",rollbackDepth:2,direction:"left",target:function(){return a(".tau-quick-add-dialog input.Name")},complete:function(e){return e.$node.on("keypress",e.resolve),e}},o.stepSelectYourProject(".tau-quick-add-dialog select.project",{rollbackDepth:3,direction:"left"}),{message:"<p>Click to add this user story to the Story Mapping board.</p>",rollbackDepth:4,direction:"left",target:function(){return a(".tau-quick-add-dialog .tau-add-item")},complete:function(e){return e.$node.one("click",function(){a(i(".i-role-quick-add-success-message"),e,!0)}),e}},{message:["<p>Here's your new user story.</p>",'<p class="tau-help-continue"><button class="i-role-next tau-btn tau-primary">Continue</button></p>'].join(""),pin:!1,direction:"left",target:function(e){var t=o.extractJustAddedEntityId(i(".i-role-quick-add-success-message"));return e.scenarioContext.set("step_EntityId",t),a(".i-role-card[data-entity-id="+t+"]")},complete:o.complete}]},{name:"Estimate work",steps:[o.stepOpenBoard({boardName:"Estimation",message:["<p>Let's estimate work before planning a release.</p>"].join("")}),{message:['<p>The "0" column has unestimated items, ',"the 1-2-3+ columns contain stories and bugs with the estimated effort of 1-2-3+ hrs.</p>","<p>(you can switch to pts later)</p>",'<p class="tau-help-continue"><button class="i-role-next tau-btn tau-primary">Continue</button></p>'].join(""),isScrollTo:!1,target:function(){return a(".i-role-header.tau-cols-header .i-role-name")},complete:function(e){var t=e.$holder.tauBubble("getContent");return t.on("click",".i-role-next",e.resolve),e}},{message:['<p>Drag-n-drop this story to the "2" column to give it a 2 hr estimate.</p>','<p class="tau-help-card-dnd-horizontal"></p>'].join(""),target:function(t){var o=t.scenarioContext.get("step_EntityId"),n=".i-role-grid .i-role-card[data-entity-id="+o+"]",i=e('.i-role-header.tau-cols-header .i-role-cellholder .i-role-focustrigger:contains("2"):eq(0)').closest(".i-role-cellholder"),l=i.data("x"),s='.i-role-grid .i-role-cellholder[data-x="'+l+'"]',c=e(s);return r(c,"Drop card to this column"),t.scenarioContext.set("step_EffortCellHolderSelector",s),a(n)},complete:function(e){o.hideTooltipOnCardDnD(e);var t=e.step.scenarioContext.get("step_EntityId"),r=e.step.scenarioContext.get("step_EffortCellHolderSelector");return a(r+" .i-role-card[data-entity-id="+t+"]",e),e},teardown:function(t){var o=t.step.scenarioContext.get("step_EffortCellHolderSelector");n(e(o))}},{message:["<p>You can repeat this step to estimate all the work.</p>",'<p class="tau-help-continue"><button class="i-role-next tau-btn tau-primary">Continue</button></p>'].join(""),targetCellSelector:".i-role-grid .i-role-cellholder:eq(0) .i-role-cell:eq(0)",target:function(){var e=this.targetCellSelector;return a(e)},complete:function(t){var a=this.targetCellSelector+" .i-role-card";if(0===e(a).size())o.resolveCtx(t);else{var r=t.$holder.tauBubble("getContent");r.on("click",".i-role-next",t.resolve)}return t}}]},{name:"Add a release",steps:[{message:["<p>We're done with the estimation, and it's time to plan a release. Click +Add to add a new release first.</p>","<p>You can create several releases for one project.</p>"].join(""),offset:40,target:function(){var e='.tau-app-secondary-pane .tau-quick-add[role="action-quick-add"]';return a(e)},complete:function(e){return e.$node.click(e.resolve),e}},{message:"<p>Click here.</p>",rollbackDepth:2,target:function(){var e='.tau-quick-add-dialog-general .quick-add__entity-items .i-role-entity-selector[data-type="Release"]';return a(e)},complete:function(e){return e.$node.click(e.resolve),e}},{message:"<p>Give a name to your release, e.g. Ship Happens.</p>",rollbackDepth:3,target:function(){var e='.tau-quick-add-dialog-general .tau-quick-add-dialog .tau-entity-controls .tau-control-set[data-type="Release"] input[data-fieldname="Name"]';return a(e)},complete:function(e){return e.$node.on("keypress",e.resolve),e}},o.stepSelectYourProject('.tau-quick-add-dialog-general .tau-quick-add-dialog .tau-entity-controls .tau-control-set[data-type="Release"] [data-fieldname="project"]',{rollbackDepth:4}),o.stepSelectToday('.tau-quick-add-dialog-general .tau-quick-add-dialog .tau-entity-controls .tau-control-set[data-type="Release"] [data-fieldname="StartDate"]',{rollbackDepth:5}),{message:"<p>Pick your release end date.</p>",rollbackDepth:6,target:function(){var e='.tau-quick-add-dialog-general .tau-quick-add-dialog .tau-entity-controls .tau-control-set[data-type="Release"] [data-fieldname="EndDate"]';return a(e)},complete:function(e){return e.$node.one("change",e.resolve),e}},{message:"<p>Click Add to create a release.</p>",rollbackDepth:7,target:function(){var e='.tau-quick-add-dialog-general .tau-quick-add-dialog .tau-entity-controls .tau-control-set[data-type="Release"] .tau-add-item';return a(e)},complete:function(e){return e.$node.click(e.resolve),e}},{message:"<p>Click here to hide the Quick Add screen. We will now proceed to the iteration planning.</p>",offset:30,target:function(){var e='.tau-app-secondary-pane .tau-quick-add[role="action-quick-add"]';return a(e)},complete:function(e){return e.$node.click(e.resolve),e}}]},{name:"Plan an Iteration",steps:[o.stepOpenBoard({boardName:"Iteration Plan",message:"<p>Let's open this board and break the release into iterations, as usually is done in Scrum planning.</p>"}),o.stepClickForQuickAdd({message:"<p>Click here to create a new iteration. You can create several iterations for one release.</p>",direction:"left",isScrollTo:!1,todoCellSelector:".i-role-board-body .i-role-header"}),{message:"<p>Give a name to your iteration, e.g. Iteration 0.</p>",rollbackDepth:2,direction:"left",target:function(){var e='.tau-quick-add-dialog .tau-entity-controls .tau-control-set[data-type="Iteration"] input[data-fieldname="Name"]';return a(e)},complete:function(e){return e.$node.on("keypress",e.resolve),e}},o.stepSelectYourProject('.tau-quick-add-dialog .tau-entity-controls .tau-control-set[data-type="Iteration"] [data-fieldname="project"]',{rollbackDepth:3,direction:"left"}),{message:"<p>Select the release you've just added.</p>",direction:"left",rollbackDepth:4,target:function(){var e='.tau-quick-add-dialog .tau-entity-controls .tau-control-set[data-type="Iteration"] .tau-field:eq(2)';return a(e)},complete:function(e){return e.$node.one("click",".tau-userStorySelector__control",e.resolve),e}},o.stepSelectToday('.tau-quick-add-dialog .tau-entity-controls .tau-control-set[data-type="Iteration"] [data-fieldname="StartDate"]',{rollbackDepth:5,direction:"left"}),{message:"<p>How long will your iteration be?</p>",rollbackDepth:6,direction:"left",target:function(){var e='.tau-quick-add-dialog .tau-entity-controls .tau-control-set[data-type="Iteration"] [data-fieldname="Duration"]';return a(e)},complete:function(e){return e.$node.on("keypress",e.resolve),e}},{message:"<p>Click Add. You can repeat these steps to create more iterations in the release.</p>",rollbackDepth:7,direction:"left",target:function(){var e='.tau-quick-add-dialog .tau-entity-controls .tau-control-set[data-type="Iteration"] .tau-add-item';return a(e)},complete:function(t){var r=i(".i-role-quick-add-success-message"),n=e.Deferred();return n.done(function(){var e=o.extractJustAddedEntityId(r);t.step.scenarioContext.set("step_IterationEntityId",e),o.resolveCtx(t)}),a(r,n,!0),t}},{message:"<p>Click here to hide the Quick Add screen.</p>",rollbackDepth:0,direction:"left",isScrollTo:!1,todoCellSelector:".i-role-board-body .i-role-header",target:function(){var e=this.todoCellSelector+" .tau-quick-add .tau-add";return a(e)},complete:function(e){return e.$node.one("click",function(){t.delay(e.resolve,3e3)}),e}},{message:["<p>Click here to see your new iteration.</p>",'<p class="tau-help-continue"><button class="i-role-next tau-btn tau-primary">Continue</button></p>'].join(""),direction:"none",isScrollTo:!1,target:function(o){var r=o.scenarioContext.get("step_IterationEntityId"),n='.i-role-cellaxis-viewtrigger[data-entity-id="'+r+'"]',i=e.Deferred();return i.done(t.bind(function(t){var o=this,a=e(t).data("id");o.scenarioContext.set("step_IterationSliceId",a)},o,n)),a(n,i),i},complete:function(e){var t=e.$holder.tauBubble("getContent");return t.on("click",".i-role-next",e.resolve),e}},{message:["<p>Expand the column. We will soon drag-n-drop cards here to plan this iteration.</p>"].join(""),direction:"none",isScrollTo:!1,target:function(t){var o=t.scenarioContext.get("step_IterationEntityId"),a='.i-role-cellaxis-viewtrigger[data-entity-id="'+o+'"]',r=e(a).closest(".i-role-cell").find(".i-role-axis-mark-collapser"),n=e.Deferred();return n.resolve(r),n},complete:function(e){return e.$node.one("click",e.resolve),e}},{message:["<p>Select the story cards you want to assign to this iteration.</p>",'<p class="tau-help-continue"><button class="i-role-next tau-btn tau-primary">Continue</button></p>'].join(""),direction:"left",isScrollTo:!1,targetCellSelector:".i-role-grid .i-role-cellholder .i-role-cell:eq(0)",target:function(){var e=this.targetCellSelector+" .i-role-card:eq(0) .i-role-name";return a(e)},complete:o.complete},{message:["<p>Drag-n-drop the selected cards to the iteration.</p>",'<p class="tau-help-card-dnd-horizontal"></p>'].join(""),direction:"none",isScrollTo:!1,targetCellSelector:".i-role-grid .i-role-cellholder .i-role-cell:eq(0)",target:function(o){var n=o.scenarioContext.get("step_IterationSliceId"),i='.i-role-grid .i-role-cellholder[data-x="'+n+'"]:eq(0)',l=e(i);return r(l,"Drop the cards here"),a(t.bind(function(){var t=e(this.targetCellSelector+" .i-role-card.tau-selected:eq(0)");return t.length?t:e(this.targetCellSelector+" .i-role-card:eq(0)")},this))},complete:function(e){o.hideTooltipOnCardDnD(e);var t=e.step.scenarioContext.get("step_IterationSliceId"),r='.i-role-grid .i-role-cellholder[data-x="'+t+'"]:eq(0) .i-role-card';return a(r,e),e},teardown:function(t){var o=t.step.scenarioContext.get("step_IterationSliceId"),a=e('.i-role-grid .i-role-cellholder[data-x="'+o+'"]:eq(0)');n(a)}},{message:["<p>Take a look at the iteration burn down chart.</p>"].join(""),direction:"none",isScrollTo:!1,target:function(e){var t=e.scenarioContext.get("step_IterationSliceId"),o='.i-role-header .i-role-cellholder[data-x="'+t+'"] .tau-icon_name_burn-down';return a(o)},complete:function(e){return e.$node.one("click",e.resolve),e}},{message:["<p>You can use this chart later to check how close the real progress is to what you've planned.</p>",'<p class="tau-help-continue"><button class="i-role-next tau-btn tau-primary">Continue</button></p>'].join(""),direction:"none",target:function(){return a(".ui-popup.ui-popup_active_true.tau-page-entity .i-role-tabheaders .i-role-tabheader.selected")},complete:function(e){window.scrollTo(0,0);var t=e.$holder.tauBubble("getContent");return t.on("click",".i-role-next",e.resolve),e}},o.stepClickOrEscToClose({message:"<p>Click to get back to the board.</p>",targetSelector:".ui-popup.ui-popup_active_true.tau-page-entity .close"})]},{name:"Break stories into tasks (optional)",steps:[o.stepOpenBoard({boardName:"Task Board",message:["<p>Sometimes you need to break User Stories into Tasks, e.g. for a more accurate planning.</p>","<p>Let's open the Task Board to see how this is done.</p>"].join("")}),o.stepClickForQuickAdd({message:"<p>Click to add a task to this user story. The task will appear in the ToDo (Open) state.</p>",direction:"right",offset:-15,isScrollTo:!1,todoCellSelector:".tau-grid tr:eq(1) .tau-cellholder:eq(0)"}),{message:"<p>Give a name to your task.</p>",rollbackDepth:2,direction:"left",target:function(){return a(".tau-quick-add-dialog input.Name")},complete:function(e){return e.$node.one("keypress",e.resolve),e}},o.stepSelectYourProject(".tau-quick-add-dialog select.project",{rollbackDepth:3,direction:"left"}),{message:"<p>Click to add this task to your user story. You can repeat these steps to add more tasks.</p>",rollbackDepth:4,direction:"left",target:function(){return a(".tau-quick-add-dialog .tau-add-item")},complete:function(e){return e.$node.one("click",function(){a(i(".i-role-quick-add-success-message"),e,!0)}),e}},{message:["<p>Here's your new task.</p>",'<p class="tau-help-continue"><button class="i-role-next tau-btn tau-primary">Continue</button></p>'].join(""),pin:!1,target:function(e){var t=o.extractJustAddedEntityId(i(".i-role-quick-add-success-message"));e.scenarioContext.set("step_justAddedTaskId",t);var r='.tau-grid tr:eq(1) .tau-cellholder:eq(0) .i-role-card[data-entity-id="'+t+'"]';return a(r)},complete:function(e){var t=e.$holder.tauBubble("getContent");return t.one("click",".i-role-next",e.resolve),e}},{message:["<p>Double-click the task card for details.</p>",'<p class="tau-help-card-dblclick"></p>'].join(""),target:function(e){var t=e.scenarioContext.get("step_justAddedTaskId"),o='.tau-grid tr:eq(1) .tau-cellholder:eq(0) .i-role-card[data-entity-id="'+t+'"]';return a(o)},complete:function(e){return e.$node.one("dblclick",e.resolve),e}},{message:'<p>You can assign this task to yourself. Click "Assign to Me".</p>',direction:"left",target:function(){var e=".tau-page-entity .additional-info .assignments-table .add-btn:eq(0)";return a(e)},complete:function(e){window.scrollTo(0,0);var t='.tau-page-entity .additional-info .assignments-table .user-list [role="user"]';return a(t,e),e}},o.stepClickOrEscToClose({message:"<p>Click to get back to the board</p>"}),o.stepClickForQuickAdd({message:["<p>Click + to add more tasks (optional).</p>",'<p><button class="i-role-next tau-btn tau-primary">Got it, thanks</button></p>'].join(""),isScrollTo:!1,direction:"left",offset:-5,todoCellSelector:".tau-grid tr:eq(1) .tau-cellholder:eq(0)",complete:o.complete})]},o.flowUserGuide];return l});