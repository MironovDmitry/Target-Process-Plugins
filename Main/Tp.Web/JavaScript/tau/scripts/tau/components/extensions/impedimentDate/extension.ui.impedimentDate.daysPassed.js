define(["jQuery","tau/components/extensions/component.extension.base"],function(a,e){return e.extend({extractDataFromEvent:function(a,e){return(a[e]||{}).data||{}},"bus afterRender+dataBind":function(e){var n=this.extractDataFromEvent(e,"dataBind"),t=a(this.extractDataFromEvent(e,"afterRender").element),s=a(['<span class="ui-days-passed">(<span class="days-count">',n.daysPassed,"</span> days passed)</span>"].join(""));t.find(".property").parent().append(s)}})});