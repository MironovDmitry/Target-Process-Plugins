define(["Underscore","jQuery","tau/components/extensions/component.extension.base","tau/utils/utils.date","tau/ui/behaviour/date/ui.behaviour.dateEditor"],function(_,$,a,b){return a.extend({category:"edit",init:function(){this._super.apply(this,arguments),this.onClickProxy=$.proxy(this.onClickHandler,this)},"bus permissionsReady+afterRender+dataBind":function(a){var c=this,d=this.element=a.afterRender.data.element;a.afterRender.data.element.find(".external-view").click(function(a){a.stopPropagation()});var e=this.permissions=a.permissionsReady.data,f=this.date=a.dataBind.data,g=this.config.format;if(e.editable){this.element.bind("click",this.onClickProxy);var h=this.$widget=d.find(".property"),i=null;g=="datetime"?i="datetimepicker":i="datepicker",$.datepicker.parseDate=function(a,c,d){return b.parse(c)},$.datepicker.formatDate=function(a,c,d){return b.format.date.short(c)},h.dateEditor({dateFormat:b.getFormatData().date.short,widgetName:i,beforeChange:function(a){c.fire("validateDate",a)},onSave:function(a){var b={};b[c.config.propertyName]=a;if(c.trimString(a)!=c.trimString(f.text)){var d={$set:b};d.$include=[c.config.propertyName],c.bus.fire("save",d)}else c.fire("resetValidationErrors")}})}},trimString:function(a){return(a||"").trim()},showEditor:function(){this.$widget.dateEditor("activate"),this.$widget.focus()},"bus edit":function(){this.permissions.editable&&this.showEditor()},onClickHandler:function(){this.showEditor()},removeHandlers:function(){this.element&&this.element.unbind("click",this.onClickProxy)},removeWidget:function(){this.$widget&&this.$widget.dateEditor("destroy")},destroy:function(){this.removeHandlers(),this.removeWidget(),this._super.apply(this,arguments)}})})