function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function(cevap) {
    return cevap === this.dogruCevap
}

let sorular = [
    new Soru("1- 'accept' kelimesinin türkçe karşılığı aşağıdakilerden hangidir?", { a: "kabul etmek, kabullenmek", b: "elde etmek", c: "eklemek" , d: "izin vermek" }, "a"),
    new Soru("2- 'achieve' kelimesinin türkçe karşılığı aşağıdakilerden hangidir?", { a: "etkilemek", b: "kabul etmek, itiraf etmek", c: "elde etmek, başarmak", d: "davranmak, hareket etmek" }, "c"),
    new Soru("3- 'act' kelimesinin türkçe karşılığı aşağıdakilerden hangidir?", { a: "izin vermek", b: "davranmak, hareket etmek", c: "belirmek, görünmek" , d: "varmak, ulaşmak" }, "b"),
    new Soru("4- 'add' kelimesinin türkçe karşılığı aşağıdakilerden hangidir?", { a: "tartışmak", b: "ilave etmek, eklemek", c: "varmak, ulaşmak", d: "saldırmak" }, "b"),
    new Soru("5- 'believe' kelimesinin türkçe karşılığı aşağıdakilerden hangidir?", { a: "inanmak", b: "ısırmak", c: "teklif vermek" , d: "izin vermek" }, "a"),
    new Soru("6- 'hold' kelimesinin türkçe karşılığı aşağıdakilerden hangidir?", { a: "aramak", b: "seçmek", c: "tutmak", d: "kanamak" }, "c"),
    new Soru("7- 'offer' kelimesinin türkçe karşılığı aşağıdakilerden hangidir?", { a: "karar  vermek", b: "teslim etmek", c: "belirmek, görünmek" , d: "teklif etmek" }, "d"),
    new Soru("8- 'enjoy' kelimesinin türkçe karşılığı aşağıdakilerden hangidir?", { a: "düşmek", b: "var olmak", c: "zevk almak", d: "beslemek" }, "c"),
    new Soru("9- 'have' kelimesinin türkçe karşılığı aşağıdakilerden hangidir?", { a: "asmak", b: "sahip olmak", c: "teklif vermek" , d: "saklanmak" }, "b"),
    new Soru("10- 'mention' kelimesinin türkçe karşılığı aşağıdakilerden hangidir?", { a: "açmak", b: "buluşmak", c: "üretmek, çoğaltmak", d: "bahsetmek" }, "d"),
];