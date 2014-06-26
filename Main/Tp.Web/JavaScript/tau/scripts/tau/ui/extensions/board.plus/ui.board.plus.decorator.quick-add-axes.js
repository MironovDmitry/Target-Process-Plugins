define(["Underscore","jQuery","tau/ui/extensions/board.plus/ui.board.plus.decorator.quick-add.base"],function(t,e,i){var n=2,s=i.extend({activatedScope:null,lastScope:null,sharedState:null,findElements:function(t){this.element=t.getAxesHeaders(),this.$buttonPanel=this.createQuickAddPanel(),this.$button=this.$buttonPanel.find(".tau-btn")},matchLocation:function(t,e){return e.location.toLowerCase()===t.dimension.toLowerCase()},deactivate:function(){this.isActivated=!1,this.activatedScope!==this.lastScope&&this.$buttonPanel.hide()},setPosition:function(t){this.$buttonPanel.appendTo(t);var e=t.data("dimension"),i=t.width()-this.$buttonPanel.width()-2*n;"y"===e?this.$buttonPanel.css({top:t.height()-this.$buttonPanel.height()-2*n,left:i}):"x"===e&&this.$buttonPanel.css({top:n,left:i}),this.$buttonPanel.show()},showButton:t.throttle(function(t){this.sharedState&&this.setPosition(t)},500),hideButton:function(){this.$buttonPanel.hide()},onClick:function(){this.sharedState&&(this.activatedScope=this.lastScope,this.activate(this.$button,this.sharedState))},onDblClick:t.debounce(function(t){var i=e(t.target);(i.hasClass("i-role-cellholder")||i.hasClass("i-role-cell")||i.hasClass("footer-pillow"))&&this.onMouseEnter(t).actionAllowed&&this.$button.click()},300),onMouseEnter:function(t){var i=e(t.delegateTarget),n=this.getCellData(i);if(this.lastScope="enter_"+n.dimension,!this.isActivated){var s=this.predicateAddAction(n);if(s)return this.sharedState={actionItems:s},this.showButton(i),{actionAllowed:!0}}return{}},onMouseLeave:function(t){var i=e(t.delegateTarget),n=this.getCellData(i);if(this.lastScope="leave_"+n.dimension,!this.isActivated){var s=this.predicateAddAction(n);s&&(this.sharedState=null,this.hideButton())}},attachEvents:function(){this.$button.on("click",this.onClick.bind(this)),this.element.on({dblclick:this.onDblClick.bind(this),mouseenter:this.onMouseEnter.bind(this),mouseleave:this.onMouseLeave.bind(this)})},getCellData:function(t){return t.data()}});return s});