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


class Snake{
    constructor(head, width, direction = 'right') {
        this.head = {
            x: head[0],
            y: head[1]
        }
        this.width = width
        this.vel = DirtoVel(direction)
    }

    update(dir='right') {
        this.vel = DirtoVel(dir)
        this.head.x += this.vel.x * this.width
        this.head.y += this.vel.y * this.width
    }

    draw() {
        square((this.head.x + width)%width, (this.head.y + height)%height, this.width)
    }
}
