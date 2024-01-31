class Sprite{
    constructor(img, srcX, srcY, srcW, srcH) {
        this.img = img;
        this.srcX = srcX;
        this.srcY = srcY;
        this.srcW = srcW;
        this.srcH = srcH;
    }
}

// place mario on the game
// game coordinates
class Entity {
    constructor(sprite, type, posX, posY,  width, height) {
        this.sprite = sprite;
        this.posX= posX;
        this.posY = posY;
        this.type = type;
        this.width = width;
        this.height = height;
    }
}

class Mario extends Entity{
    constructor(spritesheet, posX, posY, width, height) {
       let img = new Sprite(spritesheet, 652, 1, 15, 22);      
       super(img, "mario", posX, posY, width, height);
       
    }
    
}
