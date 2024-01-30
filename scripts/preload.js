const castleImage = new Image();
const cloudImage = new Image();
const mountainImage = new Image();
const spriteSheetImage = new Image();
const tileImage = new Image();

function preload() {
    castleImage.src= "../assets/sprites/castle.png";
    cloudImage.src= "../assets/sprites/clouds.png";
    mountainImage.src= "../assets/sprites/mountain.png";
    spriteSheetImage.src= "../assets/sprites/spritesheet.png";
    tileImage.src= "../assets/sprites/tileset_gutter.png";


    return new Promise(function(resolve, reject){
        let p1 = new Promise(function(resolve, reject) {
        castleImage.addEventListener("load", function() {
            console.log("Image loaded");
            resolve();
            });
        })
        let p2 = new Promise(function(resolve, reject) {
        cloudImage.addEventListener("load", function() {
            console.log("Image loaded");
            resolve();
            });
        })
        let p3 = new Promise(function(resolve, reject) {
         mountainImage.addEventListener("load", function() {
            console.log("Image loaded");
            resolve();
            });
        })
        let p4 = new Promise(function(resolve, reject) {
        spriteSheetImage.addEventListener("load", function() {
            console.log("Image loaded");
            resolve();
            });
        })
        let p5 = new Promise(function(resolve, reject) {
        tileImage.addEventListener("load", function() {
            console.log("Image loaded");
            resolve();
            });
        })
        let BigPromise = Promise.all([p1, p2, p3, p4, p5]);
        BigPromise.then(() => {
            resolve();
        })
    })

}

