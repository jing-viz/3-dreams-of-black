
var VideoShots = {

    introLayers: [
	{
        path: "files/videos/intro.webm",
        shaderId: VIDEO_OPAQUE,
        z: -1000,
		fps: 48,
		duration: 22000
    }
	],
	// CITY - FEATHER
	s01_01: [
	{
        path: "files/videos/city/s01_layer03.webm",
        shaderId: VIDEO_OPAQUE,
        z: -1000,
		duration: 3120
	},{
        path: "files/videos/city/s01_layer02.webm",
        shaderId: VIDEO_SMARTALPHA_DISTORT,
        z: -900
	},{
        path: "files/videos/city/s01_layer01.webm",
        shaderId: VIDEO_SMARTALPHA,
        z: -800,
		fps: 18
	}
	],
	// CITY - ROOM
	s01_03: [
	{
        path: "files/videos/city/s03_layer03.webm",
        shaderId: VIDEO_OPAQUE,
        z: -1200,
		width: 1.56, height: 1.59,
		paralax: true,
		duration: 8120,
		paralaxHorizontal: 600,
		paralaxVertical: 200
	},{
        path: "files/videos/city/s03_layer02.webm",
        shaderId: VIDEO_SMARTALPHA_DISTORT,
        z: -1100,
		width: 1.30, height: 1.16,
		paralax: true
	},{
        path: "files/videos/city/s03_layer01.webm",
        shaderId: VIDEO_SMARTALPHA,
        z: -100,
		locked: true,
		removeAt: 0.3,
		fps: 18
	}
	],
	// CITY - PARROT
	s01_06: [{
        path: "files/videos/city/s06_layer02.webm",
        shaderId: VIDEO_OPAQUE,
        z: -1000,
		duration: 2030	
	},{
        path: "files/videos/city/s06_layer01.webm",
        shaderId: VIDEO_SMARTALPHA_DISTORT,
        z: -900
	}],
	// CITY - CAR
	s01_09: [{       
	    path: "files/videos/city/s09_layer04.webm",
        shaderId: VIDEO_KEYED,
        z: -1000,
		colorScale: .99,
        threshold: .45,
        alphaFadeout: .35,
		paralax: true,
		width: 1.5625, height: 1.1627,
		duration: 8230,
		paralaxHorizontal: 600,
		paralaxVertical: 100
	},{       
	    path: "files/videos/city/s09_layer02.webm",
        shaderId: VIDEO_SMARTALPHA_DISTORT,
        z: -800,
		paralax: true,
		removeAt: 0.8,
		width: 1.5625, height: 1.1627
	},{       
	    path: "files/videos/city/s09_layer01.webm",
        shaderId: VIDEO_SMARTALPHA,
        z: -500,
		locked: true,
        removeAt : 0.3
	}],	
	// PRAIRIE - BOXCAR
    s02_01: [{
        path: "files/videos/prairie/s01_layer04.webm",
        shaderId: VIDEO_OPAQUE,
        z: -1400,
		width: 1, height: 1.83,
		paralax: true,
		duration: 9230,
		paralaxHorizontal: 600,
		paralaxVertical: 100
    },{
        path: "files/videos/prairie/s01_layer03.webm",
        shaderId: VIDEO_SMARTALPHA_DISTORT,
        z: -1100,
		width: 1.56, height: 1.22,
		paralax: true
    },{
        path: "files/videos/prairie/s01_layer02.webm",
        shaderId: VIDEO_SMARTALPHA,
        z: -700,
		paralax: true,
		width: 1.56, height: 1.83
    },{
        path: "files/videos/prairie/s01_layer01.webm",
        shaderId: VIDEO_SMARTALPHA,
        z: -30,
        locked: true
    }],
    // PRAIRIE - TRAIN LADDER
    s02_02: [{
        path: "files/videos/prairie/s02_layer03.jpg",
        shaderId: VIDEO_OPAQUE,
        z: -1010,
		duration: 2020
    },{
        path: "files/videos/prairie/s02_layer02.webm",
        shaderId: VIDEO_SMARTALPHA_DISTORT,
        z: -1000
    },{
        path: "files/videos/prairie/s02_layer01.webm",
        shaderId: VIDEO_SMARTALPHA,
        z: -990	
    }],
    // PRAIRIE - BUFFALOS
    s02_03: [{
        path: "files/videos/prairie/s03_layer03.webm",
        shaderId: VIDEO_OPAQUE,
        z: -1500,
		duration: 2030
    },{
        path: "files/videos/prairie/s03_layer01.webm",
        shaderId: VIDEO_SMARTALPHA_DISTORT,
        z: -1000
    }],
	// PRAIRIE - OVERHEAD
    s02_04: [{
        path: "files/videos/prairie/s04_layer02.webm",
        shaderId: VIDEO_OPAQUE,
        z: -1010,
		duration: 5000
    }, {
        path: "files/videos/prairie/s04_layer01.webm",
        shaderId: VIDEO_SMARTALPHA_DISTORT,
        z: -1000
    }],
	
    // PRAIRIE - TRANSITION
    s02_06: [{
        path: "files/videos/prairie/s06_layer02.webm",
        shaderId: VIDEO_SMARTALPHA,
		colorScale: 1.0,
        threshold: 2.4,
        alphaFadeout: 1,
        z: -1010,
		duration: 6060
    },{
        path: "files/videos/prairie/s06_layer01.webm",
        shaderId: VIDEO_SMARTALPHA_DISTORT,
		removeAt: 0.6,
        z: -1000
    }
	],
	// DUNES - TRAIN
	s03_01: [{
        path: "files/videos/dunes/s01_layer03.webm",
        shaderId: VIDEO_OPAQUE,
        z: -1000,
		width: 1.56, height: 1.22,
		paralax: true,
		duration: 8000,
		paralaxHorizontal: 600,
		paralaxVertical: 100
    },{
        path: "files/videos/dunes/s01_layer02.webm",
        shaderId: VIDEO_SMARTALPHA_DISTORT,
        z: -800,
		width: 1.56, height: 1.22,
		paralax: true
    },{
        path: "files/videos/dunes/s01_layer01.webm",
        shaderId: VIDEO_SMARTALPHA,
        z: -100,
		locked: true
    }],	
	// DUNES - BED
	s03_02: [{
        path: "files/videos/dunes/s02_layer02.webm",
        shaderId: VIDEO_OPAQUE,
        z: -1010,
		duration: 3500
    },{
        path: "files/videos/dunes/s02_layer01.webm",
        shaderId: VIDEO_SMARTALPHA_DISTORT,
        z: -1000
    }],
	// DUNES - TRANSITION
	s03_03: [{
        path: "files/videos/dunes/s03_layer02.webm",
        shaderId: VIDEO_SMARTALPHA,
        z: -400,
		paralax: true,
		width: 1.526, height: 1.11,
		duration: 11000,
		paralaxHorizontal: 600,
		paralaxVertical: 100
    },{
        path: "files/videos/dunes/s03_layer01.webm",
        shaderId: VIDEO_SMARTALPHA,
        z: -100,
		locked: true
    }]
};













