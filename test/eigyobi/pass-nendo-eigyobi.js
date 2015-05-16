//経過営業日(年度)
var Koyomi = require('../..');
var koyomi = new Koyomi();
var pass = koyomi.passNendoEigyobi.bind(koyomi);
var eq = require('assert').equal;

eq(pass(20150101),   0);
eq(pass(20151231), 242);

koyomi.startMonth = 4;

eq(pass(20150401),   1);
eq(pass(20150402),   2);
eq(pass(20150403),   3);
eq(pass(20150404),   3);
eq(pass(20150405),   3);
eq(pass(20150406),   4);
eq(pass(20150407),   5);
eq(pass(20150408),   6);
eq(pass(20150409),   7);
eq(pass(20150410),   8);
eq(pass(20150411),   8);
eq(pass(20150412),   8);
eq(pass(20150413),   9);
eq(pass(20150414),  10);
eq(pass(20150415),  11);
eq(pass(20150416),  12);
eq(pass(20150417),  13);
eq(pass(20150418),  13);
eq(pass(20150419),  13);
eq(pass(20150420),  14);
eq(pass(20150421),  15);
eq(pass(20150422),  16);
eq(pass(20150423),  17);
eq(pass(20150424),  18);
eq(pass(20150425),  18);
eq(pass(20150426),  18);
eq(pass(20150427),  19);
eq(pass(20150428),  20);
eq(pass(20150429),  20);
eq(pass(20150430),  21);

eq(pass(20150501),  22);
eq(pass(20150502),  22);
eq(pass(20150503),  22);
eq(pass(20150504),  22);
eq(pass(20150505),  22);
eq(pass(20150506),  22);
eq(pass(20150507),  23);
eq(pass(20150508),  24);
eq(pass(20150509),  24);
eq(pass(20150510),  24);
eq(pass(20150511),  25);
eq(pass(20150512),  26);
eq(pass(20150513),  27);
eq(pass(20150514),  28);
eq(pass(20150515),  29);
eq(pass(20150516),  29);
eq(pass(20150517),  29);
eq(pass(20150518),  30);
eq(pass(20150519),  31);
eq(pass(20150520),  32);
eq(pass(20150521),  33);
eq(pass(20150522),  34);
eq(pass(20150523),  34);
eq(pass(20150524),  34);
eq(pass(20150525),  35);
eq(pass(20150526),  36);
eq(pass(20150527),  37);
eq(pass(20150528),  38);
eq(pass(20150529),  39);
eq(pass(20150530),  39);
eq(pass(20150531),  39);

eq(pass(20160301), 222);
eq(pass(20160302), 223);
eq(pass(20160303), 224);
eq(pass(20160304), 225);
eq(pass(20160305), 225);
eq(pass(20160306), 225);
eq(pass(20160307), 226);
eq(pass(20160308), 227);
eq(pass(20160309), 228);
eq(pass(20160310), 229);
eq(pass(20160311), 230);
eq(pass(20160312), 230);
eq(pass(20160313), 230);
eq(pass(20160314), 231);
eq(pass(20160315), 232);
eq(pass(20160316), 233);
eq(pass(20160317), 234);
eq(pass(20160318), 235);
eq(pass(20160319), 235);
eq(pass(20160320), 235);
eq(pass(20160321), 235);
eq(pass(20160322), 236);
eq(pass(20160323), 237);
eq(pass(20160324), 238);
eq(pass(20160325), 239);
eq(pass(20160326), 239);
eq(pass(20160327), 239);
eq(pass(20160328), 240);
eq(pass(20160329), 241);
eq(pass(20160330), 242);
eq(pass(20160331), 243);

