var map = function(Interscript) {Interscript.define_map("bgnpcgn-ara-Arab-Latn-1956", function(Interscript, map) {
map.dependencies = [];
map.stages.main = function(s) {
s = Interscript.parallel_regexp_gsub(s, map.cache.PRE_3475636406028775052);
s = Interscript.gsub(s, "(?<="+Interscript.aliases.boundary+")(?<!"+Interscript.aliases.boundary+"[‘’])[a-￿]", function(a){return a.toUpperCase();});
s = Interscript.gsub(s, "\ At\ T", " at T");
s = Interscript.gsub(s, "\ Ath\ Th", " ath th");
s = Interscript.gsub(s, "\ Ad\ D", " ad D");
s = Interscript.gsub(s, "\ Adh\ Dh", " adh Dh");
s = Interscript.gsub(s, "\ Ar\ R", " ar R");
s = Interscript.gsub(s, "\ Az\ Z", " az Z");
s = Interscript.gsub(s, "\ As\ S", " as S");
s = Interscript.gsub(s, "\ Ash\ Sh", " ash Sh");
s = Interscript.gsub(s, "\ Aş\ Ş", " aş Ş");
s = Interscript.gsub(s, "\ Aḑ\ Ḑ", " aḑ Ḑ");
s = Interscript.gsub(s, "\ Aţ\ Ţ", " aţ Ţ");
s = Interscript.gsub(s, "\ Az̧\ Z̧", " az̧ Z̧");
s = Interscript.gsub(s, "\ Al\ L", " al L");
s = Interscript.gsub(s, "\ An\ N", " an N");
s = Interscript.gsub(s, "\ Al\ ", " al ");
s = Interscript.functions.compose(s, {});
return s;
};
map.cache.PRE_3475636406028775052 = ["(?<_0>(?<="+Interscript.aliases.boundary+"ال[؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ])ة)|(?<_1>(?<="+Interscript.aliases.boundary+"ال[؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ])ة)|(?<_2>(?<="+Interscript.aliases.boundary+"ال[؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ])ة)|(?<_3>(?<="+Interscript.aliases.boundary+"ال[؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ])ة)|(?<_4>(?<="+Interscript.aliases.boundary+"ال[؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ])ة)|(?<_5>(?<="+Interscript.aliases.boundary+"ال[؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ])ة)|(?<_6>(?<="+Interscript.aliases.boundary+"ال[؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ])ة)|(?<_7>(?<="+Interscript.aliases.boundary+"ال[؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ])ة)|(?<_8>(?<="+Interscript.aliases.boundary+"ال[؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ])ة)|(?<_9>(?<="+Interscript.aliases.boundary+"ال[؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ])ة)|(?<_10>(?<="+Interscript.aliases.boundary+"ال[؀-ۿ][؀-ۿ][؀-ۿ])ة)|(?<_11>(?<="+Interscript.aliases.boundary+"ال[؀-ۿ][؀-ۿ])ة)|(?<_12>"+Interscript.aliases.boundary+"التّ?)|(?<_13>"+Interscript.aliases.boundary+"الثّ?)|(?<_14>"+Interscript.aliases.boundary+"الدّ?)|(?<_15>"+Interscript.aliases.boundary+"الذّ?)|(?<_16>"+Interscript.aliases.boundary+"الرّ?)|(?<_17>"+Interscript.aliases.boundary+"الزّ?)|(?<_18>"+Interscript.aliases.boundary+"السّ?)|(?<_19>"+Interscript.aliases.boundary+"الشّ?)|(?<_20>"+Interscript.aliases.boundary+"الصّ?)|(?<_21>"+Interscript.aliases.boundary+"الضّ?)|(?<_22>"+Interscript.aliases.boundary+"الطّ?)|(?<_23>"+Interscript.aliases.boundary+"الظّ?)|(?<_24>"+Interscript.aliases.boundary+"اللّ?)|(?<_25>"+Interscript.aliases.boundary+"النّ?)|(?<_26>"+Interscript.aliases.boundary+"اوْ)|(?<_27>َوْ?(?!ّ))|(?<_28>ِيَّ)|(?<_29>"+Interscript.aliases.boundary+"اِي)|(?<_30>"+Interscript.aliases.boundary+"او)|(?<_31>"+Interscript.aliases.boundary+"اي)|(?<_32>َ(?=a[ht]))|(?<_33>ُو(?=[َُ]))|(?<_34>َىٰ)|(?<_35>َيْ)|(?<_36>(?<=ل)َي)|(?<_37>عُو)|(?<_38>ِي(?=[َُ]))|(?<_39>"+Interscript.aliases.boundary+"او)|(?<_40>"+Interscript.aliases.boundary+"ال)|(?<_41>او)|(?<_42>اي)|(?<_43>َ(?=ة))|(?<_44>َا)|(?<_45>ِي)|(?<_46>ُو)|(?<_47>َى)|(?<_48>ىٰ)|(?<_49>َي)|(?<_50>عَ)|(?<_51>عِ)|(?<_52>عُ)|(?<_53>"+Interscript.aliases.boundary+"آ)|(?<_54>بّ)|(?<_55>تّ)|(?<_56>ثّ)|(?<_57>جّ)|(?<_58>حّ)|(?<_59>خّ)|(?<_60>دّ)|(?<_61>ذّ)|(?<_62>رّ)|(?<_63>زّ)|(?<_64>سّ)|(?<_65>شّ)|(?<_66>صّ)|(?<_67>ضّ)|(?<_68>طّ)|(?<_69>ظّ)|(?<_70>غّ)|(?<_71>فّ)|(?<_72>قّ)|(?<_73>كّ)|(?<_74>لّ)|(?<_75>مّ)|(?<_76>نّ)|(?<_77>هّ)|(?<_78>وّ)|(?<_79>يّ)|(?<_80>ة"+Interscript.aliases.line_end+")|(?<_81>پ)|(?<_82>چ)|(?<_83>ڤ)|(?<_84>ڨ)|(?<_85>گ)|(?<_86>ڴ)|(?<_87>ڭ)|(?<_88>َ)|(?<_89>ِ)|(?<_90>ُ)|(?<_91>ْ)|(?<_92>ً)|(?<_93>ٍ)|(?<_94>ٌ)|(?<_95>أ)|(?<_96>ء)|(?<_97>آ)|(?<_98>ٱ)|(?<_99>ئ)|(?<_100>ا)|(?<_101>ة)|(?<_102>ب)|(?<_103>ﺑ)|(?<_104>ﺒ)|(?<_105>ﺐ)|(?<_106>ت)|(?<_107>ﺗ)|(?<_108>ﺘ)|(?<_109>ﺖ)|(?<_110>ث)|(?<_111>ﺛ)|(?<_112>ﺜ)|(?<_113>ﺚ)|(?<_114>ج)|(?<_115>ﺟ)|(?<_116>ﺠ)|(?<_117>ﺞ)|(?<_118>ح)|(?<_119>ﺣ)|(?<_120>ﺤ)|(?<_121>ﺢ)|(?<_122>خ)|(?<_123>ﺧ)|(?<_124>ﺨ)|(?<_125>ﺦ)|(?<_126>د)|(?<_127>ﺪ)|(?<_128>ذ)|(?<_129>ﺬ)|(?<_130>ر)|(?<_131>ﺮ)|(?<_132>ز)|(?<_133>ﺰ)|(?<_134>س)|(?<_135>ﺳ)|(?<_136>ﺴ)|(?<_137>ﺲ)|(?<_138>ش)|(?<_139>ﺷ)|(?<_140>ﺸ)|(?<_141>ﺶ)|(?<_142>ص)|(?<_143>ﺻ)|(?<_144>ﺼ)|(?<_145>ﺺ)|(?<_146>ض)|(?<_147>ﺿ)|(?<_148>ﻀ)|(?<_149>ﺾ)|(?<_150>ط)|(?<_151>ﻃ)|(?<_152>ﻄ)|(?<_153>ﻂ)|(?<_154>ظ)|(?<_155>ﻇ)|(?<_156>ﻈ)|(?<_157>ﻆ)|(?<_158>ع)|(?<_159>ﻋ)|(?<_160>ﻌ)|(?<_161>ﻊ)|(?<_162>غ)|(?<_163>ﻏ)|(?<_164>ﻐ)|(?<_165>ﻎ)|(?<_166>ف)|(?<_167>ﻓ)|(?<_168>ﻔ)|(?<_169>ﻒ)|(?<_170>ق)|(?<_171>ﻗ)|(?<_172>ﻘ)|(?<_173>ﻖ)|(?<_174>ك)|(?<_175>ﻛ)|(?<_176>ﻜ)|(?<_177>ﻚ)|(?<_178>ل)|(?<_179>ﻟ)|(?<_180>ﻠ)|(?<_181>ﻞ)|(?<_182>م)|(?<_183>ﻣ)|(?<_184>ﻤ)|(?<_185>ﻢ)|(?<_186>ن)|(?<_187>ﻧ)|(?<_188>ﻨ)|(?<_189>ﻦ)|(?<_190>ه)|(?<_191>ﻫ)|(?<_192>ﻬ)|(?<_193>ﻪ)|(?<_194>و)|(?<_195>ﻮ)|(?<_196>ي)|(?<_197>ﻳ)|(?<_198>ﻴ)|(?<_199>ﻱ)|(?<_200>۰)|(?<_201>۱)|(?<_202>۲)|(?<_203>۳)|(?<_204>٤)|(?<_205>٥)|(?<_206>٦)|(?<_207>۷)|(?<_208>۸)|(?<_209>۹)", ["ah","ah","ah","ah","ah","ah","ah","ah","ah","ah","ah","ah","at t","ath th","ad d","adh dh","ar r","az z","as s","ash sh","aş ş","aḑ ḑ","aţ ţ","az̧ z̧","al l","an n","aw","aw","īy","ī","ū","ī","","uw","á","ay","ay","‘ū","iy","ū","al ","āw","āy","","ā","ī","ū","á","á","aī","‘a","‘i","‘ū","ā","bb","tt","thth","jj","ḩḩ","khkh","dd","dhdh","rr","zz","ss","sh","şş","ḑḑ","ţţ","z̧z̧","ghgh","ff","qq","kk","ll","mm","nn","hh","ww","yy","ah","p","ch","v","g","g","g","g","a","i","u","","","","","","’","’ā","’","’","ā","at","b","b","b","b","t","t","t","t","th","th","th","th","j","j","j","j","ḩ","ḩ","ḩ","ḩ","kh","kh","kh","kh","d","d","dh","dh","r","r","z","z","s","s","s","s","sh","sh","sh","sh","ş","ş","ş","ş","ḑ","ḑ","ḑ","ḑ","ţ","ţ","ţ","ţ","z̧","z̧","z̧","z̧","‘","‘","‘","‘","gh","gh","gh","gh","f","f","f","f","q","q","q","q","k","k","k","k","l","l","l","l","m","m","m","m","n","n","n","n","h","h","h","h","w","w","y","y","y","y","0","1","2","3","4","5","6","7","8","9"]];
});};if (typeof module !== 'undefined') { module.exports = map; }else if (typeof Interscript !== 'undefined') { map(Interscript); }else { throw "We couldn't dispatch Interscript from a map!"; }