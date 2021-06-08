var gameState = "start";
var button;
var plasticBottle;
var wood_plank;
var plasticBottleGroup
var plasticBagGroup
var tunaGroup
var lionFishGroup
var slowDownTimer = 0;
var trashCount = 0;
var score = 0;
var lives = 5;

function preload(){
    loading_screen = loadImage("./images/loadingscreen.png")
    plank = loadImage("./images/plank.png");
    level_one = loadImage("./images/levelone.png");
    level_two_bg = loadImage("./images/leveltwo.png")
    bubbles = loadSound("./sounds/bubbles.mp3")
    tunaImg = loadImage("./images/fish_two.png");
    plasticBottleImg = loadImage("./images/plastic_bottle.png")
    plasticBagImg = loadImage("./images/plastic_bag.png")
    lionFishImg = loadImage("./images/lionfish.png")

}
function setup(){
    tunaGroup = new Group();
    lionFishGroup = new Group();
    plasticBottleGroup = new Group();
    plasticBagGroup = new Group();
    createCanvas(1280,670);
    game = new Game();
    game.start();
    wood_plank = createSprite(100,100);
    wood_plank.addImage(plank);
    wood_plank.scale = 0.5;
}
function draw(){
    if(gameState === "start") {
        background(loading_screen)
    }
    if(gameState === "instructions") {
        background(level_one);
        textSize(20);
        stroke("white")
        fill("white")
        text("Instructions: Press the up arrow key to go up,", 480,330)
        text("down arrow key to go down, left arrow", 480,350)
        text("key to move backwards, right arrow key to move", 480,370)
        text("forwards, and R to rotate.", 480,390)
        game.instructions();
    }
    if(gameState === "lvl_one"){
        background(level_one)
        textSize(20);
        stroke("white")
        fill("white")
        text("Your score for level one is currently: " + score, 100,100)
        text("Lives left:  " + lives, 1000,100)
        controls(wood_plank, 3, 3.5, 3.5, 3.5, 10);
        first_level();
        for(var i = 0; i < plasticBottleGroup.length; i++){
            if(plasticBottleGroup.get(i).isTouching(wood_plank)){
                plasticBottleGroup.get(i).destroy();
                score = score+5;
                trashCount = trashCount+1
            }
        }
        for(var i = 0; i < plasticBagGroup.length; i++){
            if(plasticBagGroup.get(i).isTouching(wood_plank)){
                plasticBagGroup.get(i).destroy();
                score = score+5;
                trashCount = trashCount+1
            }
        }
        if(trashCount === 10){
            gameState = "win"
        }
        if(lives <= 0){
            gameState = "lose"
        }
        drawSprites();
    }
    if(gameState === "win"){
        background(level_two_bg)
        textSize(20);
        stroke("white")
        fill("white")
        text("I see that you have passed level one!", 480,330)
        text("Congratulations on avoiding the fish!", 480,350)
        text("You did it!", 480,370)
        text("Keep on conquering the ocean!", 480,390);
        text("Final Score: " + score, 480,410);
    }
    if(gameState === "lose"){
        background(level_two_bg)
        textSize(20);
        stroke("white")
        fill("white")
        text("Oh No! You lost.", 480,330)
        text("Fish made you lose all your lives.", 480,350)
        text("But you can always try again.", 480,370)
        text("With practice, you can conquer the ocean.", 480,390);
        text("Final Score: " + score, 480,410);
    }
}
function first_level(){
        var fishRandom = Math.round(random(1,2));

        if(fishRandom === 1){
            if(frameCount%70 === 0){
                tuna1 = createSprite(1200, random(70,600));
                tuna1.addImage(tunaImg)
                tuna1.velocityX = -3.4
                tuna2 = createSprite(tuna1.x+60, tuna1.y+30);
                tuna2.addImage(tunaImg)
                tuna2.velocityX = -3.4
                tuna3 = createSprite(tuna1.x+40, tuna1.y-40);
                tuna3.addImage(tunaImg)
                tuna3.velocityX = -3.4
                tunaGroup.add(tuna1);
                tunaGroup.add(tuna2);
                tunaGroup.add(tuna3);
            }
        }
        else{
            if(frameCount%90 === 0){
                tuna1 = createSprite(1200, random(70,600));
                tuna1.addImage(tunaImg)
                tuna1.velocityX = -3.4
                tuna2 = createSprite(tuna1.x+60, tuna1.y+30);
                tuna2.addImage(tunaImg)
                tuna2.velocityX = -3.4
                tuna3 = createSprite(tuna1.x+40, tuna1.y-40);
                tuna3.addImage(tunaImg)
                tuna3.velocityX = -3.4
                tuna4 = createSprite(tuna1.x+95, tuna1.y);
                tuna4.addImage(tunaImg)
                tuna4.velocityX = -3.4
                tuna5 = createSprite(tuna1.x-40, tuna1.y+40);
                tuna5.addImage(tunaImg)
                tuna5.velocityX = -3.4
                tunaGroup.add(tuna1);
                tunaGroup.add(tuna2);
                tunaGroup.add(tuna3);
                tunaGroup.add(tuna4);
                tunaGroup.add(tuna5);
            }
        }  
        plasticSpawn();
        for(var i = 0; i < tunaGroup.length; i++){
            if(tunaGroup.get(i).isTouching(wood_plank)){
                tunaGroup.get(i).destroy();
                lives = lives - 1
                score =score - 2
            }
        }
}
function plasticSpawn(){
    plasticRandom = Math.round(random(0,2))
    if(plasticRandom === 1 ){
        if(frameCount%150 === 0){
            plasticBottle = createSprite(1200, random(70,600));
            plasticBottle.addImage(plasticBottleImg);
            plasticBottle.velocityX = -3.7
            plasticBottle.scale = 0.8;
            plasticBottle.debug = false;
            plasticBottleGroup.add(plasticBottle);
          
        }

    }
    else{
        if(frameCount%150 === 0){
            plasticBag = createSprite(1200, random(70,600));
            plasticBag.addImage(plasticBagImg);
            plasticBag.velocityX = -3.7
            plasticBag.scale = 0.8;
            plasticBag.debug = false;
            plasticBagGroup.add(plasticBag);
          
        }

    }
}
// function second_level(){
//     if(frameCount%50 === 0){
//         var fishRandom = Math.round(random(1,2));
//         var x 
//         var lionFishVelocity
//         var lionFishAngle
//         if(fishRandom === 1){
//             x = 1200
//             lionFishVelocity = -4.3
//             lionFishAngle = 0
//         }
//         else{
//             x = 0
//             lionFishVelocity = 4.3
//             lionFishAngle = 180
//         }
//         lionfish = createSprite(x, random(70,600));
//         lionfish.addImage(lionFishImg)
//         lionfish.velocityX = lionFishVelocity
//         lionfish.rotation = lionFishAngle
//         lionFishGroup.add(lionfish);
//         for(var i = 0; i < lionFishGroup.length; i++){
//             if(lionFishGroup.get(i).isTouching(wood_plank)){
//                 score = score-3
//                 slowDownTimer += 1
//                 console.log(slowDownTimer)
//                 if(slowDownTimer <= 10){
//                     // controls(wood_plank, 0,0,0,0,0)
//                     // wood_plank.velocityX = 0
//                     // wood_plank.velocityY  = 0
//                     // lionFishGroup.get(i).velocityX = 0
//                 }
//             }
//         }
//     }
// }

function controls(sprite,up, down, left,right, rotate){
    sprite.velocityY = 1
    if(keyDown(UP_ARROW)){
        sprite.velocityY -= up
    }
    if(keyDown(DOWN_ARROW)){
        sprite.velocityY += down
    }
    if(keyDown("R")){
        sprite.rotation += rotate;
    }
    sprite.velocityX = -1
    if(keyDown(LEFT_ARROW)){
        sprite.velocityX -= left
    }
    if(keyDown(RIGHT_ARROW)){
        sprite.velocityX += right
    }
    if(sprite.x <0){
        sprite.x = 0 
    }
    if(sprite.x > displayWidth){
        sprite.x = displayWidth 
    }
    if(sprite.y <0){
        sprite.y = 0 
    }
    if(sprite.y > displayWidth){
        sprite.y = displayWidth 
    }
}