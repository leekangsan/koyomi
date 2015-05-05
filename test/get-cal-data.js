/*jshint maxlen:200 */

// カレンダーデータの取得
var Koyomi = require(global.minify ? '../lib/minify' : '..');
var koyomi = new Koyomi();
var get = koyomi.getCalendarData.bind(koyomi);
var eq = require('assert').deepEqual;

eq(get('2015/1'), [
  { som: true , eom: false, year: 2015, month: 1 , day: 1 , week: 4, opened: false, holiday: '元日'    },
  { som: false, eom: false, year: 2015, month: 1 , day: 2 , week: 5, opened: false, holiday: '休業中'  },
  { som: false, eom: false, year: 2015, month: 1 , day: 3 , week: 6, opened: false, holiday: '休業中'  },
  { som: false, eom: false, year: 2015, month: 1 , day: 4 , week: 0, opened: false, holiday: ''        },
  { som: false, eom: false, year: 2015, month: 1 , day: 5 , week: 1, opened: true , holiday: ''        },
  { som: false, eom: false, year: 2015, month: 1 , day: 6 , week: 2, opened: true , holiday: ''        },
  { som: false, eom: false, year: 2015, month: 1 , day: 7 , week: 3, opened: true , holiday: ''        },
  { som: false, eom: false, year: 2015, month: 1 , day: 8 , week: 4, opened: true , holiday: ''        },
  { som: false, eom: false, year: 2015, month: 1 , day: 9 , week: 5, opened: true , holiday: ''        },
  { som: false, eom: false, year: 2015, month: 1 , day: 10, week: 6, opened: false, holiday: ''        },
  { som: false, eom: false, year: 2015, month: 1 , day: 11, week: 0, opened: false, holiday: ''        },
  { som: false, eom: false, year: 2015, month: 1 , day: 12, week: 1, opened: false, holiday: '成人の日'},
  { som: false, eom: false, year: 2015, month: 1 , day: 13, week: 2, opened: true , holiday: ''        },
  { som: false, eom: false, year: 2015, month: 1 , day: 14, week: 3, opened: true , holiday: ''        },
  { som: false, eom: false, year: 2015, month: 1 , day: 15, week: 4, opened: true , holiday: ''        },
  { som: false, eom: false, year: 2015, month: 1 , day: 16, week: 5, opened: true , holiday: ''        },
  { som: false, eom: false, year: 2015, month: 1 , day: 17, week: 6, opened: false, holiday: ''        },
  { som: false, eom: false, year: 2015, month: 1 , day: 18, week: 0, opened: false, holiday: ''        },
  { som: false, eom: false, year: 2015, month: 1 , day: 19, week: 1, opened: true , holiday: ''        },
  { som: false, eom: false, year: 2015, month: 1 , day: 20, week: 2, opened: true , holiday: ''        },
  { som: false, eom: false, year: 2015, month: 1 , day: 21, week: 3, opened: true , holiday: ''        },
  { som: false, eom: false, year: 2015, month: 1 , day: 22, week: 4, opened: true , holiday: ''        },
  { som: false, eom: false, year: 2015, month: 1 , day: 23, week: 5, opened: true , holiday: ''        },
  { som: false, eom: false, year: 2015, month: 1 , day: 24, week: 6, opened: false, holiday: ''        },
  { som: false, eom: false, year: 2015, month: 1 , day: 25, week: 0, opened: false, holiday: ''        },
  { som: false, eom: false, year: 2015, month: 1 , day: 26, week: 1, opened: true , holiday: ''        },
  { som: false, eom: false, year: 2015, month: 1 , day: 27, week: 2, opened: true , holiday: ''        },
  { som: false, eom: false, year: 2015, month: 1 , day: 28, week: 3, opened: true , holiday: ''        },
  { som: false, eom: false, year: 2015, month: 1 , day: 29, week: 4, opened: true , holiday: ''        },
  { som: false, eom: false, year: 2015, month: 1 , day: 30, week: 5, opened: true , holiday: ''        },
  { som: false, eom: true , year: 2015, month: 1 , day: 31, week: 6, opened: false, holiday: ''        },
]);

eq(get('2015/1', 'sun'), [
  { som: true , eom: false, sow: true , eow: false, ghost: true , block: '2015/01', year: 2014, month: 12, day: 28, week: 0, opened: false, holiday: ''        , weekNumber: 1},
  { som: false, eom: false, sow: false, eow: false, ghost: true , block: '2015/01', year: 2014, month: 12, day: 29, week: 1, opened: false, holiday: '休業中'  , weekNumber: 1},
  { som: false, eom: false, sow: false, eow: false, ghost: true , block: '2015/01', year: 2014, month: 12, day: 30, week: 2, opened: false, holiday: '休業中'  , weekNumber: 1},
  { som: false, eom: false, sow: false, eow: false, ghost: true , block: '2015/01', year: 2014, month: 12, day: 31, week: 3, opened: false, holiday: '休業中'  , weekNumber: 1},
  { som: false, eom: false, sow: false, eow: false, ghost: false, block: '2015/01', year: 2015, month: 1 , day: 1 , week: 4, opened: false, holiday: '元日'    , weekNumber: 1},
  { som: false, eom: false, sow: false, eow: false, ghost: false, block: '2015/01', year: 2015, month: 1 , day: 2 , week: 5, opened: false, holiday: '休業中'  , weekNumber: 1},
  { som: false, eom: false, sow: false, eow: true , ghost: false, block: '2015/01', year: 2015, month: 1 , day: 3 , week: 6, opened: false, holiday: '休業中'  , weekNumber: 1},
  { som: false, eom: false, sow: true , eow: false, ghost: false, block: '2015/01', year: 2015, month: 1 , day: 4 , week: 0, opened: false, holiday: ''        , weekNumber: 2},
  { som: false, eom: false, sow: false, eow: false, ghost: false, block: '2015/01', year: 2015, month: 1 , day: 5 , week: 1, opened: true , holiday: ''        , weekNumber: 2},
  { som: false, eom: false, sow: false, eow: false, ghost: false, block: '2015/01', year: 2015, month: 1 , day: 6 , week: 2, opened: true , holiday: ''        , weekNumber: 2},
  { som: false, eom: false, sow: false, eow: false, ghost: false, block: '2015/01', year: 2015, month: 1 , day: 7 , week: 3, opened: true , holiday: ''        , weekNumber: 2},
  { som: false, eom: false, sow: false, eow: false, ghost: false, block: '2015/01', year: 2015, month: 1 , day: 8 , week: 4, opened: true , holiday: ''        , weekNumber: 2},
  { som: false, eom: false, sow: false, eow: false, ghost: false, block: '2015/01', year: 2015, month: 1 , day: 9 , week: 5, opened: true , holiday: ''        , weekNumber: 2},
  { som: false, eom: false, sow: false, eow: true , ghost: false, block: '2015/01', year: 2015, month: 1 , day: 10, week: 6, opened: false, holiday: ''        , weekNumber: 2},
  { som: false, eom: false, sow: true , eow: false, ghost: false, block: '2015/01', year: 2015, month: 1 , day: 11, week: 0, opened: false, holiday: ''        , weekNumber: 3},
  { som: false, eom: false, sow: false, eow: false, ghost: false, block: '2015/01', year: 2015, month: 1 , day: 12, week: 1, opened: false, holiday: '成人の日', weekNumber: 3},
  { som: false, eom: false, sow: false, eow: false, ghost: false, block: '2015/01', year: 2015, month: 1 , day: 13, week: 2, opened: true , holiday: ''        , weekNumber: 3},
  { som: false, eom: false, sow: false, eow: false, ghost: false, block: '2015/01', year: 2015, month: 1 , day: 14, week: 3, opened: true , holiday: ''        , weekNumber: 3},
  { som: false, eom: false, sow: false, eow: false, ghost: false, block: '2015/01', year: 2015, month: 1 , day: 15, week: 4, opened: true , holiday: ''        , weekNumber: 3},
  { som: false, eom: false, sow: false, eow: false, ghost: false, block: '2015/01', year: 2015, month: 1 , day: 16, week: 5, opened: true , holiday: ''        , weekNumber: 3},
  { som: false, eom: false, sow: false, eow: true , ghost: false, block: '2015/01', year: 2015, month: 1 , day: 17, week: 6, opened: false, holiday: ''        , weekNumber: 3},
  { som: false, eom: false, sow: true , eow: false, ghost: false, block: '2015/01', year: 2015, month: 1 , day: 18, week: 0, opened: false, holiday: ''        , weekNumber: 4},
  { som: false, eom: false, sow: false, eow: false, ghost: false, block: '2015/01', year: 2015, month: 1 , day: 19, week: 1, opened: true , holiday: ''        , weekNumber: 4},
  { som: false, eom: false, sow: false, eow: false, ghost: false, block: '2015/01', year: 2015, month: 1 , day: 20, week: 2, opened: true , holiday: ''        , weekNumber: 4},
  { som: false, eom: false, sow: false, eow: false, ghost: false, block: '2015/01', year: 2015, month: 1 , day: 21, week: 3, opened: true , holiday: ''        , weekNumber: 4},
  { som: false, eom: false, sow: false, eow: false, ghost: false, block: '2015/01', year: 2015, month: 1 , day: 22, week: 4, opened: true , holiday: ''        , weekNumber: 4},
  { som: false, eom: false, sow: false, eow: false, ghost: false, block: '2015/01', year: 2015, month: 1 , day: 23, week: 5, opened: true , holiday: ''        , weekNumber: 4},
  { som: false, eom: false, sow: false, eow: true , ghost: false, block: '2015/01', year: 2015, month: 1 , day: 24, week: 6, opened: false, holiday: ''        , weekNumber: 4},
  { som: false, eom: false, sow: true , eow: false, ghost: false, block: '2015/01', year: 2015, month: 1 , day: 25, week: 0, opened: false, holiday: ''        , weekNumber: 5},
  { som: false, eom: false, sow: false, eow: false, ghost: false, block: '2015/01', year: 2015, month: 1 , day: 26, week: 1, opened: true , holiday: ''        , weekNumber: 5},
  { som: false, eom: false, sow: false, eow: false, ghost: false, block: '2015/01', year: 2015, month: 1 , day: 27, week: 2, opened: true , holiday: ''        , weekNumber: 5},
  { som: false, eom: false, sow: false, eow: false, ghost: false, block: '2015/01', year: 2015, month: 1 , day: 28, week: 3, opened: true , holiday: ''        , weekNumber: 5},
  { som: false, eom: false, sow: false, eow: false, ghost: false, block: '2015/01', year: 2015, month: 1 , day: 29, week: 4, opened: true , holiday: ''        , weekNumber: 5},
  { som: false, eom: false, sow: false, eow: false, ghost: false, block: '2015/01', year: 2015, month: 1 , day: 30, week: 5, opened: true , holiday: ''        , weekNumber: 5},
  { som: false, eom: true , sow: false, eow: true , ghost: false, block: '2015/01', year: 2015, month: 1 , day: 31, week: 6, opened: false, holiday: ''        , weekNumber: 5},
]);


eq(get('2015/1', 'sun', true), [
  { som: true , eom: false, sow: true , eow: false, ghost: true , block: '2015/01', year: 2014, month: 12, day: 28, week: 0, opened: false, holiday: ''        , weekNumber: 1},
  { som: false, eom: false, sow: false, eow: false, ghost: true , block: '2015/01', year: 2014, month: 12, day: 29, week: 1, opened: false, holiday: '休業中'  , weekNumber: 1},
  { som: false, eom: false, sow: false, eow: false, ghost: true , block: '2015/01', year: 2014, month: 12, day: 30, week: 2, opened: false, holiday: '休業中'  , weekNumber: 1},
  { som: false, eom: false, sow: false, eow: false, ghost: true , block: '2015/01', year: 2014, month: 12, day: 31, week: 3, opened: false, holiday: '休業中'  , weekNumber: 1},
  { som: false, eom: false, sow: false, eow: false, ghost: false, block: '2015/01', year: 2015, month: 1 , day: 1 , week: 4, opened: false, holiday: '元日'    , weekNumber: 1},
  { som: false, eom: false, sow: false, eow: false, ghost: false, block: '2015/01', year: 2015, month: 1 , day: 2 , week: 5, opened: false, holiday: '休業中'  , weekNumber: 1},
  { som: false, eom: false, sow: false, eow: true , ghost: false, block: '2015/01', year: 2015, month: 1 , day: 3 , week: 6, opened: false, holiday: '休業中'  , weekNumber: 1},
  { som: false, eom: false, sow: true , eow: false, ghost: false, block: '2015/01', year: 2015, month: 1 , day: 4 , week: 0, opened: false, holiday: ''        , weekNumber: 2},
  { som: false, eom: false, sow: false, eow: false, ghost: false, block: '2015/01', year: 2015, month: 1 , day: 5 , week: 1, opened: true , holiday: ''        , weekNumber: 2},
  { som: false, eom: false, sow: false, eow: false, ghost: false, block: '2015/01', year: 2015, month: 1 , day: 6 , week: 2, opened: true , holiday: ''        , weekNumber: 2},
  { som: false, eom: false, sow: false, eow: false, ghost: false, block: '2015/01', year: 2015, month: 1 , day: 7 , week: 3, opened: true , holiday: ''        , weekNumber: 2},
  { som: false, eom: false, sow: false, eow: false, ghost: false, block: '2015/01', year: 2015, month: 1 , day: 8 , week: 4, opened: true , holiday: ''        , weekNumber: 2},
  { som: false, eom: false, sow: false, eow: false, ghost: false, block: '2015/01', year: 2015, month: 1 , day: 9 , week: 5, opened: true , holiday: ''        , weekNumber: 2},
  { som: false, eom: false, sow: false, eow: true , ghost: false, block: '2015/01', year: 2015, month: 1 , day: 10, week: 6, opened: false, holiday: ''        , weekNumber: 2},
  { som: false, eom: false, sow: true , eow: false, ghost: false, block: '2015/01', year: 2015, month: 1 , day: 11, week: 0, opened: false, holiday: ''        , weekNumber: 3},
  { som: false, eom: false, sow: false, eow: false, ghost: false, block: '2015/01', year: 2015, month: 1 , day: 12, week: 1, opened: false, holiday: '成人の日', weekNumber: 3},
  { som: false, eom: false, sow: false, eow: false, ghost: false, block: '2015/01', year: 2015, month: 1 , day: 13, week: 2, opened: true , holiday: ''        , weekNumber: 3},
  { som: false, eom: false, sow: false, eow: false, ghost: false, block: '2015/01', year: 2015, month: 1 , day: 14, week: 3, opened: true , holiday: ''        , weekNumber: 3},
  { som: false, eom: false, sow: false, eow: false, ghost: false, block: '2015/01', year: 2015, month: 1 , day: 15, week: 4, opened: true , holiday: ''        , weekNumber: 3},
  { som: false, eom: false, sow: false, eow: false, ghost: false, block: '2015/01', year: 2015, month: 1 , day: 16, week: 5, opened: true , holiday: ''        , weekNumber: 3},
  { som: false, eom: false, sow: false, eow: true , ghost: false, block: '2015/01', year: 2015, month: 1 , day: 17, week: 6, opened: false, holiday: ''        , weekNumber: 3},
  { som: false, eom: false, sow: true , eow: false, ghost: false, block: '2015/01', year: 2015, month: 1 , day: 18, week: 0, opened: false, holiday: ''        , weekNumber: 4},
  { som: false, eom: false, sow: false, eow: false, ghost: false, block: '2015/01', year: 2015, month: 1 , day: 19, week: 1, opened: true , holiday: ''        , weekNumber: 4},
  { som: false, eom: false, sow: false, eow: false, ghost: false, block: '2015/01', year: 2015, month: 1 , day: 20, week: 2, opened: true , holiday: ''        , weekNumber: 4},
  { som: false, eom: false, sow: false, eow: false, ghost: false, block: '2015/01', year: 2015, month: 1 , day: 21, week: 3, opened: true , holiday: ''        , weekNumber: 4},
  { som: false, eom: false, sow: false, eow: false, ghost: false, block: '2015/01', year: 2015, month: 1 , day: 22, week: 4, opened: true , holiday: ''        , weekNumber: 4},
  { som: false, eom: false, sow: false, eow: false, ghost: false, block: '2015/01', year: 2015, month: 1 , day: 23, week: 5, opened: true , holiday: ''        , weekNumber: 4},
  { som: false, eom: false, sow: false, eow: true , ghost: false, block: '2015/01', year: 2015, month: 1 , day: 24, week: 6, opened: false, holiday: ''        , weekNumber: 4},
  { som: false, eom: false, sow: true , eow: false, ghost: false, block: '2015/01', year: 2015, month: 1 , day: 25, week: 0, opened: false, holiday: ''        , weekNumber: 5},
  { som: false, eom: false, sow: false, eow: false, ghost: false, block: '2015/01', year: 2015, month: 1 , day: 26, week: 1, opened: true , holiday: ''        , weekNumber: 5},
  { som: false, eom: false, sow: false, eow: false, ghost: false, block: '2015/01', year: 2015, month: 1 , day: 27, week: 2, opened: true , holiday: ''        , weekNumber: 5},
  { som: false, eom: false, sow: false, eow: false, ghost: false, block: '2015/01', year: 2015, month: 1 , day: 28, week: 3, opened: true , holiday: ''        , weekNumber: 5},
  { som: false, eom: false, sow: false, eow: false, ghost: false, block: '2015/01', year: 2015, month: 1 , day: 29, week: 4, opened: true , holiday: ''        , weekNumber: 5},
  { som: false, eom: false, sow: false, eow: false, ghost: false, block: '2015/01', year: 2015, month: 1 , day: 30, week: 5, opened: true , holiday: ''        , weekNumber: 5},
  { som: false, eom: false, sow: false, eow: true , ghost: false, block: '2015/01', year: 2015, month: 1 , day: 31, week: 6, opened: false, holiday: ''        , weekNumber: 5},
  { som: false, eom: false, sow: true , eow: false, ghost: true , block: '2015/01', year: 2015, month: 2 , day: 1 , week: 0, opened: false, holiday: ''        , weekNumber: 6},
  { som: false, eom: false, sow: false, eow: false, ghost: true , block: '2015/01', year: 2015, month: 2 , day: 2 , week: 1, opened: true , holiday: ''        , weekNumber: 6},
  { som: false, eom: false, sow: false, eow: false, ghost: true , block: '2015/01', year: 2015, month: 2 , day: 3 , week: 2, opened: true , holiday: ''        , weekNumber: 6},
  { som: false, eom: false, sow: false, eow: false, ghost: true , block: '2015/01', year: 2015, month: 2 , day: 4 , week: 3, opened: true , holiday: ''        , weekNumber: 6},
  { som: false, eom: false, sow: false, eow: false, ghost: true , block: '2015/01', year: 2015, month: 2 , day: 5 , week: 4, opened: true , holiday: ''        , weekNumber: 6},
  { som: false, eom: false, sow: false, eow: false, ghost: true , block: '2015/01', year: 2015, month: 2 , day: 6 , week: 5, opened: true , holiday: ''        , weekNumber: 6},
  { som: false, eom: true , sow: false, eow: true , ghost: true , block: '2015/01', year: 2015, month: 2 , day: 7 , week: 6, opened: false, holiday: ''        , weekNumber: 6},
]);
