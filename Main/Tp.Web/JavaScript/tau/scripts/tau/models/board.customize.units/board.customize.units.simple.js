define(["Underscore","tau/models/board.customize.units/const.entity.types.names","tau/models/board.customize.units/const.card.sizes","tau/models/board.customize.units/const.sorting.applying","tau/models/board.customize.units/board.customize.units.base","app.path","tau/utils/utils.date"],function(t,a,e,i,s,n,d){a.STORY=a.US;var r=[e.XS,e.S,e.M,e.L,e.XL],l=[e.XS,e.S,e.M,e.L,e.XL,e.LIST],o={daysOrHoursValue:function(t,a){return this.precise_round(1>t?24*t:t,a||1)},daysOrHoursUnit:function(t){return 1>t?"h":"d"}},u=function(t){return['<div class="tau-board-unit__value_type_day"><%=fn.formatDayShort(this.data.{{DATE}})%></div>','<div class="tau-board-unit__value_type_month"><%=fn.formatDate(this.data.{{DATE}}, "MMM")%></div>','<div class="tau-board-unit__value_type_year"><%=fn.formatDate(this.data.{{DATE}}, "yyyy")%></div>'].join("").replace(new RegExp("{{DATE}}","g"),t)},m=['<div class="tau-board-unit_type_date-range__start-date <% if (this.data.isCurrent) { %>tau-date-range_current<%}%>">',"<% if (this.data.startDate) {%>",'<div class="tau-board-unit__value_type_day"><%= fn.formatDayShort(this.data.startDate)%></div>','<div class="tau-board-unit__value_type_month"><%= fn.formatDate(this.data.startDate, "MMM")%></div>',"<% } else {%>",'<div class="tau-board-unit__value_type_unknown">not set</div>',"<%}%>","</div>",'<div class="tau-board-unit_type_date-range__end-date <%if (this.data.isCurrent) {%>tau-date-range_current<%}%>">',"<% if(this.data.endDate) {%>",'<div class="tau-board-unit__value_type_day"><%= fn.formatDayShort(this.data.endDate)%></div>','<div class="tau-board-unit__value_type_month"><%= fn.formatDate(this.data.endDate, "MMM")%></div>',"<% } else {%>",'<div class="tau-board-unit__value_type_unknown">not set</div>',"<%}%>","</div>"],_=['<div class="tau-board-unit_type_date-range__start-date <% if (this.data.isActive) { %>tau-date-range_current<%}%>">',"<% if (this.data.startDate) {%>",'<div class="tau-board-unit__value_type_day"><%= fn.formatDate(this.data.startDate, "dd") %></div>','<div class="tau-board-unit__value_type_month"><%=fn.formatDate(this.data.startDate, "MMM")%></div>','<div class="tau-board-unit__value_type_year"><%=fn.formatDate(this.data.startDate, "yyyy")%></div>',"<% } else {%>",'<div class="tau-board-unit__value_type_unknown">not set</div>',"<%}%>","</div>",'<div class="tau-board-unit_type_date-range__end-date <% if (this.data.isActive) { %>tau-date-range_current<%}%>">',"<% if (this.data.endDate) {%>",'<div class="tau-board-unit__value_type_day"><%= fn.formatDate(this.data.endDate, "dd")%></div>','<div class="tau-board-unit__value_type_month"><%=fn.formatDate(this.data.endDate, "MMM")%></div>','<div class="tau-board-unit__value_type_year"><%=fn.formatDate(this.data.endDate, "yyyy")%></div>',"<% } else {%>",'<div class="tau-board-unit__value_type_unknown">not set</div>',"<%}%>","</div>"],c=s.createUnitValueWrapperTemplate.bind(s),p=function(t){return n.get()+t},f=[{id:"general_entity_id",classId:"tau-board-unit_type_id",name:"Id",header:"ID",rank:100,settings:[{types:[a.FEATURE,a.STORY,a.TASK,a.BUG,a.REQUEST,a.TEST_CASE,a.IMPEDIMENT,a.TEAM,a.PROJECT,a.ITERATION,a.TEAM_ITERATION,a.RELEASE,a.TEST_PLAN,a.TEST_PLAN_RUN,a.BUILD],sizes:[e.XS,e.S,e.M,e.L,e.XL,e.LIST]},{types:[a.GENERAL,a.INBOUND_RELATIONS,a.OUTBOUND_RELATIONS],sizes:[e.LIST]}],template:['<div class="tau-board-unit__value">',"<%= fn.generateEntityLink(this, this.data, this.data.entityType.name) %>","</div>"],sampleData:{id:193011,entityType:{name:"userstory"}},listSettings:{title:'<%= fn.term(this.data.entityType.name, "name") + " #" + this.data.id %>'}},{id:"user_entity_id",classId:"tau-board-unit_type_id",name:"Id",header:"ID",types:[a.USER,a.ASSIGNED_USER],sizes:[e.S,e.M,e.L,e.XL,e.LIST],template:['<div class="tau-board-unit__value">','<%= fn.generateEntityLink(this, this.data, "user") %>',"</div>"],sampleData:{id:193011},listSettings:{title:'<%= fn.term(this.type, "name") + " #" + this.data.id %>'}},{id:"entity_name_1line",classId:"tau-board-unit_type_entity-name",name:"Name",settings:[{types:[a.FEATURE,a.STORY,a.TASK,a.BUG,a.REQUEST,a.TEST_CASE,a.IMPEDIMENT,a.ITERATION,a.TEAM_ITERATION,a.RELEASE,a.TEST_PLAN,a.TEST_PLAN_RUN,a.BUILD],sizes:[e.M,e.L,e.XL,e.LIST]},{types:[a.GENERAL,a.INBOUND_RELATIONS,a.OUTBOUND_RELATIONS],sizes:[e.LIST]}],sections:1,rank:101,isNameUnit:!0,template:['<div class="tau-board-unit__value tau-name i-role-name"><%!this.data.name%></div>'],sampleData:{name:"Chances are you'll remember information printed in a font like this one better than information presented in a font like this, because less legible fonts make you concentrate harder."},editorConfig:{type:"title",template:{name:"title.simple"}}},{id:"entity_name_small_sizes",classId:"tau-board-unit_type_entity-name-extended-small",name:"Name",types:[a.FEATURE,a.STORY,a.TASK,a.BUG,a.REQUEST,a.TEST_CASE,a.IMPEDIMENT,a.ITERATION,a.TEAM_ITERATION,a.RELEASE,a.TEST_PLAN,a.TEST_PLAN_RUN,a.BUILD],sizes:r,sections:1,isStretchable:!1,template:['<div class="tau-board-unit__value tau-name i-role-name"><%!this.data.name%></div>'],sampleData:{name:"Chances are you'll remember information printed in a font like this one better than information presented in a font like this, because less legible fonts make you concentrate harder."}},{id:"entity_name_3lines",classId:"tau-board-unit_type_entity-name-extended",name:"Name",types:[a.FEATURE,a.STORY,a.TASK,a.BUG,a.REQUEST,a.TEST_CASE,a.IMPEDIMENT,a.ITERATION,a.TEAM_ITERATION,a.RELEASE,a.TEST_PLAN,a.TEST_PLAN_RUN,a.BUILD],sizes:[e.S,e.M,e.L,e.XL],sections:2,template:['<div class="tau-board-unit__value tau-name i-role-name"><%!this.data.name%></div>'],sampleData:{name:"Chances are you'll remember information printed in a font like this one better than information presented in a font like this"}},{id:"entity_name_5lines",classId:"tau-board-unit_type_entity-name-extended-plus",name:"Name",types:[a.FEATURE,a.STORY,a.TASK,a.BUG,a.REQUEST,a.TEST_CASE,a.IMPEDIMENT,a.ITERATION,a.TEAM_ITERATION,a.RELEASE,a.TEST_PLAN,a.TEST_PLAN_RUN,a.BUILD],sizes:[e.M],sections:3,template:['<div class="tau-board-unit__value tau-name i-role-name"><%!this.data.name%></div>'],sampleData:{name:"Chances are you'll remember information printed in a font like this one better than information presented in a font like this. Cras tristique at lacus pretium rutrum. Sed suscipit aliquam diam, nec feugiat quam pharetra ac. Suspendisse vel neque laoreet"}},{id:"team_project_name_short",classId:"tau-board-unit_type_entity-name",name:"Name",types:[a.TEAM,a.PROJECT],sizes:[e.XS,e.M,e.L,e.XL],template:['<div class="tau-board-unit__value tau-name i-role-name"><%!fn.trim(this.data.name,15)%></div>'],sampleData:{name:"Custom Graphic Reports"},editorConfig:{type:"title",template:{name:"title.simple"}}},{id:"team_project_name_long",classId:"tau-board-unit_type_entity-name",name:"Name",types:[a.TEAM,a.PROJECT],sizes:[e.XS,e.S,e.M,e.L,e.XL,e.LIST],sections:1,rank:101,isNameUnit:!0,template:['<div class="tau-board-unit__value tau-name i-role-name"><%!this.data.name%></div>'],sampleData:{name:"Custom Graphic Reports"},editorConfig:{type:"title",template:{name:"title.simple"}}},{id:"user_name",classId:"tau-board-unit_type_user-name",name:"Full name",header:"Full Name",isNameUnit:!0,settings:[{types:[a.USER,a.ASSIGNED_USER],sizes:[e.S,e.M,e.L,e.XL,e.LIST],model:"firstName,lastName,email",sortConfig:{field:"lastName,firstName,email"}},{types:[a.PROJECT_MEMBER],sizes:[e.S,e.M,e.L,e.XL,e.LIST],model:"user.firstName,user.lastName,user.email",sortConfig:{field:"user.lastName,user.firstName,user.email"}}],template:['<div class="tau-board-unit__value tau-name i-role-name">','<%! (this.data.firstName && this.data.lastName || this.data.empty)? [this.data.firstName, this.data.lastName].join(" ") : this.data.email %></div>'],sampleData:{firstName:"Uladzimir",lastName:"Karatkievich",email:"u.karatkievich@writer.com"}},{id:"effort_spent_total",classId:"tau-board-unit_type_effort-todo-total",name:"Todo/total effort",header:"Effort",types:[a.STORY,a.TASK,a.BUG,a.REQUEST,a.TEST_PLAN_RUN,a.FEATURE],sizes:l,sortConfig:{allowed:i.NONE},template:['<div class="tau-board-unit__value-todo"><%=fn.precise_round(this.data.effortToDo||0,1)%></div>','<div class="tau-board-unit__value-total"><%=fn.precise_round(this.data.effort||0,1)%></div>','<div class="tau-board-unit__points"><%=this.data.units%></div>'],sampleData:{effortToDo:20.5,effort:55.5,units:"pt"},listSettings:{title:["<%= fn.precise_round(this.data.effortToDo || 0, 1) %>"," / ","<%= fn.precise_round(this.data.effort || 0, 1) %><%= this.data.units %>"]}},{id:"effort_total",classId:"tau-board-unit_type_effort-total",name:"Total effort",header:"Effort",types:[a.STORY,a.TASK,a.BUG,a.REQUEST,a.TEST_PLAN_RUN,a.FEATURE],sizes:l,template:['<div class="tau-board-unit__value"><%=fn.precise_round(this.data.effort||0,1)%></div>','<div class="tau-board-unit__points"><%=this.data.units%></div>'],sampleData:{effort:10.5,units:"pt"},editorConfig:{type:"effort",isEditable:function(t){return"feature"!==t.type}}},{id:"create_date",classId:"tau-board-unit_type_date tau-board-unit_type_creation-date",hideIf:function(t){return!t.createDate},name:"Created",settings:[{types:[a.FEATURE,a.STORY,a.TASK,a.BUG,a.REQUEST,a.TEST_CASE,a.IMPEDIMENT,a.TEAM,a.PROJECT,a.ITERATION,a.TEAM_ITERATION,a.RELEASE,a.TEST_PLAN,a.TEST_PLAN_RUN,a.BUILD],sizes:l},{types:[a.USER],sizes:[e.S,e.M,e.L,e.XL,e.LIST]}],template:c(u("createDate")),sampleData:{createDate:"/Date(1385350733000-0500)/"},listSettings:{title:'<%=fn.formatDate(this.data.createDate, "dd MMM yyyy")%>'}},{id:"last_login_date",classId:"tau-board-unit_type_time-last-login",name:"Last login",header:"Last Login",settings:[{types:[a.USER],sizes:[e.M,e.L,e.XL,e.LIST]}],template:['<div class="tau-board-unit__value">',"<% if (this.data.lastLoginDate) { %>",u("lastLoginDate"),"<% } else { %>",'<span class="tau-board-unit_type_time-last-login-never">unknown</span>',"<% } %>","</div>"],sampleData:{lastLoginDate:"/Date(1385350733000-0500)/"},listSettings:{title:'<%=fn.formatDate(this.data.lastLoginDate, "dd MMM yyyy")%>'}},{id:"start_date",classId:"tau-board-unit_type_date tau-board-unit_type_start-date",hideIf:function(t){return!t.startDate},name:"Started",types:[a.FEATURE,a.STORY,a.TASK,a.BUG,a.REQUEST,a.IMPEDIMENT,a.ITERATION,a.TEAM_ITERATION,a.RELEASE,a.TEST_PLAN,a.TEST_PLAN_RUN,a.PROJECT],sizes:l,template:c(u("startDate")),sampleData:{startDate:"/Date(1385360733000-0500)/"},listSettings:{title:'<%=fn.formatDate(this.data.startDate, "dd MMM yyyy")%>'}},{id:"dates",classId:"tau-board-unit_type_date-range",hideIf:function(t){return!t.startDate&&!t.endDate},name:"Started — Finished",sortConfig:{allowed:i.NONE},types:[a.ITERATION,a.TEAM_ITERATION,a.RELEASE],sizes:l,template:c(m),listSettings:{title:["<% if (this.data.startDate || this.data.endDate) { %>",'<%= this.data.startDate ? fn.formatDate(this.data.startDate, "dd MMM") : "..."%>'," — ",'<%= this.data.endDate ? fn.formatDate(this.data.endDate, "dd MMM") : "..."%>',"<% } %>"]},sampleData:{startDate:"/Date(1385360733000-0500)/",endDate:"/Date(1305360733000-0500)/",isCurrent:!1}},{id:"pm_dates",classId:"tau-board-unit_type_date-range",hideIf:function(t){return!t.startDate&&!t.endDate},name:"Started — Finished",sortConfig:{allowed:i.NONE},types:[a.PROJECT_MEMBER],sizes:[e.S,e.M,e.L,e.XL,e.LIST],template:c(_),sampleData:{startDate:"/Date(1305360733000-0500)/",endDate:"/Date(1385360733000-0500)/"},model:"startDate:membershipStartDate,endDate:membershipEndDate",listSettings:{title:['<%= fn.cond(this.data.startDate, fn.formatDate(this.data.startDate, "dd MMM yyyy"), "not set") %>'," — ",'<%= fn.cond(this.data.endDate, fn.formatDate(this.data.endDate, "dd MMM yyyy"), "not set") %>']}},{id:"long_dates",classId:"tau-board-unit_type_date-range",hideIf:function(t){return!t.startDate&&!t.endDate},name:"Started — Finished",types:[a.PROJECT],sizes:[e.XS,e.S,e.M,e.L,e.XL,e.LIST],sortConfig:{allowed:i.NONE},template:c(_),sampleData:{startDate:"/Date(1305360733000-0500)/",endDate:"/Date(1385360733000-0500)/"},listSettings:{title:['<%= fn.cond(this.data.startDate, fn.formatDate(this.data.startDate, "dd MMM yyyy"), "not set") %>'," — ",'<%= fn.cond(this.data.endDate, fn.formatDate(this.data.endDate, "dd MMM yyyy"), "not set") %>']}},{id:"end_date",classId:"tau-board-unit_type_date tau-board-unit_type_end-date",hideIf:function(t){return!t.endDate},name:"Finished",types:[a.FEATURE,a.STORY,a.TASK,a.BUG,a.REQUEST,a.IMPEDIMENT,a.ITERATION,a.TEAM_ITERATION,a.RELEASE,a.TEST_PLAN_RUN,a.PROJECT],sizes:l,template:c(u("endDate")),sampleData:{endDate:"/Date(1305360733000-0500)/"},listSettings:{title:'<%=fn.formatDate(this.data.endDate, "dd MMM yyyy")%>'}},{id:"build_date",classId:"tau-board-unit_type_date tau-board-unit_type_build-date",name:"Build date",header:"Build Date",types:[a.BUILD],sizes:l,template:c(['<div class="tau-board-unit_type_build-date__date">',u("buildDate"),"</div>",'<div class="tau-board-unit_type_build-date__time">','<div class="tau-board-unit__value_type_hours"><%=fn.formatDate(this.data.buildDate, "HH")%></div>','<div class="tau-board-unit__value_type_minutes"><%=fn.formatDate(this.data.buildDate, "mm")%></div>',"</div>"]),sampleData:{buildDate:"/Date(1305360733000-0500)/"},listSettings:{title:'<%=fn.formatDate(this.data.buildDate, "dd MMM yyyy HH:mm")%>'}},{id:"cycle_time",classId:"tau-board-unit_type_time-cycle",name:"Cycle time",header:"Cycle Time",types:[a.STORY,a.BUG,a.TASK,a.TEST_PLAN_RUN,a.FEATURE],sizes:l,sortConfig:{allowed:i.NONE},template:{customFunctions:o,markup:['<div class="tau-board-unit__value"><%=fn._.isUndefined(this.data.cycleTime)?"n/a":fn.daysOrHoursValue(this.data.cycleTime)%></div>','<div class="tau-board-unit__points"><%=fn._.isUndefined(this.data.cycleTime)?"":fn.daysOrHoursUnit(this.data.cycleTime)%></div>']},sampleData:{cycleTime:356.2}},{id:"lead_time",classId:"tau-board-unit_type_time-lead",name:"Lead time",header:"Lead Time",types:[a.STORY,a.BUG,a.TASK,a.TEST_PLAN_RUN,a.FEATURE],sizes:l,sortConfig:{allowed:i.NONE},template:{customFunctions:o,markup:['<div class="tau-board-unit__value"><%=fn.daysOrHoursValue(this.data.leadTime||0)%></div>','<div class="tau-board-unit__points"><%=fn.daysOrHoursUnit(this.data.leadTime||0)%></div>']},sampleData:{leadTime:324.85}},{id:"time_spent_remain",name:"Time spent/time remaining",header:"Time",classId:"tau-board-unit_type_time-remain-spent",types:[a.STORY,a.TASK,a.BUG,a.REQUEST,a.TEST_PLAN_RUN,a.FEATURE],sizes:l,sortConfig:{allowed:i.NONE},template:c(['<div class="tau-board-unit__value-spent"><%=fn.precise_round(this.data.timeSpent||0,1)%></div>','<div class="tau-board-unit__value-remain"><%=fn._.isUndefined(this.data.timeRemain) ? "n/a" : fn.precise_round(this.data.timeRemain||0,1)%></div>']),listSettings:{title:["Spent: <%=fn.precise_round(this.data.timeSpent||0,1)%>"," / ",'remain: <%=fn._.isUndefined(this.data.timeRemain) ? "n/a" : fn.precise_round(this.data.timeRemain||0,1)%>']},sampleData:{timeSpent:322.47,timeRemain:320.8}},{id:"tc_last_run_date",classId:"tau-board-unit_type_date tau-board-unit_type_last-run-date",hideIf:function(t){return!t.lastRunDate},name:"Last run",types:[a.TEST_CASE],sizes:r,template:c(u("lastRunDate")),sampleData:{lastRunDate:"/Date(1305360733000-0500)/"},listSettings:{title:'<%=fn.formatDate(this.data.lastRunDate, "dd MMM yyyy")%>'}},{id:"last_comment_date",classId:"tau-board-unit_type_date tau-board-unit_type_last-comment-date",hideIf:function(t){return!t.lastCommentDate},name:"Last commented",header:"Last Commented",types:[a.FEATURE,a.STORY,a.TASK,a.BUG,a.REQUEST,a.TEST_CASE,a.IMPEDIMENT,a.ITERATION,a.TEAM_ITERATION,a.RELEASE,a.TEST_PLAN,a.TEST_PLAN_RUN,a.BUILD],sizes:l,template:c(u("lastCommentDate")),sampleData:{lastCommentDate:"/Date(1335360733000-0500)/"},listSettings:{title:'<%=fn.formatDate(this.data.lastCommentDate, "dd MMM yyyy")%>'}},{id:"project_project_icon",classId:"tau-board-unit_type_icon",hideIf:function(t){return!t.color},name:"Project color",header:"Color",types:[a.PROJECT],sizes:l,template:['<i class="tau-icon tau-icon_type_color" style="background-color:<%=this.data.color||\'transparent\'%>;"></i>'],sampleData:{color:"#f9d9d1",name:"CodeGuard 3"},listSettings:{title:"<%= this.data.name %>"}},{id:"project_project_abbr",classId:"tau-board-unit_type_project_abbr",name:"Abbreviation",header:"Abbr.",types:[a.PROJECT],sizes:l,sortConfig:{field:"abbreviation"},template:['<div class="tau-board-unit__value_type_abbr" style="background-color:<%=this.data.color||\'transparent\'%>;"><%!this.data.abbreviation%></div>'],sampleData:{color:"#f9d9d1",abbreviation:"CG3",name:"CodeGuard 3"},listSettings:{title:"<%= this.data.name %>"}},{id:"team_team",classId:"tau-board-unit_type_icon",hideIf:function(t){return!t.icon},name:"Team icon",header:"Icon",types:[a.TEAM],sizes:l,template:['<i class="tau-icon tau-icon_type_svg tau-icon_name_<%= this.data.icon %>"></i>'],sampleData:{icon:"ufo",name:"United Future Organization"},listSettings:{title:"<%! this.data.icon && this.data.name %>"}},{id:"request_private",classId:"tau-board-unit_type_icon",hideIf:function(t){return!t.isPrivate},name:"Private",settings:[{types:[a.REQUEST,a.IMPEDIMENT],sizes:l}],template:['<i class="tau-icon tau-icon_type_svg tau-icon_name_lock"></i>'],sampleData:{isPrivate:!0},listSettings:{title:'<%= fn.cond(this.data && this.data.isPrivate, "Private", "") %>'}},{id:"progress_short",classId:"tau-board-unit_type_progress",name:"Progress",types:[a.PROJECT,a.FEATURE,a.STORY,a.TASK,a.BUG,a.REQUEST,a.TEST_PLAN_RUN],sizes:r,template:['<div class="tau-board-unit__value"><%= fn.precise_round(this.data.progress * 100, 0) %></div>'],sampleData:{progress:1}},{id:"progress_long",classId:"tau-board-unit_type_progress",name:"Progress",types:[a.PROJECT,a.FEATURE,a.STORY,a.TASK,a.BUG,a.REQUEST,a.TEST_PLAN_RUN],sizes:l,sortConfig:{allowed:i.NONE},template:['<div class="tau-progress tau-v-<%= fn.precise_round(this.data.progress * 10, 0) * 10 %>"></div>','<div class="tau-board-unit__value"><%= fn.precise_round(this.data.progress * 100, 0) %></div>'],listSettings:{title:"<%= fn.precise_round(this.data.progress * 100, 0) %>%"},sampleData:{progress:1}},{id:"user_avatar",classId:"tau-board-unit_type_avatar",name:"Avatar",sortConfig:{allowed:i.NONE},settings:[{types:[a.USER,a.ASSIGNED_USER],sizes:l,model:"avatarUri,fullName,email"},{types:[a.PROJECT_MEMBER],sizes:l,model:"user.avatarUri,user.fullName,user.email"}],template:['<div class="tau-avatar"><img src="<%= this.data.avatarUri %>24"></div>'],listSettings:{title:"<%= this.data.fullName || this.data.email %>"},sampleData:{avatarUri:p("/javascript/tau/css/images/icons/user.png?size=")}},{id:"user_email_short",classId:"tau-board-unit_type_user-email",name:"Email",settings:[{types:[a.USER],sizes:[e.S,e.M,e.L,e.XL,e.LIST],model:"email"},{types:[a.PROJECT_MEMBER],sizes:[e.S,e.M,e.L,e.XL,e.LIST],model:"user.email"}],template:['<div class="tau-board-unit__value tau-board-unit-not-selectable">','<a <% if (!this.settings.isDesignMode) { %>href="mailto:<%! this.data.email %>"<%}%> ><%! fn.trim(this.data.email, 15) %></a>',"</div>"],sampleData:{email:"u.karatkievich@writer.com"}},{id:"user_email_long",classId:"tau-board-unit_type_user-email",name:"Email",settings:[{types:[a.USER,a.ASSIGNED_USER],sizes:[e.S,e.M,e.L,e.XL],model:"email",sortConfig:{field:"email"}},{types:[a.PROJECT_MEMBER],sizes:[e.S,e.M,e.L,e.XL],model:"user.email",sortConfig:{field:"user.email"}}],sections:1,template:['<div class="tau-board-unit__value tau-board-unit-not-selectable">','<a <% if (!this.settings.isDesignMode) { %>href="mailto:<%! this.data.email %>"<%}%> ><%! this.data.email %></a>',"</div>"],sampleData:{email:"u.karatkievich@writer.com"}},{id:"user_login",classId:"tau-board-unit_type_user-login",name:"Login",settings:[{types:[a.USER],sizes:[e.S,e.M,e.L,e.XL,e.LIST],model:"login",sortConfig:{field:"login"}},{types:[a.PROJECT_MEMBER],sizes:[e.S,e.M,e.L,e.XL,e.LIST],model:"user.login",sortConfig:{field:"user.login"}}],template:['<div class="tau-board-unit__value"><%! fn.trim(this.data.login, 15) %></div>'],sampleData:{login:"uladzimir.karatkievich"}},{id:"user_login_long",classId:"tau-board-unit_type_user-login",name:"Login",settings:[{types:[a.USER],sizes:[e.S,e.M,e.L,e.XL],model:"login"},{types:[a.PROJECT_MEMBER],sizes:[e.S,e.M,e.L,e.XL],model:"user.login"}],sections:1,template:['<div class="tau-board-unit__value"><%! this.data.login %></div>'],sampleData:{login:"uladzimir.karatkievich"}},{id:"allocation",classId:"tau-board-unit_type_allocation",name:"Allocation",types:[a.USER],sizes:[e.S,e.M,e.L,e.XL,e.LIST],template:['<div class="tau-board-unit__value"><%= fn.precise_round(this.data.currentAllocation, 0) %></div>'],sampleData:{currentAllocation:150},listSettings:{title:"<%= fn.precise_round(this.data.currentAllocation, 0) %>%"}},{id:"user_is_active",classId:function(t){return"tau-board-unit_type_status-"+(t&&t.isActive?"active":"inactive")},data:{label:'<%= this.data.isActive ? "Active" : "Inactive" %>'},name:"Active",types:[a.USER,a.ASSIGNED_USER],sizes:[e.S,e.M,e.L,e.XL,e.LIST],template:[],listSettings:{title:'<%= fn.cond(this.data && this.data.isActive, "Active", "Inactive") %>'},sampleData:{isActive:!0}},{id:"user_observer",classId:"tau-board-unit_type_status-observer",data:{label:"Observer"},hideIf:function(t){return!t.isObserver},name:"Observer",types:[a.USER,a.ASSIGNED_USER],sizes:[e.S,e.M,e.L,e.XL,e.LIST],template:[],listSettings:{title:'<%= fn.cond(this.data && this.data.isObserver, "Observer", "") %>'},sampleData:{isObserver:!0}},{id:"user_admin",classId:"tau-board-unit_type_status-admin",data:{label:"Admin"},hideIf:function(t){return!t.isAdministrator},name:"Administrator",types:[a.USER,a.ASSIGNED_USER],sizes:[e.S,e.M,e.L,e.XL,e.LIST],template:[],listSettings:{title:'<%= fn.cond(this.data && this.data.isAdministrator, "Administrator", "") %>'},sampleData:{isAdministrator:!0}},{id:"user_big_details",classId:"tau-board-unit_type_user-info",name:"Large avatar with some details (role, name)",types:[a.USER],sizes:[e.S,e.M,e.L,e.XL],sections:2,template:['<img class="tau-board-unit_type_user-info__avatar" src="<%= this.data.avatarUri %>">','<div class="tau-board-unit_type_user-info__name">',"<%! _.trim(this.data.fullName) || this.data.email %>","</div>",'<div class="tau-board-unit_type_user-info__role"><%! this.data.role.name %></div>'],sampleData:{fullName:"Uladzimir Karatkievich",email:"u.karatkievich@writer.com",avatarUri:p("/Javascript/tau/css/images/icons/user.png"),role:{name:"Writer"}}},{id:"request_is_replied",classId:"tau-board-unit_type_icon",hideIf:function(t){return!t.isReplied},name:"Replied",types:[a.REQUEST],sizes:l,template:['<i class="tau-icon tau-icon_type_svg tau-icon_name_back-arrow"></i>'],listSettings:{title:'<%= fn.cond(this.data && this.data.isReplied, "Replied", "") %>'},sampleData:{isReplied:!0}},{id:"request_email",classId:"tau-board-unit_type_icon",hideIf:function(t){return!t||!t.sourceType||"none"===t.sourceType.toLowerCase()},name:"Request source (email, phone etc.)",header:"Request Source",types:[a.REQUEST],sizes:l,template:{customFunctions:{sourceToIcon:function(t){switch(t.toLowerCase()){case"phone":return"phone";case"email":return"email";case"internal":return"rect-in";case"external":return"rect-out";default:return"undefined"}},sourceToText:function(t){switch(t.toLowerCase()){case"phone":return"Phone call";case"email":return"Email";case"internal":return"Internal source";case"external":return"External source";default:return""}}},markup:['<i class="tau-icon tau-icon_type_svg tau-icon_name_<%= fn.sourceToIcon(this.data.sourceType) %>"></i>']},listSettings:{title:"<%= fn.sourceToText(this.data.sourceType) %>"},sampleData:{sourceType:"email"}},{id:"tc_failure_message_short",classId:"tau-board-unit_type_failure-comment",hideIf:function(t){return!t.lastFailureComment},name:"Most recent failure comment",header:"Failure Comment",types:[a.TEST_CASE],sizes:[e.M,e.L,e.XL,e.LIST],template:['<div class="tau-board-unit__value"><%! fn.trim(this.data.lastFailureComment, 15) %></div>'],sampleData:{lastFailureComment:"The font is not legible at all"}},{id:"tc_failure_message_long",classId:"tau-board-unit_type_failure-comment",hideIf:function(t){return!t.lastFailureComment},name:"Most recent failure comment",types:[a.TEST_CASE],sizes:r,sections:1,template:['<div class="tau-board-unit__value"><%! this.data.lastFailureComment %></div>'],sampleData:{lastFailureComment:"The font is not legible at all"}},{id:"tc_last_status",classId:"tau-board-unit_type_icon",name:"Most recent status",header:"Status",types:[a.TEST_CASE],sizes:l,template:{customFunctions:{getLastStatusText:function(a){return t.isUndefined(a.data.lastStatus)?"ignored":a.data.lastStatus?"passed":"failed"}},markup:['<i class="tau-icon tau-icon_type_svg tau-icon_name_status-<%= fn.getLastStatusText(this) %>"></i>']},listSettings:{title:["<%= _.capitalize(fn.getLastStatusText(this)) %>"]},sampleData:{lastStatus:!0}},{id:"iteration_velocity",classId:"tau-board-velocity",name:"Velocity",types:[a.ITERATION,a.TEAM_ITERATION],sizes:l,template:['<div class="tau-board-unit__value"><%=fn.precise_round(this.data.velocity||0,1)%></div>','<div class="tau-board-unit__points"><%=this.data.units%></div>'],sampleData:{velocity:2853.9,units:"pt"}},{id:"tasks_total",classId:"tau-board-unit_type_effort-total-e",name:"Total tasks effort",header:"Tasks Effort",types:[a.STORY],sizes:l,sortConfig:{allowed:i.NONE},hideIf:function(t){return!t.effort},template:['<div class="tau-board-unit__label">Tasks</div>','<div class="tau-board-unit__value"><%=fn.precise_round(this.data.effort||0,1)%></div>','<div class="tau-board-unit__points">h</div>'],sampleData:{effort:324.9},model:"effort:tasks.Sum(effort)",listSettings:{title:["<%=fn.precise_round(this.data.effort||0,1)%>h"]}},{id:"tc_last_run_date",classId:"tau-board-tc_last_run_date tau-board-unit_type_date",name:"Last run date",header:"Last Run Date",settings:[{types:[a.TEST_PLAN],model:"lastRun:LastRunDateForTestPlan",sizes:l,sortConfig:{allowed:i.NONE}},{types:[a.TEST_CASE],model:"lastRun:lastRunDate",sizes:l,sortConfig:{field:"lastRunDate"}}],hideIf:function(t){return!t.lastRun},template:c(u("lastRun")),sampleData:{lastRun:"/Date(1363986000000-0500)/"},listSettings:{title:'<%=fn.formatDate(this.data.lastRun, "dd MMM yyyy")%>'}},{id:"project_is_active",classId:function(t){return"tau-board-unit_type_status-"+(t&&t.isActive?"active":"inactive")},data:{label:'<%= this.data.isActive ? "Active" : "Inactive" %>'},name:"Active",types:[a.PROJECT],sizes:l,template:[],listSettings:{title:'<%= fn.cond(this.data && this.data.isActive, "Active", "Inactive") %>'},sampleData:{isActive:!0}},{id:"percent",classId:"tau-board-unit_type_percent-participating",name:"Percent participating",header:"Percent Participating",hideIf:function(t){return"undefined"==typeof t.allocation},types:[a.PROJECT_MEMBER],sizes:[e.S,e.M,e.L,e.XL,e.LIST],template:['<div class="tau-pie-progress tau-v-<%= fn.precise_round(this.data.allocation/10,0)*10 %>"></div> ','<div class="tau-board-unit__value"><%= this.data.allocation %>%</div>'],listSettings:{title:"<%= this.data.allocation %>%"},sampleData:{allocation:33}},{id:"planned_dates",classId:function(t){var a=d.getServerNow(),e=new Date(a.getFullYear(),a.getMonth(),a.getDate()),i=!(t.startDate&&d.convertToTimezone(t.startDate)>e||t.endDate&&d.convertToTimezone(t.endDate)<e);return"tau-board-unit_type_planned_dates"+(i?" tau-board-unit_type_planned_dates-green":"")},hideIf:function(t){return!t.startDate&&!t.endDate},sortConfig:{allowed:i.NONE},data:{startDate:new Date},name:"Planned dates",header:"Planned Dates",types:[a.FEATURE,a.STORY,a.TASK,a.BUG,a.REQUEST,a.TEST_PLAN,a.TEST_PLAN_RUN,a.IMPEDIMENT],sizes:[e.S,e.M,e.L,e.XL,e.LIST],template:c(m),listSettings:{title:["<% if (this.data.startDate || this.data.endDate) { %>",'<%= this.data.startDate ? fn.formatDate(this.data.startDate, "dd MMM") : "..."%>'," — ",'<%= this.data.endDate ? fn.formatDate(this.data.endDate, "dd MMM") : "..."%>',"<% } %>"]},sampleData:{startDate:"/Date(1385360733000-0500)/",endDate:"/Date(1305360733000-0500)/"},model:"startDate:PlannedStartDate,endDate:PlannedEndDate"},{id:"name_unit",classId:"tau-board-unit_type_simple-name",name:"Name",header:"Name",rank:100,isNameUnit:!0,settings:[{types:["tag","severity","requesttype","role","process"],model:"name:name",sizes:[e.LIST],sortConfig:{field:"name"}},{types:["enddate","datetime","createdate","startdate","effort"],model:"name:it.HumanFormat()",sizes:[e.LIST],sortConfig:{field:"name"}},{types:["priority"],model:"name:it.Key",sizes:[e.LIST],sortConfig:{field:"name"}},{types:["entitystate"],model:"name:it.Key.name",sizes:[e.LIST],sortConfig:{field:"name"}},{types:["source","requestsourceenum"],model:"name:it.ToString()",sizes:[e.LIST],sortConfig:{allowed:i.NONE}}],template:['<div class="tau-board-unit__value i-role-name"><%! this.data.name %></div>'],sampleData:{name:"Open"}},{id:"tcr_id",classId:"tau-board-unit_type_id",name:"Id",header:"ID",types:[a.TEST_CASE_RUN],sizes:[e.S,e.M,e.L,e.XL,e.LIST],template:['<div class="tau-board-unit__value">','<%= fn.generateEntityLink(this, this.data, "testcaserun") %>',"</div>"],sampleData:{id:1},listSettings:{title:'<%= "TestCaseRun #" + this.data.id %>'}},{id:"tcr_name",classId:"tau-board-unit_type_entity-name",name:"Test Case Run Name",header:"Name",isNameUnit:!0,types:[a.TEST_CASE_RUN],sizes:l,template:['<div class="tau-board-unit__value tau-name i-role-name"><%!this.data.name%></div>'],sampleData:{name:"Test Case Run 1."}},{id:"tcr_run_date",classId:"tau-board-unit_type_date",hideIf:function(t){return!t.runDate},name:"Last run date",header:"Last Run Date",types:[a.TEST_CASE_RUN],sizes:l,template:['<div class="tau-board-unit__value_type_day"><%=fn.formatDayShort(this.data.runDate)%></div>','<div class="tau-board-unit__value_type_month"><%=fn.formatDate(this.data.runDate, "MMM")%></div>','<div class="tau-board-unit__value_type_year"><%=fn.formatDate(this.data.runDate, "yyyy")%></div>'],sampleData:{runDate:"/Date(1335360733000-0500)/"}},{id:"tcr_status",classId:"tau-board-unit_type_icon",name:"Most recent status",header:"Status",types:[a.TEST_CASE_RUN],sizes:l,template:['<i class="tau-icon tau-icon_type_svg tau-icon_name_status-<% if (fn._.isUndefined(this.data.passed)){%>ignored<% } else if (this.data.passed){ %>passed<% } else { %>failed<% } %>"></i>'],sampleData:{passed:!0}},{id:"tcr_comment",classId:"tau-board-unit__label",name:"Test case run comment",header:"Comment",types:[a.TEST_CASE_RUN],sizes:l,template:['<span class="tau-board-unit__label"><%=this.data.comment ? this.data.comment : ""%></span>'],sampleData:{comment:"The test case run failed."}},{id:"name_unit_default",classId:"tau-board-unit_type_simple-name",name:"Name",header:"Name",rank:100,isNameUnit:!0,types:[a.ANY_TYPE],model:"name:it.ToString()",sizes:[e.LIST],hideInLibrary:!0,template:['<div class="tau-board-unit__value"><%! this.data.name %></div>'],sampleData:{name:"Open"}}];return t.each(f,function(t){t.category="simple"}),f});