// フォーマット
var koyomi = require('../..').create();
var format = koyomi.format.bind(koyomi);
var eq = require('assert').equal;


// 短縮
eq(format('2015-2-3 12:34:56', 'H時I分S秒'), '12時34分56秒');
eq(format('2015-2-3 12:34:00', 'H時I分S秒'), '12時34分0秒');
eq(format('2015-2-3 12:00:56', 'H時I分S秒'), '12時0分56秒');
eq(format('2015-2-3 12:00:00', 'H時I分S秒'), '12時0分0秒');

eq(format('2015-2-3 12:34:56', 'H時I分S秒>>短縮'), '12時34分56秒');
eq(format('2015-2-3 12:34:00', 'H時I分S秒>>短縮'), '12時34分');
eq(format('2015-2-3 12:00:56', 'H時I分S秒>>短縮'), '12時0分56秒');
eq(format('2015-2-3 12:00:00', 'H時I分S秒>>短縮'), '12時');

// 元年
eq(format('2015-2-3', 'Y年M月D日'), '2015年2月3日');
eq(format('2015-2-3', 'GGN年M月D日'), '平成27年2月3日');
eq(format('2015-2-3', 'GGN年M月D日>>元年'), '平成27年2月3日');
eq(format('1989-2-3', 'GGN年M月D日>>元年'), '平成元年2月3日');

// 漢数字、漢字
eq(format('2015-12-23', 'GGN年M月D日>>漢数字')    , '平成二十七年十二月二十三日');
eq(format('2015-12-23', 'GGN年M月D日>>漢字')      , '平成二七年一二月二三日');
eq(format('1989-12-23', 'GGN年M月D日>>漢数字')    , '平成元年十二月二十三日');  // 元年を指定せずとも適用
eq(format('1989-12-23', 'GGN年M月D日>>漢字')      , '平成元年一二月二三日');    // 元年を指定せずとも適用
eq(format('1989-12-23', 'GGN年M月D日>>元年漢数字'), '平成元年十二月二十三日');

// 全角
eq(format('2015-2-3 12:34:56', 'Y年M月D日H時I分S秒>>全角'), '２０１５年２月３日１２時３４分５６秒');
eq(format('1989-2-3 12:34:56', 'Y年M月D日H時I分S秒>>全角'), '１９８９年２月３日１２時３４分５６秒');
eq(format('1989-2-3 12:34:56', 'GGN年M月D日H時I分S秒>>全角元年'), '平成元年２月３日１２時３４分５６秒');


