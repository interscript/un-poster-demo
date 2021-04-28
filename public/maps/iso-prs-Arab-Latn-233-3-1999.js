var map = function(Interscript) {Interscript.define_map("iso-prs-Arab-Latn-233-3-1999", function(Interscript, map) {
map.dependencies = [];
map.stages.main = function(s) {
s = Interscript.parallel_regexp_gsub(s, map.cache.PRE_3451968443546751506);
return s;
};
map.cache.PRE_3451968443546751506 = ["(?<_0>(?<="+Interscript.aliases.boundary+"ال[؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ])ة)|(?<_1>(?<="+Interscript.aliases.boundary+"ال[؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ])ة)|(?<_2>(?<="+Interscript.aliases.boundary+"ال[؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ])ة)|(?<_3>(?<="+Interscript.aliases.boundary+"ال[؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ])ة)|(?<_4>(?<="+Interscript.aliases.boundary+"ال[؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ])ة)|(?<_5>(?<="+Interscript.aliases.boundary+"ال[؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ])ة)|(?<_6>(?<="+Interscript.aliases.boundary+"ال[؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ])ة)|(?<_7>(?<="+Interscript.aliases.boundary+"ال[؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ])ة)|(?<_8>(?<="+Interscript.aliases.boundary+"ال[؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ])ة)|(?<_9>(?<="+Interscript.aliases.boundary+"ال[؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ])ة)|(?<_10>ِي(?=(?:َ|u064f)))|(?<_11>(?<="+Interscript.aliases.boundary+"ال[؀-ۿ][؀-ۿ][؀-ۿ])ة)|(?<_12>"+Interscript.aliases.space+"(?=آبَاد))|(?<_13>(?<="+Interscript.aliases.boundary+"ال[؀-ۿ][؀-ۿ])ة)|(?<_14>ِيَّ)|(?<_15>ِیَّ)|(?<_16>"+Interscript.aliases.boundary+"الت)|(?<_17>"+Interscript.aliases.boundary+"الث)|(?<_18>"+Interscript.aliases.boundary+"الد)|(?<_19>"+Interscript.aliases.boundary+"الذ)|(?<_20>"+Interscript.aliases.boundary+"الر)|(?<_21>"+Interscript.aliases.boundary+"الز)|(?<_22>"+Interscript.aliases.boundary+"الس)|(?<_23>"+Interscript.aliases.boundary+"الش)|(?<_24>"+Interscript.aliases.boundary+"الص)|(?<_25>"+Interscript.aliases.boundary+"الض)|(?<_26>"+Interscript.aliases.boundary+"الط)|(?<_27>"+Interscript.aliases.boundary+"الظ)|(?<_28>"+Interscript.aliases.boundary+"الل)|(?<_29>"+Interscript.aliases.boundary+"الن)|(?<_30>عُو)|(?<_31>َوْ)|(?<_32>َيْ)|(?<_33>"+Interscript.aliases.boundary+"ال)|(?<_34>ِ"+Interscript.aliases.boundary+")|(?<_35>عَ)|(?<_36>عِ)|(?<_37>عُ)|(?<_38>ِي)|(?<_39>ِی)|(?<_40>ُو)|(?<_41>َا)|(?<_42>َى)|(?<_43>َو)|(?<_44>َي)|(?<_45>َی)|(?<_46>ىٰ)|(?<_47>ة"+Interscript.aliases.line_end+")|(?<_48>ﷲ)|(?<_49>َ)|(?<_50>ِ)|(?<_51>ُ)|(?<_52>ْ)|(?<_53>ٙ)|(?<_54>ٴ)|(?<_55>ٔ)|(?<_56>آ)|(?<_57>ة)|(?<_58>ً)|(?<_59>ٌ)|(?<_60>ٍ)|(?<_61>ء)|(?<_62>أ)|(?<_63>ؤ)|(?<_64>ئ)|(?<_65>،)|(?<_66>؛)|(?<_67>؟)|(?<_68>إ)|(?<_69>ا)|(?<_70>ب)|(?<_71>پ)|(?<_72>ت)|(?<_73>ث)|(?<_74>ج)|(?<_75>چ)|(?<_76>ح)|(?<_77>خ)|(?<_78>د)|(?<_79>ډ)|(?<_80>ذ)|(?<_81>ر)|(?<_82>ز)|(?<_83>ژ)|(?<_84>س)|(?<_85>ش)|(?<_86>ص)|(?<_87>ض)|(?<_88>ط)|(?<_89>ظ)|(?<_90>ع)|(?<_91>غ)|(?<_92>ف)|(?<_93>ق)|(?<_94>ک)|(?<_95>گ)|(?<_96>ل)|(?<_97>م)|(?<_98>ن)|(?<_99>و)|(?<_100>ه)|(?<_101>ي)|(?<_102>ى)|(?<_103>ې)|(?<_104>ۍ)|(?<_105>ب)|(?<_106>پ)|(?<_107>ت)|(?<_108>ث)|(?<_109>ج)|(?<_110>چ)|(?<_111>ح)|(?<_112>خ)|(?<_113>د)|(?<_114>ډ)|(?<_115>ذ)|(?<_116>ر)|(?<_117>ز)|(?<_118>ژ)|(?<_119>س)|(?<_120>ش)|(?<_121>ص)|(?<_122>ض)|(?<_123>ط)|(?<_124>ظ)|(?<_125>ع)|(?<_126>غ)|(?<_127>ف)|(?<_128>ق)|(?<_129>ک)|(?<_130>گ)|(?<_131>ل)|(?<_132>م)|(?<_133>ن)|(?<_134>و)|(?<_135>ه)|(?<_136>ي)|(?<_137>ى)|(?<_138>ې)|(?<_139>ۍ)", ["h","h","h","h","h","h","h","h","h","h","iy","h","","h","īy","īy","at t","as̄ s̄","ad d","az̄ z̄","ar r","az z","as s","ash sh","aş ş","aẕ ẕ","aţ ţ","az̧ z̧","al l","an n","‘ū","aw","ay","al ","-e","‘a","‘i","‘ū","ī","ī","ō","ā","ay","ow","aī","aī","á","h","Allāh","a","e","o","","ê","-e","-e","â","t","´´","","","’","â’","v’","y’",",",";","?","","â","b","p","t","s̱","j","c","ḥ","ḵ","d","ḏ","ẕ","r","z","z","s","š","ṣ","ż","ṭ","z","‘","gh","f","q","k","g","l","m","n","v","h","y","y","ē","êy","bb","pp","tt","s̱s̱","jj","č̱č̱","ḥḥ","ḵḵ","dd","ḏḏ","ẕẕ","rr","zz","zz","ss","šš","ṣṣ","żż","ṭṭ","zz","‘","gh","ff","qq","kk","gg","ll","mm","nn","vv","hh","yy","yy","ēē","êy"]];
});};if (typeof module !== 'undefined') { module.exports = map; }else if (typeof Interscript !== 'undefined') { map(Interscript); }else { throw "We couldn't dispatch Interscript from a map!"; }