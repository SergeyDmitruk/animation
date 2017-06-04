'use strict';

var tl = new TimelineMax({
    repeat: -1
});

tl
    .from($('.word__b'), 3 , {
        x: '-100%'
    },"-=3")
    .from($('.word__a'), 3 , {
        x: '100px'
    }, '-=4')
    .from($('.word__o'), 2 , {
        rotation: 18,
        transformOrigin: '100% 50%'
    }, '-=1.5')
    .from($('.word__r'), 1 , {
        x: '100%',
        y: '-80px'
    }, '-=1.5')
    .from($('.word__o-second'), 2 , {
        rotation: 18,
        transformOrigin: '-100% -50%'
    }, '-=2.5')
    .from($('.word__d'), 1 , {
        x: '-100%',
        y: '80px'
    }, '-=1.5');