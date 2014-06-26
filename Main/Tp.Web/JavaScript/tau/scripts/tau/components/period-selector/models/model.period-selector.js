define(["tau/core/class","tau/utils/timeline/utils.timeline.date-range","tau/utils/timeline/utils.timeline.local-period-calculator"],function(e,t,a){return e.extend({init:function(e){this.boardSettings=e,this.localRangeCalculator=new a},lastDateRange:null,save:function(e){var t=e.toISOString();return this.lastDateRange==t?null:(this.lastDateRange=t,this.boardSettings.get({fields:["timelineGlobalDateRange","timelineLocalDateRange"]}).then(function(a){var i={timelineGlobalDateRange:t};if(e&&e.isValid){var n=this.localRangeCalculator.scaleLocalDateRangeProportionally(a.timelineLocalDateRange,a.timelineGlobalDateRange,e);i.timelineLocalDateRange=n.toFullISOString()}this.boardSettings.set({set:i})}.bind(this)))},load:function(){return this.boardSettings.get({fields:["timelineGlobalDateRange"]}).then(function(e){var a=e.timelineGlobalDateRange,i="string"==typeof a;if(!i)throw new Error("The old version of board definition");return t.tryParseWithRoundedDays(a)})}})});