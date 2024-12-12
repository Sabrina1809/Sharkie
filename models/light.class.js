class Light extends MovableObject {
    y = 0;
    width = 400;
    height = 300;

    constructor() {
        super().loadImage('../img/3. Background/Layers/1. Light/1.png');
        this.x = Math.random() * 500;
        this.animate();
       
    }

    animate() {
        setInterval(() => {
            this.x -= 0.25;
        }, 1000/60)
       
    }
}