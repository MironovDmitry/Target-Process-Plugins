define(["tp/codemirror/lib/codemirror"],function(e){e.defineMode("changes",function(){var e=/^-+$/,n=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)  ?\d{1,2} \d{2}:\d{2}(:\d{2})? [A-Z]{3,4} \d{4} - /,r=/^[\w+.-]+@[\w.-]+/;return{token:function(t){if(t.sol()){if(t.match(e))return"tag";if(t.match(n))return"tag"}return t.match(r)?"string":(t.next(),null)}}}),e.defineMIME("text/x-rpm-changes","changes")});