define(["Underscore"],function(a){var b=function(c,d){a.forEach(c,function(e,f){if(e.type=="tabs")a.forEach(e.tabs,function(a,c){a.header=b(a.header,d),e.tabs[c].items=b(a.items,d),e.tabs[c].items.length==0&&(e.tabs[c]=!1)}),e.tabs=a.filter(e.tabs,function(a,b){return a!==!1}),e.additionalHeaders=b(e.additionalHeaders,d),e.tabs.length==0&&(c[f]=!1);else if(e.type=="additionalInfo")e.children=b(e.children,d),e.children.length==0&&(c[f]=!1);else if(e.type=="label"&&a.isArray(e.text))e.text=b(e.text,d),e.text.length==0?c[f]=!1:c[f]=e;else if(e.practices)e.practices.length&&a.intersect(d,e.practices).length==0&&(c[f]=!1);else if(e.children)c[f].children=b(e.children,d);else if(typeof e.items!="undefined")c[f].items=b(e.items,d),e.items.length==0&&(c[f]=!1);else if(f=="children"||f=="items")c[f]=b(e,d)}),c=a.filter(c,function(a,b){return a!==!1});return c};return{convert:function(a,c){a=b(a,c);return a}}})