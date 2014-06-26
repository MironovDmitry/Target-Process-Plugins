define(["Underscore","jQuery","./widget.base","./template.widget.select.option"],function(t,e,i,n){return i.extend({init:function(e,i,o){this._super(e,i,o),this.options=t.defaults(this.options,{query:null,fields:["id","name"]}),this.options.templates.option=n},renderOutput:function(){if(!this.value)return this._super();var i=e.Deferred();return this.getCurrentData().then(t.bind(this.getCurrentOption,this)).then(t.bind(function(t){var e=this.renderOutputTemplate({name:this.name,value:this.value,label:t.label,editable:this.options.editable});i.resolve(e)},this)),i.promise()},getCurrentData:function(){var i=e.Deferred();return this.configurator.getStore().get(this.options.collectionName,{id:this.value,fields:this.options.fields}).done(t.bind(function(t){var e=t[0].data;i.resolve(e)},this)),i.promise()},getCurrentOption:function(t){return{value:t.id,label:t.name}},renderEdit:function(){var i=e.Deferred(),n=this.$el.find(".i-role-trigger");return n.tauBubble({className:this.options.bubbleClassName,onPositionConfig:function(t){return t.my="center top",t.at="center bottom",t},onShow:t.bind(function(){this.renderEditList().then(t.bind(function(e){n.tauBubble("option","content",e.text()?e:'<div class="ui-drop-down__message">Nothing found</div>');var i={items:".drop-down-option:visible",className:"drop-down-option_hover",keyboardManager:this.configurator.getKeyBoardManager(),onSelect:t.bind(function(t){this.applyOption(t)},this)};e.listSelectable(i).listSelectable("enable"),this.options.onEditStart(this)},this))},this)}),this.$bubbled=n,i.resolve(),i},renderEditList:function(){return this.renderEditOptions().then(function(t){return e('<div class="drop-down-list tau-filter-drop-down-list"/>').append(t)})},renderEditOptions:function(){return this.getEditData().then(t.bind(this.getEditOptions,this)).then(t.bind(function(t){return this.getTemplate(this.options.templates.option.name).bind({},{items:t})},this))},getEditData:function(){var t,i=e.Deferred(),n=this.configurator.getStore();return t=this.options.query||this.options.orderBy?n.find(this.options.collectionName,{fields:this.options.fields,$query:this.options.query,$orderBy:this.options.orderBy}):n.get(this.options.collectionName,{fields:this.options.fields}),t.done(function(t){i.resolve(t[0].data)}),i.promise()},getEditOptions:function(e){return t.map(e,function(t){return{value:t.id,label:t.name}})},applyOption:function(t){var e=t.data("value");this.applyValue(e)}})});