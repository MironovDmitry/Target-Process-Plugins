define(["jQuery","Underscore","tau/services/help-scenarios/base"],function(e,t,a){var n=a.liveSelect,o=[a.flowIntroVideo,{name:"Projects and Teams",steps:[{message:["<p>Here you can select projects and teams to see related work. New projects can be added here as well.</p>",'<p class="tau-help-continue"><button class="i-role-next tau-btn tau-primary">Continue</button></p>'].join(""),offset:35,target:function(){return n(".tau-context-filter")},complete:a.complete}]},{name:"Quick Add",steps:[{message:["<p>Add new items: Releases, Sprints, User Stories, Bugs, etc.</p>",'<p class="tau-help-continue"><button class="i-role-next tau-btn tau-primary">Continue</button></p>'].join(""),offset:30,target:function(){var e='.tau-app-secondary-pane .tau-quick-add[role="action-quick-add"]';return n(e)},complete:a.complete}]},{name:"Boards",steps:[{message:["<p>This area contains boards added by Admin or other people. Board is just a way to see and manipulate data.</p>",'<p class="tau-help-continue"><button class="i-role-next tau-btn tau-primary">Continue</button></p>'].join(""),target:function(){var e=".tau-boardselector";return n(e)},complete:a.complete}]},{name:"Create board",steps:[{message:["<p>You can create your own private boards to see relevant information.</p>",'<p class="tau-help-continue"><button class="i-role-next tau-btn tau-primary">Continue</button></p>'].join(""),target:function(){return n(".tau-app-secondary-pane .tau-add-board-btn")},complete:a.complete}]},a.flowUserGuide];return o});