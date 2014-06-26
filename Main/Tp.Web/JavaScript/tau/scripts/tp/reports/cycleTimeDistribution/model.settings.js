define(["Underscore","tp/reports/settings/model.settings","tp/reports/settings/definitionBuilder","tp/reports/settings/templateDataBuilder"],function(e,t,i,s){return t.extend({NAME_CHART:"Cycle Time Distribution",DESCRIPTION:["The distribution bars show how many entities were completed within a given cycle time. ","The cumulative line shows how many days will it take to complete a user story or other entity with the desired probability."].join(""),defaultData:{scale:"cycleTime",entities:["userstory","bug"],filter:"?EndDate > Today - 180(days)"},saveSettings:function(t,i){var s={scale:i.time.key,filter:i.filter,useFilter:i.useFilter,entities:JSON.stringify(e.reduce(i.entities,function(e,t){return e.push(t.id),e},[]))};t({scope:"Public",userData:s}).done(),this._super(t,s)},setSettings:function(e,t){function s(e){return function(t){return t[e]}}function n(e,t){return{map:s(e),label:t}}function r(e){return{map:$.noop,label:e}}var a={strategy:"all",parameters:i.getWithLeadAndCycleTime(e,t),mapping:{y:n(e.time.key,"% of all entities"),x:r(e.time.label),fill:n("type")}};this.fire("settings.changed",a)},"bus model.ready":function(t,i){this.fire("dataBind",{times:s.times(i),types:s.assignables(i),isShowSettings:i.isShowSettings,name:this.NAME_CHART,description:this.DESCRIPTION,filter:s.filter(i,"?EndDate > Today - 180(days)"),useFilter:e.isUndefined(i.useFilter)?!0:i.useFilter})}})});