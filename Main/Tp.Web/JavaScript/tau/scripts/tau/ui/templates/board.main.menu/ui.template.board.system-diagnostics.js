define(["tau/core/templates-factory"],function(e){var t={name:"board.system-diagnostics",engine:"jqote2",markup:['<div class="diagnostic-report">','<div class="diagnostic-report_body">','<div class="diagnostic-report_title">Diagnostic report</div>','<div class="tau-txt i-role-diagnostics-description">',"<p>This performance diagnostic report will help us improve the performance.</p>","</div>",'<div class="i-role-loader tau-txt" style="display: none;">','<a href="#"><span class="tau-icon-general tau-icon-loading"></span>Report in progress</a>',"</div>",'<div class="tau-txt i-role-see-full-report" style="display: none;">','<a href="#">See full report</a>',"</div>",'<div class="i-role-report-body diagnostic-report_result" style="display: none;"></div>','<div class="diagnostic-report_wrap-btn diagnostic-report_bottom diagnostic-report_bottom--scroll">','<button class="tau-btn tau-primary tau-btn-large i-role-send-button" disabled="disabled" onclick="return false;">Send report</button>','<div class="wrap-textarea">','<textarea class="i-role-comment" placeholder="Share more details"></textarea>',"</div>","</div>","</div>","</div>"],dependencies:[]};return e.register(t)});