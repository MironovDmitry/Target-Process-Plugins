define(["libs/jquery/jquery"],function(n){var e=function(){var n=document.createElement("div"),e="Khtml Ms O Moz Webkit".split(" "),t=e.length;return function(r){if(r in n.style)return!0;for(r=r.replace(/^[a-z]/,function(n){return n.toUpperCase()});t--;)if(e[t]+r in n.style)return!0;return!1}}();return function(n){n.isSupport=function(n){return e(n)}}(n),n});