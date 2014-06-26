define(["Underscore","jQuery","./taus","./taus.types.adapters","tau/core/global.bus","./component.tracking","./spy.event","libs/schedule"],function(t,e,n,a,r,o,s,i){var u=null,c={start:function(t){return u||(t=t||{},u=o.create(t)),u}},l=function(e){var a=[],r=function(t){return function(){a.push({methodName:t,params:[].slice.call(arguments)})}};window.taus={context:r("context"),track:r("track"),error:r("error"),start:function(){var e,n,r,o="action",s=[].slice.call(arguments);return 3===s.length?(e=s[0],n=s[1],r=s[2]):2===s.length?t.isObject(s[0])?(e=o,n=s[0],r=s[1]):(e=s[0],n=s[1],r=t.uniqueId()):1===s.length&&(e=o,n=t.isString(s[0])?{name:s[0]}:s[0],r=t.uniqueId()),a.push({methodName:"start",params:[function(){return{tick:+new Date,args:[e,n,r]}}]}),{stop:this.stop.bind(this,r)}},stop:function(){var t=[].slice.call(arguments);a.push({methodName:"stop",params:[function(){return{tick:+new Date,args:t}}]})}};for(var o=new n(e);a.length>0;){var s=a.shift();o[s.methodName].apply(o,s.params)}window.taus=o},p=function(t,e){var n=new Date,a=n.getHours(),r=n.getMinutes(),o=60*(24-a)-r,s=new i(60*(o+1)*1e3);s.loop(function(e){t(e.date),s.stop(),setTimeout(p.bind(null,t,!0),0)},e)},d=function(t){var e=t.data("label")||t.attr("title")||t.data("title")||t.attr("role")||t.text()||"";return e.toLowerCase()},g=function(t){var e=t.attr("tauspref")||"",n=["click"];e&&n.push(e);var a=n.join(" "),r=t.attr("taustype"),o=r?r.split(","):[];taus.track("action",{"@":o,action:a,name:[a,d(t)].join(" "),tags:n})};return e(document).on("click",".i-taus",function(t){g(e(t.currentTarget))}),e.Event.prototype.stopPropagation=t.wrap(e.Event.prototype.stopPropagation,function(t){var n=this.originalEvent;if(n){var a=e(n.target).closest(".i-taus");0!==a.length&&g(a)}return t.apply(this,arguments)}),s.done(function(e){var n=(new Date).getTime(),o={version:2},s={onceADay:p,eachXMins:function(t,e){new i(60*t*1e3).loop(e)}};c.start(t.extend({sid:n},e,{scheduler:s},o)),l(t.extend({sid:n},e,{scheduler:s},o,{globalBus:r.get(),adapters:a}))}),c});