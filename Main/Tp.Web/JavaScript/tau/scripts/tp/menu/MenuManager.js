define(["jQuery"],function(){function e(e){this._create(e)}return e.prototype={_create:function(e){e&&(this._isMenuSectionPresent()||(this.menu=e.menu))},addItem:function(e){this._isMenuSectionPresent()||this.menu.append(e)},fixSelection:function(e,n,t){this._isMenuSectionPresent()||(t=t||"selected",window.location.href.toLowerCase().contains(e.toLowerCase())&&(this.menu.find("a").removeClass(t),this.menu.find('a:contains("'+n+'")').addClass(t)))},_isMenuSectionPresent:function(){return this.menu&&0===this.menu.length}},e});