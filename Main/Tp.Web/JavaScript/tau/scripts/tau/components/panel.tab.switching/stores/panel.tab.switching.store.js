define(["require","tau/core/class","jQuery","Underscore"],function(e){var t=e("tau/core/class"),i=e("jQuery"),n=e("Underscore");return t.extend({_handleOnSwitchedToTab:i.noop,init:function(e){this._tabSwitcherService=e,this.changed=n.Callbacks(),this._startObserving()},destroy:function(){this._stopObserving()},_startObserving:function(){this._tabSwitcherService.onSwitchedToTab.add(this._handleOnSwitchedToTab,this)},_stopObserving:function(){this._tabSwitcherService.onSwitchedToTab.remove(this._handleOnSwitchedToTab,this),this.changed.removeAll()},_switchToTab:function(e){this._tabSwitcherService.switchToTab(e)},_isOnTab:function(e){return this._tabSwitcherService.isOnTab(e)},_notifyChanged:function(){this.changed.fire()}})});