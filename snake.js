function DirtoVel(dir) {
    switch (dir) {
        case 'left':
            return{x: -1, y: 0}
        case 'up':
            return{x: 0, y: -1}
        case 'down':
            return{x: 0, y: 1}
        case 'right':
            return{x: 1, y: 0}
    }
}

function drawS(x, y, w) {
    square((x + width)%width, (y + height)%height, w)
    // for (let i = 0; i < this.body.length; i++) {
    //     this.body[i].draw()
    // }
}

class Snake{
    constructor(head, width, direction = 'right') {
        this.head = {
            x: head[0],
            y: head[1]
        }
        this.width = width
        this.vel = DirtoVel(direction)
        this.length = 3
        this.body = []
        this.body.push({x:this.head.x-this.width*1, y:this.head.y}, {x:this.head.x-this.width*2, y:this.head.y})
    }

    eatApple() {
        this.length += 1
    }

    update(dir='right') {
        this.body.unshift({x:this.head.x,y:this.head.y})
        this.vel = DirtoVel(dir)

        if (this.head.x == width - this.width && this.vel.x == 1) {
            this.head.x = 0
        } else if (this.head.y == height - this.width && this.vel.y == 1) {
            this.head.y = 0
        } else if (this.head.x == 0 && this.vel.x == -1) {
            this.head.x = width - this.width
        } else if (this.head.y == 0 && this.vel.y == -1) {
            this.head.y = height - this.width
        } else {
            this.head.x += this.vel.x * this.width
            this.head.y += this.vel.y * this.width
        }

        if (this.body.length > this.length-1) {
            this.body.pop()
        }
        this.draw()
        return this.body.concat(this.head)
    }

    draw() {
        drawS(this.head.x, this.head.y, this.width)
        for (let i = 0; i < this.body.length; i++) {
            drawS(this.body[i].x, this.body[i].y, this.width)
        }
    }
}

class Apple{
    constructor(wi) {
        this.x = wi*floor(cols/3)*2
        this.y = floor(rows/2)*wi
        this.width = wi
    }

    update(snake_data) {
        this.unavailable = snake_data
        this.snake_head = snake_data[snake_data.length-1]
    }

    check() {
        if (this.snake_head.x == this.x && this.snake_head.y == this.y) {
            snake.eatApple()
            let coords = this.randomize()
            this.x = coords[0]
            this.y = coords[1]
        }
    }

    randomize() {
        let x_val = floor(random(cols))*this.width
        let y_val = floor(random(rows))*this.width
        for (let i = 0; i < this.unavailable.length; i++) {
            if (this.unavailable[i].x == x_val && this.unavailable[i].y == y_val) {
                return(this.randomize())
            }
        }
        return([x_val, y_val])
    }

    draw() {
        fill(255,0,0)
        drawS(this.x, this.y, this.width)
        fill(255)
    }
}