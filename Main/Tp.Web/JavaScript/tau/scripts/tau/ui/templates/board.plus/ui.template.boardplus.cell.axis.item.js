define(["tau/core/templates-factory","tau/ui/extensions/board.plus/ui.board.plus.utils","tau/utils/utils.date","tau/utils/utils.translation","tau/services/service.features"],function(templates,BoardPlusUtils,dateUtils,Translation,FeatureService){var featureService=new FeatureService(window.tauFeatures),config={name:"boardplus.cell.axis.item",engine:"jqote2",customFunctions:{generateCardData:BoardPlusUtils.generateElementData,processDates:function(startDate,endDate,isCurrent){function timeLeft(startDate,endDate){startDate=dateUtils.parse(startDate),endDate=dateUtils.parse(endDate);var rangeDateHours=Math.floor((endDate-startDate)/36e5),rangeDateDays=Math.ceil(rangeDateHours/24);return rangeDateDays?rangeDateDays+" "+Translation.pluralize("day|days",rangeDateDays)+" left":rangeDateHours+" "+Translation.pluralize("hour|hours",rangeDateHours)+" left"}var sDate=dateUtils.convertToTimezone(startDate),eDate=dateUtils.convertToTimezone(endDate),additionalClass=isCurrent?"tau-label__date_current":"",timeLeft=isCurrent?'<span class="time-left">'+timeLeft(new Date,eDate)+"</span>":"",format=sDate.getYear()==eDate.getYear()?"d-MMM":dateUtils.getFormatData().date.short;return'<span class="tau-label tau-label__date '+additionalClass+'">'+dateUtils.formatAs(sDate,format)+" &mdash; "+dateUtils.formatAs(eDate,format)+" "+timeLeft+"</span>"},velocity:function(data){var units=data.units||"",effort=data.effortSum||0;effort=Math.round(effort);var velocity=Math.round(data.velocity),style="tau-label__velocity_perfect",effortLimit="Perfect match!",range=velocity-effort;if(velocity!==0&&range!==0){var percent=Math.abs(range)*100/velocity;range>0&&(effortLimit="remain."),range<0&&(effortLimit="overhead."),percent<5?style="tau-label__velocity_warning":range<0&&(style="tau-label__velocity_overhead")}else range!==0&&(range>0&&(effortLimit="remain."),range<0&&(effortLimit="overhead."),range<0&&(style="tau-label__velocity_overhead"));var burnDown="";return data.id&&(data.type=="Iteration"||data.type=="TeamIteration")&&(burnDown=this.burnDownIcon(data)),range=Math.abs(range),range=range?range+" "+units+" ":"",'<span class="tau-label tau-label__text tau-label__velocity">'+burnDown+'<span class="tau-label_mark">'+effort+"</span>"+" of "+'<span class="tau-label_mark">'+velocity+" "+units+"</span>"+" assigned. "+'<span class="'+style+'">'+range+effortLimit+"</span>"+"</span>"},effort:function(data){var additionalClass="",actionWord=" done.",effortCompleted="";if(!data.effortCompleted&&data.isCurrent||data.isPrevious||data.effortCompleted)effortCompleted='<span class="tau-label_mark">'+data.effortCompleted+"</span>"+" of ";data.isCurrent&&(additionalClass="tau-label__effort_current"),data.isNext&&(additionalClass="tau-label__effort_next",data.effortCompleted||(actionWord=" assigned.")),data.isPrevious&&(additionalClass="tau-label__effort_previous",data.effortCompleted==data.effortTotal&&(effortCompleted=""));var burnDown="";return data.type=="Release"&&data.id&&(burnDown=this.burnDownIcon(data)),'<span class="tau-label tau-label__effort '+additionalClass+'">'+burnDown+effortCompleted+'<span class="tau-label_mark">'+data.effortTotal+" "+data.units+"</span>"+actionWord+"</span>"},burnDownIcon:function(data){return featureService.isEnabled("tp3.burn.down")?'<span class="tau-icon tau-icon_type_svg tau-icon_name_burn-down tau-label__burnDown" data-entity-id="'+data.id+'" data-entity-type="'+data.type.toLowerCase()+'"></span>':""},processTags:function(tags){return _.compact(_.asString(tags).split(","))}},markup:['<% var axis = this.itemData.hasOwnProperty("effort") ? "Y" : "X"; %>','<% if (this.entity.type == "user"){ %>','<div class="i-role-axis-item tau-axiscell__item tau-label i-role-focustrigger">',"<% if (this.isSupportView){ %>",'<span <% if (this.isSupportView){ %> class="i-role-cellaxis-viewtrigger" <% } %> <%= fn.generateCardData({ id: this.id, "entity-id": this.entity.id, "entity-type": this.entity.type}) %>>',"<% if (this.itemData.avatarUri){ %>",'<span class="tau-avatar tau-avatar_<%= this.entity.id %>" >','<img src="<%= this.itemData.avatarUri %>24" />',"</span>","<% } %>",'<span class="tau-label__text tau-name i-role-name"><%! this.name %></span>',"</span>","<% } else { %>",'<span class="tau-name"><%! this.name %></span>',"<% } %>","</div>",'<% } else if (axis == "Y" && (this.entity.type == "userstory" || this.entity.type == "feature") && this.itemData.id){ %>','<div class="i-role-axis-item tau-axiscell__item tau-label i-role-focustrigger">',"<% var item = this.itemData; %>",'<% if (item.hasOwnProperty("id")) { %>','<span class="<% if (this.isSupportView){ %>i-role-cellaxis-viewtrigger <% } %>ui-type-icon ui-type-icon-<%= this.entity.type %>" <%= fn.generateCardData({ id: this.id, "entity-id": this.entity.id, "entity-type": this.entity.type}) %>>',"<%= item.id %>","</span>","<% } %>",'<div class="tau-state"><%! item.entityState.name %></div>','<div class="<% if (this.isSupportView){ %>i-role-cellaxis-viewtrigger <% } %> tau-name  i-role-name"  <%= fn.generateCardData({ id: this.id, "entity-id": this.entity.id, "entity-type": this.entity.type}) %>><%! this.name %></div>',"<% if (item.project && item.project.abbreviation) {%>",'<div <% if (item.project.color){ %> style="background-color: <%= item.project.color %>;"<% } %> ','class="tau-project-abbr" title="<%! item.project.name %>"',">","<%! item.project.abbreviation %>","</div>","<% } %>","<% var usersCount = item.assignedUsers.length - 2;%>",'<%if (item.hasOwnProperty("assignedUsers")) {%>','<div class="tau-people">','<%= fn.sub("boardplus.card.assignedUsers",{count:usersCount,items:item.assignedUsers.slice(0,2),viewTrigger:true}) %>',"</div>","<% } %>",'<% if (item.hasOwnProperty("effort")){ %>','<div class="tau-effort">',"<%= item.effort %>",'<%= item.units || "pt" %>',"</div>","<% } %>","</div>","<% } else { %>",'<div class="i-role-axis-item">','<div class="tau-axiscell__item tau-label i-role-focustrigger">',"<% if (this.isSupportView){ %>",'<span class="i-role-cellaxis-viewtrigger" <%= fn.generateCardData({ id: this.id, "entity-id": this.entity.id, "entity-type": this.entity.type}) %> >','<% if (this.entity.type == "team"){ %>',"<span>","<% if (this.itemData.icon){ %>","<i class=\"tau-icon tau-icon_type_svg tau-icon_name_<%= this.itemData.icon || '' %>\"></i>","<% } else { %>",'<i class="tau-icon tau-icon_type_svg tau-icon_name_trihead"></i>',"<% } %>","<% } else { %>",'<span class="ui-type-icon ui-type-icon-<%= this.entity.type %>" >',"<%= this.entity.id %>","<% } %>","</span>",'<span class="tau-label__text  i-role-name"><%! this.name %><%if(this.itemData.isCurrent){%> <span class="tau-label__text_current">(Current)</span><%}%></span></span>',"<% } else { %>",'<span class="i-role-name"><%! this.name %><%if(this.itemData.isCurrent){%> <span class="tau-label__text_current">(Current)</span><%}%></span>',"<% } %>","</div>",'<% if (this.entity.type == "team"){ %>','<div class="tau-team-members">',"<% var users = this.itemData.users || []; _.forEach(users, function(user,index,users){ %>","<%if(index < 7){%>",'<span class="tau-avatar i-role-cellaxis-viewtrigger" <%= fn.generateCardData({ id: user.id, "entity-id": user.id, "entity-type": "user"}) %> ><img title="<%= user.name %>" src="<%= user.avatarUri %>24" /></span>',"<%}%>","<%if(index == 7){%>",'<span class="count-users">+ <%=users.length - index%></span>',"<%}%>","<% });  %>","</div>","<% } %>","<% if (this.itemData.startDate && this.itemData.endDate){ %>","<%= fn.processDates(this.itemData.startDate, this.itemData.endDate,this.itemData.isCurrent)%>","<% } %>","<% if (this.itemData.velocity !== undefined){%>","<%= fn.velocity(this.itemData)%>","<%}%>","<% if (this.itemData.effortCompleted !== undefined && this.itemData.effortTotal !== undefined){%>","<%= fn.effort(this.itemData)%>","<%}%>","</div>","<% } %>"],dependencies:[]};return templates.register(config)})