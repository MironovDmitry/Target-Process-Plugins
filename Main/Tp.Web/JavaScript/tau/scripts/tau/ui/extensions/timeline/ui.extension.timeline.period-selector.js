define(["jQuery","Underscore","tau/components/extensions/component.extension.base","tau/components/period-selector/controllers/controller.period-selector"],function(e,t,r,n){return r.extend({"bus boardSettings.ready:last + destroy":function(e,t){t.boardSettings.unbind({listener:this})},init:function(){this.controllerPeriodSelector=new n,this.controllerPeriodSelector.onInvalidDateRange.add(function(e){this.fire("error",{message:e.errorMessage()})}.bind(this)),this._super.apply(this,arguments)},"bus boardSettings.ready:last + configurator.ready:last + afterRender":function(e,t,r,n){this.controllerPeriodSelector.startLifeCycle(t.boardSettings,r.getKeyBoardManager(),n.element.find(".i-role-timeline-period-selector"))}})});