define(["Underscore"],function(n){return{getListHeader:function(e){var t=e.lastIndexOf(" custom field");t>0&&(e=e.substring(0,t));var r=n.map(e.split(" "),function(n){return n.length>0?n[0].toUpperCase()+(n.length>1?n.substring(1,n.length):""):n});return r.join(" ")}}});