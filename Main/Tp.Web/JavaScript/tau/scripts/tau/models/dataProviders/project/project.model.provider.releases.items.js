define(["Underscore","tau/models/dataProviders/model.provider.items.base","tau/utils/utils.date"],function(_,a,b){return a.extend({fetch:function(a){this._fetch("iterations","iteration",!1,a)},_createDetailCommand:function(a){var b={};return b[a]=["id","name","tags","startDate","endDate",{release:["id","name"]},{userStories:["effortToDo","effortCompleted"]},{bugs:["effortToDo","effortCompleted"]}],b},_convertItem:function(a){var c={id:a.id,name:a.name,__type:a.__type,tags:this._processTags(a),release:a.release,assignedEffort:this._getAssignedEffort(a),startDate:b.format.date.short(a.startDate),endDate:b.format.date.short(a.endDate)};return c},_convertData:function(a){return a=this._super(a),this._sortByStartDate(a)},_sortByStartDate:function(a){return _.sortBy(a,function(a){return-1*a.startDate})}})})