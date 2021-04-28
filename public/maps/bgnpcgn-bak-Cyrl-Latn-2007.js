var map = function(Interscript) {Interscript.define_map("bgnpcgn-bak-Cyrl-Latn-2007", function(Interscript, map) {
map.dependencies = [];
map.stages.main = function(s) {
s = Interscript.gsub(s, ""+Interscript.aliases.boundary+"В(?=[АаЕеЁёИиОоӨөУуҮЫыЭэӘәЮюЯя])", "W");
s = Interscript.gsub(s, ""+Interscript.aliases.boundary+"в(?=[АаЕеЁёИиОоӨөУуҮЫыЭэӘәЮюЯя])", "w");
s = Interscript.gsub(s, ""+Interscript.aliases.boundary+"Е", "Ye");
s = Interscript.gsub(s, ""+Interscript.aliases.boundary+"е", "ye");
s = Interscript.gsub(s, "(?<=[АаЕеЁёИиОоӨөУуҮЫыЭэӘәЮюЯя])Е(?="+Interscript.aliases.boundary+")", "Ye");
s = Interscript.gsub(s, "(?<=[АаЕеЁёИиОоӨөУуҮЫыЭэӘәЮюЯя])е(?="+Interscript.aliases.boundary+")", "ye");
s = Interscript.gsub(s, "(?<=[АаЕеЁёИиОоӨөУуҮЫыЭэӘәЮюЯя])[УҮ]", "W");
s = Interscript.gsub(s, "(?<=[АаЕеЁёИиОоӨөУуҮЫыЭэӘәЮюЯя])[уү]", "w");
s = Interscript.parallel_replace_tree(s, map.cache.PTREE_2897669444734634641);
return s;
};
map.cache.PTREE_2897669444734634641 = {"1040":{"":"A"},"1041":{"":"B"},"1042":{"":"V"},"1043":{"":"G"},"1170":{"":"Ğ"},"1044":{"":"D"},"1176":{"":"Ź"},"1045":{"":"E"},"1025":{"":"Ë"},"1046":{"":"J"},"1047":{"":"Z"},"1048":{"":"I"},"1049":{"":"Y"},"1050":{"":"K"},"1184":{"":"Q"},"1051":{"":"L"},"1052":{"":"M"},"1053":{"":"N"},"1186":{"":"Ñ"},"1054":{"":"O"},"1256":{"":"Ö"},"1055":{"":"P"},"1056":{"":"R"},"1057":{"":"S"},"1194":{"":"Ś"},"1058":{"":"T"},"1059":{"":"U"},"1198":{"":"Ü"},"1060":{"":"F"},"1061":{"":"X"},"1210":{"":"H"},"1062":{"":"Ts"},"1063":{"":"Ç"},"1064":{"":"Ş"},"1065":{"":"ŞÇ"},"1066":{"":""},"1067":{"":"I"},"1068":{"":""},"1069":{"":"E"},"1240":{"":"Ə"},"1070":{"":"Yu"},"1071":{"":"Ya"},"1072":{"":"a"},"1073":{"":"b"},"1074":{"":"v"},"1075":{"":"g"},"1171":{"":"ğ"},"1076":{"":"d"},"1177":{"":"ź"},"1077":{"":"e"},"1105":{"":"yo"},"1078":{"":"j"},"1079":{"":"z"},"1080":{"":"i"},"1081":{"":"y"},"1082":{"":"k"},"1185":{"":"q"},"1083":{"":"l"},"1084":{"":"m"},"1085":{"":"n"},"1187":{"":"ñ"},"1086":{"":"o"},"1257":{"":"ö"},"1087":{"":"p"},"1088":{"":"r"},"1089":{"":"s"},"1195":{"":"ś"},"1090":{"":"t"},"1091":{"":"u"},"1199":{"":"ü"},"1092":{"":"f"},"1093":{"":"x"},"1211":{"":"h"},"1094":{"":"ts"},"1095":{"":"ç"},"1096":{"":"ş"},"1097":{"":"şç"},"1098":{"":""},"1099":{"":"ı"},"1100":{"":""},"1101":{"":"e"},"1241":{"":"ə"},"1102":{"":"yu"},"1103":{"":"ya"}};
});};if (typeof module !== 'undefined') { module.exports = map; }else if (typeof Interscript !== 'undefined') { map(Interscript); }else { throw "We couldn't dispatch Interscript from a map!"; }