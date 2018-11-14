var box = new TimelineMax();
    box
    .to('.b',0, {backgroundColor: "red", width:100})
    .to('.b',6, {x: 100, backgroundColor: "yellow", width:150})
    .to('.b',6, {x: 200, backgroundColor: "green", width:200})
    .to('.b',0, {x: 0, backgroundColor: "blue", width:100});
