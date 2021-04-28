var map = function(Interscript) {Interscript.define_map("alalc-bul-Cyrl-Latn-1997", function(Interscript, map) {
map.dependencies = [];
map.stages.main = function(s) {
s = Interscript.gsub(s, "(?<=)Ъ(?="+Interscript.aliases.boundary+")", "ʺ");
s = Interscript.gsub(s, "(?<=)u044a(?="+Interscript.aliases.boundary+")", "ʺ");
s = Interscript.parallel_replace_tree(s, map.cache.PTREE_2933933330440124361);
return s;
};
map.cache.PTREE_2933933330440124361 = {"1040":{"":"A"},"1041":{"":"B"},"1042":{"":"V"},"1043":{"":"G"},"1044":{"":"D"},"1045":{"":"E"},"1046":{"":"Zh"},"1047":{"":"Z"},"1048":{"":"I"},"1049":{"":"Ĭ"},"1050":{"":"K"},"1051":{"":"L"},"1052":{"":"M"},"1053":{"":"N"},"1054":{"":"O"},"1055":{"":"P"},"1056":{"":"R"},"1057":{"":"S"},"1058":{"":"T"},"1059":{"":"U"},"1060":{"":"F"},"1061":{"":"Kh"},"1062":{"":"T͡S"},"1063":{"":"Ch"},"1064":{"":"Sh"},"1065":{"":"Sht"},"1066":{"":"Ŭ"},"1068":{"":"ʹ"},"1122":{"":"I͡E"},"1070":{"":"I͡U"},"1071":{"":"I͡A"},"1130":{"":"U̐"},"1072":{"":"a"},"1073":{"":"b"},"1074":{"":"v"},"1075":{"":"g"},"1076":{"":"d"},"1077":{"":"e"},"1078":{"":"zh"},"1079":{"":"z"},"1080":{"":"i"},"1081":{"":"ĭ"},"1082":{"":"k"},"1083":{"":"l"},"1084":{"":"m"},"1085":{"":"n"},"1086":{"":"o"},"1087":{"":"p"},"1088":{"":"r"},"1089":{"":"s"},"1090":{"":"t"},"1091":{"":"u"},"1092":{"":"f"},"1093":{"":"kh"},"1094":{"":"t͡s"},"1095":{"":"ch"},"1096":{"":"sh"},"1097":{"":"sht"},"1098":{"":"ŭ"},"1100":{"":"ʹ"},"1123":{"":"i͡e"},"1102":{"":"i͡u"},"1103":{"":"i͡a"},"1131":{"":"u̐"}};
});};if (typeof module !== 'undefined') { module.exports = map; }else if (typeof Interscript !== 'undefined') { map(Interscript); }else { throw "We couldn't dispatch Interscript from a map!"; }