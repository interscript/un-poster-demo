var map = function(Interscript) {Interscript.define_map("iso-ell-Grek-Latn-843-1997-t1", function(Interscript, map) {
map.dependencies = [];
map.stages.main = function(s) {
s = Interscript.gsub(s, "(?<=[ΑαΕεΟο])Υ", "U");
s = Interscript.gsub(s, "(?<=[ΑαΕεΟο])υ", "u");
s = Interscript.gsub(s, "(?<=[ΑαΕεΟο])ύ", "ú");
s = Interscript.gsub(s, ";", "?");
s = Interscript.gsub(s, ";", "?");
s = Interscript.parallel_replace_tree(s, map.cache.PTREE_4429213095754079442);
s = Interscript.gsub(s, "(?<=[A-Z])(?:Th|Ch|Ps)", function(a){return a.toUpperCase();});
s = Interscript.gsub(s, "(?:Th|Ch|Ps)(?=[A-Z])", function(a){return a.toUpperCase();});
return s;
};
map.cache.PTREE_4429213095754079442 = {"39":{"":""},"902":{"":"Á"},"913":{"":"A"},"914":{"":"V"},"915":{"":"G"},"916":{"":"D"},"917":{"":"E"},"918":{"":"Z"},"919":{"":"Ī"},"920":{"":"Th"},"921":{"":"I"},"922":{"":"K"},"923":{"":"L"},"924":{"":"M"},"925":{"":"N"},"926":{"":"X"},"927":{"":"O"},"928":{"":"P"},"929":{"":"R"},"931":{"":"S"},"932":{"":"T"},"933":{"":"Y"},"934":{"":"F"},"935":{"":"Ch"},"936":{"":"Ps"},"937":{"":"Ō"},"904":{"":"É"},"905":{"":"Ī́"},"906":{"":"Í"},"908":{"":"Ó"},"910":{"":"Ý"},"911":{"":"Ṓ"},"938":{"":"Ï"},"939":{"":"Ÿ"},"940":{"":"á"},"945":{"":"a"},"946":{"":"v"},"947":{"":"g"},"948":{"":"d"},"949":{"":"e"},"950":{"":"z"},"951":{"":"ī"},"952":{"":"th"},"953":{"":"i"},"954":{"":"k"},"955":{"":"l"},"956":{"":"m"},"957":{"":"n"},"958":{"":"x"},"959":{"":"o"},"960":{"":"p"},"961":{"":"r"},"963":{"":"s"},"962":{"":"s"},"964":{"":"t"},"965":{"":"y"},"966":{"":"f"},"967":{"":"ch"},"968":{"":"ps"},"969":{"":"ō"},"941":{"":"é"},"942":{"":"ī́"},"943":{"":"í"},"972":{"":"ó"},"973":{"":"ý"},"974":{"":"ṓ"},"970":{"":"ï"},"971":{"":"ÿ"},"912":{"":"ḯ"},"944":{"":"ÿ́"},"988":{"":"W"},"989":{"":"w"},"1010":{"":"s"},"1017":{"":"S"},"903":{"":";"},"183":{"":";"}};
});};if (typeof module !== 'undefined') { module.exports = map; }else if (typeof Interscript !== 'undefined') { map(Interscript); }else { throw "We couldn't dispatch Interscript from a map!"; }