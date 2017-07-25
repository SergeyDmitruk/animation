'use strict';

var tl = new TimelineMax({
    repeat: -1
});

tl
    .from($('#firstCircle'), 2 , {
        rotation: '+=360',
        transformOrigin: "center 50%"
    })
    .to($('#secondCircle'), 2, {
        rotation: 360,
        transformOrigin: "center 50px"
    }, "-=2")
    .from($('#thirdCircle'), 2, {
        rotation: 360,
        transformOrigin: "center -50px"
    }, "-=2")
    .to($('#coreCircle'), 3,{
        scale: 100,
        transformOrigin: "50% 50%"
    });