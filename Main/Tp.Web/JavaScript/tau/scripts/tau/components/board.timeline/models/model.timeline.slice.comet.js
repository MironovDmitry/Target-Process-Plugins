define(["Underscore","tau/models/board.plus/model.board.slice.comet"],function(e,o){return o.extend({fireCometTick:function(e){this.fire("operation.execute",e.data)}})});