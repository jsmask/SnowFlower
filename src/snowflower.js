const electron = require('electron');
const { remote } = electron;

class SnowFlower {
    constructor({ parent }) {
        this.area = remote.screen.getPrimaryDisplay().workAreaSize
        this.y = -20;
        this.x = this.area.width * Math.random();
        this.angle = 0;
        this.speedX = (Math.random() + 1) * 0.2 * (Math.random() > 0.5 ? 1 : -1);
        this.speedY = (Math.random() * 1.5 + 1);
        this.speedRotation = (Math.random() + 1) * (Math.random() > 0.5 ? 1 : -1);
        this.img = this.create();
        this.parent = parent;
    }
    render() {
        if (!this.parent) return;
        this.parent.append(this.img);
        this.move();
        return this;
    }
    create() {
        let snow = document.createElement("img");
        snow.src = "res/snow.png";
        snow.width = Math.random() * 15 + 10;
        snow.style.position = "absolute";
        snow.style.display = "none";
        return snow;
    }
    move() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.angle += this.speedRotation;
        this.img.style.transform = `translate(${this.x}px,${this.y}px) rotate(${this.angle}deg)`;
        this.img.style.display = "block";
        if (this.x < - this.img.width || this.x > this.area.width + this.img.width || this.y > this.area.height + this.img.height) {
            this.img.parentNode.removeChild(this.img);
        } else {
            window.requestAnimationFrame(() => this.move());
        }
    }
}

module.exports = SnowFlower;
