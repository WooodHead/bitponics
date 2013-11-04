var bpn = {
    "pages": {},
    "pageData": {},
    "user": {
        "_id": "506de30a8eebf7524342cb6c",
        "name": {
            "last": "Kumar",
            "first": "Amit"
        },
        "email": "amit@bitponics.com",
        "phone": "undefined",
        "locale": {
            "lang": "en",
            "territory": "US"
        },
        "timezone": "America/New_York",
        "active": true,
        "notificationPreferences": {
            "email": true,
            "sms": false
        },
        "deviceKeys": [{
            "public": "dedf72f732cd6f66"
        }, {
            "public": "fda45f654171c9a5"
        }],
        "apiKey": {
            "public": "8f67dbb482f720a2"
        }
    },
    "growPlans": [{
        "createdAt": "2013-06-01T13:24:48.087Z",
        "updatedAt": "2013-06-01T13:24:48.087Z",
        "_id": "506de2ff8eebf7524342cb3b",
        "createdBy": "506de3098eebf7524342cb66",
        "name": "Mixed Greens",
        "description": "A grow plan suited for growing any variety of herbs and leafy greens you want. Basil, cilantro, lettuce, swiss chard, throw it all in!",
        "__v": 0,
        "visibility": "public",
        "phases": [{
            "_id": "506de30e8eebf7524342cb79",
            "name": "Seedling",
            "description": "Seedling phase, from planting seeds until first true leaves appear. The Bitponics device isn't necessary for this phase since seedlings do fine with just plain tap water, and most seed-starting systems are too small for the water sensors anyway.",
            "expectedNumberOfDays": 10,
            "light": "515a540205e45bc5a590301b",
            "growSystem": {
                "createdAt": "2013-06-01T13:24:47.951Z",
                "updatedAt": "2013-06-01T13:24:47.951Z",
                "_id": "506de3008eebf7524342cb40",
                "name": "Egg-carton seed starter",
                "description": "Seed-starting system made with a plastic egg carton. For full directions on how to make one, go here: http://bitponics.com/guides/water-culture-system. And this system doesn't have room for pH and EC sensors, but you won't need them anyway since in the seed-starting phase you just use plain tap water. So just put the caps on those sensors, unplug them and store them aside until you get to the next phase.",
                "type": "deep water culture (DWC)",
                "reservoirSize": 0.1,
                "plantCapacity": 12,
                "__v": 0,
                "visibility": "public"
            },
            "growMedium": "rockwool",
            "nutrients": [],
            "idealRanges": [{
                "_id": "506de3118eebf7524342cb83",
                "sCode": "lux",
                "actionBelowMin": "506de2fb8eebf7524342cb28",
                "actionAboveMax": "506de2fb8eebf7524342cb29",
                "applicableTimeSpan": {
                    "startTime": 21600000,
                    "endTime": 79200000
                },
                "valueRange": {
                    "min": 2000,
                    "max": 4000
                }
            }, {
                "_id": "506de3118eebf7524342cb84",
                "sCode": "air",
                "actionBelowMin": "506de2fc8eebf7524342cb2b",
                "actionAboveMax": "506de2fb8eebf7524342cb2a",
                "valueRange": {
                    "min": 30,
                    "max": 60
                }
            }],
            "phaseEndActions": [{
                "createdAt": "2013-06-01T13:24:48.013Z",
                "updatedAt": "2013-06-01T13:24:48.013Z",
                "_id": "506de2ec8eebf7524342cb24",
                "description": "Transplant seedlings into the grow bed",
                "__v": 0,
                "cycle": {
                    "offset": {
                        "duration": 0
                    },
                    "states": []
                }
            }],
            "actions": [{
                "createdAt": "2013-06-01T13:24:48.040Z",
                "updatedAt": "2013-06-01T13:24:48.040Z",
                "_id": "506de2ef8eebf7524342cb25",
                "description": "Reservior refill cycle",
                "__v": 0,
                "cycle": {
                    "repeat": true,
                    "offset": {
                        "duration": 0
                    },
                    "states": [{
                        "message": "Flush and refill reservoir. Discard any solution in the reservoir, rinse the entire system with water. Then refill the reservoir to capacity with water. Mix in ¼ cup Grow nutrient, then ¼ cup Bloom nutrient, then ¼ cup Micro nutrient."
                    }, {
                        "durationType": "weeks",
                        "duration": 3
                    }]
                }
            }, {
                "createdAt": "2013-06-01T13:24:48.037Z",
                "updatedAt": "2013-06-01T13:24:48.037Z",
                "_id": "506de2f08eebf7524342cb26",
                "description": "Water pump cycle",
                "control": "506de2fc8eebf7524342cb2d",
                "__v": 0,
                "cycle": {
                    "repeat": true,
                    "offset": {
                        "duration": 0
                    },
                    "states": [{
                        "controlValue": "1",
                        "durationType": "minutes",
                        "duration": 15
                    }, {
                        "controlValue": "0",
                        "durationType": "minutes",
                        "duration": 15
                    }]
                }
            }, {
                "createdAt": "2013-06-01T13:24:48.034Z",
                "updatedAt": "2013-06-01T13:24:48.034Z",
                "_id": "506de2f18eebf7524342cb27",
                "description": "Light cycle, with lights on between 6am and 10pm.",
                "control": "506de2fd8eebf7524342cb32",
                "__v": 0,
                "cycle": {
                    "repeat": true,
                    "offset": {
                        "durationType": "hours",
                        "duration": 6
                    },
                    "states": [{
                        "controlValue": "1",
                        "durationType": "hours",
                        "duration": 16
                    }, {
                        "controlValue": "0",
                        "durationType": "hours",
                        "duration": 8
                    }]
                }
            }]
        }, {
            "_id": "506de30e8eebf7524342cb7a",
            "name": "Vegetative",
            "description": "Vegetative phase. Bring in any existing plants or seedlings with their first pair of true leaves.",
            "expectedNumberOfDays": 28,
            "light": "515a540a05e45bc5a590301d",
            "growSystem": {
                "createdAt": "2013-06-01T13:24:47.950Z",
                "updatedAt": "2013-06-01T13:24:47.950Z",
                "_id": "506de2ff8eebf7524342cb3c",
                "name": "Drip",
                "description": "Drip system.",
                "type": "deep water culture (DWC)",
                "reservoirSize": 5,
                "plantCapacity": 6,
                "__v": 0,
                "visibility": "public"
            },
            "growMedium": "hydroton",
            "nutrients": [{
                "createdAt": "2013-06-01T13:24:47.822Z",
                "updatedAt": "2013-06-01T13:24:47.822Z",
                "_id": "506de3038eebf7524342cb4b",
                "name": "Grow",
                "brand": "Humbolt Nutrients",
                "__v": 0,
                "visibility": "public"
            }, {
                "createdAt": "2013-06-01T13:24:47.822Z",
                "updatedAt": "2013-06-01T13:24:47.822Z",
                "_id": "506de3038eebf7524342cb4c",
                "name": "Bloom",
                "brand": "Humbolt Nutrients",
                "__v": 0,
                "visibility": "public"
            }, {
                "createdAt": "2013-06-01T13:24:47.823Z",
                "updatedAt": "2013-06-01T13:24:47.823Z",
                "_id": "506de3038eebf7524342cb4d",
                "name": "Micro",
                "brand": "Humbolt Nutrients",
                "__v": 0,
                "visibility": "public"
            }],
            "idealRanges": [{
                "_id": "506de3118eebf7524342cb85",
                "sCode": "lux",
                "actionBelowMin": "506de2fb8eebf7524342cb28",
                "actionAboveMax": "506de2fb8eebf7524342cb29",
                "applicableTimeSpan": {
                    "startTime": 21600000,
                    "endTime": 79200000
                },
                "valueRange": {
                    "min": 15000,
                    "max": 27000
                }
            }, {
                "_id": "506de3118eebf7524342cb86",
                "sCode": "air",
                "actionBelowMin": "506de2fc8eebf7524342cb2b",
                "actionAboveMax": "506de2fb8eebf7524342cb2a",
                "valueRange": {
                    "min": 30,
                    "max": 60
                }
            }],
            "phaseEndActions": [],
            "actions": [{
                "createdAt": "2013-06-01T13:24:48.040Z",
                "updatedAt": "2013-06-01T13:24:48.040Z",
                "_id": "506de2ef8eebf7524342cb25",
                "description": "Reservior refill cycle",
                "__v": 0,
                "cycle": {
                    "repeat": true,
                    "offset": {
                        "duration": 0
                    },
                    "states": [{
                        "message": "Flush and refill reservoir. Discard any solution in the reservoir, rinse the entire system with water. Then refill the reservoir to capacity with water. Mix in ¼ cup Grow nutrient, then ¼ cup Bloom nutrient, then ¼ cup Micro nutrient."
                    }, {
                        "durationType": "weeks",
                        "duration": 3
                    }]
                }
            }, {
                "createdAt": "2013-06-01T13:24:48.037Z",
                "updatedAt": "2013-06-01T13:24:48.037Z",
                "_id": "506de2f08eebf7524342cb26",
                "description": "Water pump cycle",
                "control": "506de2fc8eebf7524342cb2d",
                "__v": 0,
                "cycle": {
                    "repeat": true,
                    "offset": {
                        "duration": 0
                    },
                    "states": [{
                        "controlValue": "1",
                        "durationType": "minutes",
                        "duration": 15
                    }, {
                        "controlValue": "0",
                        "durationType": "minutes",
                        "duration": 15
                    }]
                }
            }, {
                "createdAt": "2013-06-01T13:24:48.034Z",
                "updatedAt": "2013-06-01T13:24:48.034Z",
                "_id": "506de2f18eebf7524342cb27",
                "description": "Light cycle, with lights on between 6am and 10pm.",
                "control": "506de2fd8eebf7524342cb32",
                "__v": 0,
                "cycle": {
                    "repeat": true,
                    "offset": {
                        "durationType": "hours",
                        "duration": 6
                    },
                    "states": [{
                        "controlValue": "1",
                        "durationType": "hours",
                        "duration": 16
                    }, {
                        "controlValue": "0",
                        "durationType": "hours",
                        "duration": 8
                    }]
                }
            }]
        }],
        "plants": [{
            "createdAt": "2013-06-01T13:24:47.978Z",
            "updatedAt": "2013-06-01T13:24:47.978Z",
            "_id": "50749120fe420e210be58a69",
            "name": "Basil",
            "__v": 0,
            "visibility": "public"
        }, {
            "createdAt": "2013-06-01T13:24:47.991Z",
            "updatedAt": "2013-06-01T13:24:47.991Z",
            "_id": "50a016f8eb1164c6b88e3038",
            "name": "Swiss Chard",
            "__v": 0,
            "visibility": "public"
        }, {
            "createdAt": "2013-06-01T13:24:47.985Z",
            "updatedAt": "2013-06-01T13:24:47.985Z",
            "_id": "5074983aab364e2a9fffd4f1",
            "name": "Cilantro",
            "__v": 0,
            "visibility": "public"
        }, {
            "createdAt": "2013-06-01T13:24:47.983Z",
            "updatedAt": "2013-06-01T13:24:47.983Z",
            "_id": "5074912dfe420e210be58a82",
            "name": "Lettuce",
            "__v": 0,
            "visibility": "public"
        }]
    }, {
        "createdAt": "2013-06-01T13:24:48.089Z",
        "updatedAt": "2013-06-01T13:24:48.089Z",
        "_id": "506de2ff8eebf7524342cb3a",
        "createdBy": "506de3098eebf7524342cb66",
        "name": "Tomato",
        "description": "Growing indeterminate organic tomatoes (Redfield Beauty OG) for year round fruiting. Growing in a 3’x3’ grow bed filled with 4\" of hydroton.",
        "__v": 0,
        "visibility": "public",
        "phases": [{
            "_id": "506de3038eebf7524342cb4e",
            "name": "Seedling",
            "description": "Seedling phase, from planting seeds until first true leaves appear. The Bitponics device isn't necessary for this phase since seedlings do fine with just plain tap water, and most seed-starting systems are too small for the water sensors anyway.",
            "expectedNumberOfDays": 10,
            "light": "515a540205e45bc5a590301b",
            "growSystem": {
                "createdAt": "2013-06-01T13:24:47.951Z",
                "updatedAt": "2013-06-01T13:24:47.951Z",
                "_id": "506de3008eebf7524342cb40",
                "name": "Egg-carton seed starter",
                "description": "Seed-starting system made with a plastic egg carton. For full directions on how to make one, go here: http://bitponics.com/guides/water-culture-system. And this system doesn't have room for pH and EC sensors, but you won't need them anyway since in the seed-starting phase you just use plain tap water. So just put the caps on those sensors, unplug them and store them aside until you get to the next phase.",
                "type": "deep water culture (DWC)",
                "reservoirSize": 0.1,
                "plantCapacity": 12,
                "__v": 0,
                "visibility": "public"
            },
            "growMedium": "rockwool",
            "nutrients": [],
            "idealRanges": [{
                "_id": "506de30e8eebf7524342cb7b",
                "sCode": "lux",
                "actionBelowMin": "506de2fb8eebf7524342cb28",
                "actionAboveMax": "506de2fb8eebf7524342cb29",
                "applicableTimeSpan": {
                    "startTime": 21600000,
                    "endTime": 79200000
                },
                "valueRange": {
                    "min": 3000,
                    "max": 4000
                }
            }, {
                "_id": "506de30f8eebf7524342cb7c",
                "sCode": "air",
                "actionBelowMin": "506de2fc8eebf7524342cb2b",
                "actionAboveMax": "506de2fb8eebf7524342cb2a",
                "valueRange": {
                    "min": 10,
                    "opt": 29,
                    "max": 35
                }
            }],
            "phaseEndActions": [{
                "createdAt": "2013-06-01T13:24:48.013Z",
                "updatedAt": "2013-06-01T13:24:48.013Z",
                "_id": "506de2ec8eebf7524342cb24",
                "description": "Transplant seedlings into the grow bed",
                "__v": 0,
                "cycle": {
                    "offset": {
                        "duration": 0
                    },
                    "states": []
                }
            }],
            "actions": [{
                "createdAt": "2013-06-01T13:24:48.040Z",
                "updatedAt": "2013-06-01T13:24:48.040Z",
                "_id": "506de2ef8eebf7524342cb25",
                "description": "Reservior refill cycle",
                "__v": 0,
                "cycle": {
                    "repeat": true,
                    "offset": {
                        "duration": 0
                    },
                    "states": [{
                        "message": "Flush and refill reservoir. Discard any solution in the reservoir, rinse the entire system with water. Then refill the reservoir to capacity with water. Mix in ¼ cup Grow nutrient, then ¼ cup Bloom nutrient, then ¼ cup Micro nutrient."
                    }, {
                        "durationType": "weeks",
                        "duration": 3
                    }]
                }
            }, {
                "createdAt": "2013-06-01T13:24:48.037Z",
                "updatedAt": "2013-06-01T13:24:48.037Z",
                "_id": "506de2f08eebf7524342cb26",
                "description": "Water pump cycle",
                "control": "506de2fc8eebf7524342cb2d",
                "__v": 0,
                "cycle": {
                    "repeat": true,
                    "offset": {
                        "duration": 0
                    },
                    "states": [{
                        "controlValue": "1",
                        "durationType": "minutes",
                        "duration": 15
                    }, {
                        "controlValue": "0",
                        "durationType": "minutes",
                        "duration": 15
                    }]
                }
            }, {
                "createdAt": "2013-06-01T13:24:48.034Z",
                "updatedAt": "2013-06-01T13:24:48.034Z",
                "_id": "506de2f18eebf7524342cb27",
                "description": "Light cycle, with lights on between 6am and 10pm.",
                "control": "506de2fd8eebf7524342cb32",
                "__v": 0,
                "cycle": {
                    "repeat": true,
                    "offset": {
                        "durationType": "hours",
                        "duration": 6
                    },
                    "states": [{
                        "controlValue": "1",
                        "durationType": "hours",
                        "duration": 16
                    }, {
                        "controlValue": "0",
                        "durationType": "hours",
                        "duration": 8
                    }]
                }
            }]
        }, {
            "_id": "506de3048eebf7524342cb4f",
            "name": "Vegetative",
            "description": "Vegetative phase. Bring in any existing plants or seedlings with their first pair of true leaves.",
            "expectedNumberOfDays": 28,
            "light": "515a540a05e45bc5a590301d",
            "growSystem": {
                "createdAt": "2013-06-01T13:24:47.950Z",
                "updatedAt": "2013-06-01T13:24:47.950Z",
                "_id": "506de2ff8eebf7524342cb3c",
                "name": "Drip",
                "description": "Drip system.",
                "type": "deep water culture (DWC)",
                "reservoirSize": 5,
                "plantCapacity": 6,
                "__v": 0,
                "visibility": "public"
            },
            "growMedium": "hydroton",
            "nutrients": [{
                "createdAt": "2013-06-01T13:24:47.822Z",
                "updatedAt": "2013-06-01T13:24:47.822Z",
                "_id": "506de3038eebf7524342cb4b",
                "name": "Grow",
                "brand": "Humbolt Nutrients",
                "__v": 0,
                "visibility": "public"
            }, {
                "createdAt": "2013-06-01T13:24:47.822Z",
                "updatedAt": "2013-06-01T13:24:47.822Z",
                "_id": "506de3038eebf7524342cb4c",
                "name": "Bloom",
                "brand": "Humbolt Nutrients",
                "__v": 0,
                "visibility": "public"
            }, {
                "createdAt": "2013-06-01T13:24:47.823Z",
                "updatedAt": "2013-06-01T13:24:47.823Z",
                "_id": "506de3038eebf7524342cb4d",
                "name": "Micro",
                "brand": "Humbolt Nutrients",
                "__v": 0,
                "visibility": "public"
            }],
            "idealRanges": [{
                "_id": "506de30f8eebf7524342cb7d",
                "sCode": "lux",
                "actionBelowMin": "506de2fb8eebf7524342cb28",
                "actionAboveMax": "506de2fb8eebf7524342cb29",
                "applicableTimeSpan": {
                    "startTime": 21600000,
                    "endTime": 79200000
                },
                "valueRange": {
                    "min": 20000,
                    "max": 27000
                }
            }, {
                "_id": "506de30f8eebf7524342cb7e",
                "sCode": "air",
                "actionBelowMin": "506de2fc8eebf7524342cb2b",
                "actionAboveMax": "506de2fb8eebf7524342cb2a",
                "valueRange": {
                    "min": 30,
                    "max": 60
                }
            }, {
                "_id": "5168207365c3b2f030447ef3",
                "sCode": "ph",
                "actionBelowMin": "5168206665c3b2f030447ef2",
                "actionAboveMax": "51682d0665c3b2f030447ef5",
                "valueRange": {
                    "min": 6,
                    "max": 6.8
                }
            }],
            "phaseEndActions": [],
            "actions": [{
                "createdAt": "2013-06-01T13:24:48.040Z",
                "updatedAt": "2013-06-01T13:24:48.040Z",
                "_id": "506de2ef8eebf7524342cb25",
                "description": "Reservior refill cycle",
                "__v": 0,
                "cycle": {
                    "repeat": true,
                    "offset": {
                        "duration": 0
                    },
                    "states": [{
                        "message": "Flush and refill reservoir. Discard any solution in the reservoir, rinse the entire system with water. Then refill the reservoir to capacity with water. Mix in ¼ cup Grow nutrient, then ¼ cup Bloom nutrient, then ¼ cup Micro nutrient."
                    }, {
                        "durationType": "weeks",
                        "duration": 3
                    }]
                }
            }, {
                "createdAt": "2013-06-01T13:24:48.037Z",
                "updatedAt": "2013-06-01T13:24:48.037Z",
                "_id": "506de2f08eebf7524342cb26",
                "description": "Water pump cycle",
                "control": "506de2fc8eebf7524342cb2d",
                "__v": 0,
                "cycle": {
                    "repeat": true,
                    "offset": {
                        "duration": 0
                    },
                    "states": [{
                        "controlValue": "1",
                        "durationType": "minutes",
                        "duration": 15
                    }, {
                        "controlValue": "0",
                        "durationType": "minutes",
                        "duration": 15
                    }]
                }
            }, {
                "createdAt": "2013-06-01T13:24:48.034Z",
                "updatedAt": "2013-06-01T13:24:48.034Z",
                "_id": "506de2f18eebf7524342cb27",
                "description": "Light cycle, with lights on between 6am and 10pm.",
                "control": "506de2fd8eebf7524342cb32",
                "__v": 0,
                "cycle": {
                    "repeat": true,
                    "offset": {
                        "durationType": "hours",
                        "duration": 6
                    },
                    "states": [{
                        "controlValue": "1",
                        "durationType": "hours",
                        "duration": 16
                    }, {
                        "controlValue": "0",
                        "durationType": "hours",
                        "duration": 8
                    }]
                }
            }]
        }, {
            "_id": "506de3048eebf7524342cb50",
            "name": "Blooming",
            "description": "Open-ended blooming phase. After about 7 days, you should begin to see blossoms.",
            "expectedNumberOfDays": 7,
            "light": "515a540a05e45bc5a590301e",
            "growSystem": {
                "createdAt": "2013-06-01T13:24:47.950Z",
                "updatedAt": "2013-06-01T13:24:47.950Z",
                "_id": "506de2ff8eebf7524342cb3c",
                "name": "Drip",
                "description": "Drip system.",
                "type": "deep water culture (DWC)",
                "reservoirSize": 5,
                "plantCapacity": 6,
                "__v": 0,
                "visibility": "public"
            },
            "growMedium": "hydroton",
            "nutrients": [{
                "createdAt": "2013-06-01T13:24:47.822Z",
                "updatedAt": "2013-06-01T13:24:47.822Z",
                "_id": "506de3038eebf7524342cb4b",
                "name": "Grow",
                "brand": "Humbolt Nutrients",
                "__v": 0,
                "visibility": "public"
            }, {
                "createdAt": "2013-06-01T13:24:47.822Z",
                "updatedAt": "2013-06-01T13:24:47.822Z",
                "_id": "506de3038eebf7524342cb4c",
                "name": "Bloom",
                "brand": "Humbolt Nutrients",
                "__v": 0,
                "visibility": "public"
            }, {
                "createdAt": "2013-06-01T13:24:47.823Z",
                "updatedAt": "2013-06-01T13:24:47.823Z",
                "_id": "506de3038eebf7524342cb4d",
                "name": "Micro",
                "brand": "Humbolt Nutrients",
                "__v": 0,
                "visibility": "public"
            }],
            "idealRanges": [{
                "_id": "506de30f8eebf7524342cb7f",
                "sCode": "lux",
                "actionBelowMin": "506de2fb8eebf7524342cb28",
                "actionAboveMax": "506de2fb8eebf7524342cb29",
                "applicableTimeSpan": {
                    "startTime": 28800000,
                    "endTime": 72000000
                },
                "valueRange": {
                    "min": 50000,
                    "max": 107500
                }
            }, {
                "_id": "506de3108eebf7524342cb80",
                "sCode": "air",
                "actionBelowMin": "506de2fc8eebf7524342cb2b",
                "actionAboveMax": "506de2fb8eebf7524342cb2a",
                "valueRange": {
                    "min": 30,
                    "max": 60
                }
            }],
            "phaseEndActions": [],
            "actions": [{
                "createdAt": "2013-06-01T13:24:48.030Z",
                "updatedAt": "2013-06-01T13:24:48.030Z",
                "_id": "506de2fc8eebf7524342cb2c",
                "description": "Pollinate any new blossoms. Use a small paintbrush or cotton swab brush to distribute pollen between flowers.",
                "__v": 0,
                "cycle": {
                    "offset": {
                        "duration": 0
                    },
                    "states": []
                }
            }, {
                "createdAt": "2013-06-01T13:24:48.040Z",
                "updatedAt": "2013-06-01T13:24:48.040Z",
                "_id": "506de2ef8eebf7524342cb25",
                "description": "Reservior refill cycle",
                "__v": 0,
                "cycle": {
                    "repeat": true,
                    "offset": {
                        "duration": 0
                    },
                    "states": [{
                        "message": "Flush and refill reservoir. Discard any solution in the reservoir, rinse the entire system with water. Then refill the reservoir to capacity with water. Mix in ¼ cup Grow nutrient, then ¼ cup Bloom nutrient, then ¼ cup Micro nutrient."
                    }, {
                        "durationType": "weeks",
                        "duration": 3
                    }]
                }
            }, {
                "createdAt": "2013-06-01T13:24:48.037Z",
                "updatedAt": "2013-06-01T13:24:48.037Z",
                "_id": "506de2f08eebf7524342cb26",
                "description": "Water pump cycle",
                "control": "506de2fc8eebf7524342cb2d",
                "__v": 0,
                "cycle": {
                    "repeat": true,
                    "offset": {
                        "duration": 0
                    },
                    "states": [{
                        "controlValue": "1",
                        "durationType": "minutes",
                        "duration": 15
                    }, {
                        "controlValue": "0",
                        "durationType": "minutes",
                        "duration": 15
                    }]
                }
            }, {
                "createdAt": "2013-06-01T13:24:48.034Z",
                "updatedAt": "2013-06-01T13:24:48.034Z",
                "_id": "506de2f18eebf7524342cb27",
                "description": "Light cycle, with lights on between 6am and 10pm.",
                "control": "506de2fd8eebf7524342cb32",
                "__v": 0,
                "cycle": {
                    "repeat": true,
                    "offset": {
                        "durationType": "hours",
                        "duration": 6
                    },
                    "states": [{
                        "controlValue": "1",
                        "durationType": "hours",
                        "duration": 16
                    }, {
                        "controlValue": "0",
                        "durationType": "hours",
                        "duration": 8
                    }]
                }
            }]
        }, {
            "_id": "506de3048eebf7524342cb51",
            "name": "Fruiting",
            "description": "Fruiting phase. Continue to pollinate blossoms and harvest fruit when fully ripened (red).",
            "expectedNumberOfDays": 21,
            "light": "515a540a05e45bc5a590301e",
            "growSystem": {
                "createdAt": "2013-06-01T13:24:47.950Z",
                "updatedAt": "2013-06-01T13:24:47.950Z",
                "_id": "506de2ff8eebf7524342cb3c",
                "name": "Drip",
                "description": "Drip system.",
                "type": "deep water culture (DWC)",
                "reservoirSize": 5,
                "plantCapacity": 6,
                "__v": 0,
                "visibility": "public"
            },
            "growMedium": "hydroton",
            "nutrients": [{
                "createdAt": "2013-06-01T13:24:47.822Z",
                "updatedAt": "2013-06-01T13:24:47.822Z",
                "_id": "506de3038eebf7524342cb4b",
                "name": "Grow",
                "brand": "Humbolt Nutrients",
                "__v": 0,
                "visibility": "public"
            }, {
                "createdAt": "2013-06-01T13:24:47.822Z",
                "updatedAt": "2013-06-01T13:24:47.822Z",
                "_id": "506de3038eebf7524342cb4c",
                "name": "Bloom",
                "brand": "Humbolt Nutrients",
                "__v": 0,
                "visibility": "public"
            }, {
                "createdAt": "2013-06-01T13:24:47.823Z",
                "updatedAt": "2013-06-01T13:24:47.823Z",
                "_id": "506de3038eebf7524342cb4d",
                "name": "Micro",
                "brand": "Humbolt Nutrients",
                "__v": 0,
                "visibility": "public"
            }],
            "idealRanges": [{
                "_id": "506de3108eebf7524342cb81",
                "sCode": "lux",
                "actionBelowMin": "506de2fb8eebf7524342cb28",
                "actionAboveMax": "506de2fb8eebf7524342cb29",
                "applicableTimeSpan": {
                    "startTime": 28800000,
                    "endTime": 72000000
                },
                "valueRange": {
                    "min": 50000,
                    "max": 107500
                }
            }, {
                "_id": "506de3108eebf7524342cb82",
                "sCode": "air",
                "actionBelowMin": "506de2fc8eebf7524342cb2b",
                "actionAboveMax": "506de2fb8eebf7524342cb2a",
                "valueRange": {
                    "min": 30,
                    "max": 60
                }
            }],
            "phaseEndActions": [],
            "actions": [{
                "createdAt": "2013-06-01T13:24:48.040Z",
                "updatedAt": "2013-06-01T13:24:48.040Z",
                "_id": "506de2ef8eebf7524342cb25",
                "description": "Reservior refill cycle",
                "__v": 0,
                "cycle": {
                    "repeat": true,
                    "offset": {
                        "duration": 0
                    },
                    "states": [{
                        "message": "Flush and refill reservoir. Discard any solution in the reservoir, rinse the entire system with water. Then refill the reservoir to capacity with water. Mix in ¼ cup Grow nutrient, then ¼ cup Bloom nutrient, then ¼ cup Micro nutrient."
                    }, {
                        "durationType": "weeks",
                        "duration": 3
                    }]
                }
            }, {
                "createdAt": "2013-06-01T13:24:48.037Z",
                "updatedAt": "2013-06-01T13:24:48.037Z",
                "_id": "506de2f08eebf7524342cb26",
                "description": "Water pump cycle",
                "control": "506de2fc8eebf7524342cb2d",
                "__v": 0,
                "cycle": {
                    "repeat": true,
                    "offset": {
                        "duration": 0
                    },
                    "states": [{
                        "controlValue": "1",
                        "durationType": "minutes",
                        "duration": 15
                    }, {
                        "controlValue": "0",
                        "durationType": "minutes",
                        "duration": 15
                    }]
                }
            }, {
                "createdAt": "2013-06-01T13:24:48.034Z",
                "updatedAt": "2013-06-01T13:24:48.034Z",
                "_id": "506de2f18eebf7524342cb27",
                "description": "Light cycle, with lights on between 6am and 10pm.",
                "control": "506de2fd8eebf7524342cb32",
                "__v": 0,
                "cycle": {
                    "repeat": true,
                    "offset": {
                        "durationType": "hours",
                        "duration": 6
                    },
                    "states": [{
                        "controlValue": "1",
                        "durationType": "hours",
                        "duration": 16
                    }, {
                        "controlValue": "0",
                        "durationType": "hours",
                        "duration": 8
                    }]
                }
            }]
        }],
        "plants": [{
            "createdAt": "2013-06-01T13:24:47.982Z",
            "updatedAt": "2013-06-01T13:24:47.982Z",
            "_id": "50749126fe420e210be58a6d",
            "name": "Tomato",
            "__v": 0,
            "visibility": "public"
        }]
    }, {
        "createdAt": "2013-06-01T13:24:48.123Z",
        "updatedAt": "2013-06-01T13:24:48.123Z",
        "_id": "51a3885ea8162dbabd583f3b",
        "createdBy": "506de30a8eebf7524342cb6c",
        "name": "Peppers",
        "description": "A Grow plan suited for a variety of hot or sweet peppers",
        "__v": 0,
        "visibility": "public",
        "phases": [{
            "_id": "51a388f6a8162dbabd583f3d",
            "name": "Seedling",
            "description": "Seedling phase, from planting seeds until first true leaves appear. The Bitponics device isn't necessary for this phase since seedlings do fine with just plain tap water, and most seed-starting systems are too small for the water sensors anyway.",
            "expectedNumberOfDays": 17,
            "growSystem": null,
            "nutrients": [],
            "idealRanges": [{
                "_id": "51a38a11a8162dbabd583f3e",
                "sCode": "lux",
                "actionBelowMin": "506de2fb8eebf7524342cb28",
                "actionAboveMax": "506de2fb8eebf7524342cb29",
                "applicableTimeSpan": {
                    "startTime": 21600000,
                    "endTime": 79200000
                },
                "valueRange": {
                    "min": 2000,
                    "max": 4000
                }
            }, {
                "_id": "51a38b07a8162dbabd583f3f",
                "sCode": "air",
                "actionBelowMin": "50da53740a312499fae453ef",
                "actionAboveMax": "50da53730a312499fae453ee",
                "valueRange": {
                    "min": 16,
                    "max": 35,
                    "opt": 29
                }
            }],
            "phaseEndActions": [],
            "actions": [{
                "createdAt": "2013-06-01T13:24:48.034Z",
                "updatedAt": "2013-06-01T13:24:48.034Z",
                "_id": "506de2f18eebf7524342cb27",
                "description": "Light cycle, with lights on between 6am and 10pm.",
                "control": "506de2fd8eebf7524342cb32",
                "__v": 0,
                "cycle": {
                    "repeat": true,
                    "offset": {
                        "durationType": "hours",
                        "duration": 6
                    },
                    "states": [{
                        "controlValue": "1",
                        "durationType": "hours",
                        "duration": 16
                    }, {
                        "controlValue": "0",
                        "durationType": "hours",
                        "duration": 8
                    }]
                }
            }]
        }, {
            "_id": "50da53740a312499fae453ef",
            "name": "Vegetative",
            "description": "Vegetative phase. Bring in any existing plants or seedlings with their first pair of true leaves.",
            "expectedNumberOfDays": 56,
            "growSystem": null,
            "nutrients": [],
            "idealRanges": [{
                "_id": "51a3902aa8162dbabd583f41",
                "sCode": "lux",
                "actionBelowMin": "506de2fb8eebf7524342cb28",
                "actionAboveMax": "506de2fb8eebf7524342cb29",
                "valueRange": {
                    "min": 15000,
                    "max": 27000
                }
            }, {
                "_id": "51a3913ea8162dbabd583f42",
                "sCode": "air",
                "valueRange": {
                    "min": 10,
                    "max": 32
                }
            }, {
                "_id": "51a39145a8162dbabd583f43",
                "sCode": "ph",
                "valueRange": {
                    "min": 6,
                    "max": 6.8
                }
            }],
            "phaseEndActions": [],
            "actions": []
        }, {
            "_id": "51a3955fa8162dbabd583f44",
            "name": "Blooming/Fruiting",
            "description": "",
            "expectedNumberOfDays": 21,
            "growSystem": null,
            "nutrients": [],
            "idealRanges": [{
                "_id": "51a3956da8162dbabd583f45",
                "sCode": "lux",
                "actionBelowMin": "506de2fb8eebf7524342cb28",
                "actionAboveMax": "506de2fb8eebf7524342cb29",
                "applicableTimeSpan": {
                    "startTime": 28800000,
                    "endTime": 72000000
                },
                "valueRange": {
                    "min": 50000,
                    "max": 107500
                }
            }, {
                "_id": "51a39574a8162dbabd583f46",
                "sCode": "air",
                "applicableTimeSpan": {
                    "startTime": 28800000,
                    "endTime": 72000000
                },
                "valueRange": {
                    "min": 10,
                    "opt": 27,
                    "max": 32
                }
            }, {
                "_id": "51a3957ba8162dbabd583f47",
                "sCode": "air",
                "applicableTimeSpan": {
                    "startTime": 72000000,
                    "endTime": 28800000
                },
                "valueRange": {
                    "min": 10,
                    "opt": 21,
                    "max": 32
                }
            }],
            "phaseEndActions": [],
            "actions": []
        }],
        "plants": [{
            "createdAt": "2013-06-01T13:24:47.985Z",
            "updatedAt": "2013-06-01T13:24:47.985Z",
            "_id": "51a388c7a8162dbabd583f3c",
            "name": "Pepper",
            "__v": 0,
            "visibility": "public"
        }]
    }, {
        "createdAt": "2013-06-01T13:24:48.123Z",
        "updatedAt": "2013-08-26T03:41:52.744Z",
        "_id": "521ace8051c2a9a1f300000c",
        "createdBy": "506de30a8eebf7524342cb6c",
        "name": "Peppers",
        "description": "A Grow plan suited for a variety of hot or sweet peppers",
        "__v": 0,
        "parentGrowPlanId": "51a3885ea8162dbabd583f3b",
        "visibility": "public",
        "phases": [{
            "name": "Seedling",
            "description": "Seedling phase, from planting seeds until first true leaves appear. The Bitponics device isn't necessary for this phase since seedlings do fine with just plain tap water, and most seed-starting systems are too small for the water sensors anyway.",
            "expectedNumberOfDays": 17,
            "_id": "521ace8051c2a9a1f3000017",
            "growSystem": null,
            "nutrients": [],
            "idealRanges": [],
            "phaseEndActions": [],
            "actions": [{
                "createdAt": "2013-08-26T03:41:52.732Z",
                "updatedAt": "2013-08-26T03:41:52.732Z",
                "_id": "521ace8051c2a9a1f300000d",
                "description": "sdfdsfsdaf",
                "control": "506de2fc8eebf7524342cb2d",
                "__v": 0,
                "cycle": {
                    "repeat": true,
                    "offset": {
                        "durationType": "hours",
                        "duration": 0
                    },
                    "states": [{
                        "controlValue": "1",
                        "durationType": "hours",
                        "duration": 0.5
                    }, {
                        "controlValue": "0",
                        "durationType": "hours",
                        "duration": 23.5
                    }]
                }
            }]
        }, {
            "name": "Vegetative",
            "description": "Vegetative phase. Bring in any existing plants or seedlings with their first pair of true leaves.",
            "expectedNumberOfDays": 56,
            "_id": "521ace8051c2a9a1f3000013",
            "growSystem": null,
            "nutrients": [],
            "idealRanges": [{
                "sCode": "air",
                "_id": "521ace8051c2a9a1f3000016",
                "valueRange": {
                    "min": 10,
                    "max": 32
                }
            }, {
                "sCode": "ph",
                "_id": "521ace8051c2a9a1f3000015",
                "valueRange": {
                    "min": 6,
                    "max": 6.8
                }
            }, {
                "sCode": "lux",
                "actionBelowMin": "506de2fb8eebf7524342cb28",
                "actionAboveMax": "506de2fb8eebf7524342cb29",
                "_id": "521ace8051c2a9a1f3000014",
                "valueRange": {
                    "min": 15000,
                    "max": 27000
                }
            }],
            "phaseEndActions": [],
            "actions": []
        }, {
            "name": "Blooming/Fruiting",
            "description": "",
            "expectedNumberOfDays": 21,
            "_id": "521ace8051c2a9a1f300000f",
            "growSystem": null,
            "nutrients": [],
            "idealRanges": [{
                "sCode": "air",
                "_id": "521ace8051c2a9a1f3000012",
                "applicableTimeSpan": {
                    "startTime": 28800000,
                    "endTime": 72000000
                },
                "valueRange": {
                    "min": 10,
                    "opt": 27,
                    "max": 32
                }
            }, {
                "sCode": "air",
                "_id": "521ace8051c2a9a1f3000011",
                "applicableTimeSpan": {
                    "startTime": 72000000,
                    "endTime": 28800000
                },
                "valueRange": {
                    "min": 10,
                    "opt": 21,
                    "max": 32
                }
            }, {
                "sCode": "lux",
                "actionBelowMin": "506de2fb8eebf7524342cb28",
                "actionAboveMax": "506de2fb8eebf7524342cb29",
                "_id": "521ace8051c2a9a1f3000010",
                "applicableTimeSpan": {
                    "startTime": 28800000,
                    "endTime": 72000000
                },
                "valueRange": {
                    "min": 50000,
                    "max": 107500
                }
            }],
            "phaseEndActions": [],
            "actions": []
        }],
        "plants": [{
            "createdAt": "2013-06-01T13:24:47.985Z",
            "updatedAt": "2013-06-01T13:24:47.985Z",
            "_id": "51a388c7a8162dbabd583f3c",
            "name": "Pepper",
            "__v": 0,
            "visibility": "public"
        }]
    }, {
        "createdAt": "2013-09-12T04:02:26.941Z",
        "updatedAt": "2013-09-12T04:02:26.941Z",
        "_id": "51b076c35dd0f94858bac8da",
        "createdBy": "506de30a8eebf7524342cb6c",
        "name": "Wall of Mixed Greens",
        "description": "When you want a wall you can eat buffet. Growing close to 100 plants, mix and match whatever kind of herbs & lettuces & greens you want to grow. This involves putting together your own system based on wool pocket planters.",
        "__v": 0,
        "visibility": "public",
        "phases": [{
            "_id": "51b0de865dd0f94858bac8e8",
            "name": "Seedling",
            "description": "Seedling phase, from planting seeds until first true leaves appear. The Bitponics device isn't necessary for this phase since seedlings do fine with just plain tap water, and most seed-starting systems are too small for the water sensors anyway. Use the seed-starting plugs from General Hydroponics Rapid Rooter or Flora Root.",
            "expectedNumberOfDays": 14,
            "light": "515a540205e45bc5a590301b",
            "growSystem": null,
            "growMedium": "Seed-starting plugs",
            "nutrients": [],
            "idealRanges": [{
                "_id": "51b0de965dd0f94858bac8ea",
                "sCode": "lux",
                "actionBelowMin": "506de2fb8eebf7524342cb28",
                "actionAboveMax": "506de2fb8eebf7524342cb29",
                "applicableTimeSpan": {
                    "startTime": 21600000,
                    "endTime": 79200000
                },
                "valueRange": {
                    "min": 2000,
                    "max": 4000
                }
            }, {
                "_id": "51b0de965dd0f94858bac8ea",
                "sCode": "air",
                "actionBelowMin": "506de2fc8eebf7524342cb2b",
                "actionAboveMax": "506de2fb8eebf7524342cb2a",
                "valueRange": {
                    "min": 12.77,
                    "max": 27
                }
            }],
            "phaseEndActions": [{
                "createdAt": "2013-06-01T13:24:48.013Z",
                "updatedAt": "2013-06-01T13:24:48.013Z",
                "_id": "506de2ec8eebf7524342cb24",
                "description": "Transplant seedlings into the grow bed",
                "__v": 0,
                "cycle": {
                    "offset": {
                        "duration": 0
                    },
                    "states": []
                }
            }],
            "actions": [{
                "createdAt": "2013-06-01T13:24:48.044Z",
                "updatedAt": "2013-06-01T13:24:48.044Z",
                "_id": "506de3128eebf7524342cb87",
                "description": "Water level check",
                "__v": 0,
                "cycle": {
                    "repeat": true,
                    "offset": {
                        "durationType": "hours",
                        "duration": 8
                    },
                    "states": [{
                        "message": "Check water level in seed tray. Make sure there's a thin layer at the bottom of the tray to last the seedlings through the day."
                    }, {
                        "durationType": "days",
                        "duration": 1
                    }]
                }
            }, {
                "createdAt": "2013-06-01T13:24:48.034Z",
                "updatedAt": "2013-06-01T13:24:48.034Z",
                "_id": "506de2f18eebf7524342cb27",
                "description": "Light cycle, with lights on between 6am and 10pm.",
                "control": "506de2fd8eebf7524342cb32",
                "__v": 0,
                "cycle": {
                    "repeat": true,
                    "offset": {
                        "durationType": "hours",
                        "duration": 6
                    },
                    "states": [{
                        "controlValue": "1",
                        "durationType": "hours",
                        "duration": 16
                    }, {
                        "controlValue": "0",
                        "durationType": "hours",
                        "duration": 8
                    }]
                }
            }]
        }, {
            "_id": "51b0de875dd0f94858bac8e9",
            "name": "Vegetative",
            "description": "Open-ended vegetative phase. Bring in any existing plants or seedlings with their first pair of true leaves. Continually harvest leaves whenever you want; the plants should just continue to grow back.",
            "expectedNumberOfDays": 90,
            "light": "51b0da545dd0f94858bac8dc",
            "growSystem": null,
            "growMedium": "Mix of 1/2 vermiculute and 1/2 perlite.",
            "nutrients": [{
                "createdAt": "2013-09-12T04:02:26.775Z",
                "updatedAt": "2013-09-12T04:02:26.775Z",
                "_id": "51b0dc5e5dd0f94858bac8e0",
                "name": "Grow",
                "brand": "FloraGro",
                "__v": 0,
                "visibility": "public"
            }, {
                "createdAt": "2013-09-12T04:02:26.773Z",
                "updatedAt": "2013-09-12T04:02:26.773Z",
                "_id": "51b0dc685dd0f94858bac8e1",
                "name": "Bloom",
                "brand": "FloraGro",
                "__v": 0,
                "visibility": "public"
            }],
            "idealRanges": [{
                "_id": "51b0dd7c5dd0f94858bac8e3",
                "sCode": "lux",
                "actionBelowMin": "506de2fb8eebf7524342cb28",
                "actionAboveMax": "506de2fb8eebf7524342cb29",
                "applicableTimeSpan": {
                    "startTime": 21600000,
                    "endTime": 79200000
                },
                "valueRange": {
                    "min": 15000,
                    "max": 27000
                }
            }, {
                "_id": "51b0dd845dd0f94858bac8e4",
                "sCode": "air",
                "actionBelowMin": "506de2fc8eebf7524342cb2b",
                "actionAboveMax": "506de2fb8eebf7524342cb2a",
                "valueRange": {
                    "min": 12.77,
                    "max": 27
                }
            }, {
                "_id": "51b0dd8b5dd0f94858bac8e5",
                "sCode": "ec",
                "actionBelowMin": "51b0de5e5dd0f94858bac8e7",
                "actionAboveMax": "51b0de3f5dd0f94858bac8e6",
                "valueRange": {
                    "min": 600,
                    "max": 1200
                }
            }],
            "phaseEndActions": [],
            "actions": [{
                "createdAt": "2013-09-12T04:02:26.909Z",
                "updatedAt": "2013-09-12T04:02:26.909Z",
                "_id": "51b0dd1b5dd0f94858bac8e2",
                "description": "Reservior top-off",
                "__v": 0,
                "cycle": {
                    "repeat": true,
                    "offset": {
                        "duration": 0
                    },
                    "states": [{
                        "message": "Check reservoir level and top off if level has dipped more than an inch or so."
                    }, {
                        "durationType": "days",
                        "duration": 1
                    }]
                }
            }, {
                "createdAt": "2013-09-12T04:02:26.910Z",
                "updatedAt": "2013-09-12T04:02:26.910Z",
                "_id": "51b4dc475dd0f94858bac8ee",
                "description": "Reservior refill cycle",
                "__v": 0,
                "cycle": {
                    "repeat": true,
                    "offset": {
                        "duration": 0
                    },
                    "states": [{
                        "message": "Turn off water pump. Discard all solution in the reservoir. Then refill the reservoir with water, leaving 1\" of room from the top. Mix in ½ cup FloraGro Grow nutrient and ½ cup FloraGro Bloom nutrient. Finally, resume water pump cycle."
                    }, {
                        "durationType": "weeks",
                        "duration": 3
                    }]
                }
            }, {
                "createdAt": "2013-06-01T13:24:48.037Z",
                "updatedAt": "2013-06-01T13:24:48.037Z",
                "_id": "506de2f08eebf7524342cb26",
                "description": "Water pump cycle",
                "control": "506de2fc8eebf7524342cb2d",
                "__v": 0,
                "cycle": {
                    "repeat": true,
                    "offset": {
                        "duration": 0
                    },
                    "states": [{
                        "controlValue": "1",
                        "durationType": "minutes",
                        "duration": 15
                    }, {
                        "controlValue": "0",
                        "durationType": "minutes",
                        "duration": 15
                    }]
                }
            }, {
                "createdAt": "2013-06-01T13:24:48.034Z",
                "updatedAt": "2013-06-01T13:24:48.034Z",
                "_id": "506de2f18eebf7524342cb27",
                "description": "Light cycle, with lights on between 6am and 10pm.",
                "control": "506de2fd8eebf7524342cb32",
                "__v": 0,
                "cycle": {
                    "repeat": true,
                    "offset": {
                        "durationType": "hours",
                        "duration": 6
                    },
                    "states": [{
                        "controlValue": "1",
                        "durationType": "hours",
                        "duration": 16
                    }, {
                        "controlValue": "0",
                        "durationType": "hours",
                        "duration": 8
                    }]
                }
            }]
        }],
        "plants": [{
            "createdAt": "2013-06-01T13:24:47.978Z",
            "updatedAt": "2013-06-01T13:24:47.978Z",
            "_id": "50749120fe420e210be58a69",
            "name": "Basil",
            "__v": 0,
            "visibility": "public"
        }, {
            "createdAt": "2013-06-01T13:24:47.991Z",
            "updatedAt": "2013-06-01T13:24:47.991Z",
            "_id": "50a016f8eb1164c6b88e3038",
            "name": "Swiss Chard",
            "__v": 0,
            "visibility": "public"
        }, {
            "createdAt": "2013-06-01T13:24:47.985Z",
            "updatedAt": "2013-06-01T13:24:47.985Z",
            "_id": "5074983aab364e2a9fffd4f1",
            "name": "Cilantro",
            "__v": 0,
            "visibility": "public"
        }, {
            "createdAt": "2013-06-01T13:24:47.983Z",
            "updatedAt": "2013-06-01T13:24:47.983Z",
            "_id": "5074912dfe420e210be58a82",
            "name": "Lettuce",
            "__v": 0,
            "visibility": "public"
        }]
    }, {
        "createdAt": "2013-09-12T04:02:26.943Z",
        "updatedAt": "2013-09-12T04:02:26.943Z",
        "_id": "51eb73866b21df1a6a836b4e",
        "createdBy": "506de30a8eebf7524342cb6c",
        "name": "Island of Microgreens",
        "description": "A grow plan designed for Bitponics' custom microgreens drawer island. Continuous harvests of any edible microgreens you want to grow.",
        "__v": 0,
        "visibility": "public",
        "phases": [{
            "_id": "51eb73886b21df1a6a836b4f",
            "name": "Forever",
            "description": "This garden runs a single, continuous phase indefinitely. Designed for optimal growth of seedlings.",
            "expectedNumberOfDays": 60,
            "growSystem": {
                "createdAt": "2013-09-12T04:02:26.882Z",
                "updatedAt": "2013-09-12T04:02:26.882Z",
                "_id": "51eb73886b21df1a6a836b50",
                "name": "Bitponics Microgreens Kitchen Island",
                "description": "A beautiful wooden 4'x2' kitchen island with a butcher-block countertop and 8 pull-out drawers of microgreen trays, with built-in LED lighting for each drawer.",
                "type": "Nutrient Film Technique (NFT)",
                "reservoirSize": 10,
                "plantCapacity": 800,
                "__v": 0,
                "visibility": "public",
                "overallSize": {
                    "w": 4,
                    "h": 3,
                    "d": 2
                }
            },
            "nutrients": [],
            "idealRanges": [],
            "phaseEndActions": [],
            "actions": [{
                "createdAt": "2013-06-01T13:24:48.034Z",
                "updatedAt": "2013-06-01T13:24:48.034Z",
                "_id": "506de2f18eebf7524342cb27",
                "description": "Light cycle, with lights on between 6am and 10pm.",
                "control": "506de2fd8eebf7524342cb32",
                "__v": 0,
                "cycle": {
                    "repeat": true,
                    "offset": {
                        "durationType": "hours",
                        "duration": 6
                    },
                    "states": [{
                        "controlValue": "1",
                        "durationType": "hours",
                        "duration": 16
                    }, {
                        "controlValue": "0",
                        "durationType": "hours",
                        "duration": 8
                    }]
                }
            }, {
                "createdAt": "2013-09-12T04:02:26.911Z",
                "updatedAt": "2013-09-12T04:02:26.911Z",
                "_id": "51e89d20849a131883eb82e1",
                "description": "Water pump cycle",
                "control": "506de2fc8eebf7524342cb2d",
                "__v": 0,
                "cycle": {
                    "repeat": true,
                    "offset": {
                        "duration": 0
                    },
                    "states": [{
                        "controlValue": "1",
                        "durationType": "minutes",
                        "duration": 15
                    }, {
                        "controlValue": "0",
                        "durationType": "minutes",
                        "duration": 15
                    }]
                }
            }]
        }],
        "plants": [{
            "createdAt": "2013-06-01T13:24:47.981Z",
            "updatedAt": "2013-06-01T13:24:47.981Z",
            "_id": "5074911efe420e210be58a68",
            "name": "Arugula",
            "__v": 0,
            "visibility": "public"
        }, {
            "createdAt": "2013-06-01T13:24:47.982Z",
            "updatedAt": "2013-06-01T13:24:47.982Z",
            "_id": "5074912afe420e210be58a78",
            "name": "Broccoli",
            "__v": 0,
            "visibility": "public"
        }]
    }, {
        "createdAt": "2013-09-12T04:02:26.944Z",
        "updatedAt": "2013-09-12T04:02:26.944Z",
        "_id": "51e89d21849a131883eb82e3",
        "createdBy": "506de30a8eebf7524342cb6c",
        "name": "Glass Curtain",
        "description": "A grow plan for Bitponics' PSFK window exhibit, featuring 25 glass vessels hung across a 6'x10' window.",
        "__v": 0,
        "visibility": "public",
        "phases": [{
            "_id": "51e89c52849a131883eb82d8",
            "name": "Seedling",
            "description": "Seedling phase, from planting seeds until first true leaves appear. The Bitponics device isn't necessary for this phase since seedlings do fine with just plain tap water, and most seed-starting systems are too small for the water sensors anyway. This phase is for the \"All-Purpose\" grow plan so its sensor ranges aren't optimal for any specific plant, but instead describe a range that should be adequate for most plants.",
            "expectedNumberOfDays": 7,
            "light": "515a540205e45bc5a590301b",
            "growSystem": {
                "createdAt": "2013-09-12T04:02:26.880Z",
                "updatedAt": "2013-09-12T04:02:26.880Z",
                "_id": "51e89c2b849a131883eb82d7",
                "name": "72-cell seed starter",
                "description": "",
                "type": "deep water culture (DWC)",
                "reservoirSize": 0.1,
                "plantCapacity": 72,
                "__v": 0,
                "visibility": "public"
            },
            "growMedium": "rockwool",
            "phaseEndDescription": "This phase is over once the seedlings start growing their first true leaves.",
            "nutrients": [],
            "idealRanges": [{
                "_id": "51e89d1e849a131883eb82db",
                "sCode": "water",
                "actionBelowMin": "506de30c8eebf7524342cb73",
                "actionAboveMax": "506de30d8eebf7524342cb75",
                "valueRange": {
                    "min": 18.33,
                    "max": 21.11
                }
            }, {
                "_id": "51e89d1e849a131883eb82dc",
                "sCode": "air",
                "actionBelowMin": "506de2fc8eebf7524342cb2b",
                "actionAboveMax": "506de2fb8eebf7524342cb2a",
                "valueRange": {
                    "min": 12.77,
                    "max": 27
                }
            }, {
                "_id": "51e89d1f849a131883eb82dd",
                "sCode": "lux",
                "actionBelowMin": "506de2fb8eebf7524342cb28",
                "actionAboveMax": "506de2fb8eebf7524342cb29",
                "applicableTimeSpan": {
                    "startTime": 21600000,
                    "endTime": 79200000
                },
                "valueRange": {
                    "min": 2000,
                    "max": 4000
                }
            }],
            "phaseEndActions": [{
                "createdAt": "2013-06-01T13:24:48.013Z",
                "updatedAt": "2013-06-01T13:24:48.013Z",
                "_id": "506de2ec8eebf7524342cb24",
                "description": "Transplant seedlings into the grow bed",
                "__v": 0,
                "cycle": {
                    "offset": {
                        "duration": 0
                    },
                    "states": []
                }
            }],
            "actions": [{
                "createdAt": "2013-06-01T13:24:48.044Z",
                "updatedAt": "2013-06-01T13:24:48.044Z",
                "_id": "506de3128eebf7524342cb87",
                "description": "Water level check",
                "__v": 0,
                "cycle": {
                    "repeat": true,
                    "offset": {
                        "durationType": "hours",
                        "duration": 8
                    },
                    "states": [{
                        "message": "Check water level in seed tray. Make sure there's a thin layer at the bottom of the tray to last the seedlings through the day."
                    }, {
                        "durationType": "days",
                        "duration": 1
                    }]
                }
            }, {
                "createdAt": "2013-06-01T13:24:48.034Z",
                "updatedAt": "2013-06-01T13:24:48.034Z",
                "_id": "506de2f18eebf7524342cb27",
                "description": "Light cycle, with lights on between 6am and 10pm.",
                "control": "506de2fd8eebf7524342cb32",
                "__v": 0,
                "cycle": {
                    "repeat": true,
                    "offset": {
                        "durationType": "hours",
                        "duration": 6
                    },
                    "states": [{
                        "controlValue": "1",
                        "durationType": "hours",
                        "duration": 16
                    }, {
                        "controlValue": "0",
                        "durationType": "hours",
                        "duration": 8
                    }]
                }
            }]
        }, {
            "_id": "51e89c53849a131883eb82d9",
            "name": "Vegetative",
            "description": "Open-ended vegetative phase. Bring in any existing plants or seedlings with their first pair of true leaves.",
            "expectedNumberOfDays": 28,
            "light": "515a540a05e45bc5a590301d",
            "growSystem": {
                "createdAt": "2013-06-01T13:24:47.951Z",
                "updatedAt": "2013-06-01T13:24:47.951Z",
                "_id": "506de30d8eebf7524342cb77",
                "name": "Bitponics Water Culture System",
                "description": "The system provided to our Kickstarter backers.",
                "type": "deep water culture (DWC)",
                "reservoirSize": 4.5,
                "plantCapacity": 6,
                "__v": 0,
                "visibility": "public"
            },
            "growMedium": "hydroton",
            "nutrients": [{
                "createdAt": "2013-06-01T13:24:47.822Z",
                "updatedAt": "2013-06-01T13:24:47.822Z",
                "_id": "506de3038eebf7524342cb4b",
                "name": "Grow",
                "brand": "Humbolt Nutrients",
                "__v": 0,
                "visibility": "public"
            }, {
                "createdAt": "2013-06-01T13:24:47.822Z",
                "updatedAt": "2013-06-01T13:24:47.822Z",
                "_id": "506de3038eebf7524342cb4c",
                "name": "Bloom",
                "brand": "Humbolt Nutrients",
                "__v": 0,
                "visibility": "public"
            }, {
                "createdAt": "2013-06-01T13:24:47.823Z",
                "updatedAt": "2013-06-01T13:24:47.823Z",
                "_id": "506de3038eebf7524342cb4d",
                "name": "Micro",
                "brand": "Humbolt Nutrients",
                "__v": 0,
                "visibility": "public"
            }],
            "idealRanges": [{
                "_id": "51e89d1f849a131883eb82de",
                "sCode": "lux",
                "actionBelowMin": "506de2fb8eebf7524342cb28",
                "actionAboveMax": "506de2fb8eebf7524342cb29",
                "applicableTimeSpan": {
                    "startTime": 21600000,
                    "endTime": 79200000
                },
                "valueRange": {
                    "min": 15000,
                    "max": 100000
                }
            }, {
                "_id": "51e89d1f849a131883eb82df",
                "sCode": "air",
                "actionBelowMin": "506de2fc8eebf7524342cb2b",
                "actionAboveMax": "506de2fb8eebf7524342cb2a",
                "valueRange": {
                    "min": 12.77,
                    "max": 30
                }
            }, {
                "_id": "51e89d20849a131883eb82e0",
                "sCode": "water",
                "valueRange": {
                    "min": 12.77,
                    "max": 30
                }
            }],
            "phaseEndActions": [],
            "actions": [{
                "createdAt": "2013-06-01T13:24:48.040Z",
                "updatedAt": "2013-06-01T13:24:48.040Z",
                "_id": "506de2ef8eebf7524342cb25",
                "description": "Reservior refill cycle",
                "__v": 0,
                "cycle": {
                    "repeat": true,
                    "offset": {
                        "duration": 0
                    },
                    "states": [{
                        "message": "Flush and refill reservoir. Discard any solution in the reservoir, rinse the entire system with water. Then refill the reservoir to capacity with water. Mix in ¼ cup Grow nutrient, then ¼ cup Bloom nutrient, then ¼ cup Micro nutrient."
                    }, {
                        "durationType": "weeks",
                        "duration": 3
                    }]
                }
            }, {
                "createdAt": "2013-09-12T04:02:26.911Z",
                "updatedAt": "2013-09-12T04:02:26.911Z",
                "_id": "51e89d20849a131883eb82e1",
                "description": "Water pump cycle",
                "control": "506de2fc8eebf7524342cb2d",
                "__v": 0,
                "cycle": {
                    "repeat": true,
                    "offset": {
                        "duration": 0
                    },
                    "states": [{
                        "controlValue": "1",
                        "durationType": "minutes",
                        "duration": 15
                    }, {
                        "controlValue": "0",
                        "durationType": "minutes",
                        "duration": 15
                    }]
                }
            }, {
                "createdAt": "2013-09-12T04:02:26.911Z",
                "updatedAt": "2013-09-12T04:02:26.911Z",
                "_id": "51e89d21849a131883eb82e2",
                "description": "Spotlights on between 8pm and 6am.",
                "control": "506de2fd8eebf7524342cb32",
                "__v": 0,
                "cycle": {
                    "repeat": true,
                    "offset": {
                        "durationType": "hours",
                        "duration": 20
                    },
                    "states": [{
                        "controlValue": "1",
                        "durationType": "hours",
                        "duration": 10
                    }, {
                        "controlValue": "0",
                        "durationType": "hours",
                        "duration": 14
                    }]
                }
            }]
        }],
        "plants": [{
            "createdAt": "2013-06-01T13:24:47.978Z",
            "updatedAt": "2013-06-01T13:24:47.978Z",
            "_id": "50749120fe420e210be58a69",
            "name": "Basil",
            "__v": 0,
            "visibility": "public"
        }, {
            "createdAt": "2013-06-01T13:24:47.985Z",
            "updatedAt": "2013-06-01T13:24:47.985Z",
            "_id": "51a388c7a8162dbabd583f3c",
            "name": "Pepper",
            "__v": 0,
            "visibility": "public"
        }, {
            "createdAt": "2013-06-01T13:24:47.991Z",
            "updatedAt": "2013-06-01T13:24:47.991Z",
            "_id": "50a016f8eb1164c6b88e3038",
            "name": "Swiss Chard",
            "__v": 0,
            "visibility": "public"
        }, {
            "createdAt": "2013-06-01T13:24:47.978Z",
            "updatedAt": "2013-06-01T13:24:47.978Z",
            "_id": "50749120fe420e210be58a69",
            "name": "Basil",
            "__v": 0,
            "visibility": "public"
        }, {
            "createdAt": "2013-06-01T13:24:47.978Z",
            "updatedAt": "2013-06-01T13:24:47.978Z",
            "_id": "507492f3fe420e210be58a86",
            "name": "Peppermint",
            "__v": 0,
            "visibility": "public"
        }, {
            "createdAt": "2013-06-01T13:24:47.981Z",
            "updatedAt": "2013-06-01T13:24:47.981Z",
            "_id": "507492f5fe420e210be58a8a",
            "name": "Rosemary",
            "__v": 0,
            "visibility": "public"
        }]
    }],
    "growSystems": [{
        "createdAt": "2013-06-01T13:24:47.948Z",
        "updatedAt": "2013-06-01T13:24:47.948Z",
        "_id": "506de3008eebf7524342cb3f",
        "name": "deep water culture (DWC)",
        "description": "deep water culture (DWC) system.",
        "type": "deep water culture (DWC)",
        "reservoirSize": 5,
        "plantCapacity": 6,
        "__v": 0,
        "visibility": "public",
        "$$hashKey": "00C"
    }, {
        "createdAt": "2013-06-01T13:24:47.949Z",
        "updatedAt": "2013-06-01T13:24:47.949Z",
        "_id": "506de3008eebf7524342cb3e",
        "name": "aquaponics",
        "description": "aquaponics system.",
        "type": "aquaponics",
        "reservoirSize": 90,
        "plantCapacity": 10,
        "__v": 0,
        "visibility": "public",
        "$$hashKey": "00D"
    }, {
        "createdAt": "2013-06-01T13:24:47.949Z",
        "updatedAt": "2013-06-01T13:24:47.949Z",
        "_id": "506de3008eebf7524342cb3d",
        "name": "ebb & flow",
        "description": "ebb & flow system.",
        "type": "ebb & flow",
        "reservoirSize": 5,
        "plantCapacity": 6,
        "__v": 0,
        "visibility": "public",
        "$$hashKey": "00E"
    }, {
        "createdAt": "2013-06-01T13:24:47.950Z",
        "updatedAt": "2013-06-01T13:24:47.950Z",
        "_id": "506de2ff8eebf7524342cb3c",
        "name": "Drip",
        "description": "Drip system.",
        "type": "deep water culture (DWC)",
        "reservoirSize": 5,
        "plantCapacity": 6,
        "__v": 0,
        "visibility": "public",
        "$$hashKey": "00F"
    }, {
        "createdAt": "2013-06-01T13:24:47.951Z",
        "updatedAt": "2013-06-01T13:24:47.951Z",
        "_id": "506de3008eebf7524342cb40",
        "name": "Egg-carton seed starter",
        "description": "Seed-starting system made with a plastic egg carton. For full directions on how to make one, go here: http://bitponics.com/guides/water-culture-system. And this system doesn't have room for pH and EC sensors, but you won't need them anyway since in the seed-starting phase you just use plain tap water. So just put the caps on those sensors, unplug them and store them aside until you get to the next phase.",
        "type": "deep water culture (DWC)",
        "reservoirSize": 0.1,
        "plantCapacity": 12,
        "__v": 0,
        "visibility": "public",
        "$$hashKey": "00G"
    }, {
        "createdAt": "2013-06-01T13:24:47.951Z",
        "updatedAt": "2013-06-01T13:24:47.951Z",
        "_id": "506de30d8eebf7524342cb77",
        "name": "Bitponics Water Culture System",
        "description": "The system provided to our Kickstarter backers.",
        "type": "deep water culture (DWC)",
        "reservoirSize": 4.5,
        "plantCapacity": 6,
        "__v": 0,
        "visibility": "public",
        "$$hashKey": "00H"
    }, {
        "createdAt": "2013-09-12T04:02:26.880Z",
        "updatedAt": "2013-09-12T04:02:26.880Z",
        "_id": "51e89c2b849a131883eb82d7",
        "name": "72-cell seed starter",
        "description": "",
        "type": "deep water culture (DWC)",
        "reservoirSize": 0.1,
        "plantCapacity": 72,
        "__v": 0,
        "visibility": "public",
        "$$hashKey": "00I"
    }, {
        "createdAt": "2013-09-12T04:02:26.881Z",
        "updatedAt": "2013-09-12T04:02:26.881Z",
        "_id": "51e89a96849a131883eb82d6",
        "name": "Bitponics Glass Curtain",
        "description": "Columns of plants grown in custom glass vessels, hung on steel wires extending from floor to ceiling. Originally designed for PSFK's \"Future of Home Living\" exhibit in the summer of 2013.",
        "type": "drip",
        "reservoirSize": 30,
        "plantCapacity": 25,
        "__v": 0,
        "visibility": "public",
        "overallSize": {
            "w": 7,
            "h": 13,
            "d": 2
        },
        "$$hashKey": "00J"
    }, {
        "createdAt": "2013-09-12T04:02:26.882Z",
        "updatedAt": "2013-09-12T04:02:26.882Z",
        "_id": "51eb73886b21df1a6a836b50",
        "name": "Bitponics Microgreens Kitchen Island",
        "description": "A beautiful wooden 4'x2' kitchen island with a butcher-block countertop and 8 pull-out drawers of microgreen trays, with built-in LED lighting for each drawer.",
        "type": "Nutrient Film Technique (NFT)",
        "reservoirSize": 10,
        "plantCapacity": 800,
        "__v": 0,
        "visibility": "public",
        "overallSize": {
            "w": 4,
            "h": 3,
            "d": 2
        },
        "$$hashKey": "00K"
    }],
    "actions": {},
    "controls": {
        "506de2fd8eebf7524342cb31": {
            "createdAt": "2013-06-01T13:24:47.816Z",
            "updatedAt": "2013-06-01T13:24:47.816Z",
            "_id": "506de2fd8eebf7524342cb31",
            "name": "Air Conditioner",
            "onAction": "506de2fb8eebf7524342cb2a",
            "offAction": "50da4cab0a312499fae453e7",
            "__v": 0
        },
        "506de2fc8eebf7524342cb2f": {
            "createdAt": "2013-06-01T13:24:47.817Z",
            "updatedAt": "2013-06-01T13:24:47.817Z",
            "_id": "506de2fc8eebf7524342cb2f",
            "name": "Heater",
            "onAction": "506de2fc8eebf7524342cb2b",
            "offAction": "50da4f1e0a312499fae453e9",
            "__v": 0
        },
        "506de2fc8eebf7524342cb2e": {
            "createdAt": "2013-06-01T13:24:47.817Z",
            "updatedAt": "2013-06-01T13:24:47.817Z",
            "_id": "506de2fc8eebf7524342cb2e",
            "name": "Humidifier",
            "onAction": "50da532d0a312499fae453ec",
            "offAction": "50da532d0a312499fae453ed",
            "__v": 0
        },
        "506de30d8eebf7524342cb74": {
            "createdAt": "2013-06-01T13:24:47.818Z",
            "updatedAt": "2013-06-01T13:24:47.818Z",
            "_id": "506de30d8eebf7524342cb74",
            "name": "Seedling Heat Mat",
            "onAction": "506de30c8eebf7524342cb73",
            "offAction": "506de30d8eebf7524342cb75",
            "__v": 0
        },
        "506de2fd8eebf7524342cb30": {
            "createdAt": "2013-06-01T13:24:47.818Z",
            "updatedAt": "2013-06-01T13:24:47.818Z",
            "_id": "506de2fd8eebf7524342cb30",
            "name": "Fan",
            "onAction": "50da53730a312499fae453ee",
            "offAction": "50da53740a312499fae453ef",
            "__v": 0
        },
        "506de2fc8eebf7524342cb2d": {
            "createdAt": "2013-06-01T13:24:47.819Z",
            "updatedAt": "2013-06-01T13:24:47.819Z",
            "_id": "506de2fc8eebf7524342cb2d",
            "name": "Water Pump",
            "onAction": "50da4f650a312499fae453ea",
            "offAction": "50da4f660a312499fae453eb",
            "__v": 0
        },
        "506de2fd8eebf7524342cb32": {
            "createdAt": "2013-06-01T13:24:47.819Z",
            "updatedAt": "2013-06-01T13:24:47.819Z",
            "_id": "506de2fd8eebf7524342cb32",
            "name": "Light",
            "onAction": "506de2fb8eebf7524342cb28",
            "offAction": "506de2fb8eebf7524342cb29",
            "__v": 0
        }
    },
    "sensors": {
        "sal": {
            "createdAt": "2013-06-01T13:24:47.785Z",
            "updatedAt": "2013-06-01T13:24:47.785Z",
            "_id": "506de3078eebf7524342cb5c",
            "name": "Salinity",
            "abbrev": "SAL",
            "unit": "percentage",
            "code": "sal",
            "__v": 0,
            "visible": false
        },
        "lux": {
            "createdAt": "2013-06-01T13:24:47.785Z",
            "updatedAt": "2013-06-01T13:24:47.785Z",
            "_id": "506de3088eebf7524342cb61",
            "name": "Lux",
            "abbrev": "Lux",
            "unit": "lm/(m^2)",
            "code": "lux",
            "__v": 0,
            "visible": true
        },
        "ec": {
            "createdAt": "2013-06-01T13:24:47.786Z",
            "updatedAt": "2013-06-01T13:24:47.786Z",
            "_id": "506de3068eebf7524342cb5a",
            "name": "Electrical Conductivity",
            "abbrev": "EC",
            "unit": "Microsiemens",
            "code": "ec",
            "__v": 0,
            "visible": true
        },
        "hum": {
            "createdAt": "2013-06-01T13:24:47.787Z",
            "updatedAt": "2013-06-01T13:24:47.787Z",
            "_id": "506de3078eebf7524342cb5f",
            "name": "Humidity",
            "abbrev": "Humidity",
            "unit": "percentage",
            "code": "hum",
            "__v": 0,
            "visible": true
        },
        "vis": {
            "createdAt": "2013-06-01T13:24:47.788Z",
            "updatedAt": "2013-06-01T13:24:47.788Z",
            "_id": "506de3098eebf7524342cb64",
            "name": "Visible Light",
            "abbrev": "Visible Light",
            "unit": "Lumens",
            "code": "vis",
            "__v": 0,
            "visible": false
        },
        "ph": {
            "createdAt": "2013-06-01T13:24:47.792Z",
            "updatedAt": "2013-06-01T13:24:47.792Z",
            "_id": "506de3068eebf7524342cb59",
            "name": "pH",
            "abbrev": "pH",
            "unit": "pH",
            "code": "ph",
            "__v": 0,
            "visible": true
        },
        "water": {
            "createdAt": "2013-06-01T13:24:47.792Z",
            "updatedAt": "2013-06-01T13:24:47.792Z",
            "_id": "506de3078eebf7524342cb5e",
            "name": "Water Temperature",
            "abbrev": "Water Temp",
            "unit": "celsius",
            "code": "water",
            "__v": 0,
            "visible": true
        },
        "full": {
            "createdAt": "2013-06-01T13:24:47.794Z",
            "updatedAt": "2013-06-01T13:24:47.794Z",
            "_id": "506de3088eebf7524342cb63",
            "name": "Full Light",
            "abbrev": "Light",
            "unit": "Lumens",
            "code": "full",
            "__v": 0,
            "visible": true
        },
        "tds": {
            "createdAt": "2013-06-01T13:24:47.794Z",
            "updatedAt": "2013-06-01T13:24:47.794Z",
            "_id": "506de3068eebf7524342cb5b",
            "name": "Total Dissolved Solids",
            "abbrev": "TDS",
            "unit": "parts per million",
            "code": "tds",
            "__v": 0,
            "visible": false
        },
        "co2": {
            "createdAt": "2013-06-01T13:24:47.795Z",
            "updatedAt": "2013-06-01T13:24:47.795Z",
            "_id": "506de3088eebf7524342cb60",
            "name": "Carbon Dioxide",
            "abbrev": "CO2",
            "unit": "parts per million",
            "code": "co2",
            "__v": 0,
            "visible": true
        },
        "air": {
            "createdAt": "2013-06-01T13:24:47.795Z",
            "updatedAt": "2013-06-01T13:24:47.795Z",
            "_id": "506de3078eebf7524342cb5d",
            "name": "Air Temperature",
            "abbrev": "Air Temp",
            "unit": "celsius",
            "code": "air",
            "__v": 0,
            "visible": true
        },
        "ir": {
            "createdAt": "2013-06-01T13:24:47.796Z",
            "updatedAt": "2013-06-01T13:24:47.796Z",
            "_id": "506de3088eebf7524342cb62",
            "name": "Infrared",
            "abbrev": "IR",
            "unit": "Lumens",
            "code": "ir",
            "__v": 0,
            "visible": false
        },
        "wl": {
            "createdAt": "2013-09-12T04:02:26.765Z",
            "updatedAt": "2013-09-12T04:02:26.765Z",
            "_id": "51b4d9c65dd0f94858bac8ed",
            "name": "Water Level",
            "abbrev": "Water Level",
            "unit": "centimeters",
            "code": "wl",
            "__v": 0,
            "visible": true
        }
    },
    "plants": [{
        "_id": "50749839ab364e2a9fffd4f0",
        "name": "Dill"
    }, {
        "_id": "507492f4fe420e210be58a87",
        "name": "Sage"
    }, {
        "_id": "507492f5fe420e210be58a8c",
        "name": "Majoram"
    }, {
        "_id": "50749125fe420e210be58a6a",
        "name": "Chervil"
    }, {
        "_id": "50749127fe420e210be58a6f",
        "name": "Rhubarb"
    }, {
        "_id": "50749129fe420e210be58a75",
        "name": "Asparagus"
    }, {
        "_id": "5074912afe420e210be58a7a",
        "name": "Sprouts"
    }, {
        "_id": "5074912cfe420e210be58a7f",
        "name": "Cucumber"
    }, {
        "_id": "5074912efe420e210be58a84",
        "name": "Parsnip"
    }, {
        "_id": "50749839ab364e2a9fffd4ef",
        "name": "Lemon"
    }, {
        "_id": "507492f3fe420e210be58a86",
        "name": "Peppermint"
    }, {
        "_id": "507492f5fe420e210be58a8b",
        "name": "Oregano"
    }, {
        "_id": "50749120fe420e210be58a69",
        "name": "Basil"
    }, {
        "_id": "50749127fe420e210be58a6e",
        "name": "Squash"
    }, {
        "_id": "50749129fe420e210be58a74",
        "name": "Artichoke"
    }, {
        "_id": "5074912afe420e210be58a79",
        "name": "Brussels Sprout"
    }, {
        "_id": "5074912cfe420e210be58a7e",
        "name": "Celery"
    }, {
        "_id": "5074912dfe420e210be58a83",
        "name": "Onion"
    }, {
        "_id": "507492f3fe420e210be58a85",
        "name": "Tarragon"
    }, {
        "_id": "507492f5fe420e210be58a8a",
        "name": "Rosemary"
    }, {
        "_id": "5074911efe420e210be58a68",
        "name": "Arugula"
    }, {
        "_id": "50749126fe420e210be58a6d",
        "name": "Tomato"
    }, {
        "_id": "50749128fe420e210be58a72",
        "name": "Pea"
    }, {
        "_id": "5074912afe420e210be58a78",
        "name": "Broccoli"
    }, {
        "_id": "5074912bfe420e210be58a7d",
        "name": "Cauliflower"
    }, {
        "_id": "5074912dfe420e210be58a82",
        "name": "Lettuce"
    }, {
        "_id": "5074983aab364e2a9fffd4f2",
        "name": "Chives"
    }, {
        "_id": "507492f4fe420e210be58a89",
        "name": "Sorrel"
    }, {
        "_id": "507492f6fe420e210be58a8e",
        "name": "Balm"
    }, {
        "_id": "50749126fe420e210be58a6c",
        "name": "Yam"
    }, {
        "_id": "50749128fe420e210be58a71",
        "name": "Potato"
    }, {
        "_id": "5074912afe420e210be58a77",
        "name": "Beet"
    }, {
        "_id": "5074912bfe420e210be58a7c",
        "name": "Carrot"
    }, {
        "_id": "5074912dfe420e210be58a81",
        "name": "Leek"
    }, {
        "_id": "51a388c7a8162dbabd583f3c",
        "name": "Pepper"
    }, {
        "_id": "5074983aab364e2a9fffd4f1",
        "name": "Cilantro"
    }, {
        "_id": "507492f4fe420e210be58a88",
        "name": "Spearmint"
    }, {
        "_id": "507492f5fe420e210be58a8d",
        "name": "Mache"
    }, {
        "_id": "50749126fe420e210be58a6b",
        "name": "Other"
    }, {
        "_id": "50749127fe420e210be58a70",
        "name": "Radish"
    }, {
        "_id": "50749129fe420e210be58a76",
        "name": "Bean"
    }, {
        "_id": "5074912bfe420e210be58a7b",
        "name": "Cabbage"
    }, {
        "_id": "5074912cfe420e210be58a80",
        "name": "Eggplant"
    }, {
        "_id": "50a016f8eb1164c6b88e3038",
        "name": "Swiss Chard"
    }],
    "userOwnedDevices": [{
        "createdAt": "2013-06-01T13:24:47.849Z",
        "updatedAt": "2013-06-01T13:24:47.849Z",
        "_id": "0006667288ae",
        "deviceType": "506de2fe8eebf7524342cb37",
        "name": "Bitponics Device 2",
        "serial": "AA-301-AAAB",
        "owner": "506de30a8eebf7524342cb6c",
        "activeGrowPlanInstance": "506de2ff8eebf7524342cb39",
        "sensorMap": [{
            "sensor": "506de3068eebf7524342cb59",
            "inputId": "ph"
        }, {
            "sensor": "506de3068eebf7524342cb5a",
            "inputId": "ec"
        }, {
            "sensor": "506de3078eebf7524342cb5d",
            "inputId": "air"
        }, {
            "sensor": "506de3078eebf7524342cb5e",
            "inputId": "water"
        }, {
            "sensor": "506de3078eebf7524342cb5f",
            "inputId": "hum"
        }, {
            "sensor": "506de3088eebf7524342cb61",
            "inputId": "lux"
        }, {
            "sensor": "506de3088eebf7524342cb62",
            "inputId": "ir"
        }, {
            "sensor": "506de3088eebf7524342cb63",
            "inputId": "full"
        }, {
            "sensor": "506de3098eebf7524342cb64",
            "inputId": "vis"
        }],
        "__v": 0,
        "status": {
            "activeActions": [],
            "immediateActions": [],
            "actions": []
        },
        "tz": "America/New_York",
        "outputMap": [{
            "control": "506de2fd8eebf7524342cb32",
            "outputId": "1"
        }, {
            "control": "506de2fc8eebf7524342cb2d",
            "outputId": "2"
        }],
        "sensors": [],
        "userAssignmentLogs": [],
        "users": ["506de30a8eebf7524342cb6c"],
        "timezone": "America/New_York"
    }, {
        "__v": 1,
        "_id": "000666721fc1",
        "createdAt": "2013-06-01T13:24:47.848Z",
        "deviceType": "506de2fe8eebf7524342cb37",
        "name": "Amit's Prototype Bitponics Device 1",
        "owner": "506de30a8eebf7524342cb6c",
        "sensorMap": [{
            "sensor": "506de3068eebf7524342cb59",
            "inputId": "ph"
        }, {
            "sensor": "506de3068eebf7524342cb5a",
            "inputId": "ec"
        }, {
            "sensor": "506de3078eebf7524342cb5d",
            "inputId": "air"
        }, {
            "sensor": "506de3078eebf7524342cb5e",
            "inputId": "water"
        }, {
            "sensor": "506de3078eebf7524342cb5f",
            "inputId": "hum"
        }, {
            "sensor": "506de3088eebf7524342cb61",
            "inputId": "lux"
        }, {
            "sensor": "506de3088eebf7524342cb62",
            "inputId": "ir"
        }, {
            "sensor": "506de3088eebf7524342cb63",
            "inputId": "full"
        }, {
            "sensor": "506de3098eebf7524342cb64",
            "inputId": "vis"
        }],
        "serial": "AA-301-AAAD",
        "updatedAt": "2013-10-17T05:19:27.882Z",
        "status": {
            "expires": "2013-10-17T05:19:27.874Z",
            "activeActions": [],
            "immediateActions": [],
            "actions": []
        },
        "tz": "America/New_York",
        "outputMap": [{
            "control": "506de2fd8eebf7524342cb32",
            "outputId": "1"
        }, {
            "control": "506de2fc8eebf7524342cb2d",
            "outputId": "2"
        }],
        "sensors": [],
        "userAssignmentLogs": [],
        "users": [],
        "timezone": "America/New_York"
    }, {
        "__v": 0,
        "_id": "0006667211cf",
        "activeGrowPlanInstance": "506de2fe8eebf7524342cb38",
        "createdAt": "2013-06-01T13:24:47.850Z",
        "deviceType": "506de2fe8eebf7524342cb37",
        "name": "Bitponics Device 1",
        "owner": "506de30a8eebf7524342cb6c",
        "sensorMap": [{
            "sensor": "506de3068eebf7524342cb59",
            "inputId": "ph"
        }, {
            "sensor": "506de3068eebf7524342cb5a",
            "inputId": "ec"
        }, {
            "sensor": "506de3078eebf7524342cb5d",
            "inputId": "air"
        }, {
            "sensor": "506de3078eebf7524342cb5e",
            "inputId": "water"
        }, {
            "sensor": "506de3078eebf7524342cb5f",
            "inputId": "hum"
        }, {
            "sensor": "506de3088eebf7524342cb61",
            "inputId": "lux"
        }, {
            "sensor": "506de3088eebf7524342cb62",
            "inputId": "ir"
        }, {
            "sensor": "506de3088eebf7524342cb63",
            "inputId": "full"
        }, {
            "sensor": "506de3098eebf7524342cb64",
            "inputId": "vis"
        }],
        "serial": "AA-301-AAAA",
        "updatedAt": "2013-06-01T13:24:48.222Z",
        "status": {
            "expires": "2013-06-01T13:24:48.162Z",
            "activeActions": [],
            "immediateActions": [],
            "actions": []
        },
        "tz": "America/New_York",
        "outputMap": [{
            "control": "506de2fd8eebf7524342cb32",
            "outputId": "1"
        }, {
            "control": "506de2fc8eebf7524342cb2d",
            "outputId": "2"
        }],
        "sensors": [],
        "userAssignmentLogs": [],
        "users": ["506de3098eebf7524342cb66", "506de3098eebf7524342cb67", "506de30a8eebf7524342cb6c", "506de3098eebf7524342cb68", "506de30a8eebf7524342cb69", "506de30a8eebf7524342cb6a", "506de30a8eebf7524342cb6b"],
        "timezone": "America/New_York"
    }],
    "lights": [{
        "createdAt": "2013-06-01T13:24:47.930Z",
        "updatedAt": "2013-06-01T13:24:47.930Z",
        "_id": "515a540a05e45bc5a590301e",
        "fixture": "506de3028eebf7524342cb49",
        "bulb": "506de3018eebf7524342cb44",
        "__v": 0,
        "visibility": "public",
        "fixtureQuantity": 1
    }, {
        "createdAt": "2013-06-01T13:24:47.930Z",
        "updatedAt": "2013-06-01T13:24:47.930Z",
        "_id": "515a540a05e45bc5a590301d",
        "fixture": "506de3028eebf7524342cb48",
        "bulb": "506de3018eebf7524342cb43",
        "__v": 0,
        "visibility": "public",
        "fixtureQuantity": 1
    }, {
        "createdAt": "2013-06-01T13:24:47.931Z",
        "updatedAt": "2013-06-01T13:24:47.931Z",
        "_id": "515a540905e45bc5a590301c",
        "fixture": "506de3028eebf7524342cb47",
        "bulb": "506de3018eebf7524342cb42",
        "__v": 0,
        "visibility": "public",
        "fixtureQuantity": 1
    }, {
        "createdAt": "2013-06-01T13:24:47.935Z",
        "updatedAt": "2013-06-01T13:24:47.935Z",
        "_id": "515a540205e45bc5a590301b",
        "fixture": "506de3028eebf7524342cb46",
        "bulb": "506de3008eebf7524342cb41",
        "__v": 0,
        "visibility": "public",
        "fixtureQuantity": 1
    }, {
        "createdAt": "2013-06-01T13:24:47.936Z",
        "updatedAt": "2013-06-01T13:24:47.936Z",
        "_id": "515a540b05e45bc5a590301f",
        "fixture": "506de3028eebf7524342cb4a",
        "bulb": "506de3018eebf7524342cb45",
        "__v": 0,
        "visibility": "public",
        "fixtureQuantity": 1
    }, {
        "createdAt": "2013-09-12T04:02:26.858Z",
        "updatedAt": "2013-09-12T04:02:26.858Z",
        "_id": "51b0da545dd0f94858bac8dc",
        "fixture": "51b0daa65dd0f94858bac8dd",
        "bulb": "51b0dad85dd0f94858bac8de",
        "__v": 0,
        "visibility": "public",
        "fixtureQuantity": 12
    }],
    "lightFixtures": [{
        "createdAt": "2013-06-01T13:24:47.923Z",
        "updatedAt": "2013-06-01T13:24:47.923Z",
        "_id": "506de3028eebf7524342cb46",
        "type": "Fluorescent",
        "watts": 48,
        "brand": "Hydrofarm",
        "name": "T5 2-tube 2-foot System",
        "__v": 0,
        "visibility": "public",
        "bulbCapacity": 4
    }, {
        "createdAt": "2013-06-01T13:24:47.924Z",
        "updatedAt": "2013-06-01T13:24:47.924Z",
        "_id": "506de3028eebf7524342cb49",
        "type": "High Pressure Sodium (HPS)",
        "watts": 300,
        "brand": "",
        "name": "High Pressure Sodium (HPS)",
        "__v": 0,
        "visibility": "public",
        "bulbCapacity": 1
    }, {
        "createdAt": "2013-06-01T13:24:47.925Z",
        "updatedAt": "2013-06-01T13:24:47.925Z",
        "_id": "506de3028eebf7524342cb48",
        "type": "Metal Halide",
        "watts": 250,
        "brand": "",
        "name": "Metal Halide",
        "__v": 0,
        "visibility": "public",
        "bulbCapacity": 1
    }, {
        "createdAt": "2013-06-01T13:24:47.925Z",
        "updatedAt": "2013-06-01T13:24:47.925Z",
        "_id": "506de3028eebf7524342cb47",
        "type": "Compact fluorescent",
        "watts": 40,
        "brand": "",
        "name": "Any fixture that takes 1 standard CFL bulb.",
        "__v": 0,
        "visibility": "public",
        "bulbCapacity": 1
    }, {
        "createdAt": "2013-06-01T13:24:47.926Z",
        "updatedAt": "2013-06-01T13:24:47.926Z",
        "_id": "506de3028eebf7524342cb4a",
        "type": "LED",
        "watts": 10,
        "brand": "",
        "name": "LED",
        "__v": 0,
        "visibility": "public",
        "bulbCapacity": 1
    }, {
        "createdAt": "2013-09-12T04:02:26.852Z",
        "updatedAt": "2013-09-12T04:02:26.852Z",
        "_id": "51b0daa65dd0f94858bac8dd",
        "type": "Fluorescent",
        "watts": 36,
        "brand": "Hydrofarm",
        "name": "T5 1-tube 3-foot System",
        "__v": 0,
        "visibility": "public",
        "bulbCapacity": 1
    }],
    "lightBulbs": [{
        "createdAt": "2013-06-01T13:24:47.915Z",
        "updatedAt": "2013-06-01T13:24:47.915Z",
        "_id": "506de3018eebf7524342cb44",
        "type": "High Pressure Sodium (HPS)",
        "watts": 300,
        "brand": "",
        "name": "High Pressure Sodium (HPS)",
        "__v": 0,
        "visibility": "public"
    }, {
        "createdAt": "2013-06-01T13:24:47.915Z",
        "updatedAt": "2013-06-01T13:24:47.915Z",
        "_id": "506de3018eebf7524342cb43",
        "type": "Metal Halide",
        "watts": 250,
        "brand": "",
        "name": "Metal Halide",
        "__v": 0,
        "visibility": "public"
    }, {
        "createdAt": "2013-06-01T13:24:47.916Z",
        "updatedAt": "2013-06-01T13:24:47.916Z",
        "_id": "506de3018eebf7524342cb42",
        "type": "CFL",
        "watts": 40,
        "brand": "",
        "name": "Any standard CFL bulb",
        "__v": 0,
        "visibility": "public"
    }, {
        "createdAt": "2013-06-01T13:24:47.916Z",
        "updatedAt": "2013-06-01T13:24:47.916Z",
        "_id": "506de3008eebf7524342cb41",
        "type": "Fluorescent",
        "watts": 12,
        "brand": "Hydrofarm",
        "name": "2-foot T5 bulb",
        "__v": 0,
        "visibility": "public"
    }, {
        "createdAt": "2013-06-01T13:24:47.918Z",
        "updatedAt": "2013-06-01T13:24:47.918Z",
        "_id": "506de3018eebf7524342cb45",
        "type": "LED",
        "watts": 10,
        "brand": "",
        "name": "LED",
        "__v": 0,
        "visibility": "public"
    }, {
        "createdAt": "2013-09-12T04:02:26.848Z",
        "updatedAt": "2013-09-12T04:02:26.848Z",
        "_id": "51b0dad85dd0f94858bac8de",
        "type": "Fluorescent",
        "watts": 36,
        "brand": "",
        "name": "3-foot T5 Fluorescent Tube",
        "__v": 0,
        "visibility": "public"
    }],
    "nutrients": [{
        "createdAt": "2013-06-01T13:24:47.822Z",
        "updatedAt": "2013-06-01T13:24:47.822Z",
        "_id": "506de3038eebf7524342cb4b",
        "name": "Grow",
        "brand": "Humbolt Nutrients",
        "__v": 0,
        "visibility": "public"
    }, {
        "createdAt": "2013-06-01T13:24:47.822Z",
        "updatedAt": "2013-06-01T13:24:47.822Z",
        "_id": "506de3038eebf7524342cb4c",
        "name": "Bloom",
        "brand": "Humbolt Nutrients",
        "__v": 0,
        "visibility": "public"
    }, {
        "createdAt": "2013-06-01T13:24:47.823Z",
        "updatedAt": "2013-06-01T13:24:47.823Z",
        "_id": "506de3038eebf7524342cb4d",
        "name": "Micro",
        "brand": "Humbolt Nutrients",
        "__v": 0,
        "visibility": "public"
    }, {
        "createdAt": "2013-09-12T04:02:26.773Z",
        "updatedAt": "2013-09-12T04:02:26.773Z",
        "_id": "51b0dc685dd0f94858bac8e1",
        "name": "Bloom",
        "brand": "FloraGro",
        "__v": 0,
        "visibility": "public"
    }, {
        "createdAt": "2013-09-12T04:02:26.775Z",
        "updatedAt": "2013-09-12T04:02:26.775Z",
        "_id": "51b0dc5e5dd0f94858bac8e0",
        "name": "Grow",
        "brand": "FloraGro",
        "__v": 0,
        "visibility": "public"
    }],
    "growPlanDefault": {
        "createdAt": "2013-06-01T13:24:48.119Z",
        "updatedAt": "2013-06-01T13:24:48.119Z",
        "_id": "506de30c8eebf7524342cb70",
        "createdBy": "506de30a8eebf7524342cb6c",
        "name": "All-Purpose",
        "description": "A generic grow plan suitable for running a garden with a wide variety of plants. It won't get you optimum yields for everything, but it's a good starting point while you learn about the specific needs of your plants.",
        "__v": 0,
        "visibility": "public",
        "phases": [{
            "_id": "506de30c8eebf7524342cb72",
            "name": "Seedling",
            "description": "Seedling phase, from planting seeds until first true leaves appear. The Bitponics device isn't necessary for this phase since seedlings do fine with just plain tap water, and most seed-starting systems are too small for the water sensors anyway. This phase is for the \"All-Purpose\" grow plan so its sensor ranges aren't optimal for any specific plant, but instead describe a range that should be adequate for most plants.",
            "expectedNumberOfDays": 7,
            "light": "515a540205e45bc5a590301b",
            "growSystem": {
                "createdAt": "2013-06-01T13:24:47.951Z",
                "updatedAt": "2013-06-01T13:24:47.951Z",
                "_id": "506de3008eebf7524342cb40",
                "name": "Egg-carton seed starter",
                "description": "Seed-starting system made with a plastic egg carton. For full directions on how to make one, go here: http://bitponics.com/guides/water-culture-system. And this system doesn't have room for pH and EC sensors, but you won't need them anyway since in the seed-starting phase you just use plain tap water. So just put the caps on those sensors, unplug them and store them aside until you get to the next phase.",
                "type": "deep water culture (DWC)",
                "reservoirSize": 0.1,
                "plantCapacity": 12,
                "__v": 0,
                "visibility": "public"
            },
            "growMedium": "rockwool",
            "phaseEndDescription": "This phase is over once the seedlings start growing their first true leaves.",
            "nutrients": [],
            "idealRanges": [{
                "_id": "506de30c8eebf7524342cb71",
                "sCode": "water",
                "actionBelowMin": "506de30c8eebf7524342cb73",
                "actionAboveMax": "506de30d8eebf7524342cb75",
                "valueRange": {
                    "min": 18.33,
                    "max": 21.11
                }
            }, {
                "_id": "506de30d8eebf7524342cb76",
                "sCode": "air",
                "actionBelowMin": "506de2fc8eebf7524342cb2b",
                "actionAboveMax": "506de2fb8eebf7524342cb2a",
                "valueRange": {
                    "min": 12.77,
                    "max": 27
                }
            }, {
                "_id": "506de30b8eebf7524342cb6e",
                "sCode": "lux",
                "actionBelowMin": "506de2fb8eebf7524342cb28",
                "actionAboveMax": "506de2fb8eebf7524342cb29",
                "applicableTimeSpan": {
                    "startTime": 21600000,
                    "endTime": 79200000
                },
                "valueRange": {
                    "min": 2000,
                    "max": 4000
                }
            }],
            "phaseEndActions": [{
                "createdAt": "2013-06-01T13:24:48.013Z",
                "updatedAt": "2013-06-01T13:24:48.013Z",
                "_id": "506de2ec8eebf7524342cb24",
                "description": "Transplant seedlings into the grow bed",
                "__v": 0,
                "cycle": {
                    "offset": {
                        "duration": 0
                    },
                    "states": []
                }
            }],
            "actions": [{
                "createdAt": "2013-06-01T13:24:48.044Z",
                "updatedAt": "2013-06-01T13:24:48.044Z",
                "_id": "506de3128eebf7524342cb87",
                "description": "Water level check",
                "__v": 0,
                "cycle": {
                    "repeat": true,
                    "offset": {
                        "durationType": "hours",
                        "duration": 8
                    },
                    "states": [{
                        "message": "Check water level in seed tray. Make sure there's a thin layer at the bottom of the tray to last the seedlings through the day."
                    }, {
                        "durationType": "days",
                        "duration": 1
                    }]
                }
            }, {
                "createdAt": "2013-06-01T13:24:48.034Z",
                "updatedAt": "2013-06-01T13:24:48.034Z",
                "_id": "506de2f18eebf7524342cb27",
                "description": "Light cycle, with lights on between 6am and 10pm.",
                "control": "506de2fd8eebf7524342cb32",
                "__v": 0,
                "cycle": {
                    "repeat": true,
                    "offset": {
                        "durationType": "hours",
                        "duration": 6
                    },
                    "states": [{
                        "controlValue": "1",
                        "durationType": "hours",
                        "duration": 16
                    }, {
                        "controlValue": "0",
                        "durationType": "hours",
                        "duration": 8
                    }]
                }
            }]
        }, {
            "_id": "506de30e8eebf7524342cb78",
            "name": "Vegetative",
            "description": "Open-ended vegetative phase. Bring in any existing plants or seedlings with their first pair of true leaves.",
            "expectedNumberOfDays": 28,
            "light": "515a540a05e45bc5a590301d",
            "growSystem": {
                "createdAt": "2013-06-01T13:24:47.951Z",
                "updatedAt": "2013-06-01T13:24:47.951Z",
                "_id": "506de30d8eebf7524342cb77",
                "name": "Bitponics Water Culture System",
                "description": "The system provided to our Kickstarter backers.",
                "type": "deep water culture (DWC)",
                "reservoirSize": 4.5,
                "plantCapacity": 6,
                "__v": 0,
                "visibility": "public"
            },
            "growMedium": "hydroton",
            "nutrients": [{
                "createdAt": "2013-06-01T13:24:47.822Z",
                "updatedAt": "2013-06-01T13:24:47.822Z",
                "_id": "506de3038eebf7524342cb4b",
                "name": "Grow",
                "brand": "Humbolt Nutrients",
                "__v": 0,
                "visibility": "public"
            }, {
                "createdAt": "2013-06-01T13:24:47.822Z",
                "updatedAt": "2013-06-01T13:24:47.822Z",
                "_id": "506de3038eebf7524342cb4c",
                "name": "Bloom",
                "brand": "Humbolt Nutrients",
                "__v": 0,
                "visibility": "public"
            }, {
                "createdAt": "2013-06-01T13:24:47.823Z",
                "updatedAt": "2013-06-01T13:24:47.823Z",
                "_id": "506de3038eebf7524342cb4d",
                "name": "Micro",
                "brand": "Humbolt Nutrients",
                "__v": 0,
                "visibility": "public"
            }],
            "idealRanges": [{
                "_id": "506de30b8eebf7524342cb6d",
                "sCode": "lux",
                "actionBelowMin": "506de2fb8eebf7524342cb28",
                "actionAboveMax": "506de2fb8eebf7524342cb29",
                "applicableTimeSpan": {
                    "startTime": 21600000,
                    "endTime": 79200000
                },
                "valueRange": {
                    "min": 15000,
                    "max": 27000
                }
            }, {
                "_id": "506de30b8eebf7524342cb6f",
                "sCode": "air",
                "actionBelowMin": "506de2fc8eebf7524342cb2b",
                "actionAboveMax": "506de2fb8eebf7524342cb2a",
                "valueRange": {
                    "min": 30,
                    "max": 60
                }
            }],
            "phaseEndActions": [],
            "actions": [{
                "createdAt": "2013-06-01T13:24:48.040Z",
                "updatedAt": "2013-06-01T13:24:48.040Z",
                "_id": "506de2ef8eebf7524342cb25",
                "description": "Reservior refill cycle",
                "__v": 0,
                "cycle": {
                    "repeat": true,
                    "offset": {
                        "duration": 0
                    },
                    "states": [{
                        "message": "Flush and refill reservoir. Discard any solution in the reservoir, rinse the entire system with water. Then refill the reservoir to capacity with water. Mix in ¼ cup Grow nutrient, then ¼ cup Bloom nutrient, then ¼ cup Micro nutrient."
                    }, {
                        "durationType": "weeks",
                        "duration": 3
                    }]
                }
            }, {
                "createdAt": "2013-06-01T13:24:48.037Z",
                "updatedAt": "2013-06-01T13:24:48.037Z",
                "_id": "506de2f08eebf7524342cb26",
                "description": "Water pump cycle",
                "control": "506de2fc8eebf7524342cb2d",
                "__v": 0,
                "cycle": {
                    "repeat": true,
                    "offset": {
                        "duration": 0
                    },
                    "states": [{
                        "controlValue": "1",
                        "durationType": "minutes",
                        "duration": 15
                    }, {
                        "controlValue": "0",
                        "durationType": "minutes",
                        "duration": 15
                    }]
                }
            }, {
                "createdAt": "2013-06-01T13:24:48.034Z",
                "updatedAt": "2013-06-01T13:24:48.034Z",
                "_id": "506de2f18eebf7524342cb27",
                "description": "Light cycle, with lights on between 6am and 10pm.",
                "control": "506de2fd8eebf7524342cb32",
                "__v": 0,
                "cycle": {
                    "repeat": true,
                    "offset": {
                        "durationType": "hours",
                        "duration": 6
                    },
                    "states": [{
                        "controlValue": "1",
                        "durationType": "hours",
                        "duration": 16
                    }, {
                        "controlValue": "0",
                        "durationType": "hours",
                        "duration": 8
                    }]
                }
            }]
        }],
        "plants": []
    },
    "utils": {
        "DURATION_TYPES": ["seconds", "minutes", "hours", "days", "weeks", "months"],
        "NOTIFICATION_TYPES": {
            "INFO": "info",
            "ACTION_NEEDED": "actionNeeded",
            "ERROR": "error"
        },
        "NOTIFICATION_TRIGGERS": {
            "PHASE_END": "phase-end",
            "PHASE_END_ACTION": "phase-end-action",
            "PHASE_START": "phase-start",
            "PHASE_ACTION": "phase-action",
            "IDEAL_RANGE_VIOLATION": "ideal-range-violation",
            "IMMEDIATE_ACTION": "immediate-action",
            "PHASE_ENDING_SOON": "phase-ending-soon",
            "GROW_PLAN_UPDATE": "grow-plan-update",
            "DEVICE_MISSING": "device-missing"
        },
        "ACCESSORY_VALUES": {
            "ON": "1",
            "OFF": "0"
        },
        "VISIBILITY_OPTIONS": {
            "PRIVATE": "private",
            "PUBLIC": "public"
        },
        "CALIB_MODES": {
            "PH_4": "ph_4",
            "PH_7": "ph_7",
            "PH_10": "ph_10",
            "PH_DONE": "ph_done",
            "EC_DRY": "ec_dr",
            "EC_LO": "ec_lo",
            "EC_HI": "ec_hi",
            "EC_DONE": "ec_done"
        },
        "CALIB_LOG_TYPES": {
            "PH": "ph",
            "EC": "ec"
        },
        "CALIB_STATUSES": {
            "SUCCESS": "success",
            "ERROR": "error"
        },
        "PHASE_DAY_SUMMARY_STATUSES": {
            "GOOD": "good",
            "BAD": "bad",
            "EMPTY": "empty"
        },
        "MIME_TYPES": {
            "JSON": "application/json",
            "BITPONICS": {
                "PREFIX": "application/vnd.bitponics",
                "V1": {
                    "DEVICE_TEXT": "application/vnd.bitponics.v1.deviceText"
                },
                "V2": {
                    "DEVICE_TEXT": "application/vnd.bitponics.v2.deviceText"
                }
            }
        },
        "PRODUCT_TYPES": {
            "ACCESSORY": "accessory",
            "HARDWARE": "hardware",
            "SERVICE_PLAN": "service-plan"
        },
        "FULFILLMENT_STATUSES": {
            "PENDING": "pending",
            "SHIPPED": "shipped",
            "COMPLETE": "complete"
        },
        "ORDER_STATUSES": {
            "ACTIVE_CART": "active-cart",
            "SUBMITTED": "submitted",
            "PAID": "paid",
            "COMPLETE": "complete"
        },
        "PRODUCT_IDS": {
            "BPN_HARDWARE_BASE-STATION_1": "BPN_HARDWARE_BASE-STATION_1",
            "BPN_ACC_EC-PROBE": "BPN_ACC_EC-PROBE",
            "BPN_WEB_FREE": "BPN_WEB_FREE",
            "BPN_WEB_PREMIUM_MONTHLY": "BPN_WEB_PREMIUM_MONTHLY",
            "BPN_WEB_ENTERPRISE_MONTHLY": "BPN_WEB_ENTERPRISE_MONTHLY"
        },
        "COMBINED_DEVICE_KEY_SPLITTER": "|",
        "suggestions": {
            "lightTypes": ["Fluorescent", "Metal Halide", "High Pressure Sodium (HPS)", "LED"],
            "growSystemNames": ["Flood & Drain", "NFT (Nutrient Film Technique)", "Deep Water Culture (DWC)", "Aquaponic"]
        }
    }
};