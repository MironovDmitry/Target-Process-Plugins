define(["jQuery","tau/core/extension.base","tau/ui/extensions/board.plus/ui.board.plus.scrollManager"],function($,ExtensionBase,ScrollManager){return ExtensionBase.extend({"bus $el.ready+$grid.ready":function(evt,$el,$grid){var self=this,scrollManager=new ScrollManager;scrollManager.setElement($grid),self.fire("scrollManager.ready",scrollManager)}})})