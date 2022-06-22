

const SHAPES = [
    //square
    {
        shape: [
            {x:0, y:0},
            {x:0, y:1},
            {x:1, y:0},
            {x:1, y:1}
        ],
        width: 2,
        height: 2,
        type: 2,
        rotate: false
    },
    //long
    {
        shape: [
            {x:0, y:0},
            {x:0, y:1},
            {x:0, y:2},
            {x:0, y:3}
        ],
        width: 1,
        height: 4,
        type: 1
    },
    // L
    {
        shape: [
            {x:0, y:0},
            {x:0, y:1},
            {x:0, y:2},
            {x:1, y:2}
        ],
        width: 1,
        height: 3,
        type: 3
    },
    // reverse L
    {
        shape: [
            {x:1, y:0},
            {x:0, y:2},
            {x:1, y:2},
            {x:1, y:1}
        ],
        width: 2,
        height: 3,
        type: 4
    },
    // T shape
    {
        shape: [
            {x:1, y:0},
            {x:0, y:1},
            {x:1, y:2},
            {x:1, y:1}
        ],
        width: 2,
        height: 3,
        type: 5
    },
    // Z shape
    {
        shape: [
            {x:0, y:0},
            {x:0, y:1},
            {x:1, y:1},
            {x:1, y:2}
        ],
        width: 2,
        height: 3,
        type: 6
    },
    // S shape
    {
        shape: [
            {x:1, y:0},
            {x:1, y:1},
            {x:0, y:1},
            {x:0, y:2}
        ],
        width: 2,
        height: 3,
        type: 7
    }
];

export function randomShape() {
    return SHAPES[Math.floor(Math.random() * SHAPES.length)];
}