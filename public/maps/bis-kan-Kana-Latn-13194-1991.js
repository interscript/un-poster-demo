var map = function(Interscript) {Interscript.define_map("bis-kan-Kana-Latn-13194-1991", function(Interscript, map) {
map.dependencies = [];
map.stages.main = function(s) {
s = Interscript.gsub(s, "ಂ(?=[ಕಖಗಘಙ])", "ṅ");
s = Interscript.gsub(s, "ಂ(?=[ಚಛಜಝಞ])", "ñ");
s = Interscript.gsub(s, "ಂ(?=[ಟಠಡಢಣ])", "ṇ");
s = Interscript.gsub(s, "ಂ(?=[ತಥದಧನ])", "n");
s = Interscript.gsub(s, "ಂ(?=[ಪಫಬಭಮ])", "m");
s = Interscript.parallel_replace_tree(s, map.cache.PTREE_2586615419431963181);
s = Interscript.functions.compose(s, {});
return s;
};
map.cache.PTREE_2586615419431963181 = {"3205":{"":"a"},"3206":{"":"ā"},"3207":{"":"i"},"3208":{"":"ī"},"3209":{"":"u"},"3210":{"":"ū"},"3211":{"":"ṛ"},"3212":{"":"ḻ"},"3214":{"":"e"},"3215":{"":"ē"},"3216":{"":"ai"},"3218":{"":"o"},"3219":{"":"ŏ"},"3220":{"":"au"},"3221":{"":"k"},"3222":{"":"kh"},"3223":{"":"g"},"3224":{"":"gh"},"3225":{"":"ṅ"},"3226":{"":"c"},"3227":{"":"ch"},"3228":{"":"j"},"3229":{"":"jh"},"3230":{"":"ñ"},"3231":{"":"ṭ"},"3232":{"":"ṭh"},"3233":{"":"ḍ"},"3234":{"":"ḍh"},"3235":{"":"ṇ"},"3236":{"":"t"},"3237":{"":"th"},"3238":{"":"d"},"3239":{"":"dh"},"3240":{"":"n"},"3242":{"":"p"},"3243":{"":"ph"},"3244":{"":"b"},"3245":{"":"bh"},"3246":{"":"m"},"3247":{"":"y"},"3248":{"":"r"},"3249":{"":"ṟ"},"3250":{"":"l"},"3251":{"":"ḷ"},"3253":{"":"v"},"3254":{"":"ś"},"3255":{"":"ṣ"},"3256":{"":"s"},"3257":{"":"h"},"3200":{"":"m"},"3201":{"":"m"},"3203":{"":"ḥ"},"3202":{"":"ṃ"},"36":{"3260":{"":""}},"3262":{"":"ā"},"3263":{"":"i"},"3264":{"":"ī"},"3265":{"":"u"},"3266":{"":"ū"},"3267":{"":"ṛ"},"3268":{"":"ṛr"},"3270":{"":"e"},"3271":{"":"ē"},"3272":{"":"ai"},"3274":{"":"o"},"3275":{"":"ō"},"3276":{"":"au"},"2381":{"":""},"2364":{"":""},"3277":{"":""},"8205":{"":""},"8204":{"":""}};
});};if (typeof module !== 'undefined') { module.exports = map; }else if (typeof Interscript !== 'undefined') { map(Interscript); }else { throw "We couldn't dispatch Interscript from a map!"; }