define(["Underscore","jQuery","tau/components/extensions/component.extension.base","tau/ui/behaviour/checkbox/ui.behaviour.checkboxToggle","tau/ui/behaviour/customField/ui.behaviour.customField.row"],function(e,a,t){return t.extend({category:"edit","bus permissionsReady+afterRender":function(e){var t=this,i=e.afterRender.data.data,o=e.permissionsReady.data;if(o.editable){var u=e.afterRender.data.element,s=u.find(".ui-customfield__value");s.checkboxToggle({classNames:{checked:"ui-customfield__value_checked",unchecked:"ui-customfield__value_unchecked"},onSave:function(e){s.removeClass("ui-validationerror"),t.bus.fire("elementUpdated"),t.bus.fire("save",{customFields:[{name:i.name,type:i.type,value:e}]})}}),u.behaviourCustomFieldRow({onActivate:function(e){e.stopPropagation(),0==a(e.target).hasClass("ui-customfield__value")&&s.checkboxToggle("activate")}}),u.addClass("ui-customfield_editable_true")}}})});