define(["jQuery","tau/core/extension.base"],function(t,e){return e.extend({"bus boardSettings.ready:last + context.changed":function(t,e,n){e.boardSettings.set({set:{acid:n.acid}})},"bus boardSettings.ready:last + context.ready:last + currentContextSelected":function(t,e,n){e.boardSettings.set({set:{acid:n.acid}})}})});