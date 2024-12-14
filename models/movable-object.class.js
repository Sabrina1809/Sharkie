class MovableObject {
    x = 120;
    y = 250;
    img;
    width = 100;
    height = 100;
    imageCache = {};
    currentImage = 0;
    speed = 0.25;
    otherDirection = false;
    speedY = 0;
    acceleration = 0.2;

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround()) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000/25)
    }

    isAboveGround() {
        return this.y < 210;
    }

    upWhileIsOnGround() {
        setInterval(() => {
            if (!this.isAboveGround()) {
                this.y += this.speedY;
                this.speedY += this.acceleration;
            }
        }, 1000/25)
    }

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(array) {
        array.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++
    }

    stopAnimation(images) {
        
    }

    moveRight() {
        this.x += this.speed;
        this.otherDirection = false;
        
        
    }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000/60)
    }
}