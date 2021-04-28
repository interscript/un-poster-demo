var map = function(Interscript) {Interscript.define_map("odni-pus-Arab-Latn-2011", function(Interscript, map) {
map.dependencies = [];
map.stages.main = function(s) {
s = Interscript.parallel_regexp_gsub(s, map.cache.PRE_3987161132904251475);
s = Interscript.gsub(s, "(?<="+Interscript.aliases.boundary+")(?<!"+Interscript.aliases.boundary+"[‘’'])[a-￿]", function(a){return a.toUpperCase();});
s = Interscript.gsub(s, "\ Al\-", " al-");
return s;
};
map.cache.PRE_3987161132904251475 = ["(?<_0>ُ?"+Interscript.aliases.space+"?الد[يى]ن)|(?<_1>"+Interscript.aliases.space+"?اللَّه)|(?<_2>ُوي"+Interscript.aliases.boundary+")|(?<_3>(?<="+Interscript.aliases.space+")"+Interscript.aliases.boundary+"ال)|(?<_4>َوْ)|(?<_5>َی[ها])|(?<_6>ِی[ها])|(?<_7>ْیا)|(?<_8>وي"+Interscript.aliases.boundary+")|(?<_9>ِ"+Interscript.aliases.boundary+")|(?<_10>َا?)|(?<_11>ُو)|(?<_12>َي)|(?<_13>ِ[يى])|(?<_14>[ېے]"+Interscript.aliases.boundary+")|(?<_15>بّ)|(?<_16>پّ)|(?<_17>[تټط]ّ)|(?<_18>جّ)|(?<_19>[حه]ّ)|(?<_20>[دډ]ّ)|(?<_21>[رړ]ّ)|(?<_22>[ذزضظ]ّ)|(?<_23>[ثسص]ّ)|(?<_24>فّ)|(?<_25>قّ)|(?<_26>كّ)|(?<_27>کّ)|(?<_28>[گګ]ّ)|(?<_29>لّ)|(?<_30>مّ)|(?<_31>[نڼ]ّ)|(?<_32>وّ)|(?<_33>يّ)|(?<_34>ىّ)|(?<_35>ؤو)|(?<_36>ِ)|(?<_37>ُ)|(?<_38>ْ)|(?<_39>ٙ)|(?<_40>ئ)|(?<_41>ب)|(?<_42>پ)|(?<_43>[تټط])|(?<_44>ج)|(?<_45>چ)|(?<_46>ځ)|(?<_47>څ)|(?<_48>[حه])|(?<_49>خ)|(?<_50>[دډ])|(?<_51>[رړ])|(?<_52>[ذزضظ])|(?<_53>[ږژ])|(?<_54>[ثسص])|(?<_55>[شښ])|(?<_56>[ءع])|(?<_57>غ)|(?<_58>ف)|(?<_59>ق)|(?<_60>ك)|(?<_61>ک)|(?<_62>[گګ])|(?<_63>ل)|(?<_64>م)|(?<_65>[نڼ])|(?<_66>و)|(?<_67>ي)|(?<_68>ى)|(?<_69>ِ)|(?<_70>ُ)|(?<_71>آ)|(?<_72>ا)|(?<_73>و)|(?<_74>ې)|(?<_75>ۍ)|(?<_76>ی)|(?<_77>أ)", ["uddin","ullah","uy","al-","aw","aya","ia","ya","oy","-e","a","u","ai","i","ey","bb","pp","tt","jj","hh","dd","rr","zz","ss","ff","qq","kk","kk","gg","ll","mm","nn","ww","yy","yy","u","i","u","","ê","êy","b","p","t","j","ch","dz","ts","h","kh","d","r","z","zh","s","sh","","gh","f","q","k","k","g","l","m","n","w","y","y","i","u","a","a","o","e","ey","a",""]];
});};if (typeof module !== 'undefined') { module.exports = map; }else if (typeof Interscript !== 'undefined') { map(Interscript); }else { throw "We couldn't dispatch Interscript from a map!"; }