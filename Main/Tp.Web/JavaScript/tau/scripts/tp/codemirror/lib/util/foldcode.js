CodeMirror.braceRangeFinder=function(e,n){var r=e.getLine(n),i=r.lastIndexOf("{");if(!(0>i||r.lastIndexOf("}")>i)){var t,a=e.getTokenAt({line:n,ch:i}).className,l=1,s=e.lineCount();e:for(var f=n+1;s>f;++f)for(var o=e.getLine(f),c=0;;){var u=o.indexOf("{",c),v=o.indexOf("}",c);if(0>u&&(u=o.length),0>v&&(v=o.length),c=Math.min(u,v),c==o.length)break;if(e.getTokenAt({line:f,ch:c+1}).className==a)if(c==u)++l;else if(!--l){t=f;break e}++c}if(null!=t&&t!=n+1)return t}},CodeMirror.newFoldFunction=function(e,n){function r(e,n){for(var r=0;r<i.length;++r){var t=e.lineInfo(i[r].start);if(t){if(t.line==n)return{pos:r,start:t.line,end:t.line+i[r].size}}else i.splice(r--,1)}}var i=[];return null==n&&(n='<span style="color:#600">&#x25bc;</span>%N%'),function(t,a){t.operation(function(){var l=r(t,a);if(l){i.splice(l.pos,1),t.clearMarker(l.start);for(var s=[],f=l.start;f<l.end;++f){s.length||t.showLine(f),f==s[0]&&s.shift();var o=r(t,f);o&&s.unshift(o.end-1)}}else{var c=e(t,a);if(null==c)return;for(var f=a+1;c>f;++f)t.hideLine(f);var u=t.setMarker(a,n);i.push({start:u,size:c-a})}})}};