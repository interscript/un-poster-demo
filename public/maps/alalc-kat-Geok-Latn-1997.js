var map = function(Interscript) {Interscript.define_map("alalc-kat-Geok-Latn-1997", function(Interscript, map) {
map.dependencies = [];
map.stages.main = function(s) {
s = Interscript.parallel_replace_tree(s, map.cache.PTREE_710254150258591895);
return s;
};
map.cache.PTREE_710254150258591895 = {"4256":{"":"A"},"4257":{"":"B"},"4258":{"":"G"},"4259":{"":"D"},"4260":{"":"E"},"4261":{"":"V"},"4262":{"":"Z"},"4263":{"":"Tʻ"},"4264":{"":"I"},"4265":{"":"K"},"4266":{"":"L"},"4267":{"":"M"},"4268":{"":"N"},"4269":{"":"O"},"4270":{"":"P"},"4271":{"":"Ž"},"4272":{"":"R"},"4273":{"":"S"},"4274":{"":"T"},"4275":{"":"U"},"4276":{"":"Pʻ"},"4277":{"":"Kʻ"},"4278":{"":"Ġ"},"4279":{"":"Q"},"4280":{"":"Š"},"4281":{"":"Čʻ"},"4282":{"":"Cʻ"},"4283":{"":"Ż"},"4284":{"":"C"},"4285":{"":"Č"},"4286":{"":"X"},"4287":{"":"J"},"4288":{"":"H"},"4289":{"":"Ē"},"4290":{"":"Y"},"4291":{"":"W"},"4292":{"":"X̣"},"4293":{"":"Ō"},"11520":{"":"a"},"11521":{"":"b"},"11522":{"":"g"},"11523":{"":"d"},"11524":{"":"e"},"11525":{"":"v"},"11526":{"":"z"},"11527":{"":"tʻ"},"11528":{"":"i"},"11529":{"":"k"},"11530":{"":"l"},"11531":{"":"m"},"11532":{"":"n"},"11533":{"":"o"},"11534":{"":"p"},"11535":{"":"ž"},"11536":{"":"r"},"11537":{"":"s"},"11538":{"":"t"},"11539":{"":"u"},"11540":{"":"pʻ"},"11541":{"":"kʻ"},"11542":{"":"ġ"},"11543":{"":"q"},"11544":{"":"š"},"11545":{"":"čʻ"},"11546":{"":"cʻ"},"11547":{"":"ż"},"11548":{"":"c"},"11549":{"":"č"},"11550":{"":"x"},"11551":{"":"j"},"11552":{"":"h"},"11553":{"":"ē"},"11554":{"":"y"},"11555":{"":"w"},"11556":{"":"x̣"},"11557":{"":"ō"}};
});};if (typeof module !== 'undefined') { module.exports = map; }else if (typeof Interscript !== 'undefined') { map(Interscript); }else { throw "We couldn't dispatch Interscript from a map!"; }