///<reference path="World.ts"/>

var ExampleWorlds : {[s:string]: WorldState} = {};


ExampleWorlds["complex"] = {
    "stacks": [["e"],["a","l"],["i","h","j"],["c","k","g","b"],["d","m","f"]],
    "holding": null,
    "arm": 0,
    "objects": {
        "floor": { "form":"floor",   "size":"",  "color":"" },
        "a": { "form":"brick",   "size":"large",  "color":"yellow" },
        "b": { "form":"brick",   "size":"small",  "color":"white" },
        "c": { "form":"plank",   "size":"large",  "color":"red"   },
        "d": { "form":"plank",   "size":"small",  "color":"green" },
        "e": { "form":"ball",    "size":"large",  "color":"white" },
        "f": { "form":"ball",    "size":"small",  "color":"black" },
        "g": { "form":"table",   "size":"large",  "color":"blue"  },
        "h": { "form":"table",   "size":"small",  "color":"red"   },
        "i": { "form":"pyramid", "size":"large",  "color":"yellow"},
        "j": { "form":"pyramid", "size":"small",  "color":"red"   },
        "k": { "form":"box",     "size":"large",  "color":"yellow"},
        "l": { "form":"box",     "size":"large",  "color":"red"   },
        "m": { "form":"box",     "size":"small",  "color":"blue"  }
    },
    "examples": [
        "put a box in a box",
        "put all balls on the floor",
        "take the yellow box",
        "put any object under all tables",
        "put any object under all tables on the floor",
        "put a ball in a small box in a large box",
        "put all balls in a large box",
        "put all balls left of a ball",
        "put all balls beside a ball",
        "put all balls beside every ball",
        "put a box beside all objects",
        "put all red objects above a yellow object on the floor",
        "put all yellow objects under a red object under an object"
    ],
    rowLength: 5
};


ExampleWorlds["medium"] = {
    "stacks": [["e"],["a","l"],[],[],["i","h","j"],[],[],["k","g","c","b"],[],["d","m","f"]],
    "holding": null,
    "arm": 0,
    "objects": {
        "floor": { "form":"floor",   "size":"",  "color":"" },
        "a": { "form":"brick",   "size":"large",  "color":"green" },
        "b": { "form":"brick",   "size":"small",  "color":"white" },
        "c": { "form":"plank",   "size":"large",  "color":"red"   },
        "d": { "form":"plank",   "size":"small",  "color":"green" },
        "e": { "form":"ball",    "size":"large",  "color":"white" },
        "f": { "form":"ball",    "size":"small",  "color":"black" },
        "g": { "form":"table",   "size":"large",  "color":"blue"  },
        "h": { "form":"table",   "size":"small",  "color":"red"   },
        "i": { "form":"pyramid", "size":"large",  "color":"yellow"},
        "j": { "form":"pyramid", "size":"small",  "color":"red"   },
        "k": { "form":"box",     "size":"large",  "color":"yellow"},
        "l": { "form":"box",     "size":"large",  "color":"red"   },
        "m": { "form":"box",     "size":"small",  "color":"blue"  }
    },
    "examples": [
        "put the brick that is to the left of a pyramid in a box",
        "put the white ball in a box on the floor",
        "move the large ball inside a yellow box on the floor",
        "move the large ball inside a red box on the floor",
        "take a red object",
        "take the white ball",
        "put all boxes on the floor",
        "put the large plank under the blue brick",
        "move all bricks on a table",
        "move all balls inside a large box"
    ],
    rowLength: 10
};


ExampleWorlds["small"] = { 
    "stacks": [["e"],["g","l"],[],["k","m","f"],["b"]],
    "holding": "a",
    "arm": 0,
    "objects": {
        "floor": { "form":"floor",   "size":"",  "color":"" },
        "a": { "form":"brick",   "size":"large",  "color":"green" },
        "b": { "form":"brick",   "size":"small",  "color":"blue" },
        "c": { "form":"plank",   "size":"large",  "color":"red"   },
        "d": { "form":"plank",   "size":"small",  "color":"green" },
        "e": { "form":"ball",    "size":"large",  "color":"white" },
        "f": { "form":"ball",    "size":"small",  "color":"black" },
        "g": { "form":"table",   "size":"large",  "color":"blue"  },
        "h": { "form":"table",   "size":"small",  "color":"red"   },
        "i": { "form":"pyramid", "size":"large",  "color":"yellow"},
        "j": { "form":"pyramid", "size":"small",  "color":"red"   },
        "k": { "form":"box",     "size":"large",  "color":"yellow"},
        "l": { "form":"box",     "size":"large",  "color":"red"   },
        "m": { "form":"box",     "size":"small",  "color":"blue"  }
    },
    "examples": [
        "put the yellow box ontop of a table",
        "put a brick in a box on the floor",
        "stack up all blue objects",
				"move the ball beside the box under the table left of the box in the box under the box",
				"move the black ball in a box on the floor"
    ],
    rowLength: 5
};

ExampleWorlds["impossible"] = { 
    "stacks": [["lbrick1","lball1","sbrick1"], [],
               ["lpyr1","lbox1","lplank2","sball2"], [],
               ["sbrick2","sbox1","spyr1","ltable1","sball1"]],
    "holding": null,
    "arm": 0,
    "objects": {
        "floor": { "form":"floor",   "size":"",  "color":"" },
        "lbrick1": { "form":"brick",   "size":"large",  "color":"green" },
        "sbrick1": { "form":"brick",   "size":"small",  "color":"yellow" },
        "sbrick2": { "form":"brick",   "size":"small",  "color":"blue" },
        "lplank1": { "form":"plank",   "size":"large",  "color":"red"   },
        "lplank2": { "form":"plank",   "size":"large",  "color":"black"   },
        "splank1": { "form":"plank",   "size":"small",  "color":"green" },
        "lball1":  { "form":"ball",    "size":"large",  "color":"white" },
        "sball1":  { "form":"ball",    "size":"small",  "color":"black" },
        "sball2":  { "form":"ball",    "size":"small",  "color":"red" },
        "ltable1": { "form":"table",   "size":"large",  "color":"green"  },
        "stable1": { "form":"table",   "size":"small",  "color":"red"   },
        "lpyr1":   { "form":"pyramid", "size":"large",  "color":"white"},
        "spyr1":   { "form":"pyramid", "size":"small",  "color":"blue"   },
        "lbox1":   { "form":"box",     "size":"large",  "color":"yellow"},
        "sbox1":   { "form":"box",     "size":"small",  "color":"red"   },
        "sbox2":   { "form":"box",     "size":"small",  "color":"blue"  }
    },
    "examples": [
        "this is just an impossible world"
    ],
    rowLength: 5
};

ExampleWorlds["3DSmall"] = {
    "stacks": [["e"], ["g"], ["b"], ["k", "f"], [], ["c", "a", "h"], ["l", "j"], ["m"], []],
    //"stacks": [[], ["g"], [], [], [], [], ["j"], ["m"], []],
    "holding": "a",
    "arm": 0,
    "objects": {
        "floor": { "form": "floor", "size": "", "color": "" },
        "a": { "form": "pyramid", "size": "large", "color": "green" },
        "b": { "form": "brick", "size": "small", "color": "white" },
        "c": { "form": "plank", "size": "large", "color": "red" },
        "d": { "form": "plank", "size": "small", "color": "green" },
        "e": { "form": "ball", "size": "large", "color": "white" },
        "f": { "form": "ball", "size": "small", "color": "black" },
        "g": { "form": "table", "size": "large", "color": "blue" },
        "h": { "form": "table", "size": "small", "color": "red" },
        "i": { "form": "pyramid", "size": "large", "color": "yellow" },
        "j": { "form": "brick", "size": "small", "color": "blue" },
        "k": { "form": "box", "size": "large", "color": "yellow" },
        "l": { "form": "box", "size": "large", "color": "red" },
        "m": { "form": "box", "size": "small", "color": "blue" }
    },
    "examples": [
        "put the white ball behind of the red box",
        "put the yellow box on the table",
        "stack all blue objects"
    ],
    rowLength: 3
};

ExampleWorlds["3DMedium"] = {
    "stacks": [["e"], [], ["g", "s", "d"], ["k", "f"], ["i", "t"], ["c", "a", "h", "r"], ["l", "j"], ["m"], ["n", "u"], ["o", "p"], ["b"], ["q"]],
    //"stacks": [[], ["g"], [], [], [], [], ["j"], ["m"], []],
    "holding": "a",
    "arm": 0,
    "objects": {
        "floor": { "form": "floor", "size": "", "color": "" },
        "a": { "form": "pyramid", "size": "large", "color": "green" },
        "b": { "form": "brick", "size": "small", "color": "white" },
        "c": { "form": "plank", "size": "large", "color": "red" },
        "d": { "form": "plank", "size": "small", "color": "green" },
        "e": { "form": "ball", "size": "large", "color": "white" },
        "f": { "form": "ball", "size": "small", "color": "black" },
        "g": { "form": "table", "size": "large", "color": "blue" },
        "h": { "form": "table", "size": "small", "color": "red" },
        "i": { "form": "pyramid", "size": "large", "color": "yellow" },
        "j": { "form": "brick", "size": "small", "color": "blue" },
        "k": { "form": "box", "size": "large", "color": "yellow" },
        "l": { "form": "box", "size": "large", "color": "red" },
        "m": { "form": "box", "size": "small", "color": "blue" },
        "n": { "form": "box", "size": "large", "color": "blue" },
        "o": { "form": "table", "size": "large", "color": "yellow" },
        "p": { "form": "table", "size": "small", "color": "green" },
        "q": { "form": "brick", "size": "large", "color": "blue" },
        "r": { "form": "pyramid", "size": "small", "color": "blue" },
        "s": { "form": "pyramid", "size": "large", "color": "black" },
        "t": { "form": "box", "size": "small", "color": "black" },
        "u": { "form": "ball", "size": "large", "color": "yellow" }
    },
    "examples": [
        "stack up all black objects",
        "put the yellow box on the table",
        "stack all blue objects"
    ],
    rowLength: 4
};