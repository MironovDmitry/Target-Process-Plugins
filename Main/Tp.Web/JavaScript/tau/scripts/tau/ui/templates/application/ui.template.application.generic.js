define(["tau/core/templates-factory"],function(e){var i={name:"application.generic",engine:"jqote2",markup:['<div role="application" class="tau-app i-role-application','<% if (navigator.userAgent.indexOf("Windows") > 0) { %> i-useragent_os_win<% } %>',"<% if (fn.$.browser.webkit) { %> i-browser_engine_webkit<% } %>","<% else if (fn.$.browser.mozilla) { %> i-browser_engine_mozilla<% } %>","<% else if (fn.$.browser.msie) { %> i-browser_engine_ie<% } %>",'">',"</div>"]};return e.register(i)});