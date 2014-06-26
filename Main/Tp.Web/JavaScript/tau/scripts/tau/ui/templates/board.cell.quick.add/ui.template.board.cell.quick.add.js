define(["Underscore","tau/core/templates-factory","tau/ui/templates/board.cell.quick.add/ui.customFunctions.template.board.cell.quick.add","tau/ui/templates/board.cell.quick.add/ui.template.board.cell.quick.add.textField","tau/ui/templates/board.cell.quick.add/ui.template.board.cell.quick.add.passwordField","tau/ui/templates/board.cell.quick.add/ui.template.board.cell.quick.add.numberField","tau/ui/templates/board.cell.quick.add/ui.template.board.cell.quick.add.integerField","tau/ui/templates/board.cell.quick.add/ui.template.board.cell.quick.add.dateField","tau/ui/templates/board.cell.quick.add/ui.template.board.cell.quick.add.dateTimeField","tau/ui/templates/board.cell.quick.add/ui.template.board.cell.quick.add.usersInviteField","tau/ui/templates/board.cell.quick.add/ui.template.board.cell.quick.add.teamMultiSelectField","tau/ui/templates/board.cell.quick.add/ui.template.board.cell.quick.add.projectMultiSelectField","tau/ui/templates/board.cell.quick.add/ui.template.board.cell.quick.add.ddlField","tau/ui/templates/board.cell.quick.add/ui.template.board.cell.quick.add.entitySelectorField","tau/ui/templates/board.cell.quick.add/ui.template.board.cell.quick.add.customField","tau/ui/templates/board.cell.quick.add/ui.template.board.cell.quick.add.colorField","tau/ui/templates/board.cell.quick.add/ui.template.board.cell.quick.add.iconField"],function(e,t,i){var a={name:"board.cell.item.quick.add",engine:"jqote2",customFunctions:e.defaults(i,{entitySelectorTypes:["TestPlanSelector","UserStorySelector","ReleaseSelector","UserSelector"],entityTypesGroup:["project","team","user"],findAnyFromGroup:function(t){var i=e.find(t,function(t){return e.include(this.entityTypesGroup,t.name.toLowerCase())}.bind(this));return i?i.name:null},canDrawGroup:function(e){return e.length>1&&this.findAnyFromGroup(e)},fieldTemplate:function(t){return e.include(this.entitySelectorTypes,t)?"EntitySelector":t}}),markup:["<% var isRelatedAdd = this.data && this.data.isRelatedAdd; %>",'<div class="tau-quick-add-dialog">',"    <% if (this.isEmpty) { %>",'        <div class="tau-quick-add_empty">',"        <% if (this.emptyContext) { %>",'           You need to <span class="i-role-select-context-link">select a project or a team</span> to add something.',"        <% } else { %>","           You can't add anything.","        <% } %>","        </div>","    <% } else { %>","    <div class=\"tau-entity-selector <%= (isRelatedAdd ? 'hidden' : '') %>\">",'        <div class="quick-add__entity-items">',"            <% for (var i = 0, length = this.entityTypes.length; i < length; i++) { %>","                <% if (fn.canDrawGroup(this.entityTypes) && this.entityTypes[i].name === fn.findAnyFromGroup(this.entityTypes)) {%>",'                    <div class="tau-entity-group">',"                <%}%>","                <button data-index=\"<%=i%>\" data-type=\"<%= this.entityTypes[i].name%>\" class=\"i-role-entity-selector tau-btn tau-entity-type-btn tau-<%=this.entityTypes[i].name.toLowerCase()%> <%= ((this.entityTypes[i].active ? 'tau-active':'') + ' ' + this.entityTypes[i].name)%>\"  <%= (this.entityTypes[i].active ? 'disabled':'')%>>","                   <%= this.entityTypes[i].title %>","                </button>","            <% } %>","           <% if (fn.canDrawGroup(this.entityTypes)) { %>","                   </div>","           <% } %>","        </div>","    </div>",'    <div class="tau-entity-controls">',"    <% for (var i = 0, length = this.entityTypes.length; i < length; i++) { %>","       <% var name = this.entityTypes[i].name; %>","       <% var type = this.types[name]; %>","       <% var items = type.template.items; %>",'       <div class="tau-entity-fields">',"       <form class=\"tau-control-set tau-fieldset <%= ((this.entityTypes[i].active? 'tau-active':'') + ' ' + type.entityType.name )%>\" data-type=\"<%=type.entityType.name%>\">","           <% for (var j = 0; j < items.length; j++) { %>","               <% var field = items[j]; %>","               <% var fieldTemplate = fn.fieldTemplate(field.type); %>","               <% var fieldModel = {name: name, type: type, field: field, mainEntity: this.mainEntity, entityNumber: j, ","                   items: items, constants: this.constants}; %>",'               <%= fn.sub("board.cell.item.quick.add.field." + fieldTemplate, fieldModel) %>',"            <% } %>",'            <div class="tau-field">','                <button tabindex="0" type="submit" class="tau-btn tau-add-item tau-success i-role-add">Add</button>','                <% if (name != "Time" && !isRelatedAdd) { %>','                <button tabindex="0" type="button" class="tau-btn tau-add-item tau-success i-role-add-open">Add &amp; Open</button>',"                <% } %>","                <% if (isRelatedAdd) { %>",'                <button tabindex="0" type="button" class="tau-btn i-role-cancel">Cancel</button>',"                <% } %>","            </div>","        </form>","        </div>","        <%}%>",'       <div class="tau-message-pool"></div>',"    </div>","    <%}%>","</div>"]};return t.register(a)});