define(["Underscore","jQuery","tau/components/extensions/component.extension.base"],function(e,i,n){return n.extend({"bus afterRender":function(n){var t=n.data.element;this.$element=t;var r=t.find("[role=form]"),a=r.find(":input"),o=r.find(":button");o.eq(0).prop("disabled","disabled"),o.eq(0).addClass("disable");var s=this;o.eq(0).click(function(){var n={};a.each(function(){var t=i(this),r=e.trim(t.val());""!=r&&(n[t.attr("name")]=r)}),n.action="search",s.bus.fire("form.parametersBound",{parameters:n})}),a.bind("keyup",function(){a.filter(function(){return i(this).val().length>0}).length==a.length?(o.eq(0).prop("disabled",!1),o.eq(0).removeClass("disable")):(o.eq(0).prop("disabled","disabled"),o.eq(0).addClass("disable"))})},"bus form.validationFailed":function(i){this.$element.find(".ui-validationerror").removeClass("ui-validationerror");var n=e.uniq(i.data.errors,!1,function(e){return e.property}),t=this.$element.find(":input");e.forEach(n,function(e){t.filter("[name="+e.property+"]").toggleClass("ui-validationerror",!0).attr("title",e.message)})},"bus form.validationPassed":function(){this.$element.find(".ui-validationerror").removeClass("ui-validationerror")}})});