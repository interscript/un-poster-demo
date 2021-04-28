var map = function(Interscript) {Interscript.define_map("odni-fas-Arab-Latn-2015", function(Interscript, map) {
map.dependencies = [];
map.stages.main = function(s) {
s = Interscript.parallel_regexp_gsub(s, map.cache.PRE_3262087884044168153);
return s;
};
map.cache.PRE_3262087884044168153 = ["(?<_0>"+Interscript.aliases.space+"اللَّه)|(?<_1>ِي(?=(?:َ|u064f)))|(?<_2>"+Interscript.aliases.space+"(?=آبَاد))|(?<_3>"+Interscript.aliases.boundary+"الت)|(?<_4>"+Interscript.aliases.boundary+"الث)|(?<_5>"+Interscript.aliases.boundary+"الد)|(?<_6>"+Interscript.aliases.boundary+"الذ)|(?<_7>"+Interscript.aliases.boundary+"الر)|(?<_8>"+Interscript.aliases.boundary+"الز)|(?<_9>"+Interscript.aliases.boundary+"الس)|(?<_10>"+Interscript.aliases.boundary+"الش)|(?<_11>"+Interscript.aliases.boundary+"الص)|(?<_12>"+Interscript.aliases.boundary+"الض)|(?<_13>"+Interscript.aliases.boundary+"الط)|(?<_14>"+Interscript.aliases.boundary+"الظ)|(?<_15>"+Interscript.aliases.boundary+"الل)|(?<_16>"+Interscript.aliases.boundary+"الن)|(?<_17>ِيَّ)|(?<_18>ِیَّ)|(?<_19>َيْ)|(?<_20>"+Interscript.aliases.boundary+"ال)|(?<_21>"+Interscript.aliases.boundary+"آل)|(?<_22>"+Interscript.aliases.boundary+"اَ)|(?<_23>"+Interscript.aliases.boundary+"اُ)|(?<_24>"+Interscript.aliases.boundary+"اِ)|(?<_25>اي"+Interscript.aliases.boundary+")|(?<_26>ای"+Interscript.aliases.boundary+")|(?<_27>ىٰ)|(?<_28>(?<=َ)ا)|(?<_29>(?<!"+Interscript.aliases.boundary+")ا)|(?<_30>ُو)|(?<_31>ِي)|(?<_32>ِی)|(?<_33>بّ)|(?<_34>تّ)|(?<_35>ثّ)|(?<_36>جّ)|(?<_37>حّ)|(?<_38>خّ)|(?<_39>دّ)|(?<_40>ذّ)|(?<_41>رّ)|(?<_42>زّ)|(?<_43>سّ)|(?<_44>شّ)|(?<_45>صّ)|(?<_46>ضّ)|(?<_47>طّ)|(?<_48>ظّ)|(?<_49>غّ)|(?<_50>فّ)|(?<_51>قّ)|(?<_52>كّ)|(?<_53>لّ)|(?<_54>مّ)|(?<_55>نّ)|(?<_56>هّ)|(?<_57>وّ)|(?<_58>يّ)|(?<_59>(?<="+Interscript.aliases.boundary+")ء)|(?<_60>َى)|(?<_61>يي)|(?<_62>یی)|(?<_63>(?<="+Interscript.aliases.boundary+")ع)|(?<_64>ﷲ)|(?<_65>ْ)|(?<_66>ٙ)|(?<_67>ٴ)|(?<_68>ٔ)|(?<_69>ة)|(?<_70>ئ)|(?<_71>ؤ)|(?<_72>أ)|(?<_73>إ)|(?<_74>آ)|(?<_75>َ)|(?<_76>ُ)|(?<_77>ِ)|(?<_78>ء)|(?<_79>ى)|(?<_80>ب)|(?<_81>پ)|(?<_82>ت)|(?<_83>ث)|(?<_84>ج)|(?<_85>چ)|(?<_86>ح)|(?<_87>خ)|(?<_88>د)|(?<_89>ذ)|(?<_90>ر)|(?<_91>ز)|(?<_92>ژ)|(?<_93>س)|(?<_94>ش)|(?<_95>ص)|(?<_96>ض)|(?<_97>ط)|(?<_98>ظ)|(?<_99>ع)|(?<_100>غ)|(?<_101>ف)|(?<_102>ق)|(?<_103>ك)|(?<_104>گ)|(?<_105>ل)|(?<_106>م)|(?<_107>ن)|(?<_108>ه)|(?<_109>و)|(?<_110>ي)|(?<_111>ى)|(?<_112>ې)|(?<_113>ۍ)", ["ollah","iy","","at t","as s","ad d","az z","ar r","az z","as s","ash sh","as s","az z","at t","az z","al l","an n","iy","iy","ay","al ","Al ","a","o","e","’i","’i","á","","a","u","i","i","bb","tt","ss","jj","hh","kh","dd","zz","rr","zz","ss","sh","ss","zz","tt","zz","gh","ff","gh","kk","ll","mm","nn","hh","vv","yy","","a","’i","’i","","Allah","","ê","-e","-e","eh","’","’","","","a","a","o","e","’","a","b","p","t","s","j","ch","h","kh","d","z","r","z","zh","s","sh","s","z","t","z","‘","gh","f","gh","k","g","l","m","n","h","v","y","y","ē","êy"]];
});};if (typeof module !== 'undefined') { module.exports = map; }else if (typeof Interscript !== 'undefined') { map(Interscript); }else { throw "We couldn't dispatch Interscript from a map!"; }