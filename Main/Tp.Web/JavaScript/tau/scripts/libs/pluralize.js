define([],function(){function e(e,s){return s.match(/^[A-Z]/)?e.charAt(0).toUpperCase()+e.slice(1):e}function s(e){e=e.split(",");for(var s=e.length,i={},r=0;s>r;r++)i[e[r]]=1;return i}function i(s,i,o){if(""===s)return"";if(1===i)return s;if("string"==typeof o)return o;var l=s.toLowerCase();if(l in r)return e(r[l],s);if(s.match(/^[A-Z]$/))return s+"'s";if(s.match(/fish$|ois$|sheep$|deer$|pox$|itis$/i))return s;if(s.match(/^[A-Z][a-z]*ese$/))return s;if(l in t)return s;if(l in n)return e(n[l],s);for(var m=a.length,c=0;m>c;c++){var u=a[c];if(s.match(u[0]))return s.replace(u[0],u[1])}return s+"s"}var r={},t=s("aircraft,advice,blues,corn,molasses,equipment,gold,information,cotton,jewelry,kin,legislation,luck,luggage,moose,music,offspring,rice,silver,trousers,wheat,bison,bream,breeches,britches,carp,chassis,clippers,cod,contretemps,corps,debris,diabetes,djinn,eland,elk,flounder,gallows,graffiti,headquarters,herpes,high,homework,innings,jackanapes,mackerel,measles,mews,mumps,news,pincers,pliers,proceedings,rabies,salmon,scissors,sea,series,shears,species,swine,trout,tuna,whiting,wildebeest,pike,oats,tongs,dregs,snuffers,victuals,tweezers,vespers,pinchers,bellows,cattle"),n={I:"we",you:"you",he:"they",it:"they",me:"us",him:"them",them:"them",myself:"ourselves",yourself:"yourselves",himself:"themselves",herself:"themselves",itself:"themselves",themself:"themselves",oneself:"oneselves",child:"children",dwarf:"dwarfs",mongoose:"mongooses",mythos:"mythoi",ox:"oxen",soliloquy:"soliloquies",trilby:"trilbys",person:"people",forum:"forums",syllabus:"syllabi",alumnus:"alumni",genus:"genera",viscus:"viscera",stigma:"stigmata"},a=[[/man$/i,"men"],[/([lm])ouse$/i,"$1ice"],[/tooth$/i,"teeth"],[/goose$/i,"geese"],[/foot$/i,"feet"],[/zoon$/i,"zoa"],[/([tcsx])is$/i,"$1es"],[/ix$/i,"ices"],[/^(cod|mur|sil|vert)ex$/i,"$1ices"],[/^(agend|addend|memorand|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi)um$/i,"$1a"],[/^(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|\w+hedr)on$/i,"$1a"],[/^(alumn|alg|vertebr)a$/i,"$1ae"],[/([cs]h|ss|x)$/i,"$1es"],[/([aeo]l|[^d]ea|ar)f$/i,"$1ves"],[/([nlw]i)fe$/i,"$1ves"],[/([aeiou])y$/i,"$1ys"],[/(^[A-Z][a-z]*)y$/,"$1ys"],[/y$/i,"ies"],[/([aeiou])o$/i,"$1os"],[/^(pian|portic|albin|generalissim|manifest|archipelag|ghett|medic|armadill|guan|octav|command|infern|phot|ditt|jumb|pr|dynam|ling|quart|embry|lumbag|rhin|fiasc|magnet|styl|alt|contralt|sopran|bass|crescend|temp|cant|sol|kimon)o$/i,"$1os"],[/o$/i,"oes"],[/s$/i,"ses"]];
return i.define=function(e,s){r[e.toLowerCase()]=s},i});