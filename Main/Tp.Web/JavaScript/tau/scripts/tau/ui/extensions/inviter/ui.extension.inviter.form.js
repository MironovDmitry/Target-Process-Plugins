define(["Underscore","jQuery","tau/core/extension.base"],function(e,r,t){return t.extend({"bus $el.ready":function(e,r){this.fire("$form.ready",r.find(".i-role-form"))},"bus $form.ready":function(e,r){var t=this;r.on("submit",function(e){e.preventDefault();var n={};n.members=r.find("[name=users]").tauInviter("getValue",!0),t.fire("form.submitted",n)})},"bus configurator.ready:last + $form.ready:last + invitation.success":function(e,r,t){t.trigger("reset")}})});