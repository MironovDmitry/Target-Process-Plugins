function d3_layout_packSort(a,b){return a.value-b.value}function d3_layout_packInsert(a,b){var c=a._pack_next;a._pack_next=b,b._pack_prev=a,b._pack_next=c,c._pack_prev=b}function d3_layout_packSplice(a,b){a._pack_next=b,b._pack_prev=a}function d3_layout_packIntersects(a,b){var c=b.x-a.x,d=b.y-a.y,e=a.r+b.r;return e*e-c*c-d*d>.001}function d3_layout_packCircle(a){function l(a){b=Math.min(a.x-a.r,b),c=Math.max(a.x+a.r,c),d=Math.min(a.y-a.r,d),e=Math.max(a.y+a.r,e)}var b=Infinity,c=-Infinity,d=Infinity,e=-Infinity,f=a.length,g,h,i,j,k;a.forEach(d3_layout_packLink),g=a[0],g.x=-g.r,g.y=0,l(g);if(f>1){h=a[1],h.x=h.r,h.y=0,l(h);if(f>2){i=a[2],d3_layout_packPlace(g,h,i),l(i),d3_layout_packInsert(g,i),g._pack_prev=i,d3_layout_packInsert(i,h),h=g._pack_next;for(var m=3;m<f;m++){d3_layout_packPlace(g,h,i=a[m]);var n=0,o=1,p=1;for(j=h._pack_next;j!==h;j=j._pack_next,o++)if(d3_layout_packIntersects(j,i)){n=1;break}if(n==1)for(k=g._pack_prev;k!==j._pack_prev;k=k._pack_prev,p++)if(d3_layout_packIntersects(k,i))break;n?(o<p||o==p&&h.r<g.r?d3_layout_packSplice(g,h=j):d3_layout_packSplice(g=k,h),m--):(d3_layout_packInsert(g,i),h=i,l(i))}}}var q=(b+c)/2,r=(d+e)/2,s=0;for(var m=0;m<f;m++){var t=a[m];t.x-=q,t.y-=r,s=Math.max(s,t.r+Math.sqrt(t.x*t.x+t.y*t.y))}return a.forEach(d3_layout_packUnlink),s}function d3_layout_packLink(a){a._pack_next=a._pack_prev=a}function d3_layout_packUnlink(a){delete a._pack_next,delete a._pack_prev}function d3_layout_packTree(a){var b=a.children;b&&b.length?(b.forEach(d3_layout_packTree),a.r=d3_layout_packCircle(b)):a.r=Math.sqrt(a.value)}function d3_layout_packTransform(a,b,c,d){var e=a.children;a.x=b+=d*a.x,a.y=c+=d*a.y,a.r*=d;if(e){var f=-1,g=e.length;while(++f<g)d3_layout_packTransform(e[f],b,c,d)}}function d3_layout_packPlace(a,b,c){var d=a.r+c.r,e=b.x-a.x,f=b.y-a.y;if(d&&(e||f)){var g=b.r+c.r,h=Math.sqrt(e*e+f*f),i=Math.max(-1,Math.min(1,(d*d+h*h-g*g)/(2*d*h))),j=Math.acos(i),k=i*(d/=h),l=Math.sin(j)*d;c.x=a.x+k*e+l*f,c.y=a.y+k*f-l*e}else c.x=a.x+d,c.y=a.y}d3.layout.pack=function(){function c(c,d){var e=a.call(this,c,d),f=e[0];f.x=0,f.y=0,d3_layout_packTree(f);var g=b[0],h=b[1],i=1/Math.max(2*f.r/g,2*f.r/h);return d3_layout_packTransform(f,g/2,h/2,i),e}var a=d3.layout.hierarchy().sort(d3_layout_packSort),b=[1,1];return c.size=function(a){return arguments.length?(b=a,c):b},d3_layout_hierarchyRebind(c,a)}