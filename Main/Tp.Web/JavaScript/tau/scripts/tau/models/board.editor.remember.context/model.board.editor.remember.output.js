define(["Underscore","tau/models/board.context.output/model.board.context.output.data"],function(t,e){return e.extend({"bus beforeInit + configurator.ready + boardSettings.ready:last":function(t,e,i,a){var d=a.boardSettings,s=function(t){this.savedAcid=t.acid}.bind(this);d.get({fields:["acid"],callback:s}),d.bind({fields:["acid"],listener:this,callback:s}),d.get({fields:["ownerIds"],callback:function(t){var e=i.getLoggedUser();this.editable=i.getBoardAccessService().isEditable(t,e)}.bind(this)})},"bus teams.ready + projects.ready + context.ready":function(t,e,i,a){var d=this.prepareModel(e,i,a);d.savedAcid=this.savedAcid,d.editable=this.editable,this.fire("dataBind",d),this._trackData(d)},"bus boardSettings.ready:last + destroy":function(t,e){e.boardSettings.unbind(this)}})});