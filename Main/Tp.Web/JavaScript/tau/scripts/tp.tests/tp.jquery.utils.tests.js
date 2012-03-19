(function($){module("tp.jquery.utils.outerclick",{setup:function(){this.isClicked=!1,this.element1=$("<div />").appendTo($("body")),this.element1child=$("<div />").appendTo(this.element1),this.element1childchild=$("<div />").appendTo(this.element1child),this.element2=$("<div />").appendTo($("body")),this.element1.outerclick($.proxy(function(){this.isClicked=!0},this))},teardown:function(){this.element1child.remove(),this.element1childchild.remove(),this.element1.remove(),this.element2.remove(),delete this.isClicked,delete this.element1,delete this.element2,delete this.element1child,delete this.element1childchild}}),test("click on element",function(){this.isClicked=!1,this.element1.click(),equals(this.isClicked,!1)}),test("click on body",function(){this.isClicked=!1,$("body").click(),equals(this.isClicked,!0)}),test("click on other element",function(){this.isClicked=!1,this.element2.click(),equals(this.isClicked,!0)}),test("click on first level child",function(){this.isClicked=!1,this.element1child.click(),equals(this.isClicked,!1)}),test("click on second level child",function(){this.isClicked=!1,this.element1childchild.click(),equals(this.isClicked,!1)}),module("tp.jquery.utils.minimizeTo",{setup:function(){this.tmp_hide=$.fn.hide,this.tmp_animate=$.fn.animate,this.element=$('<div style="width:25px;height:25px;">Element</div>'),this.element.appendTo("body"),this.target=$('<div style="position:absolute;left:10px;top:20px;">Target</div>'),this.target.appendTo("body")},teardown:function(){this.element.remove(),this.target.remove(),delete this.element,delete this.target,$.fn.hide=this.tmp_hide,$.fn.animate=this.tmp_animate,delete this.tmp_hide,delete this.tmp_animate}}),test("call minimizeTo",function(){var a=this,b=0;$.fn.hide=function(){b++};var c;$.fn.animate=function(a,b){c=arguments,b.complete()};var d={target:a.target,callback:function(){equal(b,1,"Hide is called when minimized")}},e=a.element.offset(),f={left:e.left,top:e.top,width:a.element.width(),height:a.element.height()};a.element.minimizeTo(d);var g=[{left:10,top:20,width:0,height:0}];same(c[0],g[0],"Animate parameters are valid"),same(a.element.data(),f,"Original layout settings are saved on element correctly")}),module("tp.jquery.utils.maximizeFrom",{setup:function(){this.tmp_hide=$.fn.hide,this.tmp_show=$.fn.show,this.tmp_animate=$.fn.animate,this.element=$('<div style="position:absolute;width:25px;height:25px;left:1px;top:2px;">Element</div>'),this.element.appendTo("body"),this.target=$('<div style="position:absolute;left:10px;top:20px;">Target</div>'),this.target.appendTo("body")},teardown:function(){this.element.remove(),this.target.remove(),delete this.element,delete this.target,$.fn.hide=this.tmp_hide,$.fn.show=this.tmp_show,$.fn.animate=this.tmp_animate,delete this.tmp_hide,delete this.tmp_show,delete this.tmp_animate}}),test("call maximizeFrom",function(){var a=this,b={hide:1,show:2},c=0,d=0;$.fn.hide=function(){c++,ok(c===1,"Hide should be called before setup");var a=this,b=a.offset();equals(b.left,1,"Left position before setup is valid"),equals(b.top,2,"Top position before setup is valid"),equals(a.width(),25,"Width before setup is valid"),equals(a.height(),25,"Height before setup is valid")};var e=0;$.fn.show=function(){c++,ok(c===2,"Show should be called after setup complete");var a=this,b=a.offset();equals(b.left,10,"Left position before setup is valid"),equals(b.top,20,"Top position before setup is valid"),equals(a.width(),0,"Width after setup is valid"),equals(a.height(),0,"Height after setup is valid")};var f;$.fn.animate=function(a,b){f=arguments,b.complete()};var g={target:a.target,callback:function(){ok(!0,"Callback is called")},settings:{left:11,top:22,width:120,height:100}};a.element.maximizeFrom(g);var h=[{left:11,top:22,width:120,height:100}];same(f[0],h[0],"Animate parameters are valid")})})(jQuery)