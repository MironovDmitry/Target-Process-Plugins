define(["tau/services/search/service.search.command.multiIds","tau/services/search/service.search.command.multiIdsParts","tau/services/search/service.search.command.text"],function(e,a,s){var r={getSuitableCommand:function(r){return e.isSuitableCommand(r)?e:a.isSuitableCommand(r)?a:s}};return r});