define(["text"],function(text){var jsonParse="undefined"!=typeof JSON&&"function"==typeof JSON.parse?JSON.parse:function(val){return eval("("+val+")")},buildMap={};return{load:function(n,e,t,i){text.get(e.toUrl(n),function(e){i.isBuild?(buildMap[n]=e,t(e)):t(jsonParse(e))})},write:function(n,e,t){if(e in buildMap){var i=buildMap[e];t('define("'+n+"!"+e+'", function(){ return '+i+";});\n")}}}});