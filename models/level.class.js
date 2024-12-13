class Level {
    enemies;
    lights;
    backgroundObjects;
    endboss;
    level_end_x = 700*3;

    constructor(enemies, lights, backgroundObjects, endboss) {
        this.enemies = enemies;
        this.lights = lights;
        this.backgroundObjects = backgroundObjects;
        this.endboss = endboss;
    }
}