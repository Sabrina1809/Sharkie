class Character extends MovableObject {
    speed = 8;
    IMAGES_SWIMMING = [
        'img/1.Sharkie/3.Swim/1.png',
        'img/1.Sharkie/3.Swim/2.png',
        'img/1.Sharkie/3.Swim/3.png',
        'img/1.Sharkie/3.Swim/4.png',
        'img/1.Sharkie/3.Swim/5.png',
        'img/1.Sharkie/3.Swim/6.png',
    ];
    world; 

    swimming_sound = new Audio('audio/big-bubble-1-169075.mp3');

    constructor() {
        super().loadImage('../img/1.Sharkie/1.IDLE/1.png');
        this.loadImages(this.IMAGES_SWIMMING);

        this.animate();

        this.height = 300;
        this.width = 300;
        this.x = -50;
        this.y = 0
    }

    animate() {
        setInterval(() => {
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.x += this.speed;
                this.otherDirection = false;
                this.swimming_sound.play();

            }
            if (this.world.keyboard.LEFT && this.x > 0 ) {
                this.x -= this.speed;
                this.otherDirection = true;
                this.swimming_sound.play();
            }
            this.world.camera_x = -this.x + 100;
        }, 1000/60);

        setInterval(() => {
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
              
                //swim moves
                this.playAnimation(this.IMAGES_SWIMMING);
                // let i = this.currentImage % this.IMAGES_SWIMMING.length;
                // let path = this.IMAGES_SWIMMING[i];
                // this.img = this.imageCache[path];
                // this.currentImage++
            }
      
        }, 200)
    }

    jump() {

    }
}