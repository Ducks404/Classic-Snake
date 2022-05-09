let w = 20
let cols
let rows
let snake
let direction
let apple
let score = 0

function setup() {
    createCanvas(600,600)
    frameRate(10)
    cols = width/w
    rows = height/w
    snake = new Snake([w*3, floor(rows/2)*w], w)
    apple = new Apple(w)
    
    direction = 'right'
}

function draw() {
    background(0)
    stroke(0)
    strokeWeight(1)
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
    // console.log(direction, key)
    apple.draw()
    snake_data = snake.update(direction)
    if (snake.alive) {
        apple.update(snake_data)
        score += apple.check()
    } else {
        noLoop()
        textAlign(CENTER)
        textSize(width/5)
        textFont('downcome')
        text('YOU DIED', width/2, height/3)
        text(`Score: ${score}`, width/2, height/3*2)
    }
}