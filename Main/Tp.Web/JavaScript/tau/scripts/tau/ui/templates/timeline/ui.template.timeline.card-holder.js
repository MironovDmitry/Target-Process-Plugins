define(["tau/core/templates-factory"],function(a){var e={name:"timeline.card-holder",engine:"jqote2",customFunctions:{plannedCardClass:function(a){return a.hasActual?"tau-card-planner-has-actual":""}},markup:['<div class="tau-timeline-card i-role-timeline-card">','<div class="tau-card-planner i-role-card-planner <%= fn.plannedCardClass(this.card) %> <%=this.card.fixedDatePlan ? "tau-planned-fixed-date": ""%>">','<div class="tau-start-date i-role-range-editor">','<div class="tau-start-date-arrow"></div>','<div class="ui-resizable-handle ui-resizable-w"></div>',"</div>",'<div class="tau-end-date i-role-range-editor">','<div class="tau-end-date-arrow"></div>','<div class="ui-resizable-handle ui-resizable-e"></div>',"</div>",'<div class="tau-card-holder i-role-timeline-planner-card-holder">','<div class="i-role-card-placeholder"></div>',"</div>","</div>",'<div class="i-role-timeline-card-holder tau-card-holder <%=this.card.showForecast ? "tau-card-has-forecast": ""%>">','<div class="i-role-card-placeholder"></div>',"</div>",'<div class="i-role-card-predictor tau-card-predictor"></div>',"</div>"]};return a.register(e)});