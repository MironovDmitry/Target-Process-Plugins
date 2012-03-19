define(["Underscore","jQuery","tau/configurator","tau/components/extensions/component.extension.base"],function(_,$,a,b){var c=b.extend({category:"edit",beforeSaveComment:function(a){var b=this.placeHolder.find('input[type="checkbox"]'),c={};b.each(function(a,b){var d=$(b);d.attr("checked")&&(c[d.val()]=!0)}),a.cmd["comment-practices-notification-opts"]=c},"bus editorSave":function(){if(!this.globalSettings.IsEmailNotificationsEnabled)return;var a=this;a.config.store.on({eventName:"beforeSave",type:"comment",listener:a},function(b){var c=b.data;a.beforeSaveComment(c)})},"bus editorCreated":function(a){this.globalSettings=this.config.context.applicationContext.globalSettings||{};if(!this.globalSettings.IsEmailNotificationsEnabled)return;var b=a.data.editorElement;this.placeHolder=b.find(".tau-notification-practices-settings");if(!this.placeHolder.length){var c=this.placeHolder=$('<div class="tau-notification-practices-settings"><span class="prompt">Notify by email: </span></div>');c.append("<input type='checkbox' id='owner' value='Owner' /><label for='owner'>Owner</label>"),c.append("<input type='checkbox' id='people' value='Assigned' /><label for='people'>Assigned people</label>"),this.config.context.general.entityType.name.toLowerCase()==="request"?c.append("<input type='checkbox' id='requestor' value='Requesters' /><label for='requestor'>Requester(s)</label>"):c.append("<input type='checkbox' id='team' value='Team' /><label for='team'>Project Team</label>"),c.insertBefore(b.find(".ui-richeditor__controls"))}},"bus destroy":function(){this.config.store.unbind(this),this._super.apply(this,arguments)}});return c})