define(["Underscore","jQuery","tau/core/extension.base"],function(e,r,l){var n=function(e,r){r()};return l.extend({"bus $el.ready+$grid.ready":function(r,l,n){var o=this,c=l.find(".tau-rows-header > ul, .tau-backlog-body ul"),s=n.find(".tau-timeline-canvas"),a=e.bind(o.syncScroll,o,s,c),t=function(){a(),n.trigger("sync-scroll")};s.on({scroll:t});var i=60;c.on({mousewheel:function(e,r){var l=-s.scrollTop()+Math.round(r*i);s.scrollTop(-l),t()}}),o.fire("syncScroll.ready",a)},"bus syncScroll.ready:last + view.dom.ready":n,"bus syncScroll.ready:last + view.axis.collapser.executed.after":n,"bus syncScroll.ready:last + resize.completed":n,syncScroll:function(e,r){var l={x:e.scrollLeft(),y:e.scrollTop()};r.length&&r.css("margin-top",-l.y)}})});