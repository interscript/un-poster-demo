var map = function(Interscript) {Interscript.define_map("odni-srp-Cyrl-Latn-2015", function(Interscript, map) {
map.dependencies = [];
map.stages.main = function(s) {
s = Interscript.parallel_replace_tree(s, map.cache.PTREE_2134807905046141882);
return s;
};
map.cache.PTREE_2134807905046141882 = {"1040":{"":"A"},"1041":{"":"B"},"1042":{"":"V"},"1043":{"":"G"},"1044":{"":"D"},"1026":{"":"Dj"},"1045":{"":"E"},"1046":{"":"Z"},"1047":{"":"Z"},"1048":{"":"I"},"1032":{"":"J"},"1050":{"":"K"},"1051":{"":"L"},"1033":{"":"Lj"},"1052":{"":"M"},"1053":{"":"N"},"1034":{"":"Nj"},"1054":{"":"O"},"1055":{"":"P"},"1056":{"":"R"},"1057":{"":"S"},"1058":{"":"T"},"1035":{"":"C"},"1059":{"":"U"},"1060":{"":"F"},"1061":{"":"H"},"1062":{"":"C"},"1063":{"":"C"},"1039":{"":"Dz"},"1064":{"":"S"},"1072":{"":"a"},"1073":{"":"b"},"1074":{"":"v"},"1075":{"":"g"},"1076":{"":"d"},"1106":{"":"dj"},"1077":{"":"e"},"1078":{"":"z"},"1079":{"":"z"},"1080":{"":"i"},"1112":{"":"j"},"1082":{"":"k"},"1083":{"":"l"},"1113":{"":"lj"},"1084":{"":"m"},"1085":{"":"n"},"1114":{"":"nj"},"1086":{"":"o"},"1087":{"":"p"},"1088":{"":"r"},"1089":{"":"s"},"1090":{"":"t"},"1115":{"":"c"},"1091":{"":"u"},"1092":{"":"f"},"1093":{"":"h"},"1094":{"":"c"},"1095":{"":"c"},"1119":{"":"dz"},"1096":{"":"s"}};
});};if (typeof module !== 'undefined') { module.exports = map; }else if (typeof Interscript !== 'undefined') { map(Interscript); }else { throw "We couldn't dispatch Interscript from a map!"; }