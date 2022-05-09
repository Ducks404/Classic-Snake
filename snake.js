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

    update(dir='right') {
        this.draw()
        this.body.unshift({x:this.head.x,y:this.head.y})
        this.vel = DirtoVel(dir)
        this.head.x += this.vel.x * this.width
        this.head.y += this.vel.y * this.width

        if (this.body.length > this.length-1) {
            this.body.pop()
        }
    }

    draw() {
        drawS(this.head.x, this.head.y, this.width)
        for (let i = 0; i < this.body.length; i++) {
            drawS(this.body[i].x, this.body[i].y, this.width)
        }
    }
}