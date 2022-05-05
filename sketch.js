let w = 20
let cols
let rows
let grid, temp
let snake
let direction

function make2DArray(x, y) {
    let arr = []
    for (let i = 0; i < x; i ++) {
        arr.push([])
        for (let j = 0; j < y; j++) {
            arr[i].push(0)
        }
    }
    return arr
}

function setup() {
    createCanvas(600,600)
    frameRate(10)
    cols = width/w
    rows = height/w
    grid = make2DArray(cols, rows)
    temp = make2DArray(cols, rows)
    snake = new Snake([0, height/2], w)
    
    direction = 'right'
}

function draw() {
    background(0)
    stroke(0)
    strokeWeight(1)
    snake.draw()
    if (key.startsWith('Arrow')) {
        let k = key.substr(5).toLowerCase()
        if (key.endsWith('Right') && direction != 'left') {
            direction = k
        } else if (key.endsWith('Left') && direction != 'right') {
            direction = k
        } else if (key.endsWith('Up') && direction != 'down') {
            direction = k
        } else if (key.endsWith('Down') && direction != 'up') {
            direction = k
        }
    }
    console.log(direction, key)
    snake.update(direction)







    // console.log(snake1.dir)
    // console.log(`Snake = ${snake.head.x}, ${snake.head.y} \n Snake1 = ${snake1.head.x},${snake1.head.y}`)
}