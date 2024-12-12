class World {
    character = new Character();
    enemies = [
        new Enemie(),
        new Enemie(),
        new Enemie(),
    ];
    lights = [
        new Light()
    ];
    backgroundObjects = [
        new BackgroundObject('../img/3. Background/Layers/5. Water/D1.png', 0, 0, 480),
        new BackgroundObject('../img/3. Background/Layers/4.Fondo 2/D1.png', 0, 200, 200),
        new BackgroundObject('../img/3. Background/Layers/3.Fondo 1/D1.png', 0, 0, 480),
        new BackgroundObject('../img/3. Background/Layers/2. Floor/D1.png', 0, 0, 480),
       
    ]
    canvas;
    ctx;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.addObjectsToMap(this.backgroundObjects);
        this.addObjectsToMap(this.lights);
        this.addToMap(this.character)
        this.addObjectsToMap(this.enemies);
       

        //draw() wird immer wieder aufgerufen
        self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
    };

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(movableObject) {
        this.ctx.drawImage(movableObject.img, movableObject.x, movableObject.y, movableObject.width, movableObject.height);
    }
    
}