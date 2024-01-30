
const render = {
    init(gameObject) {
        gameObject.tool.fillStyle = "#00FFFF";
        gameObject.tool.fillRect(0, 0, window.innerWidth, window.innerHeight);
        gameObject.tool.drawImage(mountainImage, 40, 40, 200, 150);
    }
}


class Game{
    
    init() {
        //basic setup. initialis
        const canvas = document.querySelector(".canvas");
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
        const tool = canvas.getContext("2d");

        let gameObject = {
            tool, canvas
        }

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

