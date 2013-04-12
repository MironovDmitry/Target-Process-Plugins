define(["Underscore","tau/utils/utils.date","tau/utils/utils.translation","tau/core/templates-factory","app.path","tau/ui/templates/board.plus/ui.template.boardplus.card.assignments","tau/ui/templates/board.plus/ui.template.boardplus.card.assignedUsers","tau/ui/templates/board.plus/ui.template.boardplus.card.requesters","tau/ui/templates/board.plus/ui.template.boardplus.card.customFields","tau/ui/templates/board.plus/ui.template.boardplus.card.user","tau/ui/templates/board.plus/ui.template.boardplus.card.lastComment","tau/ui/templates/board.plus/ui.template.boardplus.card.id","tau/ui/templates/board.plus/ui.template.boardplus.card.avatar","tau/ui/templates/board.plus/ui.template.boardplus.card.connectedItems","tau/ui/templates/board.plus/ui.template.boardplus.card.relations","tau/ui/templates/board.plus/ui.template.boardplus.card.sparklines"],function(_,UtilsDate,Translation,templates,appPath){var config={name:"boardplus.card.content",engine:"jqote2",customFunctions:{_:_,dateUtils:UtilsDate,cutList:function(list,limit){return{show:list.slice(0,limit),restLength:list.slice(limit).length}},processTags:function(tags){return _.compact(_.asString(tags).split(","))},processSparklines:function(){return[appPath.get()+"/JavaScript/tau/css.board/images/project_sparkline_a.png",appPath.get()+"/JavaScript/tau/css.board/images/project_sparkline_b.png"]},dateToString:function(dateStr){return UtilsDate.format.date.short(UtilsDate.convertToTimezone(dateStr))},pluralize:Translation.pluralize},markup:['<div class="tau-card-header-container">','<%= fn.sub("boardplus.card.id", this) %>','<% if (this.type.toLowerCase() === "user") {%>','<%= fn.sub("boardplus.card.avatar", this) %>',"<%} %>",'<% if (this.hasOwnProperty("tags")) { %>',"<% var tags = fn.processTags(this.tags); %>","<% for( var i=0;i<tags.length;i++){%>",'<span class="tau-tag"><%! tags[i] %></span>',"<% } %>","<% } %>","</div>",'<div class="tau-card-title-container">','<div class="tau-name i-role-name">','<% if (this.type.toLowerCase() === "project"){ %>','<span <% if (this.color) { %>class="i-role-color" data-color="<%= this.color %>" style="background-color:<%= this.color %>; border-color:<%= this.color %>;"<% } else {%>class="i-role-nocolor"<%}%> >',"<%! this.name %>","</span>",'<% } else if (this.type.toLowerCase() === "team"){ %>',"<% if (_.asString(this.icon).trim()) { %>",'<i class="tau-icon tau-icon_type_svg tau-icon_name_<%! _.asString(this.icon).trim() %> " data-icon="<%! _.asString(this.icon).trim() %>"></i>',"<% } %>","<span>","<%! this.name %>","</span>",'<% } else if (this.type.toLowerCase() === "user"){ %>',"<%! (_.trim(this.name) || _.trim(this.login)) %>","<% } else { %>","<%! _.trim(this.name) %>","<% } %>","</div>",'<% if (this.hasOwnProperty("roleName")) {%>','<div class="tau-role">',"<%= this.roleName %>","</div>","<% } %>","</div>",'<div class="tau-card-main-container">','<% if (this.hasOwnProperty("assignedUsers") || this.hasOwnProperty("responsible")) {%>','<div class="tau-people">','<% if (this.hasOwnProperty("assignedUsers")) {%>','<%= fn.sub("boardplus.card.assignedUsers", {items:fn.cutList(this.assignedUsers, 3).show,count:this.assignedUsers.length-3}) %>',"<% } %>",'<% if (this.hasOwnProperty("responsible")) {%>','<%= fn.sub("boardplus.card.user", this.responsible) %>',"<% } %>","</div>","<% } %>","<% if (this.team && this.team.icon) {%>",'<i class="tau-team tau-icon tau-icon_type_svg <% if (this.team.icon){ %> tau-icon_name_<%! this.team.icon %><% } %>"></i>',"<% } %>","<% if (this.openImpedimentsCount > 0) {%>",'<span class="tau-impediments"><%=this.openImpedimentsCount%></span>',"<% } %>",'<% if (this.hasOwnProperty("effort")) {%>','<div class="tau-effort"><%=this.effort%>','<%=this.units||"pt"%>',"</div>","<% } %>","<% if (this.project && this.project.abbreviation) {%>",'<div <% if (this.project.color){ %> style="background-color: <%=this.project.color %>;"<% } %> class="tau-project">',"<%=this.project.abbreviation %>","</div>","<% } %>",'<% if (this.hasOwnProperty("lastRunDate") && this.hasOwnProperty("lastStatus") && this.lastStatus != null ) {%>','<span class="tau-testcase-state tau-testcase-<%= (this.lastStatus?"success":"failed")%>" title="<%=fn.dateToString(this.lastRunDate)%>"></span>',"<%} %>",'<%= fn.sub("boardplus.card.relations", this) %>','<% if (this.hasOwnProperty("openTasks") && this.hasOwnProperty("allTasks") && this.allTasks > 0) {%>','<div class="tau-related-tasks"><span class="i-task">t</span>',"<%=this.openTasks%>/<%=this.allTasks%>","</div>","<% } %>",'<% if (this.hasOwnProperty("openBugs") && this.hasOwnProperty("allBugs") && this.allBugs > 0) {%>','<div class="tau-related-bugs"><span class="i-bug">b</span>',"<%=this.openBugs%>/<%=this.allBugs%>","</div>","<% } %>",'<% if (this.hasOwnProperty("userStoriesCount") && this.userStoriesCount > 0) {%>','<div class="tau-related-userstories"><span class="i-story">u</span>',"<%=this.openUserStoriesCount%>/<%=this.userStoriesCount%>","</div>","<% } %>","<% if (this.relatedEntitiesCount > 0) {%>",'<div class="tau-related-entities-info">','<span class="tau-related-entities-count"><%=this.relatedEntitiesCount%></span>',"</div>","<% } %>",'<% if (this.hasOwnProperty("requesters") && this.requesters.length > 0) {%>','<div class="tau-request-vote"><%=this.requesters.length%></div>',"<% } %>",'<% if (this.hasOwnProperty("votes") && this.votes > 0) {%>','<div class="tau-request-vote"><%=this.votes%></div>',"<% } %>",'<% if (this.hasOwnProperty("createDate")) {%>',"<%var date = this.createDate; %>",'<div class="tau-date"><%=fn.dateToString(date)%>&nbsp;</div>',"<%} %>",'<% if (this.hasOwnProperty("currentAllocation")) {%>','<div class="tau-allocation"><%=this.currentAllocation %>%</div>',"<%} %>",'<% if (this.hasOwnProperty("teamCount") && this.teamCount > 0 ) {%>','<div class="tau-team-count"><%=this.teamCount %></div>',"<%} %>",'<% if (this.hasOwnProperty("teamProjectsCount") && this.teamProjectsCount > 0){ %>','<div class="tau-team-list">','<div class="tau-teams-counter"><%=this.teamProjectsCount %> <%=fn.pluralize("team|teams", this.teamProjectsCount) %></div>','<%= fn.sub("boardplus.card.connectedItems", {items: this.teams, type: "team"}) %>',"</div>","<% } %>",'<% if (this.hasOwnProperty("teamMembersCount") && this.teamMembersCount > 0){ %>','<div class="tau-people-list">','<div class="tau-people-counter"><%=this.teamMembersCount %>  <%=fn.pluralize("person|people", this.teamMembersCount) %></div>','<%= fn.sub("boardplus.card.connectedItems", {items: this.members, type: "user"}) %>',"</div>","<% } %>","</div>",'<%= fn.sub("boardplus.card.sparklines", this) %>','<% if (this.hasOwnProperty("customFields") ||                 this.hasOwnProperty("priorityName") ||                 this.hasOwnProperty("severityName") ||                 this.hasOwnProperty("lastCommentedUser")){%>','<div class="tau-card-footer-container">','<% if (this.hasOwnProperty("severityName") && this.severityName) {%>','<div class="tau-severity">Severity: <%=this.severityName%></div>',"<%} %>",'<% if (this.hasOwnProperty("priorityName") && this.priorityName.length >0 ){ %>','<div class="tau-priority">Priority: <%=this.priorityName%></div>',"<%} %>",'<% if (this.hasOwnProperty("customFields")){ %>','<%= fn.sub("boardplus.card.customFields", this.customFields) %>',"<% } %>",'<% if (this.hasOwnProperty("lastCommentedUser")){ %>','<%= fn.sub("boardplus.card.lastComment", this) %>',"<% } %>","</div>","<% } %>"]};return templates.register(config)})