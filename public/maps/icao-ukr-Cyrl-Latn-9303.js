var map = function(Interscript) {Interscript.define_map("icao-ukr-Cyrl-Latn-9303", function(Interscript, map) {
map.dependencies = [];
map.stages.main = function(s) {
s = Interscript.parallel_replace_tree(s, map.cache.PTREE_2498035198528146146);
return s;
};
map.cache.PTREE_2498035198528146146 = {"39":{"":""},"1040":{"":"A"},"1041":{"":"B"},"1044":{"":"D"},"1025":{"":"E"},"1045":{"":"E"},"1069":{"":"E"},"1060":{"":"F"},"1043":{"":"G"},"1048":{"":"Y"},"1049":{"":"I"},"1050":{"":"K"},"1051":{"":"L"},"1052":{"":"M"},"1053":{"":"N"},"1054":{"":"O"},"1055":{"":"P"},"1056":{"":"R"},"1057":{"":"S"},"1058":{"":"T"},"1059":{"":"U"},"1042":{"":"V"},"1067":{"":"Y"},"1047":{"":"Z"},"1063":{"":"CH"},"1071":{"":"IA"},"1070":{"":"IU"},"1061":{"":"KH"},"1064":{"":"SH"},"1065":{"":"SHCH"},"1062":{"":"TS"},"1046":{"":"ZH"},"1168":{"":"G"},"1038":{"":"U"},"1130":{"":"U"},"1026":{"":"D"},"1029":{"":"DZ"},"1032":{"":"J"},"1033":{"":"LJ"},"1034":{"":"NJ"},"1210":{"":"C"},"1039":{"":"DZ"},"1028":{"":"IE"},"1031":{"":"I"},"1027":{"":"G"},"1030":{"":"I"},"1072":{"":"a"},"1073":{"":"b"},"1076":{"":"d"},"1105":{"":"e"},"1077":{"":"e"},"1101":{"":"e"},"1092":{"":"f"},"1075":{"":"g"},"1080":{"":"y"},"1081":{"":"i"},"1082":{"":"k"},"1083":{"":"l"},"1084":{"":"m"},"1085":{"":"n"},"1086":{"":"o"},"1087":{"":"p"},"1088":{"":"r"},"1089":{"":"s"},"1090":{"":"t"},"1091":{"":""},"1074":{"":"v"},"1099":{"":"y"},"1079":{"":"z"},"1095":{"":"ch"},"1103":{"":"ia"},"1102":{"":"i"},"1093":{"":"kh"},"1096":{"":"sh"},"1097":{"":"shch"},"1094":{"":"ts"},"1078":{"":"zh"},"1169":{"":"g"},"1118":{"":""},"1131":{"":""},"1106":{"":"d"},"1109":{"":"dz"},"1112":{"":"j"},"1113":{"":"lj"},"1114":{"":"nj"},"1211":{"":"c"},"1119":{"":"dz"},"1108":{"":"ie"},"1111":{"":"i"},"1107":{"":"g"}};
});};if (typeof module !== 'undefined') { module.exports = map; }else if (typeof Interscript !== 'undefined') { map(Interscript); }else { throw "We couldn't dispatch Interscript from a map!"; }