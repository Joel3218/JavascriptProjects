
const render = {
    init(gameObject) {
        gameObject.tool.fillStyle = "#00FFFF";
        gameObject.tool.fillRect(0, 0, window.innerWidth, window.innerHeight);
      //  gameObject.tool.drawImage(castleImage, 40, 40, 200, 150);
       let mario =  gameObject.entities.mario;
       gameObject.tool.drawImage(
        mario.sprite.img, 
        mario.sprite.srcX,
        mario.sprite.srcY,
        mario.sprite.srcW,
        mario.sprite.srcH,
        mario.posX,
        mario.posY,
        mario.width,
        mario.height)
    }
}


class Game{
    
    init() {
        //basic setup, initialise
        const canvas = document.querySelector(".canvas");
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
        const tool = canvas.getContext("2d");
        let entities = {}

        let gameObject = {
            tool, canvas, entities
        }
      //  tool.scale(1.5, 1.5);
       let mario = new Mario(spriteSheetImage, 250, 250, 18, 18);
       gameObject.entities.mario = mario;
        render.init(gameObject);
       
    }

    run() {

    }

    reset() {
        location.reload();
    }

}

preload().then(function() {
    console.log(castleImage);
    console.log(cloudImage);
    console.log(mountainImage);
    console.log(spriteSheetImage);
    console.log(tileImage);
    console.log("now game will start");
    const game = new Game();
    game.init();
})

