define(["Underscore","jQuery","tau/ui/extensions/board.context.selector/ui.extension.board.context.selector.add.abstract"],function(e,t,a){return a.extend({"bus $teamSection.ready":function(e,t){var a=this,r=this._initForm(t);this._addSubmitDataListener(r,function(e){a.fire("team.add.ready",e)});var i=r.find("select"),n=this._initRichSelect(r,i);n.on("change",function(e,t){var a=n.attr("data-value");n.removeClass("tau-icon_name_"+a),n.addClass("tau-icon_name_"+(t||"default"))})},"bus configurator.ready:last + $teamSection.ready:last + team.add.success":function(e,t,a,r){this._addToList(a,t.getTemplateFactory().get("board.context.filter.teams.list"),r),a.find("form").trigger("reset"),a.removeClass("tau-managed-category_isempty_true"),this.fire("team.add.completed")},"bus $teamSection.ready:last + team.add.failure":function(e,t,a){t.find("form").trigger("entity.add.failed"),t.find(".i-role-form :text:first").focus().select().addClass("tau-error"),this.fire("error",a)},"bus $teamSection.ready:last + team.add.nonFatalFailure":function(e,t,a){this.fire("error",a)}})});