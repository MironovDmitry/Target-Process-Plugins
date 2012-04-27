function d3_time_scaleUTCSetYear(a){var b=new Date(Date.UTC(a,0,1));return b.setUTCFullYear(a),b}function d3_time_scaleUTCGetYear(a){var b=a.getUTCFullYear(),c=d3_time_scaleUTCSetYear(b),d=d3_time_scaleUTCSetYear(b+1);return b+(a-c)/(d-c)}var d3_time_scaleUTCMethods=d3_time_scaleLocalMethods.map(function(a){return[a[0].utc,a[1]]}),d3_time_scaleUTCFormats=[[d3.time.format.utc("%Y"),function(a){return!0}],[d3.time.format.utc("%B"),function(a){return a.getUTCMonth()}],[d3.time.format.utc("%b %d"),function(a){return a.getUTCDate()!=1}],[d3.time.format.utc("%a %d"),function(a){return a.getUTCDay()&&a.getUTCDate()!=1}],[d3.time.format.utc("%I %p"),function(a){return a.getUTCHours()}],[d3.time.format.utc("%I:%M"),function(a){return a.getUTCMinutes()}],[d3.time.format.utc(":%S"),function(a){return a.getUTCSeconds()}],[d3.time.format.utc(".%L"),function(a){return a.getUTCMilliseconds()}]],d3_time_scaleUTCFormat=d3_time_scaleFormat(d3_time_scaleUTCFormats);d3_time_scaleUTCMethods.year=function(a,b){return d3_time_scaleLinear.domain(a.map(d3_time_scaleUTCGetYear)).ticks(b).map(d3_time_scaleUTCSetYear)},d3.time.scale.utc=function(){return d3_time_scale(d3.scale.linear(),d3_time_scaleUTCMethods,d3_time_scaleUTCFormat)}